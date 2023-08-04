"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heading } from "@/components/ui/typography/heading";
import UserDropDown from "@/components/ui/user-dropdown";
import { MainNav } from "@/components/ui/main-navigation";
import Overview from "@/components/ui/dashboard-sections/overview";
import Courses from "@/components/ui/dashboard-sections/my-courses";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { useCalculateGPA } from "@/lib/hooks/useCalculateGPA";
import { Contributors } from "@/components/ui/contributors";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardPage() {
	const { user, isLoading, isError } = useCurrentUser();
	const { gpa } = useCalculateGPA();

	console.log(user);
	console.log(gpa);

	return (
		<>
			<div className="flex flex-col md:flex">
				<div className="border-b">
					<div className="flex h-16 items-center justify-center px-4">
						<MainNav />
					</div>
				</div>
				<Toaster />

				<div className="flex-1 space-y-4 p-8 pt-6">
					<div className="flex items-center justify-between space-y-2">
						<Heading level={2}>
							wagwan, {user?.username}{" "}
							👋🏽
						</Heading>
						<div className="flex items-center">
							<UserDropDown avatarSrc="" />
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
								value="predictions"
								disabled
							>
								Predictions
							</TabsTrigger>
						</TabsList>

						{/* Overview tab content */}
						<TabsContent
							value="overview"
							className="space-y-4"
						>
							<Overview
								cgpa={gpa.cgpa}
								totalGradePoints={
									gpa.totalGradePoints
								}
								current_class={
									gpa.current_class
								}
								comment={
									gpa.comment
								}
							/>
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

			<Contributors />
		</>
	);
}
