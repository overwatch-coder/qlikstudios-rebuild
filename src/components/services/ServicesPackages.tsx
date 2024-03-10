import { PACKAGES_TYPES } from "@/constants/services";
import { Check } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const ServicesPackages = () => {
  return (
    <section className="py-16 flex flex-col gap-5" id="packages">
      <div className="text-center mx-auto pb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Photography Packages
        </h2>
      </div>

      <article className="px-7 md:px-16 flex flex-col md:flex-row items-center justify-center">
        {PACKAGES_TYPES.map((item, idx) => (
          <div
            data-aos="fade-up"
            className="bg-white/80 even:bg-white transition duration-1000 hover:scale-105 hover:bg-white even:scale-[1.01] py-5 hover:z-30 rounded-md shadow-xl w-full md:h-[400px] md:w-[350px]"
            key={idx}
          >
            <h3 className="text-2xl text-center text-primary-yellow font-bold">
              {item.name}
            </h3>

            <ul className="flex flex-col gap-6 p-5">
              {item.details.map((detail, index) => (
                <li key={index} className="flex items-center gap-4">
                  <Check size={15} className="text-black/70" />
                  <span className="text-black/70 text-sm">{detail}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-primary-yellow hover:bg-primary-yellow/80 text-center text-white/80 hover:text-white flex items-center mx-auto my-5 px-5 py-3 rounded-full">
              {item.price} MAD
            </Button>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ServicesPackages;
