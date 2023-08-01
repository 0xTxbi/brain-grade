import useSWR from "swr";

interface User {
	id: string;
	username: string;
	email: string;
}

const fetcher = async (url: string) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Failed to fetch user details.");
	}
	return response.json();
};

const API_ENDPOINT =
	"https://cgpa-calculator-api.onrender.com/api/v1/users/profile/me";

export function useCurrentUser() {
	const { data, error } = useSWR<User>(API_ENDPOINT, fetcher);

	return {
		user: data,
		isLoading: !error && !data,
		isError: error,
	};
}
