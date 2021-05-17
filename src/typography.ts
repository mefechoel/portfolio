const uaIncludes = (str: string) => navigator.userAgent.includes(str);
const addClass = (condition: boolean, className: string) => {
	if (condition) {
		document.documentElement.classList.add(className);
	}
};

const isChromium = uaIncludes("Chrome");
const isSamsung = uaIncludes("SamsungBrowser");
const isSafari = uaIncludes("Safari") && !uaIncludes("Chrome");
const isEdge = uaIncludes("Edg/") || uaIncludes("Edge/");

addClass(isChromium, "ua-chromium");
addClass(isSamsung, "ua-samsung");
addClass(isSafari, "ua-safari");
addClass(isEdge, "ua-edge");

export {};
