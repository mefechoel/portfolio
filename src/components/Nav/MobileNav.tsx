import type { JSX } from "preact";
import { useContext, useEffect, useRef, useState } from "preact/hooks";
import BurgerIcon from "./BurgerIcon";
import { Link } from "../Router";
import { useHistory } from "../Router";
import AppContext from "../../AppContext";
import style from "./MobileNav.module.scss";
import cx from "../../cx";

const MobileNav = (): JSX.Element => {
	const { routeList } = useContext(AppContext);
	const [isOpen, setIsOpen] = useState(false);
	const handleChange = () => setIsOpen((prevIsOpen) => !prevIsOpen);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (["Enter", " "].includes(e.key)) {
			e.preventDefault();
			handleChange();
		}
	};

	const handleWrapperKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape") {
			setIsOpen(false);
		}
	};

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
		<div onKeyDown={handleWrapperKeyDown}>
			<input
				className={cx(style.checkbox, style.mobileOnly)}
				checked={isOpen}
				onChange={handleChange}
				type="checkbox"
				id="burger-nav-toggle"
			/>
			<label
				id="burger-nav-label"
				htmlFor="burger-nav-toggle"
				role="button"
				className={cx(style.burgerButton, style.mobileOnly)}
				tabIndex={0}
				onKeyDown={handleKeyDown}
				aria-label={`${isOpen ? "Close" : "open"} menu`}
				aria-expanded={isOpen ? "true" : "false"}
				aria-controls="burger-nav"
			>
				<BurgerIcon isOpen={isOpen} className={style.burgerIcon} />
			</label>
			<nav
				id="burger-nav"
				className={style.nav}
				aria-label="Main navigation"
				aria-hidden={isOpen ? "false" : "true"}
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
		</div>
	);
};

export default MobileNav;
