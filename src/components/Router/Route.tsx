import { ComponentChildren, JSX } from "preact";
import { useContext, useLayoutEffect, useState } from "preact/hooks";
import RouterContext from "./RouterContext";
import { createRouteId } from "./util";

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
	const { currentRoutes, registerRoute, unregisterRoute } = useContext(
		RouterContext,
	);

	useLayoutEffect(() => {
		registerRoute({ id, path, default: !!fallback });
		return () => unregisterRoute(id);
	}, [fallback, id, path, registerRoute, unregisterRoute]);

	return currentRoutes.some((route) => route.id === id)
		? (children as JSX.Element)
		: null;
}

export default Route;
