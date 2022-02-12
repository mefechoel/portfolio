import type { ComponentChildren, JSX } from "preact";
import { useContext, useLayoutEffect, useState } from "preact/hooks";
import RouterContext from "./RouterContext";
import { createRouteId } from "./util";

const isSSR = process.env.BUILD_MODE === "ssr";

function Route({
	children,
	path,
	fallback,
}: {
	path: string;
	fallback?: boolean;
	children: ComponentChildren;
}) {
	const [id] = useState(() => createRouteId());
	const { currentRoutes, registerRoute, unregisterRoute } =
		useContext(RouterContext);

	let matches = false;
	if (isSSR) {
		matches = registerRoute({ id, path, default: !!fallback });
	}

	useLayoutEffect(() => {
		registerRoute({ id, path, default: !!fallback });
		return () => unregisterRoute(id);
	}, [fallback, id, path, registerRoute, unregisterRoute]);

	return matches || currentRoutes.some((route) => route.id === id)
		? (children as JSX.Element)
		: null;
}

export default Route;
