import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "BrainGrade",
	description: "an intuitive CGPA Calculator",
	openGraph: {
		title: "BrainGrade",
		description: "an intuitive CGPA Calculator",
		url: "https://brain-grade.vercel.app/",
		siteName: "BrainGrade",
		images: [
			{
				url: "https://res.cloudinary.com/uglymolluska/image/upload/v1691129576/1a46e0f3-8dc1-4b32-971e-e9c4267b2da1_k1pdhs.jpg",
				width: 1600,
				height: 900,
				alt: "My custom alt",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
