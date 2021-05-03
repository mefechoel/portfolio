import { JSX } from "preact";
import cx from "../../cx";
import style from "./Header.module.scss";

const Header = (): JSX.Element => (
	<header className={style.header}>
		<h1 className={style.heading}>
			<div className={cx(style.headingText, style.heading1)}>
				P<span className={style.o}>o</span>rt
				{/* <br /> */}
				folio
			</div>
			<div className={cx(style.headingText, style.heading2)}>by</div>
			<div className={cx(style.headingText, style.heading3, style.outlines)}>
				Michel
			</div>
			<div className={cx(style.headingText, style.heading4)}>Strelow</div>
		</h1>
	</header>
);

export default Header;
