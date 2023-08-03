"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, MailIcon } from "lucide-react";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticateUser } from "@/lib/requests";

type LoginFormValues = {
	email: string;
	password: string;
};

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const LoginForm: React.FC<LoginFormProps> = ({ className, ...props }) => {
	const loginSchema = z.object({
		email: z.string().email(),
		password: z.string(),
	});

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const [submitting, setSubmitting] = React.useState(false);
	const [submissionError, setSubmissionError] = React.useState("");

	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		setSubmitting(true);
		setSubmissionError("");

		try {
			const parsedValues = {
				...values,
			};

			console.log(
				"Login form values submitted:",
				parsedValues
			);

			authenticateUser(parsedValues);
		} catch (error: any) {
			setSubmissionError(error.message);
			console.error("Form submission error:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div
			className={cn("grid gap-6", className)}
			{...props}
		>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<div className="grid gap-4 py-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Email
										Address
									</FormLabel>
									<FormControl>
										<Input
											id="email"
											type="email"
											placeholder="student@email.com"
											className="col-span-3"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Password
									</FormLabel>
									<FormControl>
										<Input
											type="password"
											id="password"
											className="col-span-3"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<Button
						className="w-full"
						disabled={submitting}
					>
						{submitting ? (
							<>
								<Loader2 className="mr-2 h-4 w-4" />
								Authenticating
							</>
						) : (
							<>
								<MailIcon className="mr-2 h-4 w-4" />
								Sign In
							</>
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default LoginForm;
