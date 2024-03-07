"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/images/LOGO FOR QLICK.png 80x140.png";
import Image from "next/image";
import { ChevronDown, ChevronUp, MenuIcon } from "lucide-react";
import { NAV_ITEMS } from "@/constants/header";
import { usePathname } from "next/navigation";
import NavbarDropdownMenu from "./NavbarDropdownMenu";

const Header = () => {
  const pathname = usePathname();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <header className="w-screen bg-black text-white fixed top-0 py-1 z-50 border-b border-b-white shadow-md">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center px-10 md:px-16">
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

        <button className="md:hidden">
          <MenuIcon />
        </button>

        <nav className="hidden md:flex items-center space-x-5">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.path;
            return item.name === "Services" ? (
              <div
                onClick={() => setToggleDropdown((prev) => !prev)}
                className={`${
                  active
                    ? "text-primary-yellow font-bold"
                    : "text-white/50 font-medium"
                } hover:text-white hover:underline flex items-center space-x-1 cursor-pointer`}
              >
                <span>{item.name}</span>

                <NavbarDropdownMenu
                  submenu={item.submenu}
                  open={toggleDropdown}
                />
              </div>
            ) : (
              <Link
                href={item.path}
                key={item.name}
                className={`${
                  active
                    ? "text-primary-yellow font-bold"
                    : "text-white/50 font-medium"
                } hover:text-white hover:underline`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
