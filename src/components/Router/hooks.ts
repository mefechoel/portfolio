import { useContext } from "preact/hooks";
import RouterContext from "./RouterContext";

export const useNavigate = () => {
	const { history } = useContext(RouterContext);
	return history.navigate;
};

export const useHistory = () => {
	const { history } = useContext(RouterContext);
	return history;
};
