"use client";
import React, { useState } from "react";

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { LoaderIcon, Sigma, Trash } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";

const CalculateGPA: React.FC = () => {
	// State to handle form submission status
	const [submitting, setSubmitting] = useState(false);
	const [submissionError, setSubmissionError] = useState("");

	return (
		<>
			<Dialog>
				<DialogTrigger>
					<Button size="lg">
						<Sigma className="mr-2 h-4 w-4" />
						Calculate
					</Button>
				</DialogTrigger>

				<DialogContent className="sm:max-w-[625px]">
					<DialogHeader>
						Calculating GPA
					</DialogHeader>
					<DialogDescription>
						Calculating your GPA based on
						provided inputs. hang in tight.
					</DialogDescription>
					<DialogFooter>
						{/* <Button
							className="bg-red-500"
							onClick={() =>
								// deleteCourse('hey', course.id)
								console.log(
									"deleting"
								)
							}
							disabled={submitting}
						>
							{submitting ? (
								<>
									<LoaderIcon className="mr-2 h-4 w-4" />
									Deleting
									Course
								</>
							) : (
								<>
									Delete
									Course
								</>
							)}
						</Button> */}
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default CalculateGPA;
