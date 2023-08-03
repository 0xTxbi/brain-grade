import { getCookie } from "cookies-next";
import { useGetCourses } from "./useGetCourses";

export function useGetCoursesWithToken() {
	const token = getCookie("userToken") as string | undefined;

	if (!token) {
		throw new Error("User token not available. Please log in.");
	}

	return useGetCourses(token);
}
