/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const minimatch = require("minimatch");
const { promisify } = require("util");
const { compress: compBrotli } = require("wasm-brotli");
const { gzip: compZopfli } = require("wasm-zopfli");

const writeFile = promisify(fs.writeFile);

function compressString(source, algorithm) {
	const content = Buffer.from(source, "utf-8");
	return algorithm === "gzip"
		? compZopfli(content)
		: Promise.resolve(compBrotli(content));
}

function compressArtifacts({ fileName, source, algorithm }) {
	if (!["gzip", "brotli"].includes(algorithm)) {
		throw new Error(
			`Only "gzip" and "brotli" compression is supported. Got "${algorithm}".`,
		);
	}
	const ext = algorithm === "gzip" ? "gz" : "br";
	return compressString(source, algorithm).then((blob) => {
		const baseFilePath = path.resolve(path.join(fileName));
		const basePathParts = baseFilePath.split(/[/|\\]/);
		basePathParts.pop();
		const filePath = `${baseFilePath}.${ext}`;
		console.log("WRITE", filePath);
		return writeFile(filePath, blob, "binary");
	});
}

function unixify(path) {
	return path.replace(/\\/g, "/");
}

function createFilter(patterns) {
	return (str) => patterns.some((pattern) => minimatch(str, pattern));
}

function eachFile(folderPath, cb) {
	const dir = fs.readdirSync(folderPath);
	dir.forEach((fileOrFolder) => {
		const nextPath = path.join(folderPath, fileOrFolder);
		const stats = fs.statSync(nextPath);
		if (stats.isDirectory()) {
			eachFile(nextPath, cb);
		}
		if (stats.isFile()) {
			cb(nextPath, fileOrFolder);
		}
	});
}

const isTextFile = createFilter([
	"**/*.html",
	"**/*.css",
	"**/*.js",
	"**/*.svg",
	"**/*.txt",
	"**/*.json",
]);

function isAboveThreshold(source) {
	const THRESHOLD = 10240;
	if (typeof source !== "string") {
		return false;
	}
	const fileSize = Buffer.byteLength(source, "utf-8");
	return fileSize > THRESHOLD;
}

async function compDir(dir) {
	const promises = [];
	eachFile(dir, (fileName) => {
		const source = fs.readFileSync(fileName, "utf-8");
		if (isTextFile(unixify(fileName)) && isAboveThreshold(source)) {
			const compress = (algorithm) => {
				const compPromise = compressArtifacts({
					fileName,
					source,
					algorithm,
				}).then(() => console.log(`Compressing ${fileName} as ${algorithm}`));
				promises.push(compPromise);
			};
			compress("gzip");
			compress("brotli");
		}
	});
	return Promise.all(promises);
}

console.log("Compressing artifacts...\n");

compDir(path.join(__dirname, "../dist")).then(() => console.log("Done!"));
