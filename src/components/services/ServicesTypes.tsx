import { SERVICES_TYPES } from "@/constants/services";
import { Check } from "lucide-react";
import React from "react";

const ServicesTypes = () => {
  return (
    <section
      className="py-16 bg-secondary-gray flex flex-col gap-5"
      id="service-types"
    >
      <div className="text-center mx-auto flex flex-col gap-5 pb-10">
        <h2 className="text-4xl font-bold text-white">What We Do</h2>
        <p className="text-white/80 font-light text-sm">
          Below are our available services.
        </p>
      </div>

      <article className="px-5 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto">
        {SERVICES_TYPES.map((service, idx) => (
          <div
            data-aos="fade-up"
            className="service-type py-5 rounded-md shadow-xl md:h-[350px] md:w-[320px]"
            key={idx}
          >
            <h3 className="px-4 text-xl text-center text-primary-yellow-light font-semibold">
              {service.name}
            </h3>

            <ul className="flex flex-col gap-5 p-5">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check size={15} className="text-white/60" />
                  <span className="text-white/60 text-sm">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </section>
  );
};

export default ServicesTypes;
