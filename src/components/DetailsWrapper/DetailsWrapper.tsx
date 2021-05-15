import type { ComponentChildren } from "preact";
import cx from "../../cx";
import TextContainer from "../TextContainer";
import style from "./DetailsWrapper.module.scss";

const DetailsWrapperImg = ({
	children,
	className = "",
}: {
	children: ComponentChildren;
	className?: string;
}) => <div className={cx(style.img, className)}>{children}</div>;

const DetailsWrapperBody = ({
	children,
	className = "",
}: {
	children: ComponentChildren;
	className?: string;
}) => <p className={cx(style.body, className)}>{children}</p>;

const DetailsWrapper = ({
	children,
	className = "",
}: {
	children: ComponentChildren;
	className?: string;
}) => (
	<TextContainer>
		<div className={className}>{children}</div>
	</TextContainer>
);

DetailsWrapper.Img = DetailsWrapperImg;
DetailsWrapper.Body = DetailsWrapperBody;

export default DetailsWrapper;
