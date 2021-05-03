import { FontFaceSet } from "./FontFaceSet";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fonts = (window.document as any)?.fonts as FontFaceSet;

const loadFonts = () => {
	if (fonts) {
		// Load main font
		fonts.load('1em "InterVar"').then((matches) => {
			if (matches?.length) {
				document.documentElement.dataset.mainFontLoading = "false";
				document.documentElement.dataset.mainFontLoaded = "true";
			}
		});
	}
};

fonts?.ready.then(() => {
	loadFonts();
});

export {};
