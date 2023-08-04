"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

type FormMode = "login" | "register";

type UserFormValues = {
	username: string;
	email: string;
	password: string;
};

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
	mode: FormMode;
}

export function UserAuthForm({ className, mode, ...props }: UserAuthFormProps) {
	const userSchema =
		mode === "login"
			? z.object({
					email: z.string(),
					password: z.string(),
			  })
			: z.object({
					username: z.string(),
					email: z.string(),
					password: z.string(),
			  });

	const defaultValues =
		mode === "login"
			? {
					email: "",
					password: "",
			  }
			: {
					username: "",
					email: "",
					password: "",
			  };

	const form = useForm<UserFormValues>({
		resolver: zodResolver(userSchema),
		defaultValues,
	});

	return (
		<div
			className={cn("grid gap-6", className)}
			{...props}
		>
			<div className="grid gap-4 py-4">
				{mode === "register" ? (
					<RegisterForm />
				) : (
					<LoginForm />
				)}
			</div>

			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
			</div>
			<Button
				variant="outline"
				type="button"
			>
				<GithubIcon className="mr-2 h-4 w-4" />
				Github
			</Button>
		</div>
	);
}
