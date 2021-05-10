import style from "./Remote.module.scss";

const Remote = () => (
	<div className={style.wrapper}>
		<div className={style.button}>
			<svg viewBox="0 0 24 24">
				<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
				<path d="M0 0h24v24H0z" fill="none"></path>
			</svg>
		</div>
		<div className={style.button}>
			<svg viewBox="0 0 24 24">
				<path d="M0 0h24v24H0z" fill="none"></path>
				<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
			</svg>
		</div>
	</div>
);

export default Remote;
