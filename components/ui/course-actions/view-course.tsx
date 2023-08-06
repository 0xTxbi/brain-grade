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
import { ScrollArea } from "../scroll-area";

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

					<ScrollArea className="w-full">
						<div>
							<div className="space-y-1 ">
								<h4 className="text-sm font-medium leading-none">
									Title
								</h4>
								<p className="text-sm text-muted-foreground">
									{
										courseDetail.title
									}
								</p>
							</div>
							<Separator className="my-4" />
							<div className="space-y-1 ">
								<h4 className="text-sm font-medium leading-none">
									Code
								</h4>
								<p className="text-sm text-muted-foreground">
									{
										courseDetail.code
									}
								</p>
							</div>
							<Separator className="my-4" />
							<div className="space-y-1 ">
								<h4 className="text-sm font-medium leading-none">
									Grade
								</h4>
								<p className="text-sm text-muted-foreground">
									{
										courseDetail.grade
									}
								</p>
							</div>
							<Separator className="my-4" />
							<div className="space-y-1 ">
								<h4 className="text-sm font-medium leading-none">
									Grade
								</h4>
								<p className="text-sm text-muted-foreground">
									{
										courseDetail.unit_credit
									}
								</p>
							</div>
							<Separator className="my-4" />
							<div className="space-y-1 ">
								<h4 className="text-sm font-medium leading-none">
									Grade
								</h4>
								<p className="text-sm text-muted-foreground">
									{
										courseDetail.year
									}
								</p>
							</div>
						</div>
					</ScrollArea>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default ViewCourse;
