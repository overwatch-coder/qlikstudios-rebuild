import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Button } from "../ui/button";

const SubscribeForm = () => {
  return (
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
        <FaEnvelope size={25} className="text-gray-500 absolute top-3 left-2" />
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
  );
};

export default SubscribeForm;
