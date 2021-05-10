import { Nav } from "../Nav";
import style from "./Footer.module.scss";

const Footer = () => (
	<footer className={style.footer}>
		<Nav
			className={style.footerNav}
			linkClassName={style.navLink}
			listClassName={style.navList}
			footer
		/>
	</footer>
);

export default Footer;
