import type { ComponentChildren } from "preact";
import style from "./GridPage.module.scss";

const GridPageDesc = ({ children }: { children: ComponentChildren }) => (
	<p className={style.description}>{children}</p>
);

const GridPageCards = ({ children }: { children: ComponentChildren }) => (
	<div className={style.cards}>{children}</div>
);

const GridPage = ({ children }: { children: ComponentChildren }) => (
	<>{children}</>
);

GridPage.Desc = GridPageDesc;
GridPage.Cards = GridPageCards;

export default GridPage;
