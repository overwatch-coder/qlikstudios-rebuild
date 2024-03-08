import { SocialMenu } from "@/types/home";
import Link from "next/link";
import React from "react";

const SocialMedia = ({ social }: { social: SocialMenu }) => {
  return (
    <Link href={social.url} target="_blank">
      <social.icon
        size={27}
        className="hover:opacity-50"
        color={social.color}
      />
    </Link>
  );
};

export default SocialMedia;
