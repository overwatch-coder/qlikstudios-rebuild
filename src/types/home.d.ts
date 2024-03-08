import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

export type HeroConstant = {
    title: string;
    desc: string;
    photo: StaticImageData
}

export type Profile = {
    photo: StaticImageData,
    name: string;
    position: string;
    career: string;
    hobby: string;
    excerpt: string;
    desc: string;
    social: SocialMenu[]
}

export type SocialMenu = {
    icon: IconType;
    url: string;
    color: string;
}