interface CodecOptions {
	delim?: string;
	unicodeDelim?: string;
	offset?: number;
}

const defaultCodecOpts = {
	delim: ";",
	unicodeDelim: ",",
	offset: 0,
};

export const encode = (
	inputStr: string,
	key: string,
	options: CodecOptions = {},
): string => {
	const { delim, unicodeDelim, offset } = {
		...defaultCodecOpts,
		...options,
	};
	const codeList = [...inputStr].map((char, i) => {
		const charCodes = [...new Array(char.length)].map((x, i) =>
			char.charCodeAt(i),
		);
		const keyCode = key.charCodeAt(i % key.length);
		const cypherCodes = charCodes.map((charCode) =>
			(charCode ^ keyCode ^ offset).toString(36),
		);
		return cypherCodes.join(unicodeDelim);
	});
	const codeListStr = codeList.join(delim);
	return codeListStr;
};

export const decode = (
	encodedStr: string,
	key: string,
	options: CodecOptions = {},
): string => {
	const { delim, unicodeDelim, offset } = {
		...defaultCodecOpts,
		...options,
	};
	const codeList = encodedStr
		.split(delim)
		.map((charCode) =>
			charCode.split(unicodeDelim).map((code) => parseInt(code, 36)),
		);
	const charList = codeList.map((codes, i) => {
		const keyCode = key.charCodeAt(i % key.length);
		const char = codes
			.map((code) => {
				const charCode = code ^ keyCode ^ offset;
				return String.fromCharCode(charCode);
			})
			.join("");
		return char;
	});
	return charList.join("");
};
