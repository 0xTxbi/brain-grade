"use client";
import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCourse } from "@/lib/requests";
import { useGetCourses } from "@/lib/hooks/useGetCourses";
import { DataTable } from "../table/data-table";
import { columns } from "../table/columns";
import AddCourse from "../course-actions/add-course";

const Courses: React.FC = () => {
	// obtain courses
	const { courses, isLoading, isError } = useGetCourses();
	console.log(courses);

	// State to handle form submission status
	const [submitting, setSubmitting] = useState(false);
	console.log(courses);
	const [submissionError, setSubmissionError] = useState("");

	// form's schema
	const courseSchema = z.object({
		courseCode: z.string(),
		title: z.string(),
		grade: z.string().transform((val) => parseFloat(val)),
		units: z.string().transform((val) => parseFloat(val)),
		year: z.number(),
		semester: z.number(),
	});

	const form = useForm<z.infer<typeof courseSchema>>({
		resolver: zodResolver(courseSchema),
		defaultValues: {
			courseCode: "",
			title: "",
			grade: 0,
			units: 1,
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
				units: Number(values.units),
				year: Number(values.year),
			};

			await addCourse(parsedValues);

			console.log("Form data sent successfully!");
		} catch (error: any) {
			setSubmissionError(error.message);
			console.error("Form submission error:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<div className="grid gap-4 md:grid-cols-4 lg:grid-cols-4">
				<Card className="col-span-4 md:col-span-3 overflow-scroll">
					<CardHeader>
						<CardTitle>
							Your Courses
						</CardTitle>
					</CardHeader>
					<CardContent>
						{courses?.length < 1 ? (
							"you haven't added any course yet"
						) : (
							<DataTable
								columns={
									columns
								}
								data={courses}
							/>
						)}
					</CardContent>
				</Card>
				<Card className="col-span-4 md:col-span-1 overflow-scroll max-h-[200px]">
					<AddCourse />
				</Card>
			</div>
		</>
	);
};

export default Courses;
