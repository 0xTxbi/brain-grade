"use client";
import React, { useState } from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

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
import { LoaderIcon } from "lucide-react";
import { addCourse } from "@/lib/requests";
import { rawCourses } from "@/lib/utils";
import { useGetCourses } from "@/lib/hooks/useGetCourses";

const AddCourse: React.FC = () => {
	// get course refresh function
	const { refreshData } = useGetCourses();

	// State to handle form submission status
	const [submitting, setSubmitting] = useState(false);
	const [submissionError, setSubmissionError] = useState("");

	const [isOpen, setIsOpen] = React.useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	// form's schema
	const courseSchema = z.object({
		code: z.string(),
		title: z.string(),
		grade: z.string().transform((val) => parseFloat(val)),
		unit_credit: z.string().transform((val) => parseFloat(val)),
		year: z.string().transform((val) => parseFloat(val)),
		semester: z.string().transform((val) => parseFloat(val)),
	});

	const form = useForm<z.infer<typeof courseSchema>>({
		resolver: zodResolver(courseSchema),
		defaultValues: {
			code: "",
			title: "",
			grade: 0,
			unit_credit: 1,
			year: 1,
			semester: 1,
		},
	});

	const onSubmit = async (values: z.infer<typeof courseSchema>) => {
		setSubmitting(true);
		setSubmissionError("");

		try {
			const parsedValues = {
				...values,
				unit_credit: Number(values.unit_credit),
				year: Number(values.year),
				semester: Number(values.semester),
			};

			console.log(
				"Form data sent successfully!",
				parsedValues
			);

			await addCourse(parsedValues);
			form.reset();
			refreshData();
		} catch (error: any) {
			setSubmissionError(error.message);
			console.error("Form submission error:", error);
		} finally {
			setSubmitting(false);
			handleClose();
		}
	};

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => setIsOpen(open)}
		>
			<DialogTrigger asChild>
				<Card className="col-span-4 border-0 md:col-span-2 cursor-pointer">
					<CardHeader>
						<CardTitle>
							Add Course
						</CardTitle>
						<CardDescription>
							Easily add a new course
							to the current semester
							by providing details
							such as course name,
							instructor, credits, and
							grade.
						</CardDescription>
					</CardHeader>
					<CardContent></CardContent>
				</Card>
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
								Add a Course
							</DialogTitle>
							<DialogDescription>
								Easily add a new
								course to the
								current semester
								by providing the
								following
								details:
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							{/* Course code */}
							<FormField
								control={
									form.control
								}
								name="code"
								render={({
									field,
								}) => (
									<FormItem>
										<FormLabel>
											Course
											Code
										</FormLabel>
										<FormControl>
											<Input
												id="name"
												placeholder="CSC 111"
												className="col-span-3"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

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
												placeholder="Introduction to Computer Science"
												className="col-span-3"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Grade */}
							<FormField
								control={
									form.control
								}
								name="grade"
								render={({
									field,
								}) => (
									<FormItem>
										<FormLabel>
											Grade
										</FormLabel>
										<FormControl>
											<Input
												type="number"
												id="grade"
												className="col-span-3"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Units */}
							<FormField
								control={
									form.control
								}
								name="unit_credit"
								render={({
									field,
								}) => (
									<FormItem>
										<FormLabel>
											Units
										</FormLabel>
										<FormControl>
											<Input
												type="number"
												id="units"
												placeholder="3"
												className="col-span-3"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Year */}
							<FormField
								control={
									form.control
								}
								name="year"
								render={({
									field,
								}) => (
									<FormItem>
										<FormLabel>
											Year
										</FormLabel>
										<FormControl>
											<Input
												type="number"
												id="year"
												placeholder="1"
												className="col-span-3"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Semester */}
							<FormField
								control={
									form.control
								}
								name="semester"
								render={({
									field,
								}) => (
									<FormItem>
										<FormLabel>
											Semester
										</FormLabel>
										<Select
											onValueChange={
												field.onChange
											}
										>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select semester" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="1">
													Rain
												</SelectItem>
												<SelectItem value="2">
													Harmattan
												</SelectItem>
											</SelectContent>
										</Select>
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
										Adding
										Course
									</>
								) : (
									<>
										Add
										Course
									</>
								)}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default AddCourse;
