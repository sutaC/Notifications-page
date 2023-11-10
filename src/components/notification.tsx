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
		<div onClick={handleMarkRead}>
			<div>
				<Image
					src={`/images/${params.notificationObj.user.profilePic}`}
					alt='Profile Picture'
					width={50}
					height={50}
				></Image>
				<div>
					<p className={read ? "" : styles.unread}>
						<span>{params.notificationObj.user.name}</span>
						{params.notificationObj.content.message}{" "}
						<span>{params.notificationObj.content.highlight}</span>{" "}
						<span>{params.notificationObj.content.anhor}</span>
					</p>
					<p>{params.notificationObj.time}</p>
				</div>
				{params.notificationObj.content.attachment ? (
					<Image
						src={`/images/${params.notificationObj.content.attachment}`}
						alt='Notification attachment'
						width={50}
						height={50}
					></Image>
				) : (
					""
				)}
			</div>
			<div>{params.notificationObj.content.textbox}</div>
		</div>
	);
}
