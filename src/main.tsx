import { hydrate } from "preact";
import { lazy } from "preact/compat";
import App from "./App";
import { createRoutes } from "./routes";

const projects = lazy(() => import("./routes/Projects"));
const index = lazy(() => import("./routes/Home"));
const music = lazy(() => import("./routes/Music"));
const impressum = lazy(() => import("./routes/Impressum"));
const datenschutz = lazy(() => import("./routes/Datenschutz"));
const baThesis = lazy(() => import("./routes/BAThesis"));
const svelteNavigator = lazy(() => import("./routes/SvelteNavigator"));
const kochChef = lazy(() => import("./routes/KochChef"));
const hpStrelow = lazy(() => import("./routes/HPStrelow"));
const portfolio = lazy(() => import("./routes/Portfolio"));
const remote = lazy(() => import("./routes/Remote"));
const pixelnetz = lazy(() => import("./routes/Pixelnetz"));

const routes = createRoutes({
	projects,
	index,
	impressum,
	music,
	datenschutz,
	baThesis,
	svelteNavigator,
	kochChef,
	hpStrelow,
	portfolio,
	remote,
	pixelnetz,
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
hydrate(<App routes={routes} />, document.getElementById("root")!);
