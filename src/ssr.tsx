import fs from "fs/promises";
import path from "path";
import renderToString from "preact-render-to-string";
import prepass from "preact-ssr-prepass";
import App from "./App";
import projects from "./routes/Projects";
import index from "./routes/Home";
import music from "./routes/Music";
import impressum from "./routes/Impressum";
import datenschutz from "./routes/Datenschutz";
import baThesis from "./routes/BAThesis";
import svelteNavigator from "./routes/SvelteNavigator";
import { createRoutes } from "./routes";

const routes = createRoutes({
	projects,
	index,
	impressum,
	music,
	datenschutz,
	baThesis,
	svelteNavigator,
});

async function main() {
	const distDir = "./dist";
	const indexFile = path.join(distDir, "index.html");
	const templateFile = path.join(distDir, "_index.html");
	const hasTemplate = (await fs.readdir(distDir)).includes(templateFile);
	const template = await fs.readFile(
		hasTemplate ? templateFile : indexFile,
		"utf8",
	);
	if (!hasTemplate) {
		await fs.rename(indexFile, templateFile);
	}
	const manifest = JSON.parse(
		await fs.readFile(path.join(distDir, "manifest.json"), "utf8"),
	);
	const manifestEntries: [
		string,
		{
			file: string;
			src?: string;
			isDynamicEntry?: boolean;
			imports?: string[];
			css?: string[];
		},
	][] = Object.entries(manifest);

	const promises = Object.values(routes).map(
		async ({ path: url, name, title, filePath }) => {
			// eslint-disable-next-line no-console
			console.log(`Prerendering chunk "${name}"`);

			const app = <App routes={routes} url={url} />;
			const manifestEntry = manifestEntries.find(([file]) =>
				file.endsWith(filePath),
			);
			if (!manifestEntry) {
				throw new Error(`Could not find lazy loaded route ${filePath}`);
			}
			const [, chunk] = manifestEntry;

			const cssLinks = (chunk.css || []).map(
				(cssFile) => `<link rel="stylesheet" href="/${cssFile}" />`,
			);
			const modulePreload = `<link rel="modulepreload" href="/${chunk.file}" />`;
			const additionalLinks = [...cssLinks, modulePreload].join("\n");

			await prepass(app);
			const html = renderToString(app);
			const titleTag = `<title>${title}</title>`;
			const prerender = template
				.replace(/<!--\s*HTML_OUTLET\s*-->/, html)
				.replace("</head>", `${additionalLinks}</head>`)
				.replace(/<title>.*<\/title>/, titleTag);
			await fs.writeFile(path.join(distDir, `${name}.html`), prerender, "utf8");

			// eslint-disable-next-line no-console
			console.log(`Prerendering chunk "${name}" completed!`);
		},
	);

	// eslint-disable-next-line no-console
	return Promise.all(promises).then(() => console.log("Prerendering Done!\n"));
}

main();
