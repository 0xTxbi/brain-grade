import React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Courses: React.FC = () => {
	return (
		<>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>
							Your Courses
						</CardTitle>
					</CardHeader>
					<CardContent>
						you haven't added any course yet
					</CardContent>
				</Card>
				<Dialog>
					<DialogTrigger asChild>
						<Card className="col-span-3">
							<CardHeader>
								<CardTitle>
									Add
									Course
								</CardTitle>
								<CardDescription>
									Easily
									add a
									new
									course
									to the
									current
									semester
									by
									providing
									details
									such as
									course
									name,
									instructor,
									credits,
									and
									grade.
								</CardDescription>
							</CardHeader>
							<CardContent></CardContent>
						</Card>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[625px]">
						<DialogHeader>
							<DialogTitle>
								Add a Course
							</DialogTitle>
							<DialogDescription>
								Easily add a new
								course to the
								current semester
								by providing the
								following
								details:
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label
									htmlFor="name"
									className="text-right"
								>
									Course
									Code
								</Label>
								<Input
									id="name"
									placeholder="CSC 111"
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label
									htmlFor="name"
									className="text-right"
								>
									Title
								</Label>
								<Input
									id="name"
									placeholder="Introduction to Computer Science"
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label
									htmlFor="name"
									className="text-right"
								>
									Grade
								</Label>
								<Input
									type="number"
									id="name"
									placeholder="70"
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label
									htmlFor="username"
									className="text-right"
								>
									Units
								</Label>
								<Input
									type="number"
									id="username"
									placeholder="3"
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label
									htmlFor="username"
									className="text-right"
								>
									Year
								</Label>

								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Select a year" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="1">
												1
											</SelectItem>
											<SelectItem value="2">
												2
											</SelectItem>
											<SelectItem value="3">
												3
											</SelectItem>
											<SelectItem value="4">
												4
											</SelectItem>
											<SelectItem value="5">
												5
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label
									htmlFor="username"
									className="text-right"
								>
									Semester
								</Label>
								<Select>
									<SelectTrigger className="w-[300px]">
										<SelectValue placeholder="Select semester" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectItem value="rain">
												Rain
											</SelectItem>
											<SelectItem value="harmattan">
												Harmattan
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">
								Add Course
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</>
	);
};

export default Courses;
