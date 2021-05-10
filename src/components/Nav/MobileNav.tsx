import type { JSX } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import BurgerIcon from "./BurgerIcon";
import { useHistory } from "../Router";
import cx from "../../cx";
import Nav from "./Nav";
import ColorThemeSwitch from "../ColorThemeSwitch";
import style from "./MobileNav.module.scss";

const MobileNav = (): JSX.Element => {
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
		<div
			className={cx(style.mobileOnly, style.wrapper)}
			onKeyDown={handleWrapperKeyDown}
		>
			<input
				className={cx(style.checkbox, style.mobileOnly)}
				checked={isOpen}
				onChange={handleChange}
				type="checkbox"
				id="burger-nav-toggle"
				tabIndex={-1}
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
			<Nav
				id="burger-nav"
				className={style.nav}
				listClassName={style.navList}
				hidden={!isOpen}
			>
				<ColorThemeSwitch />
			</Nav>
		</div>
	);
};

export default MobileNav;
