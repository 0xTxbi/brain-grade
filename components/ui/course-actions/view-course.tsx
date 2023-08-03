"use client";
import React from "react";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";

import { Eye } from "lucide-react";
import { Courses } from "../table/columns";
import { Heading } from "../typography/heading";
import { useGetCourseDetail } from "@/lib/hooks/useGetCourseDetail";

interface ViewCourseProps {
	course: Courses;
}

const ViewCourse: React.FC<ViewCourseProps> = ({ course }) => {
	const { courseDetail } = useGetCourseDetail(course._id);

	console.log(courseDetail);

	return (
		<>
			<Dialog>
				<DialogTrigger>
					<Button variant="outline">
						<Eye className="h-4 w-4" />
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[625px]">
					<DialogHeader>
						Course Detail
					</DialogHeader>

					<div>
						<div className="space-y-1">
							<h4 className="text-sm font-medium leading-none">
								Course Title
							</h4>
							<p className="text-sm text-muted-foreground">
								{
									courseDetail.title
								}
							</p>
						</div>
						<Separator className="my-4" />
						<div className="flex h-5 items-center space-x-4 text-sm">
							<div className="text-muted-foreground">
								Code
							</div>
							<Separator orientation="vertical" />
							<div>
								{
									courseDetail.code
								}
							</div>
							<Separator orientation="vertical" />
							<div className="text-muted-foreground">
								Grade
							</div>
							<Separator orientation="vertical" />
							<div>
								{
									courseDetail.grade
								}
							</div>
							<div className="text-muted-foreground">
								Units
							</div>
							<Separator orientation="vertical" />
							<div>
								{
									courseDetail.unit_credit
								}
							</div>
							<div className="text-muted-foreground">
								Level
							</div>
							<Separator orientation="vertical" />
							<div>
								{
									courseDetail.year
								}
							</div>
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ViewCourse;
