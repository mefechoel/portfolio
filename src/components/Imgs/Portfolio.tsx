import SvgWrapper from "./SvgWrapper";
import style from "./Portfolio.module.scss";

const Portfolio = () => (
	<SvgWrapper>
		<svg
			className={style.svg}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 76.3 72.7"
		>
			<path
				fill="currentColor"
				d="M0 72.7V0h16.1l21.6 52.7h.9L60.2 0h16v72.7H63.7v-50H63L42.9 72.6h-9.5l-20-49.8h-.8v50H0z"
			/>
		</svg>
	</SvgWrapper>
);

export default Portfolio;
