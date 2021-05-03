import type { IRoute, IRouteMatch } from "./types";

const paramRegex = /^:(.+)/;

const isSplat = (segment: string): boolean => segment[0] === "*";

const stripSlashes = (str: string): string => str.replace(/(^\/+|\/+$)/g, "");

const segmentize = (uri: string, filterFalsy = false): string[] => {
	const segments = stripSlashes(uri).split("/");
	return filterFalsy ? segments.filter(Boolean) : segments;
};

const normalizePath = (path: string): string => `/${stripSlashes(path)}`;

const join = (...pathFragments: string[]): string => {
	const joinFragment = (fragment: string): string =>
		segmentize(fragment, true).join("/");
	const joinedSegments = pathFragments.map(joinFragment).join("/");
	return normalizePath(joinedSegments);
};

export const pick = (routes: IRoute[], uri: string): IRouteMatch | null => {
	let bestMatch;
	let defaultMatch;

	const [uriPathname] = uri.split("?");
	const uriSegments = segmentize(uriPathname);
	const isRootUri = uriSegments[0] === "";

	for (let i = 0, l = routes.length; i < l; i++) {
		const route = routes[i];
		let missed = false;
		const params: { [param: string]: string } = {};

		// eslint-disable-next-line no-shadow
		const createMatch = (uri: string) => ({ ...route, params, uri });

		if (route.default) {
			defaultMatch = createMatch(uri);
			continue;
		}

		const routeSegments = segmentize(route.path);
		const max = Math.max(uriSegments.length, routeSegments.length);
		let index = 0;

		for (; index < max; index++) {
			const routeSegment = routeSegments[index];
			const uriSegment = uriSegments[index];

			if (routeSegment !== undefined && isSplat(routeSegment)) {
				// Hit a splat, just grab the rest, and return a match
				// uri:   /files/documents/work
				// route: /files/* or /files/*splatname
				const splatName = routeSegment === "*" ? "*" : routeSegment.slice(1);

				params[splatName] = uriSegments
					.slice(index)
					.map(decodeURIComponent)
					.join("/");
				break;
			}

			if (uriSegment === undefined) {
				// URI is shorter than the route, no match
				// uri:   /users
				// route: /users/:userId
				missed = true;
				break;
			}

			const dynamicMatch = paramRegex.exec(routeSegment);

			if (dynamicMatch && !isRootUri) {
				const value = decodeURIComponent(uriSegment);
				params[dynamicMatch[1]] = value;
			} else if (routeSegment !== uriSegment) {
				// Current segments don't match, not dynamic, not splat, so no match
				// uri:   /users/123/settings
				// route: /users/:id/profile
				missed = true;
				break;
			}
		}

		if (!missed) {
			bestMatch = createMatch(join(...uriSegments.slice(0, index)));
			break;
		}
	}

	return bestMatch || defaultMatch || null;
};

/**
 * Check if the `route.path` matches the `uri`.
 */
export const match = (route: IRoute, uri: string): IRouteMatch | null =>
	pick([route], uri);
