import type { JSX } from "preact";
import { useContext } from "preact/hooks";
import { Link } from "../Router";
import AppContext from "../../AppContext";
import style from "./Nav.module.scss";
import cx from "../../cx";

const Nav = ({
	className,
	id,
	hidden = false,
}: { className?: string; id?: string; hidden?: boolean } = {}): JSX.Element => {
	const { routeList } = useContext(AppContext);
	return (
		<nav
			id={id}
			className={cx(style.nav, className)}
			aria-label="Main navigation"
			aria-hidden={hidden}
		>
			<ul className={style.navList}>
				{routeList.map((route) => (
					<li key={route.name} className={style.listItem}>
						<Link className={style.navLink} to={route.path}>
							<span className={style.navLinkText}>{route.pageName}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
