import Card from "../../components/Card";
import HPStrelow from "../../components/Imgs/HPStrelow";
import Pixelnetz from "../../components/Imgs/Pixelnetz";
import SvelteNavigator from "../../components/Imgs/SvelteNavigator";
import style from "./Projects.module.scss";

const Project = () => (
	<>
		<p className={style.description}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aliquam
			laudantium voluptatum possimus beatae! Laudantium odio, ab itaque expedita
			rem saepe, unde dolore minima reiciendis commodi pariatur cum officiis.
			Ut?
		</p>
		<div className={style.cards}>
			<Card route="/svelte-navigator">
				<Card.Img label="Compass">
					<SvelteNavigator />
				</Card.Img>
				<Card.Body>
					<Card.Heading>Svelte Navigator</Card.Heading>
					<Card.Description>
						Svelte Navigator is an accessible single page app routing library
						for apps built with the <q>Svelte</q> frontend framework.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/kochchef">
				<Card.Img label="Mobile phones layed out in a grid blinking in various colors">
					<Pixelnetz />
				</Card.Img>
				<Card.Body>
					<Card.Heading>KochChef</Card.Heading>
					<Card.Description>
						With Pixelnetz (en: pixel grid) the attendees of an event become
						part of the show. Each visitor can participate in the light show, by
						connecting their phone to the pixel grid.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/pixelnetz">
				<Card.Img label="Mobile phones layed out in a grid blinking in various colors">
					<Pixelnetz />
				</Card.Img>
				<Card.Body>
					<Card.Heading>Pixelnetz</Card.Heading>
					<Card.Description>
						With Pixelnetz (en: pixel grid) the attendees of an event become
						part of the show. Each visitor can participate in the light show, by
						connecting their phone to the pixel grid.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/hp-strelow">
				<Card.Img label="Spiral">
					<HPStrelow />
				</Card.Img>
				<Card.Body>
					<Card.Heading>HP-Strelow</Card.Heading>
					<Card.Description>
						hp-strelow.de is the business page for the naturopathic practice of
						Kristiane Strelow.
					</Card.Description>
				</Card.Body>
			</Card>
		</div>
	</>
);

export default Project;
