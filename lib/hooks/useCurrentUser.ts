import useSWR from "swr";
import { getCookie } from "cookies-next";

const fetcher = async (url: string) => {
	const token = getCookie("userToken");
	const headers = token
		? { Authorization: `Bearer ${token}` }
		: undefined;

	const response = await fetch(url, { headers });
	if (!response.ok) {
		throw new Error("Failed to fetch user details.");
	}
	return response.json();
};

export function useCurrentUser() {
	const token = getCookie("userToken");
	const { data, error } = useSWR(
		token
			? `${process.env.NEXT_PUBLIC_API_URL}/users/profile/me`
			: null,
		fetcher
	);

	return {
		user: data?.payload,
		isLoading: !error && !data,
		isError: error,
	};
}
