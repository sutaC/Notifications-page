"use client";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { countUnread, markAllRead } from "@/lib/data/notifications";

export default function Header() {
	const [unread, setUnread] = useState(countUnread());

	function updateUnread() {
		setUnread(countUnread());
	}

	function handleMarkAllRead() {
		if (unread === 0) {
			return;
		}
		setUnread(0);
		markAllRead();
		const markAllReadEvent = new CustomEvent("markAllRead");
		document.dispatchEvent(markAllReadEvent);
	}

	useEffect(() => {
		document.addEventListener("updateUnread", updateUnread);
	}, []);

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<h1>Notifications</h1>
				<p className={styles.unread}>{unread}</p>
			</div>
			<button onClick={handleMarkAllRead}>Mark as read</button>
		</header>
	);
}
