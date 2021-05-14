import type { JSX } from "preact";
import { useContext, useLayoutEffect, useState } from "preact/hooks";
import AppContext from "../../AppContext";
import cx from "../../cx";
import style from "./Header.module.scss";

const Header = (): JSX.Element => {
	const { navIsOpen } = useContext(AppContext);
	const [isOpen, setIsOpen] = useState(navIsOpen);

	useLayoutEffect(() => {
		const timeout: number | null = null;
		if (!navIsOpen) {
			setTimeout(() => setIsOpen(false), 400);
		} else {
			setIsOpen(true);
		}
		return () => {
			if (typeof timeout === "number") {
				clearTimeout(timeout);
			}
		};
	}, [navIsOpen]);

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		document.getElementById("main")?.scrollIntoView?.({ behavior: "smooth" });
	};

	return (
		<header className={cx(style.header, isOpen && style.navIsOpen)}>
			<h1 className={style.heading}>
				<div className={style.headingText}>
					<span>Port</span>
					<span>folio</span>
				</div>
				<div className={style.headingText}>by</div>
				<div className={cx(style.headingText, style.outlines)}>Michel</div>
				<div className={style.headingText}>Strelow</div>
			</h1>
			<a href="#main" className={style.scrollDownLink} onClick={handleClick}>
				<span className={style.scrollDownLabel}>Go to main content</span>
				<svg
					className={style.arrowDown}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 63.71 73.15"
				>
					<path
						fill="currentColor"
						d="M28.84 0h5.96v61.86l24.68-24.71 4.23 4.19-31.9 31.81L0 41.33l4.12-4.18 24.71 24.71V0z"
					/>
				</svg>
			</a>
		</header>
	);
};

export default Header;
