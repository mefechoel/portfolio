import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import url from "@rollup/plugin-url";
import autoprefixer from "autoprefixer";

const production = process.env.NODE_ENV === "production";
const env = process.env.NODE_ENV || "development";
const ssr = process.env.BUILD_MODE === "ssr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		production && {
			...url({
				include: [
					"**/*.svg",
					"**/*.png",
					"**/*.jp(e)?g",
					"**/*.gif",
					"**/*.webp",
					"**/*.avif",
				],
				limit: 0,
				publicPath: "/",
			}),
			enforce: "pre",
		},
	],
	define: {
		"process.env.NODE_ENV": JSON.stringify(env),
		"process.env.BUILD_MODE": JSON.stringify(process.env.BUILD_MODE || "spa"),
	},
	css: {
		modules: {
			generateScopedName: production
				? "s[hash:base64:5]"
				: "[name]__[local]__[hash:base64:5]",
		},
		postcss: {
			plugins: [autoprefixer()],
		},
	},
	build: {
		...(ssr
			? {
					lib: {
						entry: "./src/ssr.tsx",
						name: "app",
						formats: ["cjs"],
						fileName: "ssr",
					},
					rollupOptions: {
						external: ["fs/promises", "path"],
					},
					minify: false,
			  }
			: {}),
		target: "modules",
		manifest: true,
		assetsInlineLimit: 0,
	},
});
