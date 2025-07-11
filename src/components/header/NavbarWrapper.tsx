'use client';
import { usePathname } from "next/navigation";
import NavbarComponent from "./Navbar";

export default function NavbarWrapper() {
    const pathname = usePathname();
    const hiddenPaths = ['/dashboard', '/home', '/blog-dashboard'];
     const shouldHideNavbar = hiddenPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
    if (shouldHideNavbar) return null;

    return <NavbarComponent />;
}
