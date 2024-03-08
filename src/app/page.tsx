import Hero from "@/components/Home/Hero";
import MeetTheCEOs from "@/components/Home/MeetTheCEOs";
import OurMission from "@/components/Home/OurMission";
import SlideShow from "@/components/Home/SlideShow";
import Subscribe from "@/components/Home/Subscribe";

const HomePage = () => {
  return (
    <section className="pt-16 flex flex-col">
      <Hero />
      <OurMission />
      <MeetTheCEOs />
      <SlideShow />
      <Subscribe />
    </section>
  );
};

export default HomePage;
