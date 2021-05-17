import type { ComponentChildren } from "preact";
import cx from "../../cx";
import style from "./MusicWrapper.module.scss";

const MusicWrapperImg = ({
	children,
	className,
}: {
	children: ComponentChildren;
	className?: string;
}) => <div className={cx(style.img, className)}>{children}</div>;

const MusicWrapperBody = ({
	children,
	className,
}: {
	children: ComponentChildren;
	className?: string;
}) => <p className={cx(style.body, className)}>{children}</p>;

const MusicWrapper = ({
	children,
	className,
}: {
	children: ComponentChildren;
	className?: string;
}) => <div className={cx(style.wrapper, className)}>{children}</div>;

MusicWrapper.Img = MusicWrapperImg;
MusicWrapper.Body = MusicWrapperBody;

export default MusicWrapper;
