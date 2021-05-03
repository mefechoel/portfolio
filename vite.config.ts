import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import replace from "@rollup/plugin-replace";

const production = process.env.NODE_ENV === "production";
const env = process.env.NODE_ENV || "development";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		replace({
			preventAssignment: true,
			values: {
				"process.env.NODE_ENV": JSON.stringify(env),
			},
		}),
	],
	css: {
		modules: {
			generateScopedName: production
				? "s[hash:base64:5]"
				: "[name]__[local]__[hash:base64:5]",
		},
	},
});
