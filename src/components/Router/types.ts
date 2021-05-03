import type {
	NavigatorHistory,
	NavigatorLocation,
} from "@svelte-navigator/history";

export interface IRoute {
	path: string;
	id: string;
	default: boolean;
}

export interface IRouteMatch extends IRoute {
	params: {
		[param: string]: string;
	};
	uri: string;
}

export interface IRouterContext {
	history: NavigatorHistory;
	registerRoute: (route: IRoute) => void;
	unregisterRoute: (id: string) => void;
	routes: IRoute[];
	location: NavigatorLocation;
	currentRoutes: IRouteMatch[];
}
