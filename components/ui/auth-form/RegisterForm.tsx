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
import { registerUser } from "@/lib/requests";

type RegisterFormValues = {
	username: string;
	email: string;
	password: string;
};

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const RegisterForm: React.FC<RegisterFormProps> = ({ className, ...props }) => {
	const registerSchema = z.object({
		username: z.string(),
		email: z.string(),
		password: z.string(),
	});

	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
	});

	const [submitting, setSubmitting] = React.useState(false);
	const [submissionError, setSubmissionError] = React.useState("");
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	console.log(submitting);

	const onSubmit = async (values: z.infer<typeof registerSchema>) => {
		setSubmitting(true);
		setSubmissionError("");

		try {
			const parsedValues = {
				...values,
			};

			console.log(
				"Register form values submitted:",
				parsedValues
			);

			const response = await registerUser(parsedValues);

			console.log("Form data sent successfully!", response);
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
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Username
									</FormLabel>
									<FormControl>
										<Input
											id="name"
											placeholder="student"
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
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Email
										Address
									</FormLabel>
									<FormControl>
										<Input
											id="name"
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
											id="grade"
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
								Create Account
							</>
						) : (
							<>
								<MailIcon className="mr-2 h-4 w-4" />
								Create Account
							</>
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default RegisterForm;
