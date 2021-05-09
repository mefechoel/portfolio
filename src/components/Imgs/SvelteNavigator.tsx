import style from "./SvelteNavigator.module.scss";

const SvelteNavigator = () => (
	<div className={style.wrapper}>
		<svg className={style.svg} fill="#33b3ff" viewBox="0 0 24 24">
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M12 10.9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1zM12 2a10 10 0 100 20 10 10 0 000-20zm2.2 12.2L6 18l3.8-8.2L18 6l-3.8 8.2z" />
		</svg>
	</div>
);

export default SvelteNavigator;
