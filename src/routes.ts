import type { JSX } from "preact";

export type RouteNames = "index" | "projects" | "impressum" | "music";

export interface RouteDescription {
	path: string;
	name: string;
	filePath: string;
	title: string;
	headingDisabled?: boolean;
	pageName: string;
}

export const routeDescriptions: {
	[k in RouteNames]: RouteDescription;
} = {
	index: {
		path: "/",
		name: "index",
		filePath: "routes/Home/index.ts",
		title: "Home - Portfolio Michel Strelow",
		headingDisabled: false,
		pageName: "Home",
	},
	projects: {
		path: "/projects",
		name: "projects",
		filePath: "routes/Projects/index.ts",
		title: "Projects - Portfolio Michel Strelow",
		pageName: "Projects",
	},
	impressum: {
		path: "/impressum",
		name: "impressum",
		filePath: "routes/Impressum/index.ts",
		title: "Impressum - Portfolio Michel Strelow",
		pageName: "Impressum",
	},
	music: {
		path: "/music",
		name: "music",
		filePath: "routes/Music/index.ts",
		title: "Music - Portfolio Michel Strelow",
		pageName: "Music",
	},
};

export type RouteComponents = {
	[k in RouteNames]: () => JSX.Element;
};
export type RouteConfig = RouteDescription & { component: () => JSX.Element };
export type RouteConfigs = {
	[k in RouteNames]: RouteConfig;
};

export function createRoutes(routeComponents: RouteComponents): RouteConfigs {
	type RouteDescriptionEntries = [RouteNames, RouteDescription][];
	const entries = Object.entries(routeDescriptions) as RouteDescriptionEntries;
	const routeEntries = entries.map(([name, desc]) => [
		name,
		{ ...desc, component: routeComponents[name] },
	]);
	const routes: RouteConfigs = Object.fromEntries(routeEntries);
	return routes;
}
