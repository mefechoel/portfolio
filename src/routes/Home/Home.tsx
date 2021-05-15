import portrait from "./imgs/portrait-1000.jpg";
// import portraitAvif1000 from "./imgs/portrait-1000.avif";
// import portraitAvif500 from "./imgs/portrait-500.avif";
import portraitWebp1000 from "./imgs/portrait-1000.webp";
import portraitWebp500 from "./imgs/portrait-500.webp";
import portraitWebp600 from "./imgs/portrait-600.webp";
import portraitWebp300 from "./imgs/portrait-300.webp";
import portraitJpg1000 from "./imgs/portrait-1000.jpg";
import portraitJpg500 from "./imgs/portrait-500.jpg";
import portraitJpg600 from "./imgs/portrait-600.jpg";
import portraitJpg300 from "./imgs/portrait-300.jpg";
import TextContainer from "../../components/TextContainer";
import style from "./Home.module.scss";

const Home = () => (
	<>
		<h2>Welcome!</h2>
		<TextContainer>
			<div className={style.portraitWrapper}>
				<picture>
					{/* <source
						srcSet={`${portraitAvif500} 500w, ${portraitAvif1000} 2x`}
						type="image/avif"
					/> */}
					<source
						srcSet={`${portraitWebp300} 300w, ${portraitWebp600} 2x`}
						type="image/webp"
					/>
					<source
						srcSet={`${portraitWebp500} 500w, ${portraitWebp1000} 2x`}
						type="image/webp"
					/>
					<source
						srcSet={`${portraitJpg300} 300w, ${portraitJpg600} 2x`}
						type="image/jpeg"
					/>
					<source
						srcSet={`${portraitJpg500} 500w, ${portraitJpg1000} 2x`}
						type="image/jpeg"
					/>
					<img
						className={style.portrait}
						src={portrait}
						alt="Michel Strelow standing in front of a brick wall"
						loading="lazy"
					/>
				</picture>
			</div>
			<p className={style.text}>
				Hello! My name is Michel Strelow and you&apos;ve found my portfolio
				website. I am interested in the web, programming, music, typography and
				photography. In the beginning of 2021, I completed my bachelors degree
				in{" "}
				<a
					href="https://www.th-nuernberg.de/en/faculties/efi/study/media-engineering-beng/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Media Engineering
				</a>{" "}
				at{" "}
				<a
					href="https://www.th-nuernberg.de/en/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Technische Hochschule Nürnberg
				</a>
				. Parallel to my studies, I am employed as a working student at{" "}
				<a
					href="https://www.init.de/en"
					target="_blank"
					rel="noopener noreferrer"
				>
					]init[
				</a>
				, where I work as a frontend web developer. For this website, I have
				selected a few of my private and academic projects.
			</p>
		</TextContainer>
	</>
);

export default Home;
