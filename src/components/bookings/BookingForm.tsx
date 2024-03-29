"use client";

import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Link from "next/link";
import { submitBookForm } from "@/app/actions/FormAction";
import FormSubmitBtn from "./FormSubmitBtn";
import { BookFormType, bookFormSchema } from "@/lib/schema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { selectEventTypes } from "@/constants/bookings";

const BookingForm = () => {
  const {
    register,
    reset,
    formState: { errors, isSubmitting: pending },
    handleSubmit,
    watch,
  } = useForm<BookFormType>({
    resolver: zodResolver(bookFormSchema),
    mode: "all",
  });

  // get default time for the booking appointment field
  const defaultTimeAndDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, 16);

  const processBookSubmit: SubmitHandler<BookFormType> = async (data) => {
    const result = await submitBookForm(data);
    if (!result.success) {
      return Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again later!",
        icon: "error",
        timer: 4000,
        timerProgressBar: true,
      });
    }

    Swal.fire({
      title: "Thank you!",
      text: "Appointment booked successfully.",
      icon: "success",
      timer: 4000,
      timerProgressBar: true,
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(processBookSubmit)}
      className="flex flex-col gap-6"
    >
      {/* Full Name */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="fullname">Name</label>
        <div className="relative">
          <IoPerson size={20} className="text-gray-500 absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Full name"
            className="px-10 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            {...register("fullname")}
          />
        </div>
        {errors?.fullname?.message && (
          <p className="text-red-500 text-xs py-2">{errors.fullname.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="email">Email</label>
        <div className="relative">
          <FaEnvelope
            size={20}
            className="text-gray-500 absolute top-2 left-2"
          />
          <input
            type="email"
            placeholder="Your email address"
            className="px-10 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            {...register("email")}
          />
        </div>
        {errors?.email?.message && (
          <p className="text-red-500 text-xs py-2">{errors.email.message}</p>
        )}
      </div>

      {/* Services */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="serviceType">Services</label>
        <div className="relative">
          <select
            id="serviceType"
            className="px-4 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            {...register("serviceType")}
          >
            <option value="" selected>
              Select one of these
            </option>
            <option value="photography">Photography</option>
            <option value="videography">Videography</option>
            <option value="both">Both</option>
          </select>
        </div>
        {errors?.serviceType?.message && (
          <p className="text-red-500 text-xs py-2">
            {errors.serviceType.message}
          </p>
        )}
      </div>

      {/* Package Type | display if selected display is photography */}
      {watch("serviceType") === "photography" && (
        <div className="flex flex-col space-y-4 w-full">
          <label htmlFor="packageType">Pick a photography package</label>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="silver"
                value={"silver"}
                {...register("packageType")}
              />
              <label htmlFor="silver">Silver</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="gold"
                value={"gold"}
                {...register("packageType")}
              />
              <label htmlFor="gold">Gold</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="radio"
                id="platinum"
                value={"platinum"}
                {...register("packageType")}
              />
              <label htmlFor="platinum">Platinum</label>
            </div>
          </div>
          {errors?.packageType?.message && (
            <p className="text-red-500 text-xs py-2">
              {errors.packageType.message}
            </p>
          )}
        </div>
      )}

      {/* Event Type */}
      {watch("serviceType") && (
        <div className="flex flex-col space-y-4 w-full">
          <label htmlFor="eventType">Choose an event</label>
          <div className="relative">
            <select
              id="eventType"
              className="px-4 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
              {...register("eventType")}
            >
              <option value="">Pick one</option>
              {selectEventTypes.map((eventType, idx) => (
                <option value={eventType.toLowerCase()} key={idx}>
                  {eventType}
                </option>
              ))}
            </select>
          </div>
          {errors?.eventType?.message && (
            <p className="text-red-500 text-xs py-2">
              {errors.eventType.message}
            </p>
          )}
        </div>
      )}

      {/* Date */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="date">Preferred Date and Time</label>
        <div className="relative">
          <input
            type="datetime-local"
            className="px-5 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            {...register("date")}
            defaultValue={defaultTimeAndDate}
            min={defaultTimeAndDate}
          />
        </div>
        {errors?.date?.message && (
          <p className="text-red-500 text-xs py-2">{errors.date.message}</p>
        )}
      </div>

      {/* Message/Comment */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="specification">Additional Info</label>
        <div className="relative">
          <textarea
            placeholder="Anything you want to specify?"
            className="px-4 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            rows={8}
            {...register("specifications")}
          ></textarea>
        </div>
        {errors?.specifications?.message && (
          <p className="text-red-500 text-xs py-2">
            {errors.specifications.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <FormSubmitBtn pending={pending} reset={reset} />

      {/* See Contracts */}
      <h5 className="text-center text-sm pt-4">
        <Link className="text-primary-yellow-light underline" href="/contracts">
          Click here
        </Link>{" "}
        to see the terms and conditions of our services.
      </h5>
    </form>
  );
};

export default BookingForm;
