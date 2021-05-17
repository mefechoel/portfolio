import nichtMehr1000Jpg from "./album-covers/nicht-mehr-1000.jpg";
import nichtMehr750Jpg from "./album-covers/nicht-mehr-750.jpg";
import nichtMehr500Jpg from "./album-covers/nicht-mehr-500.jpg";
import nichtMehr250Jpg from "./album-covers/nicht-mehr-250.jpg";
import nichtMehr1000Webp from "./album-covers/nicht-mehr-1000.webp";
import nichtMehr750Webp from "./album-covers/nicht-mehr-750.webp";
import nichtMehr500Webp from "./album-covers/nicht-mehr-500.webp";
import nichtMehr250Webp from "./album-covers/nicht-mehr-250.webp";
import nichtMehr1000Avif from "./album-covers/nicht-mehr-1000.avif";
import nichtMehr750Avif from "./album-covers/nicht-mehr-750.avif";
import nichtMehr500Avif from "./album-covers/nicht-mehr-500.avif";
import nichtMehr250Avif from "./album-covers/nicht-mehr-250.avif";
import Img, { createStdSrcSet } from "../Img";

const NichtMehr = ({ className }: { className?: string }) => (
	<Img
		className={className}
		srcset={{
			avif: createStdSrcSet({
				1000: nichtMehr1000Avif,
				750: nichtMehr750Avif,
				500: nichtMehr500Avif,
				250: nichtMehr250Avif,
			}),
			webp: createStdSrcSet({
				1000: nichtMehr1000Webp,
				750: nichtMehr750Webp,
				500: nichtMehr500Webp,
				250: nichtMehr250Webp,
			}),
			jpeg: createStdSrcSet({
				1000: nichtMehr1000Jpg,
				750: nichtMehr750Jpg,
				500: nichtMehr500Jpg,
				250: nichtMehr250Jpg,
			}),
		}}
		src={nichtMehr750Jpg}
		alt="A mountain top with a few trees"
		width={750}
		height={750}
		loading="lazy"
	/>
);

export default NichtMehr;
