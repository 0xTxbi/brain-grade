import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography/heading";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex h-screen flex-col items-center justify-between p-24">
			<Heading level={2}>BrainGrade</Heading>

			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100"
					height="100"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="lucide lucide-graduation-cap"
					viewBox="0 0 24 24"
				>
					<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
					<path d="M6 12v5c3 3 9 3 12 0v-5"></path>
				</svg>
			</div>

			<p className="md:text-md text-sm text-center text-muted-foreground">
				Embrace the convenience of instant GPA
				computations, visualize erudition trends, and
				set visionary goals to augment your educational
				prowess.
			</p>

			<a href="/auth">
				<Button>Get Started</Button>
			</a>
		</main>
	);
}
