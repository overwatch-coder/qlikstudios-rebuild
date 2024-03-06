import { StaticImageData } from "next/image";

export type HeroConstant = {
    title: string;
    desc: string;
    image: StaticImageData
}

export type Profile = {
    photo: StaticImageData,
    name: string;
    position: string;
    career: string;
    hobby: string;
    except: string;
    desc: string;
    social: SocialMenu[]
}

export type SocialMenu = {
    icon: Icon;
    url: string;
    color: string;
}