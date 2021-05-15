export default function banner(banner) {
	return {
		name: "banner",
		renderChunk(code) {
			return banner + code;
		},
	};
}
