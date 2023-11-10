import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Frontend Mentor | Notifications page",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				{children}

				<footer>
					Challenge by
					<a
						href='https://www.frontendmentor.io?ref=challenge'
						target='_blank'
						rel='noopener noreferrer'
					>
						Frontend Mentor
					</a>
					. Coded by{" "}
					<a
						href='https://www.frontendmentor.io/profile/sutaC'
						rel='noopener noreferrer'
					>
						sutaC
					</a>
					.
				</footer>
			</body>
		</html>
	);
}
