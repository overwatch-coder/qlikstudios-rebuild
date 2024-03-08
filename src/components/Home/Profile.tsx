import { Profile as ProfileType } from "@/types/home";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProfileProps = {
  profile: ProfileType;
};

const Profile = ({ profile }: ProfileProps) => {
  return (
    <article className="w-full md:w-[500px] md:h-[500px] flex flex-col py-5 items-center gap-6 shadow-md rounded-md bg-secondary-gray">
      <div className="grid grid-col-1 md:grid-cols-2 gap-5 place-items-center">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={500}
          height={500}
          quality={100}
          className="object-contain w-full md:h-[200px] rounded-xl"
        />

        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="text-primary-yellow-light font-semibold">
            {profile.name}
          </h3>
          <h4 className="text-white/80 font-medium">{profile.position}</h4>
          <p className="text-white/50 text-xs">{profile.career}</p>
          <p className="text-white/50 text-xs">{profile.hobby}</p>
        </div>
      </div>

      <div className="py-5 flex flex-col gap-2 text-center items-center p-5">
        <h4 className="text-primary-yellow-light text-sm font-medium">
          {profile.excerpt}
        </h4>

        <p className="leading-loose text-white text-sm">{profile.desc}</p>

        <div className="flex items-center gap-5 mx-auto pt-4">
          {profile.social.map((social, idx) => (
            <Link href={social.url} target="_blank" key={idx}>
              <social.icon
                size={27}
                className="hover:opacity-50"
                color={social.color}
              />
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Profile;
