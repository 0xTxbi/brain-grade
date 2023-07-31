import useSWR from "swr";
import { getCourses } from "../requests";

export function useGetCourses(token: string) {
	const fetcher = () => getCourses(token);

	const { data, error, isValidating } = useSWR(
		`https://cgpa-calculator-api.onrender.com/api/v1/cgpa-calculator/courses?return_only=code,title,grade,unit_credit`,
		fetcher
	);

	return {
		courses: data,
		isLoading: !error && !data,
		isError: error,
		isValidating,
	};
}
