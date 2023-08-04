import React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import CalculateGPA from "../calculate-gpa-modal";

interface OverviewProps {
	cgpa: number;
	totalGradePoints: string;
	current_class: string;
	comment: string;
}

const Overview: React.FC<OverviewProps> = ({
	cgpa,
	totalGradePoints,
	current_class,
	comment,
}) => {
	return (
		<>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Cumulative GPA
						</CardTitle>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-graduation-cap"
						>
							<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
							<path d="M6 12v5c3 3 9 3 12 0v-5" />
						</svg>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{cgpa}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Total Grade Points
						</CardTitle>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-graduation-cap"
						>
							<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
							<path d="M6 12v5c3 3 9 3 12 0v-5" />
						</svg>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{totalGradePoints}
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Total Credits
						</CardTitle>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="h-4 w-4 text-muted-foreground"
						>
							<rect
								width="20"
								height="14"
								x="2"
								y="5"
								rx="2"
							/>
							<path d="M2 10h20" />
						</svg>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							55
						</div>
						<p className="text-xs text-muted-foreground">
							+19% from last month
						</p>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Total Courses
						</CardTitle>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="h-4 w-4 text-muted-foreground"
						>
							<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
						</svg>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							10
						</div>
						<p className="text-xs text-muted-foreground">
							-2 since last semester
						</p>
					</CardContent>
				</Card>
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>
							Current Class
						</CardTitle>
					</CardHeader>
					<CardContent>
						{current_class}
					</CardContent>
				</Card>
				<Card className="col-span-3">
					<CardHeader>
						<CardTitle>Remark</CardTitle>
					</CardHeader>
					<CardContent>{comment}</CardContent>
				</Card>
				<CalculateGPA />
			</div>
		</>
	);
};

export default Overview;
