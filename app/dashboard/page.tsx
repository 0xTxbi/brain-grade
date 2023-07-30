import { Metadata } from "next";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { CalendarDateRangePicker } from "@/app/examples/dashboard/components/date-range-picker"
// import { MainNav } from "@/app/examples/dashboard/components/main-nav"
// import { Overview } from "@/app/examples/dashboard/components/overview"
// import { RecentSales } from "@/app/examples/dashboard/components/recent-sales"
// import { Search } from "@/app/examples/dashboard/components/search"
// import TeamSwitcher from "@/app/examples/dashboard/components/team-switcher"
// import { UserNav } from "@/app/examples/dashboard/components/user-nav"
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography/heading";
import UserDropDown from "@/components/ui/user-dropdown";
import { MainNav } from "@/components/ui/main-navigation";
import Overview from "@/components/ui/dashboard-sections/overview";
import Courses from "@/components/ui/dashboard-sections/my-courses";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "BrainGrade's Dashboard",
};

export default function DashboardPage() {
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
			<div className="hidden flex-col md:flex">
				<div className="border-b">
					<div className="flex h-16 items-center justify-center px-4">
						<MainNav />
					</div>
				</div>
				<div className="flex-1 space-y-4 p-8 pt-6">
					<div className="flex items-center justify-between space-y-2">
						<Heading level={2}>
							wagwan, txbi 👋🏽
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
		</>
	);
}
