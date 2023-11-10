"use client";
import styles from "./notification.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { markRead, type NotificationObj } from "@/lib/data/notifications";

export default function Notification(params: {
	idx: number;
	notificationObj: NotificationObj;
}) {
	const [read, setRead] = useState(params.notificationObj.read);

	function handleMarkRead() {
		if (read) {
			return;
		}
		markRead(params.idx);
		setRead(true);
		const updateEvent = new CustomEvent("updateUnread");
		document.dispatchEvent(updateEvent);
	}

	function handleMarkAllRead() {
		if (read) {
			return;
		}
		setRead(true);
	}

	useEffect(() => {
		document.addEventListener("markAllRead", handleMarkAllRead);
	}, []);

	return (
		<div onClick={handleMarkRead} className={styles.notification}>
			<Image
				src={`/images/${params.notificationObj.user.profilePic}`}
				alt='Profile Picture'
				width={45}
				height={45}
			></Image>

			<div>
				<p className={`${styles.content} ${read ? "" : styles.unread}`}>
					<a href='#' className={styles.author}>
						{params.notificationObj.user.name}
					</a>{" "}
					{params.notificationObj.content.message}{" "}
					<a href='#' className={styles.highlight}>
						{params.notificationObj.content.highlight}
					</a>{" "}
					<a href='#' className={styles.anhor}>
						{params.notificationObj.content.anhor}
					</a>
				</p>

				<p className={styles.time}>{params.notificationObj.time}</p>

				<div className={styles.textbox}>
					{params.notificationObj.content.textbox}
				</div>
			</div>

			{params.notificationObj.content.attachment ? (
				<Image
					src={`/images/${params.notificationObj.content.attachment}`}
					alt='Notification attachment'
					width={50}
					height={50}
					className={styles.attachment}
				></Image>
			) : (
				""
			)}
		</div>
	);
}
