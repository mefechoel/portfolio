import portrait from "./portrait-1000.jpg";
// import portraitAvif1000 from "./portrait-1000.avif";
// import portraitAvif500 from "./portrait-500.avif";
import portraitWebp1000 from "./portrait-1000.webp";
import portraitWebp500 from "./portrait-500.webp";
import portraitWebp600 from "./portrait-600.webp";
import portraitWebp300 from "./portrait-300.webp";
import portraitJpg1000 from "./portrait-1000.jpg";
import portraitJpg500 from "./portrait-500.jpg";
import portraitJpg600 from "./portrait-600.jpg";
import portraitJpg300 from "./portrait-300.jpg";
import style from "./Home.module.scss";

const Home = () => (
	<>
		<h2>Lorem Ipsum</h2>
		<div className={style.portraitWrapper}>
			<picture>
				{/* <source
					srcSet={`${portraitAvif500} 500w, ${portraitAvif1000} 2x`}
					type="image/avif"
				/> */}
				<source
					srcSet={`${portraitWebp500} 500w, ${portraitWebp1000} 2x`}
					type="image/webp"
				/>
				<source
					srcSet={`${portraitWebp300} 300w, ${portraitWebp600} 2x`}
					type="image/webp"
				/>
				<source
					srcSet={`${portraitJpg500} 500w, ${portraitJpg1000} 2x`}
					type="image/jpeg"
				/>
				<source
					srcSet={`${portraitJpg300} 300w, ${portraitJpg600} 2x`}
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
		<p className={style.lorem}>
			XC X* Ve ve fi re ra ri 0123456789
			<br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, consequuntur
			id. Incidunt, veritatis neque unde enim dolorum fuga excepturi aut dolore
			dolor nesciunt ad dolorem possimus ex similique. Libero possimus rem harum
			ullam nesciunt iure minus corporis quisquam itaque autem ex officia
			eveniet sunt assumenda doloribus, facilis blanditiis nulla excepturi
			temporibus repellat dignissimos reiciendis magnam. Dolores animi ex
			accusantium nisi. Illum reprehenderit expedita, earum laudantium
			repellendus quaerat veritatis, eius ea deserunt excepturi id non, vero
			totam saepe? Necessitatibus eveniet, qui illum laudantium tenetur,
			quibusdam esse, eius laboriosam fugit perspiciatis enim autem animi
			reprehenderit corrupti ullam ut dignissimos! Natus sed molestias eligendi
			qui quasi autem delectus, tempora doloremque ad vitae laudantium?
			Exercitationem, blanditiis quod minima, quos eum dolores quas ipsam amet
			repellat perferendis quibusdam corporis odio et dolorem doloribus alias?
			Magni commodi modi est facilis aspernatur veritatis maiores possimus, eius
			alias ea aliquid nam sit culpa dolor perspiciatis nihil cumque aperiam
			sequi magnam facere placeat optio. Eligendi, error quasi labore officiis
			illum, perspiciatis illo, accusamus quidem exercitationem nulla quis nam a
			dolores velit nostrum porro facilis sequi repudiandae magni aliquam at aut
			fuga distinctio? Incidunt corrupti eius, eligendi repellat ut aut!
			Dolores, minus nisi voluptatem rerum inventore facilis ea asperiores
			aperiam!
		</p>
	</>
);

export default Home;
