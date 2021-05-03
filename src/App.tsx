import { JSX } from "preact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import style from "./App.module.scss";
import { Route, Router } from "./components/Router";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Banner from "./components/Banner";

const App = (): JSX.Element => (
	<div data-app-root="" className={style.app}>
		<Router>
			<Nav />
			<Banner />
			<Route path="/">
				<Header />
			</Route>
			<main className={style.main}>
				<Route path="/">
					<Home />
				</Route>
				<Route path="/projects">
					<Projects />
				</Route>
			</main>
			<footer className={style.footer}>Bye!</footer>
		</Router>
	</div>
);

export default App;
