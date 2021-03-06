import { useEffect, useLayoutEffect, useReducer } from "preact/hooks";
import { useId } from "../../util";
import style from "./ColorThemeSwitch.module.scss";

type ColorScheme = "dark" | "light" | "unset";

const STORAGE_KEY = "colorScheme";
const SESSION_KEY = Math.random().toString(36);
const DARK_THEME_COLOR = "#141414";
const LIGHT_THEME_COLOR = "#fff";

const getMediaMatch = (
	colorScheme: "dark" | "light",
): MediaQueryList | undefined =>
	window.matchMedia?.(`(prefers-color-scheme: ${colorScheme})`);

const getMediaPreference = (): ColorScheme => {
	if (process.env.BUILD_MODE === "ssr") return "unset";
	const lightPref = getMediaMatch("light");
	if (lightPref?.matches) return "light";
	const darkPref = getMediaMatch("dark");
	if (darkPref?.matches) return "dark";
	return "unset";
};

interface StoredPref {
	value: ColorScheme;
	sessionKey?: string;
}

const parseStoragePref = (prefJSON: string | null): StoredPref | null => {
	if (!prefJSON) return null;
	const pref: StoredPref = JSON.parse(prefJSON);
	return pref;
};

let transitionGateApplied = false;
const applyTransitionGate = () => {
	if (!transitionGateApplied) {
		transitionGateApplied = true;
		document.documentElement.dataset.preventColorTransitions = "true";
		setTimeout(() => {
			document.documentElement.dataset.preventColorTransitions = "false";
		}, 600);
	}
};

const getStoredPref = (): StoredPref => {
	const storedPref = localStorage.getItem(STORAGE_KEY);
	if (!storedPref) return { value: "unset" };
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const { value, sessionKey } = parseStoragePref(storedPref)!;
	return { value, sessionKey };
};

const setStoredPref = (value: ColorScheme) => {
	const storagePref = { value, sessionKey: SESSION_KEY };
	localStorage.setItem(STORAGE_KEY, JSON.stringify(storagePref));
};

const getColorScheme = (): ColorScheme => {
	if (process.env.BUILD_MODE === "ssr") return "unset";
	const { value } = getStoredPref();
	return value;
};

const initialColorScheme = getColorScheme();

const mediaPref = getMediaPreference();

const rotateColorScheme = (prevScheme: ColorScheme): ColorScheme =>
	prevScheme !== "dark" ? "dark" : "light";

const getNextColorScheme = (prevScheme: ColorScheme): ColorScheme => {
	if (prevScheme === "unset" && mediaPref !== "unset") {
		return rotateColorScheme(mediaPref);
	}
	return rotateColorScheme(prevScheme);
};

const ColorThemeSwitch = ({
	onKeyDown,
}: {
	onKeyDown?: (e: KeyboardEvent) => void;
}) => {
	useLayoutEffect(() => {
		applyTransitionGate();
	}, []);

	const checkboxId = useId("color-theme-checkbox");
	const [colorScheme, dispatch] = useReducer<
		ColorScheme,
		ColorScheme | undefined
	>(getNextColorScheme, initialColorScheme);
	const toggleColorScheme = dispatch as () => void;

	const handleKeyDown = (e: KeyboardEvent) => {
		if (["Enter", " "].includes(e.key)) {
			e.preventDefault();
			toggleColorScheme();
		} else {
			onKeyDown?.(e);
		}
	};

	const nextColorScheme = getNextColorScheme(colorScheme);
	const labelText = `Enable ${nextColorScheme} color scheme`;

	useEffect(() => {
		const handleChange = (nextScheme?: ColorScheme) => {
			if (nextScheme && nextScheme !== colorScheme && nextScheme !== "unset") {
				dispatch(getNextColorScheme(nextScheme));
			}
		};

		const storageHandler: (e: StorageEvent) => void = (e) => {
			const nextPref = parseStoragePref(e.newValue);
			if (nextPref?.sessionKey === SESSION_KEY) return;
			const changedScheme = nextPref?.value;
			handleChange(changedScheme);
		};

		window.addEventListener("storage", storageHandler);
		return () => {
			window.removeEventListener("storage", storageHandler);
		};
	}, [colorScheme]);

	useEffect(() => {
		if (colorScheme !== "unset") {
			setStoredPref(colorScheme);
		}
		document.documentElement.dataset.colorScheme = colorScheme;
	}, [colorScheme]);

	const computedColorScheme = colorScheme === "unset" ? mediaPref : colorScheme;

	useEffect(() => {
		const themeColorMeta = document.querySelector("[data-theme-color]");
		const themeColor =
			computedColorScheme === "light" ? LIGHT_THEME_COLOR : DARK_THEME_COLOR;
		themeColorMeta?.setAttribute("content", themeColor);
	}, [computedColorScheme]);

	return (
		<>
			<input
				id={checkboxId}
				type="checkbox"
				checked={colorScheme === "dark"}
				className={style.checkbox}
				tabIndex={-1}
			/>
			<label
				htmlFor={checkboxId}
				className={style.button}
				title={labelText}
				tabIndex={0}
				onKeyDown={handleKeyDown}
				onClick={toggleColorScheme}
			>
				<span className={style.hiddenLabel}>{labelText}</span>
				{computedColorScheme !== "light" ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={style.icon}
						fill="none"
						viewBox="0 0 24 24"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<path d="M12 3h.4a7.5 7.5 0 008 12.4A9 9 0 1112 3zM17 4a2 2 0 002 2 2 2 0 00-2 2 2 2 0 00-2-2 2 2 0 002-2M19 11h2m-1-1v2" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className={style.icon}
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						viewBox="0 0 24 24"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<circle cx="12" cy="12" r="4" />
						<path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7" />
					</svg>
				)}
			</label>
		</>
	);
};

export default ColorThemeSwitch;
