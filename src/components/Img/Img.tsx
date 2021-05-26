interface SrcSetDensities {
	"1x": string;
	[addDensity: string]: string;
}

interface SrcSetEntry {
	[size: number]: SrcSetDensities;
}

interface SrcSet {
	avif?: SrcSetEntry;
	webp?: SrcSetEntry;
	jpeg?: SrcSetEntry;
	png?: SrcSetEntry;
	gif?: SrcSetEntry;
}

const types: { name: keyof SrcSet; type: string }[] = [
	{ name: "avif", type: "image/avif" },
	{ name: "webp", type: "image/webp" },
	{ name: "jpeg", type: "image/jpeg" },
	{ name: "png", type: "image/png" },
	{ name: "gif", type: "image/gif" },
];

const SIZE_PADDING = 30;

const createSrcSetString = (
	size: string,
	densities: SrcSetDensities,
): string => {
	const { "1x": base, ...addDensities } = densities;
	const densitySet = Object.entries(addDensities).map(
		([densitiy, src]) => `${src} ${densitiy}`,
	);
	const baseSrc = `${base} ${Number(size) - SIZE_PADDING}w`;
	return [baseSrc, ...densitySet].join(", ");
};

export interface StdSizeStepMap<T> {
	250?: T;
	500?: T;
	750?: T;
	1000?: T;
}

export const createStdSrcSet = ({
	250: w250,
	500: w500,
	750: w750,
	1000: w1000,
}: StdSizeStepMap<string>): SrcSetEntry => {
	const entries = Object.entries({
		250: w250 && [{ "1x": w250 }, w500 && { "2x": w500 }],
		500: w500 && [
			{ "1x": w500 },
			w750 && { "1.5x": w750 },
			w1000 && { "2x": w1000 },
		],
		750: w750 && [{ "1x": w750 }, w1000 && { "1.5x": w1000 }],
		1000: w1000 && [{ "1x": w1000 }],
	});
	const filteredEntries = entries
		.map(([size, sizeList]) => [
			size,
			((sizeList || []) as (
				| { [density: string]: string }
				| undefined
			)[]).filter((size) => !!size),
		])
		.filter(([, sizeList]) => !!sizeList.length)
		.map((entry) => {
			type SizeEntry = [number, { [density: string]: string }[]];
			const [size, sizeList] = entry as SizeEntry;
			let sizeMap = {};
			sizeList.forEach((density) => {
				sizeMap = { ...sizeMap, ...density };
			});
			return [size, sizeMap];
		});
	return Object.fromEntries(filteredEntries);
};

const Img = ({
	className,
	srcset,
	src,
	alt,
	loading,
	width,
	height,
}: {
	className?: string;
	srcset: SrcSet;
	src: string;
	alt: string;
	loading?: "lazy" | "eager";
	width?: number;
	height?: number;
}) => (
	<picture>
		{types
			.filter(({ name }) => name in srcset)
			.map(({ name, type }) =>
				Object.entries(
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					srcset[name]!,
				)
					.sort(([sizeA], [sizeB]) => Number(sizeA) - Number(sizeB))
					.map(([size, densities]: [string, SrcSetDensities]) => (
						<source
							key={`${name}-${size}`}
							srcSet={createSrcSetString(size, densities)}
							type={type}
						/>
					)),
			)}
		<img
			className={className}
			src={src}
			alt={alt}
			width={width}
			height={height}
			loading={loading}
		/>
	</picture>
);

export default Img;
