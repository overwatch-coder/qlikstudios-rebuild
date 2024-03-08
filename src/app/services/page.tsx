import ServicesPackages from "@/components/services/ServicesPackages";
import ServiceTypes from "@/components/services/ServicesTypes";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import Hero from "@/components/shared/Hero";
import { SERVICES_HERO } from "@/constants/services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services - Qlik Studios",
};

const ServicesPage = () => {
  return (
    <section className="pt-16 flex flex-col">
      <Hero
        HERO_DATA={SERVICES_HERO}
        btnText="view Servies"
        idName="service-types"
      />
      <ServiceTypes />
      <ServicesPackages />
      <WhyChooseUs />
    </section>
  );
};

export default ServicesPage;
