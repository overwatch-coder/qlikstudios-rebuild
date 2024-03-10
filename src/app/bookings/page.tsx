import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import booking_bg_image from "@/assets/images/bookings-bg.jpg";
import book_us_image from "@/assets/images/book-us.svg";
import fill_in_form from "@/assets/images/fill-in-form.png";
import { Metadata } from "next";
import { FaCircleArrowDown } from "react-icons/fa6";
import Link from "next/link";
import BookingForm from "@/components/bookings/BookingForm";

export const metadata: Metadata = {
  title: "Schedule an Appointment - Qlik Studios",
};

const BookingsPage = () => {
  return (
    <section className="pt-16 flex flex-col pb-10">
      <Carousel className="relative" opts={{ loop: false }}>
        <CarouselContent>
          <CarouselItem>
            <div className="absolute w-screen h-full md:h-[100vh] -z-10 bg-black/70" />
            <Image
              src={booking_bg_image}
              alt={"booking hero image"}
              className="absolute w-screen h-full md:h-[100vh] object-cover -z-20"
              width={600}
              height={600}
              quality={100}
            />

            <div className="flex flex-col items-center py-32 space-y-10 text-center px-5">
              <h1 className="text-2xl md:text-4xl font-semibold text-primary-yellow-light">
                {"Schedule an Appointment"}
              </h1>

              <p className="text-white font-medium text-sm italic max-w-2xl leading-relaxed">
                Interested in making your dream wedding, birthday or graduation
                a reality, <br /> Book An Appointment With Us.
              </p>

              <Link
                href="#booking-form"
                className="flex flex-col pt-10 gap-5 animate-bounce"
              >
                <span className="text-sm text-white/70 font-light">
                  Scroll down
                </span>
                <FaCircleArrowDown
                  size={40}
                  className="text-white/70 text-center mx-auto hover:text-white"
                />
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <article
        id="booking-form"
        className="px-5 md:px-16 py-16 bg-secondary-gray"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 place-items-center">
          <Image
            src={book_us_image}
            alt={"bookings form backgroud image"}
            className="w-full h-full object-contain"
            width={600}
            height={600}
            quality={100}
            data-aos="fade-up"
          />

          <section data-aos="fade-up" className="flex flex-col gap-5 w-full">
            <h3 className="flex items-center justify-center mx-auto text-center gap-5">
              <Image
                src={fill_in_form}
                alt={"form icon"}
                className="object-contain"
                width={40}
                height={40}
                quality={100}
              />
              <span className="text-primary-yellow capitalize text-2xl font-semibold tracking-wide">
                Book An Appointment
              </span>
            </h3>

            <BookingForm />
          </section>
        </div>
      </article>
    </section>
  );
};

export default BookingsPage;
