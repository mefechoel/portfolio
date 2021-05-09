import type { ComponentChildren } from "preact";
import { useContext } from "preact/hooks";
import cx from "../../cx";
import RouterContext from "./RouterContext";

const shouldNavigate = (event: MouseEvent): boolean =>
	!event.defaultPrevented &&
	event.button === 0 &&
	!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const Link = ({
	children,
	to,
	className,
	activeClassName,
	...props
}: {
	children: ComponentChildren;
	to: string;
	className?: string;
	activeClassName?: string;
	[prop: string]: unknown;
}) => {
	const {
		history: { navigate, createHref },
		location,
	} = useContext(RouterContext);

	const href = createHref(to);
	const isCurrent = location.pathname === href;
	const ariaCurrent = isCurrent ? { "aria-current": "page" } : {};

	function handleClick(event: MouseEvent) {
		if (shouldNavigate(event)) {
			event.preventDefault();
			// Don't push another entry to the history stack when the user
			// clicks on a Link to the page they are currently on.
			const shouldReplace = isCurrent;
			navigate(href, { replace: shouldReplace });
		}
	}

	return (
		<a
			{...props}
			className={cx(className, isCurrent && activeClassName)}
			href={href}
			onClick={handleClick}
			{...ariaCurrent}
		>
			{children}
		</a>
	);
};

export default Link;
