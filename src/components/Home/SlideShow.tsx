"use client";

import { SLIDESHOW } from "@/constants/home";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const SlideShow = () => {
  return (
    <Carousel
      className="py-10 px-5 md:px-16 relative"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 })]}
    >
      <CarouselContent>
        {SLIDESHOW.map((slide, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 rounded-md shadow-md"
          >
            <Image
              src={slide}
              alt={`slideshow ${index + 1}`}
              width={500}
              height={500}
              quality={100}
              className="object-cover w-full h-full rounded-md"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-transparent hover:bg-transparent text-white/70 hover:text-white border-2 absolute top-1/2 left-5" />
      <CarouselNext className="bg-transparent hover:bg-transparent text-white/70 hover:text-white border-2 absolute top-1/2 right-5" />
    </Carousel>
  );
};

export default SlideShow;
