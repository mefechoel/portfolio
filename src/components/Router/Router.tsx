import { ComponentChildren } from "preact";
import { useCallback, useLayoutEffect, useMemo, useState } from "preact/hooks";
import { createBrowserHistory } from "@svelte-navigator/history";
import type { NavigatorLocation } from "@svelte-navigator/history";
import { match } from "./matching";
import type { IRoute, IRouteMatch } from "./types";
import RouterContext from "./RouterContext";

const createRouterHistory = () => createBrowserHistory();
const isMatch = (maybeRoute: IRouteMatch | null): maybeRoute is IRouteMatch =>
	!!maybeRoute;

const Router = ({ children }: { children: ComponentChildren }) => {
	const [history] = useState(createRouterHistory);
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

	const registerRoute = useCallback((route: IRoute) => {
		setRoutes((prevRoutes) => [...prevRoutes, route]);
	}, []);
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
