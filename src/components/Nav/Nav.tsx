import { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import BurgerIcon from "./BurgerIcon";
import style from "./Nav.module.scss";
import { Link } from "../Router";
import { useHistory } from "../Router";
import cx from "../../cx";

const Nav = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const handleChange = () => setIsOpen((prevIsOpen) => !prevIsOpen);

	const history = useHistory();
	const prevLocation = useRef(history.location);

	useEffect(() => {
		const unsubscribe = history.subscribe((update) => {
			if (
				update.action === "PUSH" &&
				prevLocation.current.pathname !== update.location.pathname
			) {
				window.scrollTo(0, 0);
			}
			setIsOpen(false);
			prevLocation.current = update.location;
		});
		return () => unsubscribe();
	}, [history]);

	return (
		<>
			<nav className={cx(style.nav, isOpen && style.navOpen)}>
				<ul className={style.navList}>
					<li className={style.listItem}>
						<Link className={style.navLink} to="/">
							<span className={style.navLinkText}>Home</span>
						</Link>
					</li>
					<li className={style.listItem}>
						<Link className={style.navLink} to="/projects">
							<span className={style.navLinkText}>Projects</span>
						</Link>
					</li>
					<li className={style.listItem}>
						<Link className={style.navLink} to="/impressum">
							<span className={style.navLinkText}>Impressum</span>
						</Link>
					</li>
				</ul>
			</nav>
			<button
				type="button"
				className={style.burgerButton}
				onClick={handleChange}
				aria-label={`Menü ${isOpen ? "schließen" : "öffnen"}`}
			>
				<BurgerIcon isOpen={isOpen} className={style.burgerIcon} />
			</button>
		</>
	);
};

export default Nav;
