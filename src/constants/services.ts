import {
  HeroConstant,
  OurPackagesType,
  OurServiceType,
  WhyChooseUsType,
} from "@/types";

import hero1 from "@/assets/images/services-bg.jpg";
import hero2 from "@/assets/images/services-bg2.jpg";
import badge1 from "@/assets/images/badge-1.png";
import badge2 from "@/assets/images/badge-2.jpg";
import badge3 from "@/assets/images/badge-3.jpg";

export const SERVICES_HERO: HeroConstant[] = [
  {
    photo: hero1,
    title: "Visual Symphony Services",
    desc: "Immerse yourself in the Visual Symphony Services offered by Qlik Studios. We believe that visual content is the symphony that resonates with your audience",
  },
  {
    photo: hero2,
    title: "Strategic Imaging Solutions",
    desc: "Elevate your brand with our Strategic Imaging Solutions. At Qlik Studios, we understand that visual content is more than just images; it's a powerful storytelling tool.",
  },
];

export const SERVICES_TYPES: OurServiceType[] = [
  {
    name: "Photography",
    details: [
      "Portrait Photography",
      "Beauty Photography",
      "Wedding Photography",
      "Event Photography",
      "Product Photography",
      "Graduation Photography",
    ],
  },
  {
    name: "Videography",
    details: [
      "Wedding Videography",
      "Graduation Videography",
      "Events Videography",
      "Music Videos",
      "Advertisement Videography",
      "Content Creation eg. Youtube",
    ],
  },
  {
    name: "Video Editing",
    details: ["Commercials", "Youtube Intros & Outros", "Video Assemblying"],
  },
  {
    name: "Photo Editing & Retouching",
    details: ["Color Grading", "Retouching"],
  },
  {
    name: "Personalised Accessories",
    details: ["Photo Mugs", "Collage", "Shirts", "etc"],
  },
];

export const PACKAGES_TYPES: OurPackagesType[] = [
  {
    name: "Silver",
    details: [
      "Change up to 2 Outfits",
      "Get 4 Retouched Photos",
      "Get 6 Other Photos",
      "1 hour maximum for the shoot",
      "Photo Prints",
    ],
    price: 300,
  },
  {
    name: "Gold",
    details: [
      "Change up to 3 Outfits",
      "Get 8 Retouched Photos",
      "Get 10 Other Photos",
      "2 hours maximum for the shoot",
      "Photo Prints",
    ],
    price: 600,
  },
  {
    name: "Platinum",
    details: [
      "Change up to 4 Outfits",
      "Get 15 Retouched Photos",
      "Get 20 Other Photos",
      "A bedside frame",
      "4 hours maximum for the shoot",
      "Photo Prints",
    ],
    price: 900,
  },
];

export const WHY_CHOOSE_US: WhyChooseUsType[] = [
  {
    photo: badge3,
    title: "We are an Experienced and Skilled Team",
    desc: "We have about three years of working experience in photography and videography and are constantly upgrading our equipments and knowledge in order to develop more on our skills and ensure we are putting out the best for our customers.",
  },
  {
    photo: badge1,
    title: "We Deliver Quality",
    desc: "There are a lot of our colleagues out there who usually sacrifice quality in order to be the cheapest, but we are dedicated to offering top quality services at great prices.",
  },
  {
    photo: badge2,
    title: "We are Faster than Flash🥰",
    desc: "We deliver on time and we believe this is one of the reasons our clients keep coming back to us for their other projects. We work at a speed faster than the speed of light🥰😂.",
  },
];
