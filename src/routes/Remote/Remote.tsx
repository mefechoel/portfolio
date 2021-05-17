import DetailsWrapper from "../../components/DetailsWrapper";
import RemoteImg from "../../components/Imgs/Remote";
import style from "./Remote.module.scss";

const Remote = () => (
	<DetailsWrapper className={style.wrapper}>
		<DetailsWrapper.Img className={style.img}>
			<RemoteImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			<q>Remote Control</q> is a simple app you can install on your computer. It
			allows you to control media playback via a simple web app, that connects
			to your device. This way you can play or pause videos, alter their
			loudness or select a new film on a streaming platform.
			<br />
			The application you install on your computer is a simple program, written
			in Rust, that hosts a server on the local network. The server is
			implemented using the Rust library{" "}
			<a href="https://rocket.rs/" target="_blank" rel="noopener noreferrer">
				Rocket
			</a>
			. It exposes endpoints, that when requested, issue commands to the
			operating system. Using the libraries{" "}
			<a
				href="https://docs.rs/enigo/0.0.14/enigo/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Enigo
			</a>{" "}
			and{" "}
			<a
				href="https://docs.rs/winapi/0.3.9/winapi/"
				target="_blank"
				rel="noopener noreferrer"
			>
				WinAPI
			</a>
			, keyboard or mouse input can be simulated. This way, the app can control
			media loudness or playback by virtually pressing media keys.
			<br />
			The app also serves a web app, that can be accessed with a smartphone,
			that is connected to the same network as the host computer. The web app is
			implemented using the JavaScript frontend framework{" "}
			<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
				Svelte
			</a>
			. It features three screens. First, a screen with buttons, with which the
			most basic media playback options can be controled. Playback can be paused
			and resumed, the loudness can be altered and tracks can be skipped.
			Second, a trackpad to move the mouse, click and scroll the screen. And
			last a settings page, which allows the user to change the app&apos; color
			scheme and fine tune the experience.
			<br />
			<br />
			Checkout the projects{" "}
			<a
				href="https://github.com/mefechoel/remote-control"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub repository
			</a>
			.
		</DetailsWrapper.Body>
	</DetailsWrapper>
);

export default Remote;
