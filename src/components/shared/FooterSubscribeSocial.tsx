"use client";
import React from "react";
import SubscribeForm from "./SubscribeForm";
import FooterSocial from "../Home/FooterSocial";
import { usePathname } from "next/navigation";

const FooterSubscribeSocial = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-5 pb-5 px-5 md:px-16 md:items-center md:text-center">
      <div className={pathname === "/" ? "hidden" : "block pb-5"}>
        <SubscribeForm />
      </div>
      <h3
        style={{ display: pathname === "/" ? "block" : "none" }}
        className="text-2xl md:text-xl mx-auto text-center text-primary-yellow-light font-semibold tracking-wide"
      >
        Our Socials
      </h3>
      <FooterSocial classname="flex mx-auto" />
    </div>
  );
};

export default FooterSubscribeSocial;
