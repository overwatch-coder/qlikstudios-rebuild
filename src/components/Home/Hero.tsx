"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { HERO_ITEMS } from "@/constants/home";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <Carousel
      className="relative"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 8000 })]}
    >
      <CarouselContent>
        {HERO_ITEMS.map(({ photo, desc, title }, index) => (
          <CarouselItem key={index}>
            <div className="absolute w-screen h-full md:h-[80vh] -z-10 bg-black/70" />
            <Image
              src={photo}
              alt={title}
              className="absolute w-screen h-full md:h-[80vh] object-cover -z-20"
              width={600}
              height={600}
              quality={100}
            />

            <div className="flex flex-col items-center py-32 space-y-10 text-center">
              <h1 className="text-2xl md:text-4xl font-semibold text-primary-yellow">
                {title}
              </h1>

              <p className="text-white font-medium text-sm md:text-base italic">
                {desc}
              </p>

              <Button
                asChild
                className="bg-primary-yellow hover:bg-primary-yellow hover:scale-105 transition-all text-white rounded-full font-semibold text-center"
              >
                <Link className="px-6 py-5" href="#our-mission">
                  Get Started
                </Link>
              </Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-transparent hover:bg-transparent text-white/70 hover:text-white border-0 absolute top-1/2 left-5" />
      <CarouselNext className="bg-transparent hover:bg-transparent text-white/70 hover:text-white border-0 absolute top-1/2 right-5" />
    </Carousel>
  );
};

export default Hero;
