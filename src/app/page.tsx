import MeetTheCEOs from "@/components/home/MeetTheCEOs";
import OurMission from "@/components/home/OurMission";
import SlideShow from "@/components/home/SlideShow";
import Subscribe from "@/components/home/Subscribe";
import Hero from "@/components/shared/Hero";
import { HOMEPAGE_HERO } from "@/constants/home";

const HomePage = () => {
  return (
    <section className="pt-16 flex flex-col">
      <Hero
        HERO_DATA={HOMEPAGE_HERO}
        btnText="Get Started"
        idName="our-mission"
      />
      <OurMission />
      <MeetTheCEOs />
      <SlideShow />
      <Subscribe />
    </section>
  );
};

export default HomePage;
