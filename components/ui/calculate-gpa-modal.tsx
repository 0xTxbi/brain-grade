"use client";
import React from "react";

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Sigma } from "lucide-react";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useCalculateGPA } from "@/lib/hooks/useCalculateGPA";

const CalculateGPA: React.FC = () => {
	const { gpa, isLoading, isError } = useCalculateGPA();

	console.log(gpa);

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
						<Button className="bg-red-500">
							Close
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default CalculateGPA;
