import type { VNode } from "preact";
import { cloneElement } from "preact";
import cx from "../../cx";
import style from "./SvgWrapper.module.scss";

const SvgWrapper = ({ children }: { children: VNode }) => (
	<div className={style.wrapper}>
		{cloneElement(children, {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			className: cx((children.props as any)?.className, style.svg),
		})}
	</div>
);

export default SvgWrapper;
