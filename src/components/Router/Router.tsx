import type { ComponentChildren } from "preact";
import { useCallback, useLayoutEffect, useMemo, useState } from "preact/hooks";
import {
	createBrowserHistory,
	createMemoryHistory,
} from "@svelte-navigator/history";
import type { NavigatorLocation } from "@svelte-navigator/history";
import { match } from "./matching";
import type { IRoute, IRouteMatch } from "./types";
import RouterContext from "./RouterContext";

const isSSR = process.env.BUILD_MODE === "ssr";

const createRouterHistory = (url: string) =>
	isSSR ? createMemoryHistory(url) : createBrowserHistory();
const isMatch = (maybeRoute: IRouteMatch | null): maybeRoute is IRouteMatch =>
	!!maybeRoute;

const Router = ({
	children,
	url,
}: {
	children: ComponentChildren;
	url: string;
}) => {
	const [history] = useState(() => createRouterHistory(url));
	const [routes, setRoutes] = useState<IRoute[]>([]);
	const [location, setLocation] = useState<NavigatorLocation>(history.location);
	useLayoutEffect(() => {
		const unsubscribe = history.subscribe((update) =>
			setLocation(update.location),
		);
		return unsubscribe;
	}, [history]);

	const currentRoutes = useMemo(
		() =>
			routes.map((route) => match(route, location.pathname)).filter(isMatch),
		[routes, location.pathname],
	);

	const registerRoute = useCallback(
		(route: IRoute) => {
			setRoutes((prevRoutes) => [...prevRoutes, route]);
			if (isSSR) {
				return !!match(route, location.pathname);
			}
			return false;
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[...(isSSR ? [location.pathname] : [])],
	);
	const unregisterRoute = useCallback((id: string) => {
		setRoutes((prevRoutes) => prevRoutes.filter((route) => route.id !== id));
	}, []);

	return (
		<RouterContext.Provider
			value={{
				history,
				registerRoute,
				unregisterRoute,
				routes,
				location,
				currentRoutes,
			}}
		>
			{children}
		</RouterContext.Provider>
	);
};

export default Router;
