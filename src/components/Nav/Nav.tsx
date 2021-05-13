import type { JSX, ComponentChild } from "preact";
import { useContext } from "preact/hooks";
import { Link } from "../Router";
import AppContext from "../../AppContext";
import cx from "../../cx";
import style from "./Nav.module.scss";

const Nav = ({
	className,
	listClassName,
	linkClassName,
	id,
	children = null,
	hidden = false,
	footer = false,
}: {
	className?: string;
	listClassName?: string;
	linkClassName?: string;
	id?: string;
	children?: ComponentChild;
	hidden?: boolean;
	footer?: boolean;
} = {}): JSX.Element => {
	const { routeList } = useContext(AppContext);
	return (
		<nav
			id={id}
			className={cx(style.nav, className)}
			aria-label="Main navigation"
			aria-hidden={hidden}
		>
			<ul className={cx(style.navList, listClassName)}>
				{routeList
					.filter((route) => route.mainPage !== false)
					.filter((route) => footer || !route.footerOnly)
					.map((route) => (
						<li key={route.name} className={style.listItem}>
							<Link
								className={cx(style.navLink, linkClassName)}
								activeClassName={style.activeLink}
								to={route.path}
								tabIndex={hidden ? -1 : 0}
							>
								{route.pageName}
							</Link>
						</li>
					))}
			</ul>
			{children}
		</nav>
	);
};

export default Nav;
