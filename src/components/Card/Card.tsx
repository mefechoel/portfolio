import type { ComponentChildren } from "preact";
import { Link } from "../Router";
import style from "./Card.module.scss";

const CardHeading = ({ children }: { children: ComponentChildren }) => (
	<h2 className={style.heading}>{children}</h2>
);
const CardImg = ({
	children,
	label,
}: {
	children: ComponentChildren;
	label: string;
}) => (
	<div className={style.img} aria-role="img" aria-label={label}>
		{children}
	</div>
);
const CardDescription = ({ children }: { children: ComponentChildren }) => (
	<p className={style.description}>{children}</p>
);
const CardBody = ({ children }: { children: ComponentChildren }) => (
	<p className={style.body}>{children}</p>
);

const Card = ({
	children,
	route,
}: {
	children: ComponentChildren;
	route: string;
}) => (
	<Link className={style.card} to={route}>
		{children}
	</Link>
);

Card.Heading = CardHeading;
Card.Img = CardImg;
Card.Description = CardDescription;
Card.Body = CardBody;

export default Card;
