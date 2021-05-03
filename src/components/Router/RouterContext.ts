import { createContext } from "preact";
import type { IRouterContext } from "./types";

const RouterContext = createContext<IRouterContext>(null as never);

export default RouterContext;
