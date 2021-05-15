import DetailsWrapper from "../../components/DetailsWrapper";
import KochChefImg from "../../components/Imgs/KochChef";
import { Link } from "../../components/Router";

const KochChef = () => (
	<DetailsWrapper>
		<DetailsWrapper.Img>
			<KochChefImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			<q>KochChef</q> is a recipe app, that was developed as part of my{" "}
			<Link to="/ba-thesis">bachelor thesis</Link>. It consists of a NodeJS
			backend written in TypeScript using the server library{" "}
			<a href="https://koajs.com/" target="_blank" rel="noopener noreferrer">
				Koa
			</a>
			. It is responsible for providing the recipe data and running search
			queries. To access and view the recipes, one of three frontend apps can be
			used. Each frontend provides the same user interface and functionality,
			but is implemented using a different JavaScript framework, to showcase
			each frameworks advantages and disadvantages. The frameworks used are{" "}
			<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
				React
			</a>
			,{" "}
			<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
				Vue
			</a>{" "}
			and{" "}
			<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
				Svelte
			</a>
			, all of which are reactive frontend frameworks.
			<br />
			<br />
			Take a look at the page about my{" "}
			<Link to="/ba-thesis">bachelor thesis</Link> for more information.
		</DetailsWrapper.Body>
	</DetailsWrapper>
);

export default KochChef;
