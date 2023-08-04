import useSWR, { mutate } from "swr";
import axios, { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
	const token = getCookie("userToken");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

const fetcher = async (url: string) => {
	try {
		const response = await axiosInstance.get(url);
		return response.data;
	} catch (error) {
		throw new Error("Failed to fetch data.");
	}
};

export function useGetCourses() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/cgpa-calculator/courses`;
	const { data, error, isValidating } = useSWR(url, fetcher);

	const refreshData = async () => {
		try {
			await mutate(url, fetcher(url));
		} catch (error) {
			console.error("Failed to refresh data:", error);
		}
	};

	return {
		courses: data?.payload?.data || [],
		isLoading: !error && !data,
		isError: error,
		isValidating,
		refreshData,
	};
}
