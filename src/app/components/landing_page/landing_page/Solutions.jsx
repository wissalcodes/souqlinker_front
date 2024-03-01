import React from "react";
import SolutionCard from "./SolutionCard";
import SolutionsSlider from "./SolutionsSlider";

const Solutions = () => {
  const clientsSolutions = [
    {
      icon: "./images/landing_page/boat.svg",
      description:
        "Facilitates the selection of suitable Incoterms (e.g., FOB or CFR) and automatically generates corresponding delivery instructions.",
    },
    {
      icon: "./images/landing_page/chat.svg",
      description:
        "Easily navigate importation laws in Algeria with our ChatBot. Access real-time, transparent legal guidance on international trade regulations, simplifying complex legal landscapes.",
    },
    {
      icon: "./images/landing_page/doc.svg",
      description:
        "Effortlessly generate sample documents like D10, purchase orders, proforma invoices, C25, and more, streamlining your importation process.",
    },
    {
      icon: "./images/landing_page/flame.svg",
      description:
        "Get instantly matched with the perfect suppliers as a client, thanks to our advanced algorithms customized to fit your unique business needs.",
    },
  ];
  const suppliersSolutions = [
    {
      icon: "./images/landing_page/market.svg",
      description:
        "Conquer the market by expanding your reach and connecting with potential clients and suppliers from all corners of the globe.",
    },
    {
      icon: "./images/landing_page/database.svg",
      description:
        "Easily upload product catalogs, specifications, and pricing details, ",
    },
    {
      icon: "./images/landing_page/proforma.svg",
      description:
        "Create proforma invoices according to mutually agreed terms.",
    },
    {
      icon: "./images/landing_page/flame.svg",
      description:
        "Get instantly matched with the perfect suppliers as a client, thanks to our advanced algorithms customized to fit your unique business needs.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">For Clients</h1>
      <div className="swiper-container">
        <div className="swiper-wrapper flex gap-[50px] ">
          <SolutionsSlider solutions={clientsSolutions} />
        </div>
        <div className="swiper-pagination"></div>
      </div>
      <h1 className="text-2xl font-bold mt-8 mb-4">For Suppliers</h1>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {suppliersSolutions.map((solution, index) => (
            <div key={index} className="swiper-slide">
              <SolutionCard solution={solution} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Solutions;
