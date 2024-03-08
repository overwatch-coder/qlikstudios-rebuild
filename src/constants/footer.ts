import { SocialMenu } from "@/types";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const FOOTER_SOCIAL: SocialMenu[] = [
    { url: 'https://www.facebook.com/Qlik-Studios-101743652266333', icon: FaFacebook, color: "#1877f2" },
    { url: 'https://www.instagram.com/qlikstudios', icon: FaInstagram, color: "#bc2a8d" },
    { url: 'https://www.linkedin.com/company/qlik-studios', icon: FaLinkedin, color: "#0077B5" },
    { url: 'https://api.whatsapp.com/send?phone=212606457519', icon: FaWhatsapp, color: "#25d366" },
]