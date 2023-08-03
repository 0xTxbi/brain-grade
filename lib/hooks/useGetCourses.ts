import useSWR from "swr";
import axios from "axios";

interface Course {
	code: string;
	title: string;
	grade: number;
	unit_credit: number;
}

const fetcher = async (url: string, token: string) => {
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	const response = await axios.get<Course[]>(url, { headers });
	return response.data;
};

export function useGetCourses(token: string) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/cgpa-calculator/courses?return_only=code%2Ctitle%2Cgrade%2Cunit_credit`;
	const { data, error, isValidating } = useSWR<Course[]>(
		[url, token],
		fetcher
	);

	return {
		courses: data,
		isLoading: !error && !data,
		isError: error,
		isValidating,
	};
}
