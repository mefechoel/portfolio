import type { JSX } from "preact";
import cx from "../../cx";
import style from "./BurgerIcon.module.scss";

const BurgerIcon = ({
	isOpen,
	className,
}: {
	isOpen: boolean;
	className?: string;
}): JSX.Element => {
	return (
		<div className={cx(style.icon, isOpen && style.open, className)}>
			<div className={cx(style.line, style.top)}></div>
			<div className={cx(style.line, style.middle)}></div>
			<div className={cx(style.line, style.bottom)}></div>
		</div>
	);
};

export default BurgerIcon;
