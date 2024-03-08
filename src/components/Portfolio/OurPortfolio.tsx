import {
  PORTFOLIO_PRODUCTS,
  PORTFOLIO_WORKS,
  PORTFOLIO_YOUTUBE,
} from "@/constants/portfolio";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const OurPortfolio = () => {
  return (
    <section className="py-16 bg-secondary-gray">
      <article className="px-5 md:px-16 mx-auto flex flex-col gap-20">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start gap-10"
          id="our-works"
        >
          {PORTFOLIO_WORKS.map((item, idx) => (
            <Image
              src={item}
              key={idx}
              alt={`portfolio work ${idx + 1}`}
              width={500}
              height={500}
              className="object-cover w-full md:h-[350px] last:h-full last:col-span-1 sm:last:col-span-2 md:last:col-span-3 lg:last:col-span-4 border border-primary-yellow-light hover:scale-105 transition duration-1000 hover:opacity-60"
            />
          ))}
        </div>

        <div className="w-full border border-white/50" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PORTFOLIO_YOUTUBE.map((item, idx) => (
            <iframe
              key={idx}
              src={item}
              allowFullScreen
              className="w-full md:h-[300px]"
            />
          ))}
        </div>

        <div className="w-full border border-white/50" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {PORTFOLIO_PRODUCTS.map((item, idx) => (
            <Image
              src={item}
              key={idx}
              alt={`Qlikstudios product ${idx + 1}`}
              width={500}
              height={500}
              className="object-cover w-full md:h-[350px] hover:scale-105 transition duration-1000 hover:opacity-60"
            />
          ))}
        </div>
        <div className="text-center">
          To see more amazing and fantastic works like these,{" "}
          <Link
            href={"https://www.instagram.com/qlikstudios/"}
            target="_blank"
            className="text-primary-yellow-light font-medium underline"
          >
            Click here
          </Link>
        </div>
      </article>
    </section>
  );
};

export default OurPortfolio;
