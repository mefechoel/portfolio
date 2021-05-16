import type { ComponentChildren } from "preact";
import { focus } from "../../util";
import style from "./SkipLink.module.scss";

const SkipLink = ({
	children,
	targetId,
}: {
	children: ComponentChildren;
	targetId: string;
}) => {
	const handleClick = (e: MouseEvent) => {
		const target = document.getElementById(targetId);
		if (target) {
			e.preventDefault();
			focus(target);
			target.scrollIntoView();
		}
	};
	return (
		<a className={style.skipLink} onClick={handleClick} href={`#${targetId}`}>
			{children}
		</a>
	);
};

export default SkipLink;
