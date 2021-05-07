import { useEffect } from "preact/hooks";

const DocumentTitle = ({ children }: { children: string }) => {
	useEffect(() => {
		const prevTitle = document.title;
		document.title = children;
		return () => {
			document.title = prevTitle;
		};
	}, [children]);
	return null;
};

export default DocumentTitle;
