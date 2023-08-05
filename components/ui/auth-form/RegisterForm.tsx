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
import { authenticateUser, registerUser } from "@/lib/requests";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

type RegisterFormValues = {
	username: string;
	email: string;
	password: string;
};

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const RegisterForm: React.FC<RegisterFormProps> = ({ className, ...props }) => {
	const router = useRouter();
	const { toast } = useToast();

	const registerSchema = z.object({
		username: z.string(),
		email: z.string().email(),
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

	const onSubmit = async (values: z.infer<typeof registerSchema>) => {
		setSubmitting(true);
		setSubmissionError("");

		try {
			const loginValues = {
				email: values.email,
				password: values.password,
			};

			toast({
				title: "Creating Account",
				description:
					"your BrainGrade account is being provisioned",
			});

			const response = await registerUser(values);

			// login user upon successful registration
			if (response.status_code === 200) {
				await authenticateUser(loginValues);
				toast({
					title: "Account Created",
					description: "welcome to BrainGrade",
				});
				router.push("/dashboard");
			} else {
				console.log("Registration failed.");
			}
		} catch (error: any) {
			setSubmissionError(error.message);
			console.error("Form submission error:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Toaster />
			<div
				className={cn("grid gap-6", className)}
				{...props}
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(
							onSubmit
						)}
						className="space-y-8"
					>
						<div className="grid gap-4 py-4">
							{/* Username */}
							<FormField
								control={
									form.control
								}
								name="username"
								render={({
									field,
								}) => (
									<FormItem>
										<FormLabel>
											Username
										</FormLabel>
										<FormControl>
											<Input
												id="username"
												type="text"
												placeholder="student"
												className="col-span-3"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Email address */}
							<FormField
								control={
									form.control
								}
								name="email"
								render={({
									field,
								}) => (
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

							{/* Password */}
							<FormField
								control={
									form.control
								}
								name="password"
								render={({
									field,
								}) => (
									<FormItem>
										<FormLabel>
											Password
										</FormLabel>
										<FormControl>
											<Input
												type="password"
												id="password"
												className="col-span-3 pr-10"
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
									<svg
										aria-hidden="true"
										className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
									Creating
									Account
								</>
							) : (
								<>
									<MailIcon className="mr-2 h-4 w-4" />
									Create
									Account
								</>
							)}
						</Button>
					</form>
				</Form>
			</div>
		</>
	);
};

export default RegisterForm;
