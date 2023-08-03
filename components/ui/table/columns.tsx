"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// define the shape of our data.
export type Courses = {
	id: string;
	code: string;
	title: string;
	grade: number;
	units: number;
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
		accessorKey: "units",
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
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="h-8 w-8 p-0"
						>
							<span className="sr-only">
								Open menu
							</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>
							Actions
						</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText(
									payment.id
								)
							}
						>
							View Course
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							Update Course
						</DropdownMenuItem>
						<DropdownMenuItem>
							Delete Course
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
