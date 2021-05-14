import type { JSX } from "preact";
import { useContext, useEffect, useRef } from "preact/hooks";
import BurgerIcon from "./BurgerIcon";
import { useHistory } from "../Router";
import cx from "../../cx";
import Nav from "./Nav";
import ColorThemeSwitch from "../ColorThemeSwitch";
import AppContext from "../../AppContext";
import style from "./MobileNav.module.scss";
import { useId } from "../../util";

const MobileNav = (): JSX.Element => {
	const { navIsOpen, setNavIsOpen } = useContext(AppContext);
	const handleChange = () => setNavIsOpen((prevIsOpen) => !prevIsOpen);

	const checkboxId = useId("burger-nav-toggle");
	const navId = useId("burger-nav");

	const handleEscKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape") {
			setNavIsOpen(false);
		}
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (["Enter", " "].includes(e.key)) {
			e.preventDefault();
			handleChange();
		} else {
			handleEscKeyDown(e);
		}
	};

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		handleChange();
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
			setNavIsOpen(false);
			prevLocation.current = update.location;
		});
		return () => unsubscribe();
	}, [history, setNavIsOpen]);

	return (
		<>
			<input
				className={cx(style.checkbox, style.mobileOnly)}
				checked={navIsOpen}
				type="checkbox"
				id={checkboxId}
				tabIndex={-1}
			/>
			<label
				htmlFor={checkboxId}
				role="button"
				className={cx(style.burgerButton, style.mobileOnly)}
				tabIndex={0}
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				aria-label={`${navIsOpen ? "Close" : "Open"} menu`}
				aria-expanded={navIsOpen ? "true" : "false"}
				aria-controls={navId}
			>
				<BurgerIcon isOpen={navIsOpen} className={style.burgerIcon} />
			</label>
			<Nav
				id={navId}
				className={style.nav}
				listClassName={style.navList}
				hidden={!navIsOpen}
				onKeyDown={handleEscKeyDown}
			>
				<ColorThemeSwitch onKeyDown={handleEscKeyDown} />
			</Nav>
		</>
	);
};

export default MobileNav;
