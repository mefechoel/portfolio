import prag1000Jpg from "./album-covers/prag-1000.jpg";
import prag750Jpg from "./album-covers/prag-750.jpg";
import prag500Jpg from "./album-covers/prag-500.jpg";
import prag250Jpg from "./album-covers/prag-250.jpg";
import prag1000Webp from "./album-covers/prag-1000.webp";
import prag750Webp from "./album-covers/prag-750.webp";
import prag500Webp from "./album-covers/prag-500.webp";
import prag250Webp from "./album-covers/prag-250.webp";
import prag1000Avif from "./album-covers/prag-1000.avif";
import prag750Avif from "./album-covers/prag-750.avif";
import prag500Avif from "./album-covers/prag-500.avif";
import prag250Avif from "./album-covers/prag-250.avif";
import Img, { createStdSrcSet } from "../Img";

const Prag = ({ className }: { className?: string }) => (
	<Img
		className={className}
		srcset={{
			avif: createStdSrcSet({
				1000: prag1000Avif,
				750: prag750Avif,
				500: prag500Avif,
				250: prag250Avif,
			}),
			webp: createStdSrcSet({
				1000: prag1000Webp,
				750: prag750Webp,
				500: prag500Webp,
				250: prag250Webp,
			}),
			jpeg: createStdSrcSet({
				1000: prag1000Jpg,
				750: prag750Jpg,
				500: prag500Jpg,
				250: prag250Jpg,
			}),
		}}
		src={prag750Jpg}
		alt="A television tower protruding from a forest"
		width={750}
		height={750}
		loading="lazy"
	/>
);

export default Prag;
