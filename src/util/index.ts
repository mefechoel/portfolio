import { useState } from "preact/hooks";

let idCounter = 0;
export const createId = (label: string) => `${label}--${idCounter++}`;

export const resetIdCounter = () => {
	idCounter = 0;
};

export const useId = (label: string) => {
	const [id] = useState(() => createId(label));
	return id;
};

export const focus = (elem: HTMLElement) => {
	if (!elem) return;
	const tabIndex = "tabindex";
	if (!elem.hasAttribute(tabIndex)) {
		elem.setAttribute(tabIndex, "-1");
		const blurListener = () => {
			elem.removeAttribute(tabIndex);
			elem.removeEventListener("blur", blurListener);
		};
		elem.addEventListener("blur", blurListener);
	}
	elem.focus();
};
