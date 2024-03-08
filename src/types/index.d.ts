import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

export interface NavMenuItem {
  name: string;
  path: string;
  submenu?: SubMenuItem[];
}

export interface SubMenuItem {
  name: string;
  path: string;
}

export interface HeroConstant {
  title: string;
  desc: string;
  photo: StaticImageData;
}

export interface Profile {
  photo: StaticImageData;
  name: string;
  position: string;
  career: string;
  hobby: string;
  excerpt: string;
  desc: string;
  social: SocialMenu[];
}

export interface SocialMenu {
  icon: IconType;
  url: string;
  color: string;
}

export interface OurServiceType {
  name: string;
  details: string[];
}

export interface OurPackagesType {
  name: string;
  details: string[];
  price: number;
}

export interface WhyChooseUsType extends HeroConstant {}

export interface ContractType {
  title: string;
  url: string;
}
