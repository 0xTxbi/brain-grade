"use client";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import UpdateCourse from "../course-actions/update-course";
import DeleteCourse from "../course-actions/delete-course";
import ViewCourse from "../course-actions/view-course";

// define the shape of our data.
export type Courses = {
	_id: string;
	code: string;
	title: string;
	grade: number;
	unit_credit: number;
};

export const columns: ColumnDef<Courses>[] = [
	{
		accessorKey: "code",
		header: "Code",
	},
	{
		accessorKey: "grade",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(
							column.getIsSorted() ===
								"asc"
						)
					}
				>
					Grade
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "unit_credit",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(
							column.getIsSorted() ===
								"asc"
						)
					}
				>
					Units
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const course = row.original;

			return (
				<div className="flex space-x-4">
					<ViewCourse course={course} />
					<UpdateCourse course={course} />
					<DeleteCourse course={course} />
				</div>
			);
		},
	},
];
