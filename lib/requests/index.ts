const endpoint = "https://cgpa-calculator-api.onrender.com/api/v1";

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
