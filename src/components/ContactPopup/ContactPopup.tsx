import { unscramble } from "botex";
import { cloneElement, ComponentChildren, VNode } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import cx from "../../cx";
import style from "./ContactPopup.module.scss";

function extendClassName(node: VNode, className: string) {
	type NodeWithClass = ComponentChildren & {
		className?: string;
		class?: string;
	};
	const extendedClass = cx(
		(node.props as NodeWithClass).className,
		(node.props as NodeWithClass).class,
		className,
	);
	return cloneElement(node, { className: extendedClass });
}

const ContactPopup = ({
	children,
	onActivate,
	actionIcon,
	copyLabel,
	actionLabel,
	encoded,
	codeKey,
}: {
	children: VNode;
	onActivate: (decoded: string) => void;
	actionIcon: VNode;
	copyLabel: string;
	actionLabel: string;
	encoded: string;
	codeKey: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef<HTMLSpanElement | null>(null);

	const openPopup = () => {
		setIsOpen(true);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (["Enter", " "].includes(e.key)) {
			openPopup();
		}
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(unscramble(encoded, codeKey));
	};

	const handleWrite = () => {
		const decoded = unscramble(encoded, codeKey);
		onActivate(decoded);
	};

	useEffect(() => {
		const clickHandler = (e: MouseEvent) => {
			if (!wrapperRef.current?.contains(e.target as Node | null)) {
				setIsOpen(false);
			}
		};
		const keyHandler = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			document.addEventListener("click", clickHandler);
			document.addEventListener("keydown", keyHandler);
		}
		return () => {
			document.removeEventListener("click", clickHandler);
			document.removeEventListener("keydown", keyHandler);
		};
	}, [isOpen]);

	const handleFocus = () => setIsOpen(true);
	const handleBlur = () => setIsOpen(false);

	return (
		<span
			className={style.wrapper}
			ref={wrapperRef}
			onFocus={handleFocus}
			onBlur={handleBlur}
		>
			<a
				role="button"
				className={style.link}
				onClick={openPopup}
				onKeyDown={handleKeyDown}
				tabIndex={0}
			>
				{extendClassName(children, style.svg)}
			</a>
			<div className={cx(style.buttonWrapper, isOpen && style.open)}>
				<button type="button" className={style.svgButton} onClick={handleCopy}>
					<span className={style.svgButtonLabel}>{copyLabel}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
						<rect width="6" height="4" x="9" y="3" rx="2" />
					</svg>
				</button>
				<button type="button" className={style.svgButton} onClick={handleWrite}>
					<span className={style.svgButtonLabel}>{actionLabel}</span>
					{actionIcon}
				</button>
			</div>
		</span>
	);
};

export default ContactPopup;
