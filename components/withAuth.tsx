"use client";

import { hasCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { FC, ComponentType } from "react";

const withAuth = (WrappedComponent: ComponentType<any>): FC<any> => {
	return (props) => {
		const router = useRouter();
		const pathName = usePathname();
		const userToken = hasCookie("userToken");

		// If there's no token, redirect to "/auth" page
		if (!userToken && pathName !== "/" && pathName !== "/auth") {
			router.replace("/auth");
			return null;
		}

		return <WrappedComponent {...props} />;
	};
};

export default withAuth;
