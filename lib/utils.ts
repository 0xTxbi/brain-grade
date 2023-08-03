import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const rawCourses = [
	{
		id: "1",
		code: "CSC 111",
		title: "Intro to Computer Science",
		grade: 100,
		units: 3,
	},
	{
		id: "1",
		code: "CSC 111",
		title: "Intro to Computer Science",
		grade: 100,
		units: 3,
	},
	{
		id: "1",
		code: "CSC 111",
		title: "Intro to Computer Science",
		grade: 100,
		units: 3,
	},
	{
		id: "1",
		code: "CSC 112",
		title: "Intro to Computer Science",
		grade: 100,
		units: 3,
	},
];
