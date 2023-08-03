"use client";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography/heading";
import UserDropDown from "@/components/ui/user-dropdown";
import { MainNav } from "@/components/ui/main-navigation";
import Overview from "@/components/ui/dashboard-sections/overview";
import Courses from "@/components/ui/dashboard-sections/my-courses";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { Users2 } from "lucide-react";

export default function DashboardPage() {
	const { user, isLoading, isError } = useCurrentUser();

	return (
		<>
			<div className="md:hidden">
				<Image
					src="/examples/dashboard-light.png"
					width={1280}
					height={866}
					alt="Dashboard"
					className="block dark:hidden"
				/>
				<Button></Button>
				<Image
					src="/examples/dashboard-dark.png"
					width={1280}
					height={866}
					alt="Dashboard"
					className="hidden dark:block"
				/>
			</div>
			<div className="flex flex-col md:flex">
				<div className="border-b">
					<div className="flex h-16 items-center justify-center px-4">
						<MainNav />
					</div>
				</div>
				<div className="flex-1 space-y-4 p-8 pt-6">
					<div className="flex items-center justify-between space-y-2">
						<Heading level={2}>
							wagwan, {user?.username}{" "}
							👋🏽
						</Heading>
						<div className="flex items-center space-x-2">
							<UserDropDown avatarSrc="https://avatars.githubusercontent.com/u/46839250?v=4" />
						</div>
					</div>
					<Tabs
						defaultValue="overview"
						className="space-y-4"
					>
						<TabsList>
							<TabsTrigger value="overview">
								Overview
							</TabsTrigger>
							<TabsTrigger value="my-courses">
								My Courses
							</TabsTrigger>
							<TabsTrigger
								value="course-performance"
								disabled
							>
								Course
								Performance
							</TabsTrigger>
							<TabsTrigger
								value="predictions"
								disabled
							>
								Predictions
							</TabsTrigger>
							<TabsTrigger
								value="semester-details"
								disabled
							>
								Semester Details
							</TabsTrigger>
						</TabsList>

						{/* Overview tab content */}
						<TabsContent
							value="overview"
							className="space-y-4"
						>
							<Overview />
						</TabsContent>

						{/* My Courses tab content */}
						<TabsContent
							value="my-courses"
							className="space-y-4"
						>
							<Courses />
						</TabsContent>
					</Tabs>
				</div>
			</div>

			<div className="fixed bottom-0 left-1/2 z-50 transform -translate-x-1/2 mb-10">
				<Button className="animate-pulse">
					<Users2 className="mr-2 h-4 w-4" />
					Contributors
				</Button>
			</div>
		</>
	);
}
