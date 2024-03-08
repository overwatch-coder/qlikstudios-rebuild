import { FOOTER_SOCIAL } from "@/constants/footer";
import React from "react";
import SocialMedia from "../shared/SocialMedia";

const FooterSocial = ({ classname }: { classname?: string }) => {
  return (
    <div className={`items-center gap-5 ${classname}`}>
      {FOOTER_SOCIAL.map((social, idx) => (
        <SocialMedia key={idx} social={social} />
      ))}
    </div>
  );
};

export default FooterSocial;
