import MeetTheCEOs from "@/components/homepage/MeetTheCEOs";
import OurMission from "@/components/homepage/OurMission";
import SlideShow from "@/components/homepage/SlideShow";
import Subscribe from "@/components/homepage/Subscribe";
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
