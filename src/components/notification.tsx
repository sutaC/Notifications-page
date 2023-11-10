import styles from "./notification.module.css";
import Image from "next/image";

export default function Notification() {
	return (
		<div>
			<Image
				src={"/images/avatar-angela-gray.webp"}
				alt='Profile Picture'
				width={50}
				height={50}
			></Image>
			<div>
				<p>
					<span>Angela Gray</span>
					followed you <span>My first turnament</span>{" "}
					<span>Chess club</span>
				</p>
				<p>5m ago</p>
			</div>
			<Image
				src={"/images/image-chess.webp"}
				alt='Notification attachment'
				width={50}
				height={50}
			></Image>
		</div>
	);
}
