"use client";
import React, { useRef, useState } from "react";
import styles from "../../contact/contact.module.css";
import emailjs from "@emailjs/browser";

interface ServiceType {
  mode: "carRental" | "cabService" | "bikeRental" | undefined;
  carData: {
    id: number;
    cardImage: string;
    vehicleName: string;
    pricePerDay: number;
    distanceTravelled: number;
    gearShiftType: string;
    personCapacity: number;
    fuelType: string;
    bookNowLink: string;
    baggageCapacity: number;
  };
}
const Form = ({ mode, carData }: ServiceType) => {
  const contactFormRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit() {
    // there is no directive here
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!.toString(),
        process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID!.toString(),
        contactFormRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC!.toString()
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          setError(error.text);
          console.log(error);
        }
      );
    setIsLoading(false);
  }

  return (
    <form
      action={handleSubmit}
      ref={contactFormRef}
      className="flex flex-col gap-5"
    >
      <input
        className=" w-full  bg-bgSoft text-text outline-2 border-0 focus:outline dark:focus:outline-white p-5 rounded-md"
        type="text"
        placeholder="Name and Surname"
        name="username"
        required
      />
      <input
        className=" w-full  bg-bgSoft text-text outline-2 border-0 focus:outline dark:focus:outline-white p-5 rounded-md"
        type="email"
        placeholder="Email Address"
        name="email"
        required
      />
      <input
        className=" w-full  bg-bgSoft text-text outline-2 border-0 focus:outline dark:focus:outline-white p-5 rounded-md"
        type="tel"
        placeholder="Phone Number"
        name="phoneNumber"
        required
      />
      <textarea
        className=" w-full  bg-bgSoft text-text outline-2 border-0 focus:outline dark:focus:outline-white p-5 rounded-md"
        name="message"
        id=""
        cols={30}
        rows={1}
        placeholder="Message"
        required
      ></textarea>
        <input
          type="hidden"
          name="mode"
          className={` bg-gray-800 w-[100px] pl-4 py-2 rounded-full `}
          value={mode}
        />
      {!mode &&
        <div className="text-red-500">
          Error: Only carRental,cabService and bikeRental allowed
        </div>
      }
      {error && <p className="text-xs text-red-500">{error}</p>}
      <input type="hidden" name="vehicleId" value={carData.id} />
      <button
        disabled={isLoading || !mode}
        className="p-5 bg-button text-text font-bold rounded-md disabled:bg-slate-500 disabled:cursor-not-allowed disabled:animate-pulse"
      >
        {isLoading ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
};

export default Form;
