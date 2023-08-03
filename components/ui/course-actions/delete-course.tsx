"use client";
import React, { useState } from "react";

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { LoaderIcon, Trash } from "lucide-react";
import { deleteCourse } from "@/lib/requests";
import { Courses } from "../table/columns";
import { DialogDescription } from "@radix-ui/react-dialog";

interface DeleteCourseProps {
	course: Courses;
}

const DeleteCourse: React.FC<DeleteCourseProps> = ({ course }) => {
	// State to handle form submission status
	const [submitting, setSubmitting] = useState(false);
	const [submissionError, setSubmissionError] = useState("");

	const handleDelete = async () => {
		setSubmitting(true);
		setSubmissionError("");

		try {
			const response = await deleteCourse(course._id);

			console.log("Course deleted successfully!");
		} catch (error: any) {
			console.error("Failed to delete course:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Dialog>
				<DialogTrigger>
					<Button variant="outline">
						<Trash className="h-4 w-4" />
					</Button>
				</DialogTrigger>

				<DialogContent className="sm:max-w-[625px]">
					<DialogHeader>
						Delete Course
					</DialogHeader>
					<DialogDescription>
						{`Are you sure you want to delete ${course.code}?`}
					</DialogDescription>
					<DialogFooter>
						<Button
							className="bg-red-500"
							onClick={handleDelete}
							disabled={submitting}
						>
							{submitting ? (
								<>
									<LoaderIcon className="mr-2 h-4 w-4" />
									Deleting
									Course
								</>
							) : (
								<>
									Delete
									Course
								</>
							)}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default DeleteCourse;
