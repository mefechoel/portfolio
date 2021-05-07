import style from "./Pixelnetz.module.scss";

const Pixelnetz = () => (
	<div className={style.wrapper}>
		<div className={style.grid}>
			<div className={style.phone}>
				<div className={style.phoneBg} />
			</div>
			<div className={style.phone}>
				<div className={style.phoneBg} />
			</div>
			<div className={style.phone}>
				<div className={style.phoneBg} />
			</div>
			{/* <div className={style.phone}></div>
		<div className={style.phone}></div>
		<div className={style.phone}></div> */}
		</div>
	</div>
);

export default Pixelnetz;
