import axios from "axios";
import { setCookie } from "cookies-next";
import { NextRouter } from "next/router";

// Register new user
export async function registerUser(data: any) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/users`;

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to register user.");
		}

		return response.json();
	} catch (error) {
		throw new Error("Failed to create user");
	}
}

// Authenticate existing user
export async function authenticateUser(data: any): Promise<void> {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/users/login`;

	try {
		const response = await axios.post(url, data);

		// Extract the token
		const token = response?.data?.payload?.token;

		setCookie("userToken", token, {
			maxAge: 60 * 60 * 24,
		});

		window.location.replace("/dashboard");
	} catch (error) {
		// Handle login error (e.g., show error message to the user)
		console.error("Login error:", error);
		throw new Error("Failed to create user");
	}
}

// Add Courses
export async function addCourse(data: any) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/cgpa-calculator/courses/new`;

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to add the course.");
		}

		return response.json();
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

// Update course
export async function updateCourse(token: string, id: string, title: string) {
	const url = `${process.env.NEXT_PUBLIC_API_URLdpoint}cgpa-calculator/courses/:${id}`;

	try {
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(title),
		});

		if (!response.ok) {
			throw new Error("Failed to update course.");
		}

		return response.json();
	} catch (error) {
		throw new Error(
			"Failed to get courses. Please try again later."
		);
	}
}

// Delete course
export async function deleteCourse(token: string, id: string) {
	const url = `${process.env.NEXT_PUBLIC_API_URL}cgpa-calculator/courses/:${id}`;

	try {
		const response = await fetch(url, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			throw new Error("Failed to delete course.");
		}

		return response.json();
	} catch (error) {
		throw new Error(
			"Failed to delete course. Please try again later."
		);
	}
}
