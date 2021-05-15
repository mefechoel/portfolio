import Card from "../../components/Card";
import GridPage from "../../components/GridPage";
import nichtMehrJpg from "./imgs/nicht-mehr-750.jpg";
import pragJpg from "./imgs/prag-750.jpg";
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
					<img
						src={nichtMehrJpg}
						alt="A mountain top with a few trees"
						width="400"
						height="400"
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
					<img
						src={pragJpg}
						alt="A mountain top with a few trees"
						width="400"
						height="400"
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
