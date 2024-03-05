"use client";
import React from "react";
import SolutionCard from "./SolutionCard";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
const Solutions = () => {
  const clientsSolutions = [
    {
      icon: "./images/landing_page/solutions/boat.svg",
      description:
        "Facilitates the selection of suitable Incoterms (e.g., FOB or CFR) and automatically generates corresponding delivery instructions.",
    },

    {
      icon: "./images/landing_page/solutions/chat.svg",
      description:
        "Easily navigate importation laws in Algeria with our ChatBot. Access real-time, transparent legal guidance on international trade regulations, simplifying complex legal landscapes.",
    },
    {
      icon: "./images/landing_page/solutions/doc.svg",
      description:
        "Effortlessly generate sample documents like D10, purchase orders, proforma invoices, C25, and more, streamlining your importation process.",
    },
    {
      icon: "./images/landing_page/solutions/flame.svg",
      description:
        "Get instantly matched with the perfect suppliers as a client, thanks to our advanced algorithms customized to fit your unique business needs.",
    },
    {
      icon: "./images/landing_page/solutions/boat.svg",
      description:
        "    Get instantly matched with the perfect suppliers as a client, thanks to our advanced algorithms customized to fit your unique business needs.",
    },
  ];

  const suppliersSolutions = [
    {
      icon: "./images/landing_page/solutions/market.svg",
      description:
        "Conquer the market by expanding your reach and connecting with potential clients and suppliers from all corners of the globe.",
    },
    {
      icon: "./images/landing_page/solutions/database.svg",
      description:
        "Easily upload product catalogs, specifications, and pricing details, ",
    },
    {
      icon: "./images/landing_page/solutions/proforma.svg",
      description:
        "Create proforma invoices according to mutually agreed terms.",
    },
    {
      icon: "./images/landing_page/solutions/flame.svg",
      description:
        "Get instantly matched with the perfect suppliers as a client, thanks to our advanced algorithms customized to fit your unique business needs.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center my-[2%]">
      <h1 className="font-bold gradient-text">Our Solutions</h1>
      <p className="text-sm lg:text-xl xl:text-2xl text-center px-[2%] leading-[40px]">
        Explore our innovative solutions designed to empower businesses and
        suppliers in every step of the international trade process in Algeria.
        Our suite of tools is tailored to optimize your trade operations and
        drive success.
      </p>
      <div className="flex items-start w-full py-[50px] ">
        <h1 className="border-b-[3px] text-3xl text-start font-bold border-dark-blue">
          For Clients
        </h1>
      </div>
      <div className="w-full">
        <Swiper
          // configure how many cards to show and the spacing between the cards
          breakpoints={{
            280: {
              slidesPerView: 1.5,
              spaceBetween: 35,
            },
            390: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            420: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            700: {
              slidesPerView: 3.5,
              spaceBetween: 35,
            },
          }}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full">
          {clientsSolutions.map((solution, index) => (
            <SwiperSlide key={index}>
              <SolutionCard solution={solution} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-start w-full py-[50px] ">
        <h1 className="pb-[3px] border-b-[3px] text-3xl text-start font-bold border-dark-blue">
          For Suppliers
        </h1>
      </div>
      <div className="w-full">
        <Swiper
          // configure how many cards to show and the spacing between the cards
          breakpoints={{
            280: {
              slidesPerView: 1.5,
              spaceBetween: 35,
            },
            390: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            420: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            700: {
              slidesPerView: 3.5,
              spaceBetween: 35,
            },
          }}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full">
          {suppliersSolutions.map((solution, index) => (
            <SwiperSlide key={index}>
              <SolutionCard solution={solution} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Solutions;
