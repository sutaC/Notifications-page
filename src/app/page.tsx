import styles from "./page.module.css";
import Header from "@/components/header";
import Notification from "@/components/notification";
import getNotifications from "@/lib/data/notifications";

export default function Page() {
	const notifications = getNotifications();

	return (
		<main>
			<Header></Header>
			{notifications.map((notification, idx) => (
				<Notification
					key={idx}
					idx={idx}
					notificationObj={notification}
				></Notification>
			))}
		</main>
	);
}
