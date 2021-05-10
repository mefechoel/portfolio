import { useContext, useMemo } from "preact/hooks";
import AppContext from "../../AppContext";
import cx from "../../cx";
import ColorThemeSwitch from "../ColorThemeSwitch";
import { Nav } from "../Nav";
import { useHistory } from "../Router";
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

	return (
		<div className={cx(style.banner, disabled && style.hidden)}>
			<div className={style.headingWrapper}>
				{routeList.map((route, i) => (
					<h1
						key={route.name}
						className={cx(
							style.heading,
							route.pageName === name && style.activeHeading,
						)}
						style={`--i: ${i}`}
						aria-hidden={route.pageName !== name ? "true" : "false"}
					>
						{route.pageName}
					</h1>
				))}
			</div>
			<Nav
				className={style.bannerNav}
				listClassName={style.navList}
				linkClassName={style.navLink}
			>
				<ColorThemeSwitch />
			</Nav>
		</div>
	);
};

export default Banner;
