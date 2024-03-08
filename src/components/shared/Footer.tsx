import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import FooterSocial from "../Home/FooterSocial";

const Footer = () => {
  return (
    <footer id="footer-container" className="py-7 flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-10 md:gap-20 md:flex md:flex-row md:items-start md:justify-between place-items-start px-5 md:px-16 py-6">
        <div className="flex flex-col gap-5 md:gap-7">
          <h3 className="space-y-4 flex flex-col pb-3">
            <p className="text-3xl md:text-4xl text-primary-yellow-light font-bold">
              {" "}
              Qlik Studios
            </p>
            <small className="text-sm text-white/60 tracking-wide">
              Relive your moments
            </small>
          </h3>

          <p className="flex items-center gap-4 text-sm text-white/50">
            <FaEnvelope size={20} className="text-white/50" />
            <Link target="_blank" href="mailto:info@qlikstudios.com">
              info@qlikstudios.com
            </Link>
          </p>

          <p className="flex items-center gap-4 text-sm text-white/50">
            <FaPhone size={20} className="text-white/50" />
            <Link target="_blank" href={"tel:+212606457519"}>
              +212 606 457 519
            </Link>
          </p>

          <p className="flex items-center gap-4 text-sm text-white/50">
            <Phone size={20} className="text-white/50" />
            <Link target="_blank" href={"tel:+212609978892"}>
              {" "}
              +212 609 978 892
            </Link>
          </p>

          <p className="flex items-center gap-4 text-sm text-white/50">
            <FaLocationDot size={20} className="text-white/50" />
            <span>Rabat, Morocco</span>
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-primary-yellow-light font-semibold pb-5 tracking-wide">
            Services
          </h3>

          <Link
            className="text-white/70 text-sm hover:text-white"
            href={"/services#services"}
          >
            Videography
          </Link>
          <Link
            className="text-white/70 text-sm hover:text-white"
            href={"/services#services"}
          >
            Photography
          </Link>
          <Link
            className="text-white/70 text-sm hover:text-white"
            href={"/services#services"}
          >
            Video Editing
          </Link>
          <Link
            className="text-white/70 text-sm hover:text-white"
            href={"/services#services"}
          >
            Photo Editing & Retouching
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-primary-yellow-light font-semibold pb-5 tracking-wide">
            Navigate
          </h3>

          <Link className="text-white/70 text-sm hover:text-white" href={"/"}>
            Home
          </Link>
          <Link
            className="text-white/70 text-sm hover:text-white"
            href={"/portfolio"}
          >
            Portfolio
          </Link>
          <Link
            className="text-white/70 text-sm hover:text-white"
            href={"/services#packages"}
          >
            Packages
          </Link>
          <Link
            className="text-white/70 text-sm hover:text-white"
            href={"/contracts"}
          >
            Contracts
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 pb-5 px-5 md:px-16 md:items-center md:text-center">
        <h3 className="text-2xl md:text-xl text-primary-yellow-light font-semibold tracking-wide">
          Our Socials
        </h3>
        <FooterSocial classname="flex md:mx-auto" />
      </div>

      <div
        style={{ background: "#121212 0% 0% no-repeat padding-box" }}
        className="flex flex-col items-center md:flex-row md:justify-between text-center gap-4 py-10 px-5 md:px-16 text-white/60 text-xs md:text-sm border-t border-t-white/30"
      >
        <p>
          © 2021 - {new Date().getFullYear()} Qlik Studios. All Rights Reserved
        </p>
        <Link href={"#"}>Privacy Policy</Link>
        <Link href={"#"}>Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
