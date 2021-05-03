export type CSSOMString = string;
export type FontFaceLoadStatus = "unloaded" | "loading" | "loaded" | "error";
export type FontFaceSetStatus = "loading" | "loaded";

export interface FontFace {
	family: CSSOMString;
	style: CSSOMString;
	weight: CSSOMString;
	stretch: CSSOMString;
	unicodeRange: CSSOMString;
	variant: CSSOMString;
	featureSettings: CSSOMString;
	variationSettings: CSSOMString;
	display: CSSOMString;
	readonly status: FontFaceLoadStatus;
	readonly loaded: Promise<FontFace>;
	load(): Promise<FontFace>;
}

export interface FontFaceSet {
	readonly status: FontFaceSetStatus;
	readonly ready: Promise<FontFaceSet>;
	check(font: string, text?: string): boolean;
	load(font: string, text?: string): Promise<FontFace[]>;
}
