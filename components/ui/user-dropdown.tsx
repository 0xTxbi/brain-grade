"use client";

import React from "react";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuPortal,
	DropdownMenuSubContent,
	DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

import {
	User,
	Settings,
	PlusCircle,
	LogOut,
	Moon,
	Sun,
	Tv2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/lib/requests";

interface UserDropDownProps {
	avatarSrc: string;
}

const UserDropDown: React.FC<UserDropDownProps> = () => {
	const { setTheme } = useTheme();

	const router = useRouter();

	const handleLogout = () => {
		logoutUser();
		router.push("/");
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					{/* <AvatarImage src={avatarSrc} /> */}
					<AvatarFallback>BG</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>
					My Account
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem disabled>
						<User className="mr-2 h-4 w-4" />
						<span>Profile</span>
						<DropdownMenuShortcut>
							⇧⌘P
						</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<Tv2 className="mr-2 h-4 w-4" />
							<span>
								Display Settings
							</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem
									onClick={() =>
										setTheme(
											"light"
										)
									}
								>
									<Sun className="mr-2 h-4 w-4" />
									<span>
										Light
									</span>
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() =>
										setTheme(
											"dark"
										)
									}
								>
									<Moon className="mr-2 h-4 w-4" />
									<span>
										Dark
									</span>
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() =>
										setTheme(
											"system"
										)
									}
								>
									<Tv2 className="mr-2 h-4 w-4" />
									<span>
										System
									</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<PlusCircle className="mr-2 h-4 w-4" />
									<span>
										More...
									</span>
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleLogout}>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
					<DropdownMenuShortcut>
						⇧⌘Q
					</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserDropDown;
