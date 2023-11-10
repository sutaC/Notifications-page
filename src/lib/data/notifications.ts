export type NotificationObj = {
	user: {
		profilePic: string;
		name: string;
	};
	content: {
		message: string;
		highlight?: string;
		anhor?: string;
		textbox?: string;
		attachment?: string;
	};
	time: string;
	read: boolean;
};

let notifications: NotificationObj[] = [
	{
		user: {
			profilePic: "avatar-mark-webber.webp",
			name: "Mark Webber",
		},
		content: {
			message: "reacted to your recent post",
			highlight: "My first tournament today!",
		},
		time: "1m ago",
		read: false,
	},
	{
		user: {
			profilePic: "avatar-angela-gray.webp",
			name: "Angela Gray",
		},
		content: {
			message: "followed you",
		},
		time: "5m ago",
		read: false,
	},
	{
		user: {
			profilePic: "avatar-jacob-thompson.webp",
			name: "Jacob Thompson",
		},
		content: {
			message: "has joined your group",
			anhor: "Chess Club",
		},
		time: "1 day ago",
		read: false,
	},
	{
		user: {
			profilePic: "avatar-rizky-hasanuddin.webp",
			name: "Rizky Hasanuddin",
		},
		content: {
			message: "sent you a private message",
			textbox:
				" Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		},
		time: "5 days ago",
		read: true,
	},
	{
		user: {
			profilePic: "avatar-kimberly-smith.webp",
			name: "Kimberly Smith",
		},
		content: {
			message: "commented on your picture",
			attachment: "image-chess.webp",
		},
		time: "1 week ago",
		read: true,
	},
	{
		user: {
			profilePic: "avatar-nathan-peterson.webp",
			name: "Nathan Peterson",
		},
		content: {
			message: "reacted to your recent post",
			highlight: "5 end-game strategies to increase your win rate",
		},
		time: "2 weeks ago",
		read: true,
	},
	{
		user: {
			profilePic: "avatar-anna-kim.webp",
			name: "Anna Kim",
		},
		content: {
			message: "left the group",
			anhor: "Chess Club",
		},
		time: "2 weeks ago",
		read: true,
	},
];

export default function getNotifications(): NotificationObj[] {
	return notifications;
}

export function countUnread(): number {
	let amm = 0;
	notifications.forEach((not) => {
		if (!not.read) amm++;
	});
	return amm;
}

export function markRead(idx: number): void {
	notifications[idx].read = true;
}

export function markAllRead(): void {
	notifications.forEach((not) => {
		not.read = true;
	});
}
