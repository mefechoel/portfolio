import type { ComponentChildren } from "preact";
import cx from "../../cx";
import style from "./TextContainer.module.scss";

const TextContainer = ({
	children,
	className,
}: {
	children: ComponentChildren;
	className?: string;
}) => <div className={cx(style.container, className)}>{children}</div>;

export default TextContainer;
