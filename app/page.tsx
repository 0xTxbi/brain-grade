import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex h-screen flex-col items-center justify-between p-24">
			<a href="/register">
				<Button>Get Started</Button>
			</a>
		</main>
	);
}
