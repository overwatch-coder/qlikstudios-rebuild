import React from "react";
import subscribeImage from "@/assets/images/subscribe.jpg";
import Image from "next/image";
import SubscribeForm from "../shared/SubscribeForm";

const Subscribe = () => {
  return (
    <section
      id="subscriber-container"
      className="py-20 px-5 md:px-16 grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:gap-20"
    >
      <Image
        src={subscribeImage}
        alt={`subscribe image`}
        width={500}
        height={500}
        quality={100}
        className="object-contain w-full h-full rounded-md"
      />

      <SubscribeForm />
    </section>
  );
};

export default Subscribe;
