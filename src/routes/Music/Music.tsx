import Card from "../../components/Card";
import GridPage from "../../components/GridPage";
import nichtMehr1000Jpg from "./imgs/nicht-mehr-1000.jpg";
import nichtMehr750Jpg from "./imgs/nicht-mehr-750.jpg";
import nichtMehr500Jpg from "./imgs/nicht-mehr-500.jpg";
import nichtMehr250Jpg from "./imgs/nicht-mehr-250.jpg";
import nichtMehr1000Webp from "./imgs/nicht-mehr-1000.webp";
import nichtMehr750Webp from "./imgs/nicht-mehr-750.webp";
import nichtMehr500Webp from "./imgs/nicht-mehr-500.webp";
import nichtMehr250Webp from "./imgs/nicht-mehr-250.webp";
import nichtMehr1000Avif from "./imgs/nicht-mehr-1000.avif";
import nichtMehr750Avif from "./imgs/nicht-mehr-750.avif";
import nichtMehr500Avif from "./imgs/nicht-mehr-500.avif";
import nichtMehr250Avif from "./imgs/nicht-mehr-250.avif";
import prag1000Jpg from "./imgs/prag-1000.jpg";
import prag750Jpg from "./imgs/prag-750.jpg";
import prag500Jpg from "./imgs/prag-500.jpg";
import prag250Jpg from "./imgs/prag-250.jpg";
import prag1000Webp from "./imgs/prag-1000.webp";
import prag750Webp from "./imgs/prag-750.webp";
import prag500Webp from "./imgs/prag-500.webp";
import prag250Webp from "./imgs/prag-250.webp";
import prag1000Avif from "./imgs/prag-1000.avif";
import prag750Avif from "./imgs/prag-750.avif";
import prag500Avif from "./imgs/prag-500.avif";
import prag250Avif from "./imgs/prag-250.avif";
import Img, { createStdSrcSet } from "../../components/Img";
import style from "./Music.module.scss";

const Music = () => (
	<GridPage>
		<GridPage.Desc>
			On this page, you will find a list of private and academic software
			projects. Click a project card to view a more detailed description of a
			project.
		</GridPage.Desc>
		<GridPage.Cards>
			<Card route="/ba-thesis">
				<div className={style.imgWrapper}>
					<Img
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
				</div>
				<Card.Body>
					<Card.Heading>Nicht Mehr</Card.Heading>
					<Card.Description>
						In my bachelor thesis, I compared three popular reactive frontend
						JavaScript frameworks. The main points of interest for the
						comparison were performance, the availability of reusable libraries
						and resources and the learning curve of each option.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/ba-thesis">
				<div className={style.imgWrapper}>
					<Img
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
				</div>
				<Card.Body>
					<Card.Heading>Prag</Card.Heading>
					<Card.Description>
						In my bachelor thesis, I compared three popular reactive frontend
						JavaScript frameworks. The main points of interest for the
						comparison were performance, the availability of reusable libraries
						and resources and the learning curve of each option.
					</Card.Description>
				</Card.Body>
			</Card>
		</GridPage.Cards>
	</GridPage>
);

export default Music;
