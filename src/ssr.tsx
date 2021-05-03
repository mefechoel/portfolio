import renderToString from "preact-render-to-string";
import prepass from "preact-ssr-prepass";
import App from "./App";

const app = <App />;

prepass(app).then(() => {
	console.log(renderToString(app));
});
