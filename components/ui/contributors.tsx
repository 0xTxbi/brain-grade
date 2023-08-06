"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users2 } from "lucide-react";
import { Drawer } from "vaul";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

export function Contributors() {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleClose = () => {
		setIsOpen(false);
	};

	const contributorList = [
		{
			number: 1,
			matric_number: "18/52HA115",
			name: "OLUFEMI, Victor Ayodeji",
			initials: "OV",
		},
		{
			number: 2,
			matric_number: "18/52HA116",
			name: "OLUROMBI, Adebiyi Adegbola",
			initials: "OA",
		},
		{
			number: 3,
			matric_number: "18/52HA117",
			name: "OLUSOSUN, Abimbola Muyideen",
			initials: "OM",
		},
		{
			number: 4,
			matric_number: "18/52HA118",
			name: "OMORAIYEWA, Samuel",
			initials: "OS",
		},
		{
			number: 5,
			matric_number: "18/52HA121",
			name: "OWOLABI, Adam Oriyomi",
			initials: "OA",
		},
		{
			number: 6,
			matric_number: "18/52HA122",
			name: "OWOSENI, Rasheed Kayode",
			initials: "OR",
		},
		{
			number: 7,
			matric_number: "18/52HA123",
			name: "OWOYALE, Muhammed Salihu",
			initials: "OM",
		},
		{
			number: 8,
			matric_number: "18/52HA124",
			name: "OYEBOADE, Israel Oluwapelumi",
			initials: "OI",
		},
		{
			number: 9,
			matric_number: "18/52HA125",
			name: "OYELEKE, Joshua Oluwasayo",
			initials: "OJ",
		},
		{
			number: 10,
			matric_number: "18/52HA127",
			name: "OYINLOYE, James Muyiwa",
			initials: "OJ",
		},
		{
			number: 11,
			matric_number: "18/52HA128",
			name: "PAUL, Mary Abisola",
			initials: "PM",
		},
		{
			number: 12,
			matric_number: "18/52HA129",
			name: "RAJI, Joseph Oluwatobi",
			initials: "RJ",
		},
		{
			number: 13,
			matric_number: "18/52HA130",
			name: "SALAKO, Quazeem Olawale",
			initials: "SQ",
		},
		{
			number: 14,
			matric_number: "18/52HA070",
			name: "IBISAGBA, Daniel Ayomikun",
			initials: "ID",
		},
	];

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => setIsOpen(open)}
		>
			<DialogTrigger>
				<div className="fixed bottom-0 left-1/2 z-50 transform -translate-x-1/2 mb-10">
					<Button className="animate-pulse">
						<Users2 className="mr-2 h-4 w-4" />
						Contributors
					</Button>
				</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[625px]">
				<ScrollArea className="h-[70vh]">
					{contributorList.map((contributor) => (
						<>
							<div className="flex h-5 items-center space-x-4 text-xs md:text-md">
								<div className="text-muted-foreground">
									{`#${contributor.number}`}
								</div>
								<Separator orientation="vertical" />
								<div>
									{
										contributor.matric_number
									}
								</div>
								<Separator orientation="vertical" />
								<div className="text-muted-foreground">
									{
										contributor.name
									}
								</div>
							</div>
							<Separator className="my-4" />
						</>
					))}
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}
