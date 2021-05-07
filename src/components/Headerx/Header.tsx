import type { JSX } from "preact";
import style from "./Header.module.scss";

const Header = (): JSX.Element => (
	<header className={style.header}>
		<h1 className={style.heading}>
			<div className={style.headingContent} style="--delay:0">
				<div className={style.headingText}>Portfolio</div>
				<div className={style.headingText}>Michel</div>
				<div className={style.headingText}>Strelow</div>
			</div>
		</h1>
		<h1 className={style.heading} aria-hidden="true">
			<div className={style.headingContent} style="--delay:0.5">
				<div className={style.headingText}>Michel</div>
				<div className={style.headingText}>Strelow</div>
				<div className={style.headingText}>Portfolio</div>
			</div>
		</h1>
		<h1 className={style.heading} aria-hidden="true">
			<div className={style.headingContent} style="--delay:1">
				<div className={style.headingText}>Strelow</div>
				<div className={style.headingText}>Portfolio</div>
				<div className={style.headingText}>Michel</div>
			</div>
		</h1>
		<h1 className={style.heading} aria-hidden="true">
			<div className={style.headingContent} style="--delay:2.5">
				<div className={style.headingText}>Portfolio</div>
				<div className={style.headingText}>Michel</div>
				<div className={style.headingText}>Strelow</div>
			</div>
		</h1>
		<h1 className={style.heading} aria-hidden="true">
			<div className={style.headingContent} style="--delay:3">
				<div className={style.headingText}>Michel</div>
				<div className={style.headingText}>Strelow</div>
				<div className={style.headingText}>Portfolio</div>
			</div>
		</h1>
		<h1 className={style.heading} aria-hidden="true">
			<div className={style.headingContent} style="--delay:3.5">
				<div className={style.headingText}>Strelow</div>
				<div className={style.headingText}>Portfolio</div>
				<div className={style.headingText}>Michel</div>
			</div>
		</h1>
	</header>
);

export default Header;
