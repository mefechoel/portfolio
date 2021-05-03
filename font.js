/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync, writeFileSync, readdirSync } = require("fs");
const ttf2woff2 = require("ttf2woff2");
const path = require("path");

const inPath = "./src/fonts/subset";
const outPath = "./src/fonts/subset";

readdirSync(inPath).forEach((file) => {
	const input = readFileSync(path.join(inPath, file));
	const fileParts = file.split(".");
	fileParts.pop();
	const baseName = fileParts.join(".");
	writeFileSync(
		path.join(outPath, `${baseName}.woff2`),
		ttf2woff2(input),
		"binary",
	);
});
