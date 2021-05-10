import type { VNode } from "preact";
import { cloneElement } from "preact";
import style from "./SvgWrapper.module.scss";

const SvgWrapper = ({ children }: { children: VNode }) => (
	<div className={style.wrapper}>
		{cloneElement(children, { className: style.svg })}
	</div>
);

export default SvgWrapper;
