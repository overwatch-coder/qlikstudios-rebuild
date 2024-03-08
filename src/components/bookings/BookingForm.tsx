"use client";

import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import { Button } from "../ui/button";
import Link from "next/link";

const BookingForm = () => {
  return (
    <form className="flex flex-col gap-4">
      {/* Full Name */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="fullname">Name</label>
        <div className="relative">
          <IoPerson size={20} className="text-gray-500 absolute top-2 left-2" />
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            className="px-10 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="email">Name</label>
        <div className="relative">
          <FaEnvelope
            size={20}
            className="text-gray-500 absolute top-2 left-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="px-10 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            required
          />
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="services">Services</label>
        <div className="relative">
          <select
            name="services"
            id="services"
            className="px-4 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            required
          >
            <option value="" selected disabled>
              Select one of these
            </option>
            <option value="photography">Photography</option>
            <option value="videography">Videography</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      {/* Events */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="event_type">Event Type</label>
        <div className="relative">
          <select
            name="event_type"
            id="event_type"
            className="px-4 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            required
          >
            <option value="" selected disabled>
              Select one of these
            </option>
            <option value="photography">Photography</option>
            <option value="videography">Videography</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      {/* Date */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="date">Preferred Date and Time</label>
        <div className="relative">
          <input
            type="datetime-local"
            name="date"
            className="px-5 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            required
          />
        </div>
      </div>

      {/* Message/Comment */}
      <div className="flex flex-col space-y-4 w-full">
        <label htmlFor="specification">Additional Info</label>
        <div className="relative">
          <textarea
            name="specification"
            placeholder="Anything you want to specify?"
            className="px-4 py-2 rounded text-black placeholder:text-sm w-full focus:border-0 ring-0 outline-none"
            required
            rows={8}
          ></textarea>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-5 w-full md:flex-row items-center md:justify-between">
        <Button className="bg-primary-yellow-light/70 py-5 hover:bg-primary-yellow text-white text-center w-full">
          Submit
        </Button>

        <Button
          type="reset"
          className="bg-red-600 py-5 hover:bg-red-700 text-white text-center w-full"
        >
          Reset
        </Button>
      </div>

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
