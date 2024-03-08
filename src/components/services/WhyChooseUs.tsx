import Image from "next/image";
import React from "react";
import why_choose_us_image from "@/assets/images/mission3.jpg";
import { WHY_CHOOSE_US } from "@/constants/services";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-secondary-gray flex flex-col gap-5">
      <div className="flex flex-col items-center gap-5 px-5 md:px-16 text-center pb-10">
        <h3 className="uppercase text-xs font-semibold">Why Choose Us</h3>
        <h4 className="capitalize text-xl font-bold">
          For our Experienced, Skilled, Quality & Expeditious Services
        </h4>
        <p className="text-sm text-white/80 leading-relaxed">
          There are many photographers & videographers out there that also do
          what we do. We know you have choices when it comes to our services but
          these are few reasons why we think you should consider us for your
          next photography/videography project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 place-items-center px-5 md:px-16 pb-10">
        <Image
          src={why_choose_us_image}
          alt="why choose us"
          width={500}
          height={500}
          quality={100}
          className="object-cover w-full h-full rounded-md"
        />

        <div className="flex flex-col gap-10">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-5">
              <div className="flex flex-row gap-5 items-center">
                <Image
                  src={item.photo}
                  alt={item.title}
                  width={30}
                  height={30}
                  quality={100}
                  className="object-contain rounded-full"
                />
                <h4 className="font-semibold">{item.title}</h4>
              </div>

              <div>
                <p className="text-sm font-extralight leading-relaxed text-white/80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
