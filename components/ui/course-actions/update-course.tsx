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
import { LoaderIcon, Pencil } from "lucide-react";
import { updateCourse } from "@/lib/requests";
import { Courses } from "../table/columns";
import { title } from "process";

interface UpdateCourseProps {
	course: Courses;
}

const UpdateCourse: React.FC<UpdateCourseProps> = ({ course }) => {
	// State to handle form submission status
	const [submitting, setSubmitting] = useState(false);
	const [submissionError, setSubmissionError] = useState("");

	const [isOpen, setIsOpen] = React.useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	// form's schema
	const courseSchema = z.object({
		title: z.string(),
	});

	const form = useForm<z.infer<typeof courseSchema>>({
		resolver: zodResolver(courseSchema),
		defaultValues: {
			title: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof courseSchema>) => {
		setSubmitting(true);
		setSubmissionError("");

		try {
			await updateCourse(course._id, values.title);
			form.reset();
			console.log("Form data sent successfully!", values);
		} catch (error: any) {
			setSubmissionError(error.message);
			console.error("Form submission error:", error);
		} finally {
			setSubmitting(false);
			handleClose();
		}
	};

	return (
		<>
			<Dialog
				open={isOpen}
				onOpenChange={(open) => setIsOpen(open)}
			>
				<DialogTrigger>
					<Button variant="outline">
						<Pencil className="h-4 w-4" />
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[625px]">
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(
								onSubmit
							)}
							className="space-y-8"
						>
							<DialogHeader>
								<DialogTitle>
									Update
								</DialogTitle>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								{/* Title */}
								<FormField
									control={
										form.control
									}
									name="title"
									render={({
										field,
									}) => (
										<FormItem>
											<FormLabel>
												Title
											</FormLabel>
											<FormControl>
												<Input
													id="name"
													placeholder={
														course.title
													}
													className="col-span-3"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<DialogFooter>
								<Button
									type="submit"
									disabled={
										submitting
									}
								>
									{submitting ? (
										<>
											<LoaderIcon className="mr-2 h-4 w-4" />
											Updating
											Course
										</>
									) : (
										<>
											Update
											Course
										</>
									)}
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default UpdateCourse;
