import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { UserAuthForm } from "@/components/ui/auth-form/user-auth-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

export default function AuthPage() {
	return (
		<>
			<div className="container h-screen relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<div className="relative h-full hidden flex-col bg-muted p-10 text-white dark:border-r lg:flex">
					<div className="absolute inset-0 bg-zinc-900" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-6 w-6"
						>
							<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
						</svg>
						BrainGrade Inc.
					</div>
					<div className="relative z-20 mt-auto mb-5">
						<blockquote className="space-y-2">
							<p className="text-lg">
								&ldquo;BrainGrade
								has been a total
								game-changer for
								me! As a busy
								college student
								juggling
								multiple
								courses, keeping
								track of my
								grades used to
								be a daunting
								task. But thanks
								to BrainGrade,
								it's now a
								breeze. The
								user-friendly
								interface makes
								it super easy to
								input my grades,
								and the app
								calculates my
								GPA accurately
								within
								seconds.&rdquo;
							</p>
							<footer className="text-sm">
								Emma Johnson
							</footer>
						</blockquote>
					</div>
				</div>
				<div className="lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
						<Tabs
							defaultValue="sign-up"
							className="lg:w-[400px]"
						>
							<TabsList className="grid w-full grid-cols-2 mt-10">
								<TabsTrigger value="sign-up">
									Sign Up
								</TabsTrigger>
								<TabsTrigger value="sign-in">
									Sign In
								</TabsTrigger>
							</TabsList>
							<TabsContent value="sign-up">
								<div className="flex flex-col space-y-2 text-center mt-8">
									<h1 className="text-2xl font-semibold tracking-tight">
										Create
										an
										account
									</h1>
								</div>
								<UserAuthForm mode="register" />
								<p className="px-8 text-center text-sm text-muted-foreground mt-5">
									By
									clicking
									continue,
									you
									agree to
									our{" "}
									<Link
										href="/terms"
										className="underline underline-offset-4 hover:text-primary"
									>
										Terms
										of
										Service
									</Link>{" "}
									and{" "}
									<Link
										href="/privacy"
										className="underline underline-offset-4 hover:text-primary"
									>
										Privacy
										Policy
									</Link>
									.
								</p>
							</TabsContent>

							<TabsContent value="sign-in">
								<div className="flex flex-col space-y-2 text-center mt-8">
									<h1 className="text-2xl font-semibold tracking-tight">
										Sign
										in
										to
										your
										Account
									</h1>
								</div>
								<UserAuthForm mode="login" />
								<p className="px-8 text-center text-sm text-muted-foreground mt-5">
									By
									clicking
									continue,
									you
									agree to
									our
									<Link
										href="/terms"
										className="underline underline-offset-4 hover:text-primary"
									>
										Terms
										of
										Service
									</Link>{" "}
									and{" "}
									<Link
										href="/privacy"
										className="underline underline-offset-4 hover:text-primary"
									>
										Privacy
										Policy
									</Link>
									.
								</p>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</>
	);
}
