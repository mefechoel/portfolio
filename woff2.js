/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync, writeFileSync } = require("fs");
const ttf2woff2 = require("ttf2woff2");
const path = require("path");

const inPath = process.argv[2];

const input = readFileSync(path.join(inPath));
const fileParts = inPath.split(".");
fileParts.pop();
const baseName = fileParts.join(".");
writeFileSync(path.join(`${baseName}.woff2`), ttf2woff2(input), "binary");
