"use client";
import React, { useState } from "react";

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, Pencil, Trash } from "lucide-react";
import { deleteCourse, updateCourse } from "@/lib/requests";
import { Courses } from "../table/columns";
import { title } from "process";
import { DialogDescription } from "@radix-ui/react-dialog";

interface DeleteCourseProps {
	course: Courses;
}

const DeleteCourse: React.FC<DeleteCourseProps> = ({ course }) => {
	// State to handle form submission status
	const [submitting, setSubmitting] = useState(false);
	const [submissionError, setSubmissionError] = useState("");

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
							onClick={() =>
								// deleteCourse('hey', course.id)
								console.log(
									"deleting"
								)
							}
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
