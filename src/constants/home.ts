// Images
import hero1 from "@/assets/images/hero1.jpg";
import hero2 from "@/assets/images/hero4.jpg";
import profile1 from "@/assets/images/danny10.jpg"
import profile2 from "@/assets/images/gabby10.jpg"
import slideshow1 from "@/assets/portfolio/slideshow1.jpg"
import slideshow2 from "@/assets/portfolio/slideshow2.jpg"
import slideshow3 from "@/assets/portfolio/slideshow3.jpg"
import slideshow4 from "@/assets/portfolio/slideshow4.jpg"
import slideshow5 from "@/assets/portfolio/slideshow5.jpg"
import slideshow6 from "@/assets/portfolio/slideshow6.jpg"

// Icons
import { FaFacebook, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

// Types
import { HeroConstant, Profile } from "@/types/home";


// export constants
export const HERO_ITEMS: HeroConstant[] = [
    {
        title: 'Welcome to Qlik Studio',
        desc: 'Relive your moments with Qlik Studios',
        photo: hero1
    },
    {
        title: 'A place for your perfect and dream pictures',
        desc: 'Timeless visual contents you will treasure for a lifetime',
        photo: hero2
    }
]

export const PROFILE: Profile[] = [
    {
        photo: profile1,
        name: 'D Rwoy',
        position: "Co-Founder",
        career: "Nurse Anaesthetist/Artist",
        hobby: "Photographer/ Retoucher",
        except: "Hi! I am D Rwoy",
        desc: "I’m an Artist, Photographer and coffee addict living in Morocco. I love to create beautiful images to uplift, encourage and inspire others. I am fun to be with when i am before the camera and will capture timeless photographs that you will treasure for a lifetime.",
        social: [
            { url: 'https://www.facebook.com/daniel.fiakpo/', icon: FaFacebook, color: "#1877f2" },
            { url: 'https://www.instagram.com/officialdannymusique/', icon: FaInstagram, color: " #bc2a8d" },
            { url: 'https://www.youtube.com/Dannymusique', icon: FaYoutube, color: "#ff0000" },
            { url: 'https://api.whatsapp.com/send?phone=212606457519', icon: FaWhatsapp, color: "#25d366" },
        ]
    },
    {
        photo: profile2,
        name: 'Gabriel',
        position: "Co-Founder",
        career: "Medical Student/Youtuber",
        hobby: "Videographer/Video Editor",
        except: "Hi! I am Gabriel also known as WWADD",
        desc: "I’m a professional videographer and youtuber in Morocco. I enjoy creating visual contents that resonates well with target audience. I love to tell  stories in a way that makes you relive those moments through vidoes and it's always an honor for me to be an integral part of my customer's success story.",
        social: [
            { url: 'https://www.facebook.com/edudzi14?_rdc=1&_rdr', icon: FaFacebook, color: "#1877f2" },
            { url: 'https://www.instagram.com/edudzi14/', icon: FaInstagram, color: " #bc2a8d" },
            { url: 'https://www.youtube.com/channel/UCe7I6j-eJjM3m1zs-BiwnYA', icon: FaYoutube, color: "#ff0000" },
            { url: 'https://api.whatsapp.com/send?phone=212609978892', icon: FaWhatsapp, color: "#25d366" },
        ]
    },
];

export const SLIDESHOW = [slideshow1, slideshow2, slideshow3, slideshow4, slideshow5, slideshow6];