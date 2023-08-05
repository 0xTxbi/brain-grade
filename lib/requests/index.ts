import axios from "axios";
import { deleteCookie, setCookie } from "cookies-next";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

// Register new user
export async function registerUser(data: any) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/users`;

	try {
		const response = await axios.post(url, data, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		return response.data;
	} catch (error) {
		throw new Error("Failed to register user");
	}
}

// Authenticate existing user
export async function authenticateUser(data: any) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/users/login`;

	try {
		const response = await axios.post(url, data);

		// Extract the token
		const token = response?.data?.payload?.token;

		setCookie("userToken", token, {
			maxAge: 60 * 60 * 24,
		});

		return response.data;
	} catch (error) {
		console.error("Login error:", error);
		throw new Error("Failed to create user");
	}
}

// Add Courses
export async function addCourse(data: any) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/cgpa-calculator/courses/new`;

	try {
		const token = getCookie("userToken") as string | undefined;

		if (!token) {
			throw new Error(
				"User token not available. Please log in."
			);
		}

		const response = await axios.post(url, data, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});

		console.log(response);

		return response.data.payload;
	} catch (error) {
		throw new Error(
			"Failed to add the course. Please try again later."
		);
	}
}

// Get Courses
export async function getCourses(token: string) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/cgpa-calculator/courses?return_only=code,title,grade,unit_credit`;

	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			throw new Error("Failed to get courses.");
		}

		return response.json();
	} catch (error) {
		throw new Error(
			"Failed to get courses. Please try again later."
		);
	}
}

// Update Course
export async function updateCourse(courseId: string, title: string) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/cgpa-calculator/courses/${courseId}`;

	try {
		const token = getCookie("userToken") as string | undefined;

		if (!token) {
			throw new Error(
				"User token not available. Please log in."
			);
		}

		const response = await axios.put(
			url,
			{ title },
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);

		console.log(response);

		return response.data;
	} catch (error) {
		throw new Error(
			"Failed to update the course. Please try again later."
		);
	}
}

// Delete course
export async function deleteCourse(id: string) {
	const token = getCookie("userToken") || "";

	const url = `${process.env.NEXT_PUBLIC_API_URL}/cgpa-calculator/courses/${id}`;

	try {
		const response = await axios.delete(url, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		throw new Error(
			"Failed to delete course. Please try again later."
		);
	}
}
