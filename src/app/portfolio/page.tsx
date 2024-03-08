import OurPortfolio from "@/components/portfolio/OurPortfolio";
import Hero from "@/components/shared/Hero";
import { PORTFOLIO_HERO } from "@/constants/portfolio";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio - Qlik Studios",
};

const PortfolioPage = () => {
  return (
    <section className="pt-16 flex flex-col">
      <Hero
        HERO_DATA={PORTFOLIO_HERO}
        btnText="See Our Works"
        idName="our-works"
      />
      <OurPortfolio />
    </section>
  );
};

export default PortfolioPage;
