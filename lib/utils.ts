import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios, { AxiosRequestConfig } from "axios";

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
		id: "2",
		code: "CSC 111",
		title: "Intro to Computer Science",
		grade: 100,
		units: 3,
	},
	{
		id: "3",
		code: "CSC 111",
		title: "Intro to Computer Science",
		grade: 100,
		units: 3,
	},
	{
		id: "4",
		code: "CSC 112",
		title: "Intro to Computer Science",
		grade: 100,
		units: 3,
	},
];

const url = process.env.NEXT_PUBLIC_API_URL;
// const { TOKEN, SESSION_ID } = Authentication;

const customAxios = axios.create({
	baseURL: url,
	timeout: 10000,
});
