import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	showPassword?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, showPassword, ...props }, ref) => {
		const [isPasswordVisible, setIsPasswordVisible] =
			React.useState(showPassword || false);
		const togglePasswordVisibility = () => {
			setIsPasswordVisible((prev) => !prev);
		};

		return type === "password" ? (
			<div className="relative">
				<input
					type={
						isPasswordVisible
							? "text"
							: "password"
					}
					placeholder="Password"
					className={cn(
						"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
						className
					)}
					{...props}
				/>
				<button
					type="button"
					onClick={togglePasswordVisibility}
					className="absolute inset-y-0 right-0 px-4 py-2 flex items-center"
				>
					{isPasswordVisible ? (
						<Eye className="h-4 w-4" />
					) : (
						<EyeOff className="h-4 w-4" />
					)}
				</button>
			</div>
		) : (
			<input
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
