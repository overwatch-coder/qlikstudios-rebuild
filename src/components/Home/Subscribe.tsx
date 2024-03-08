import React from "react";
import subscribeImage from "@/assets/images/subscribe.jpg";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/button";

const Subscribe = () => {
  return (
    <section
      id="subscriber-container"
      className="py-10 px-5 md:px-16 grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:gap-20"
    >
      <Image
        src={subscribeImage}
        alt={`subscribe image`}
        width={500}
        height={500}
        quality={100}
        className="object-contain w-full h-full rounded-md"
      />

      <form method="post" className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 pb-5">
          <h3 className="font-semibold text-2xl text-primary-yellow-light text-center">
            Stay Connected
          </h3>

          <p className="text-center text-white/90 text-sm">
            To receive updates and know what&apos;s going on with Qlik Studios,
            kindly subscribe to our newsletter.
          </p>
        </div>

        <div className="relative">
          <FaEnvelope
            size={25}
            className="text-gray-500 absolute top-3 left-2"
          />
          <input
            type="email"
            name="subscribe"
            placeholder="your email address..."
            className="px-10 py-3 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
          />
        </div>

        <Button className="bg-primary-yellow-light/70 py-5 hover:bg-primary-yellow text-white text-center w-full">
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default Subscribe;
