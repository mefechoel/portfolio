import "./index.scss";
import { Suspense, useMemo, useState } from "preact/compat";
import type { JSX } from "preact";
import Header from "./components/Header";
import { MobileNav } from "./components/Nav";
import { Route, Router } from "./components/Router";
import Banner from "./components/Banner";
import type { RouteConfigs } from "./routes";
import AppContext from "./AppContext";
import DocumentTitle from "./components/DocumentTitle";
import Footer from "./components/Footer";
import RoutePlaceholder from "./components/RoutePlaceholder";
import style from "./App.module.scss";

const App = ({
	routes,
	url = "/",
}: {
	routes: RouteConfigs;
	url?: string;
}): JSX.Element => {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const routeList = useMemo(() => Object.values(routes), [routes]);
	return (
		<div data-app-wrapper="" className={style.app}>
			<AppContext.Provider
				value={{ routes, routeList, navIsOpen, setNavIsOpen }}
			>
				<Router url={url}>
					<Banner />
					<MobileNav />
					<Route path="/">
						<Header />
					</Route>
					<main id="main" className={style.main}>
						{routeList.map((config) => {
							const { component: Component, name, path, title } = config;
							return (
								<>
									<Route key={name} path={path}>
										<DocumentTitle>{title}</DocumentTitle>
										<Suspense fallback={<RoutePlaceholder />}>
											<Component />
										</Suspense>
									</Route>
								</>
							);
						})}
					</main>
					<Footer />
				</Router>
			</AppContext.Provider>
		</div>
	);
};

export default App;
