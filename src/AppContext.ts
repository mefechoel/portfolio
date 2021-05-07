import { createContext } from "preact";
import type { RouteConfigs, RouteConfig } from "./routes";

const AppContext = createContext<{
	routes: RouteConfigs;
	routeList: RouteConfig[];
}>({
	routes: null as never,
	routeList: null as never,
});

export default AppContext;
