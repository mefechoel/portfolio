import DetailsWrapper from "../../components/DetailsWrapper";
import PixelnetzImg from "../../components/Imgs/Pixelnetz";
import style from "./Pixelnetz.module.scss";

const Pixelnetz = () => (
	<DetailsWrapper>
		<DetailsWrapper.Img className={style.img}>
			<PixelnetzImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			With <q>Pixelnetz</q> (en: pixel grid) the attendees of an event become
			part of the show. Each visitor can participate in the light show, by
			connecting their phone to the pixel grid.
			<br />
			<br />
			<q>Pixelnetz</q> was created as a group project during the 5th and 6th
			semester of my{" "}
			<a
				href="https://www.th-nuernberg.de/en/faculties/efi/study/media-engineering-beng/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Media Engineering
			</a>{" "}
			studies. The main objective was, to
		</DetailsWrapper.Body>
	</DetailsWrapper>
);

export default Pixelnetz;
