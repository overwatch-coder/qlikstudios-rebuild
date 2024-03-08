import { PROFILE } from "@/constants/home";
import React from "react";
import Profile from "./Profile";

const MeetTheCEOs = () => {
  return (
    <section className="py-20 px-5 md:px-16 flex flex-col space-y-6">
      <div className="flex flex-col items-center text-center gap-3">
        <h2 className="text-primary-yellow text-3xl md:text-4xl font-bold tracking-wide">
          Meet The CEOs
        </h2>
        <h4 className="text-gray-500 font-medium">
          Ever wondered who makes Qlik Studios possible?
        </h4>
        <p className="text-gray-500 text-sm font-medium pt-3 capitalize">
          Let&apos;s meet the bosses
        </p>
      </div>

      <div className="flex flex-col gap-7 md:flex-row md:justify-center md:gap-10 items-center py-5">
        {PROFILE.map((item) => (
          <Profile profile={item} key={item.name} />
        ))}
      </div>
    </section>
  );
};

export default MeetTheCEOs;
