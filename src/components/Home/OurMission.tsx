import React from "react";
import mission1 from "@/assets/images/mission1.jpg";
import mission2 from "@/assets/images/mission2.jpg";
import mission3 from "@/assets/images/mission3.jpg";
import Image from "next/image";

const OurMission = () => {
  return (
    <section
      className="px-5 md:px-12 mx-auto py-10 bg-secondary-gray grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 md:gap-20"
      id="our-mission"
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-primary-yellow-light font-bold text-4xl md:text-5xl uppercase tracking-wide">
          Our Mission
        </h2>

        <h3 className="font-semibold text-base md:text-lg text-white tracking-wide">
          Creating lasting memories with passion and enthusiasm
        </h3>

        <p className="text-white/60 text-sm leading-[2.5]">
          Our mission is to delight our customers with results-oriented visual
          content that meets their personal satisfaction as well as their
          marketing goals, communication objectives and professional services.
          We take off any limitations on creativity and strive to add as much
          value for our clients in any and every way that we can.
        </p>
      </div>

      <div className="flex flex-col space-y-4 w-full">
        <div className="hidden md:grid grid-cols-2 gap-5">
          <Image
            src={mission1}
            width={500}
            height={500}
            alt="our-mission image 1"
            quality={100}
            className="w-full h-[250px] object-cover"
          />

          <Image
            src={mission2}
            width={500}
            height={500}
            alt="our-mission image 2"
            quality={100}
            className="w-full h-[250px] object-cover"
          />
        </div>

        <Image
          src={mission3}
          alt="our-mission image 3"
          width={500}
          height={500}
          quality={100}
          className="object-cover w-full md:h-[300px]"
        />
      </div>
    </section>
  );
};

export default OurMission;
