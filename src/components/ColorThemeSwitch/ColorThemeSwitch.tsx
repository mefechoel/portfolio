import { useReducer } from "preact/hooks";
import style from "./ColorThemeSwitch.module.scss";

type ColorScheme = "dark" | "light";

const getInitalColorScheme = (): ColorScheme => {
	const storedPref = localStorage.getItem("colorScheme");
	if (storedPref) return storedPref as ColorScheme;
	const mediaPref = window.matchMedia?.("(prefers-color-scheme: light)");
	console.log(mediaPref);
	return mediaPref?.matches ? "light" : "dark";
};

const initialColorScheme =
	process.env.BUILD_MODE === "ssr" ? "dark" : getInitalColorScheme();

const ColorThemeSwitch = () => {
	const [colorScheme, _toggleColorScheme] = useReducer<ColorScheme, unknown>(
		(prevScheme: ColorScheme): ColorScheme =>
			prevScheme === "dark" ? "light" : "dark",
		initialColorScheme,
	);
	const toggleColorScheme = _toggleColorScheme as () => void;

	const handleKeyDown = (e: KeyboardEvent) => {
		if (["Enter", " "].includes(e.key)) {
			e.preventDefault();
			toggleColorScheme();
		}
	};

	const labelText = `Enable ${colorScheme} color scheme`;

	return (
		<>
			<input
				id="color-theme-checkbox"
				type="checkbox"
				checked={colorScheme === "dark"}
				onChange={toggleColorScheme}
				className={style.checkbox}
			/>
			<label
				htmlFor="color-theme-checkbox"
				className={style.button}
				title={labelText}
				tabIndex={0}
				onKeyDown={handleKeyDown}
			>
				<span className={style.hiddenLabel}>{labelText}</span>
				{colorScheme === "light" ? (
					<svg className={style.icon} fill="none" viewBox="0 0 24 24">
						<path stroke="none" d="M0 0h24v24H0z" />
						<path d="M12 3h.4a7.5 7.5 0 008 12.4A9 9 0 1112 3zM17 4a2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2 2 2 0 002-2M19 11h2m-1-1v2" />
					</svg>
				) : (
					<svg className={style.icon} fill="none" viewBox="0 0 24 24">
						<path stroke="none" d="M0 0h24v24H0z" />
						<circle cx="12" cy="12" r="3" />
						<path d="M6 6h3.5L12 3.5 14.5 6H18v3.5l2.5 2.5-2.5 2.5V18h-3.5L12 20.5 9.5 18H6v-3.5L3.5 12 6 9.5z" />
					</svg>
				)}
			</label>
		</>
	);
};

export default ColorThemeSwitch;
