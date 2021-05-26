import type { ComponentChildren } from "preact";
import style from "./ImgGrid.module.scss";

const ImgGrid = ({ children }: { children: ComponentChildren }) => (
	<div className={style.imgGrid}>{children}</div>
);

export default ImgGrid;
