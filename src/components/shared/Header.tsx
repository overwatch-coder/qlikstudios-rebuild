"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/LOGO FOR QLICK.png 80x140.png";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import MobileNavBar from "./MobileNavBar";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  useEffect(() => {
    if (pathname) {
      setDisplayMobileNav(false);
    }

    return () => setDisplayMobileNav(false);
  }, [pathname]);

  return (
    <header className="w-screen bg-black text-white fixed top-0 py-1 z-50 border-b border-b-white shadow-md">
      <div className="flex flex-row justify-between items-center px-5 md:px-16">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="qlikstudios logo"
            width={100}
            height={100}
            className="object-contain"
            quality={100}
          />
        </Link>

        <div className="md:hidden">
          <button onClick={() => setDisplayMobileNav((prev) => !prev)}>
            <MenuIcon />
          </button>
          <MobileNavBar open={displayMobileNav} setOpen={setDisplayMobileNav} />
        </div>

        <nav className="hidden md:flex items-center space-x-5">
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
