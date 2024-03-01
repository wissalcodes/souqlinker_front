import React from "react";
import img from "../../../../public/images/landing_page/hero-img.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[45%,55%]">
      <div className="flex flex-col w-full justify-center items-start">
        <p className="font-semibold">
          Learn more -<span className="text-light-blue"> Get Started</span>
        </p>
        <h1 className="font-bold w-[70%] py-[3%] text-5xl">
          Global Trade, Simplified
        </h1>
        <p className="text-2xl">
          our premier web platform revolutionizing international trade in
          Algeria. Designed to seamlessly connect companies, suppliers, and
          transportation partners. streamlines sourcing, fosters networking, and
          facilitates partnership-building like never before.
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-end justify-center">
        <Image
          src="./images/landing_page/hero-img.svg"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default AboutUs;
