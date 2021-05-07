import { useContext, useMemo } from "preact/hooks";
import AppContext from "../../AppContext";
import cx from "../../cx";
import { useHistory, useNavigate } from "../Router";
import style from "./Banner.module.scss";

const Banner = () => {
	const { routeList } = useContext(AppContext);
	const history = useHistory();
	const { pathname } = history.location;
	const { disabled, name } = useMemo(() => {
		const currentRoute = routeList.find((route) => route.path === pathname);
		return {
			disabled: !!currentRoute?.headingDisabled === true,
			name: currentRoute?.pageName || "",
		};
	}, [pathname, routeList]);

	const navigate = useNavigate();
	const handleClick = () => {
		navigate(-1);
	};

	return (
		<div className={cx(style.banner, disabled && style.hidden)}>
			<button
				type="button"
				onClick={handleClick}
				className={style.backButton}
				aria-label="Go back"
				title="Go back"
			>
				<svg className={style.backIcon} viewBox="0 0 73.1 63.6">
					<path
						fill="currentColor"
						d="M36 59.4l-4.2 4.2L0 31.8 31.8 0 36 4.1 11.3 28.8H73v6H11.3L36 59.4z"
					/>
				</svg>
			</button>
			<h1 className={style.heading}>{name}</h1>
		</div>
	);
};

export default Banner;
