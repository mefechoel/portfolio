/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

console.log("\nCopying license file...");

const licenses = fs.readFileSync(
	path.join(__dirname, "../lib-licenses.txt"),
	"utf8",
);
fs.writeFileSync(
	path.join(__dirname, "../dist/lib-licenses.txt"),
	licenses,
	"utf8",
);

console.log("Done!\n");
