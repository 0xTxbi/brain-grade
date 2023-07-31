"use client";

import React from "react";

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
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Courses: React.FC = () => {
	// form's schema
	const formSchema = z.object({
		courseCode: z.string(),
		title: z.string(),
		grade: z
			.number()
			.min(0)
			.max(5)
			.refine((value) => Number.isInteger(value * 100), {
				message: "Grade must have 2 decimal places.",
			}),
		units: z.number().min(1).max(6).int(),
		year: z.number().min(1).max(5).int(),
		semester: z.enum(["rain", "harmattan"]),
	});

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			courseCode: "",
			title: "",
			grade: 0.0,
			units: 1,
			year: 1,
			semester: "rain",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>
							Your Courses
						</CardTitle>
					</CardHeader>
					<CardContent>
						you haven't added any course yet
					</CardContent>
				</Card>
				<Dialog>
					<DialogTrigger asChild>
						<Card className="col-span-3 cursor-pointer">
							<CardHeader>
								<CardTitle>
									Add
									Course
								</CardTitle>
								<CardDescription>
									Easily
									add a
									new
									course
									to the
									current
									semester
									by
									providing
									details
									such as
									course
									name,
									instructor,
									credits,
									and
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
										Add
										a
										Course
									</DialogTitle>
									<DialogDescription>
										Easily
										add
										a
										new
										course
										to
										the
										current
										semester
										by
										providing
										the
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
										name="courseCode"
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
														placeholder="70"
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
										name="units"
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
										name="units"
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
														<SelectItem value="Rain">
															Rain
														</SelectItem>
														<SelectItem value="Harmattan">
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
									<Button type="submit">
										Add
										Course
									</Button>
								</DialogFooter>
							</form>
						</Form>
					</DialogContent>
				</Dialog>
			</div>
		</>
	);
};

export default Courses;
