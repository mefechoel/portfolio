import { useState } from "preact/hooks";

let idCounter = 0;
export const createId = (label: string) => `${label}--${idCounter++}`;

export const useId = (label: string) => {
	const [id] = useState(() => createId(label));
	return id;
};
