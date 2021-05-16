import type { ComponentChildren, JSX } from "preact";
import { useContext, useEffect, useRef } from "preact/hooks";
import AppContext from "../../AppContext";
import { focus } from "../../util";
import { useHistory } from "../Router";

const NavigationManager = ({
	children,
}: {
	children: ComponentChildren;
}): JSX.Element => {
	const { setNavIsOpen } = useContext(AppContext);
	const history = useHistory();
	const prevLocation = useRef(history.location);

	useEffect(() => {
		const unsubscribe = history.subscribe((update) => {
			if (
				update.action === "PUSH" &&
				prevLocation.current.pathname !== update.location.pathname
			) {
				window.scrollTo(0, 0);
			}
			setNavIsOpen(false);
			// Reset focus to body element, so the link is not focused any more
			// and screenreaders announce a transition
			focus(document.body);
			prevLocation.current = update.location;
		});
		return () => unsubscribe();
	}, [history, setNavIsOpen]);

	return children as JSX.Element;
};

export default NavigationManager;
