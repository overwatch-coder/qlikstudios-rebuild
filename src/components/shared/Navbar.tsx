import { NAV_ITEMS } from "@/constants/header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavbarDropdownMenu from "./NavbarDropdownMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [displayServicesDropdown, setDisplayServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setDisplayServicesDropdown(false);
    }

    return () => setDisplayServicesDropdown(false);
  }, [pathname]);

  return NAV_ITEMS.map((item) => {
    const active = pathname === item.path;

    return item.name === "Services" ? (
      <div
        onClick={() => setDisplayServicesDropdown((prev) => !prev)}
        className={`${
          active ? "text-primary-yellow font-bold" : "text-white/50 font-medium"
        } hover:text-white hover:underline flex items-center space-x-1 cursor-pointer`}
      >
        <span className="text-lg md:text-base w-fit">{item.name}</span>

        <NavbarDropdownMenu
          submenu={item.submenu}
          open={displayServicesDropdown}
        />
      </div>
    ) : (
      <Link
        href={item.path}
        key={item.name}
        className={`${
          active ? "text-primary-yellow font-bold" : "text-white/50 font-medium"
        } hover:text-white hover:underline text-lg md:text-base w-fit`}
      >
        {item.name}
      </Link>
    );
  });
};

export default Navbar;
