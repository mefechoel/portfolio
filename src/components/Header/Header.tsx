import type { JSX } from "preact";
import cx from "../../cx";
import style from "./Header.module.scss";

const Header = (): JSX.Element => (
	<header className={style.header}>
		<h1 className={style.heading}>
			<div className={style.headingText}>
				<span>Port</span>
				<span>folio</span>
			</div>
			<div className={style.headingText}>by</div>
			<div className={cx(style.headingText, style.outlines)}>Michel</div>
			<div className={style.headingText}>Strelow</div>
		</h1>
	</header>
);

export default Header;
