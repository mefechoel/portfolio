import type { JSX } from "preact";
import { useContext } from "preact/hooks";
import { Link } from "../Router";
import AppContext from "../../AppContext";
import style from "./Nav.module.scss";
import cx from "../../cx";
import ColorThemeSwitch from "../ColorThemeSwitch";

const Nav = ({
	className,
	listClassName,
	linkClassName,
	id,
	hidden = false,
}: {
	className?: string;
	listClassName?: string;
	linkClassName?: string;
	id?: string;
	hidden?: boolean;
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
				{routeList.map((route) => (
					<li key={route.name} className={style.listItem}>
						<Link
							className={cx(style.navLink, linkClassName)}
							activeClassName={style.activeLink}
							to={route.path}
							tabIndex={hidden ? -1 : 0}
						>
							{route.pageName}
							{/* <span className={style.navLinkText}>
								</span> */}
						</Link>
					</li>
				))}
			</ul>
			<ColorThemeSwitch />
		</nav>
	);
};

export default Nav;
