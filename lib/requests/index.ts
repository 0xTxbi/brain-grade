const endpoint = "https://cgpa-calculator-api.onrender.com/api/v1";

// Register new user
export async function registerUser(data: any) {
	const url = `${endpoint}/users`;

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "applicaiton/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to register user.");
		}

		console.log(response);
		return response.json();
	} catch (error) {
		throw new Error("Failed to create user");
	}
}

// Authenticate existing user
export async function authenticateUser(data: any) {
	const url = `${endpoint}/users/login`;

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "applicaiton/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to add the course.");
		}

		console.log(response);
		return response.json();
	} catch (error) {
		throw new Error("Failed to create user");
	}
}

// Add Courses
export async function addCourse(data: any) {
	const url = `${endpoint}/cgpa-calculator/courses/new`;

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
	const url = `${endpoint}/cgpa-calculator/courses?return_only=code,title,grade,unit_credit`;

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
