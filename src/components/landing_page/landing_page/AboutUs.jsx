import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full h-[80vh] grid grid-cols-[45%,55%]">
      <div className="flex flex-col w-full justify-center items-start">
        <h1 className="leading-[120%] font-bold w-[100%] py-[3%] text-5xl">
          Global Trade, Simplified
        </h1>
        <p className="text-2xl py-[40px]">
          Welcome to , revolutionizing international trade in Algeria. Say
          goodbye to complexities and discover endless opportunities.
        </p>
        <p className="font-semibold text-xl">
          Learn more -<span className="text-light-blue"> Get Started</span>
        </p>
      </div>
      <div className="w-full h-full flex flex-col items-end justify-center">
        <Image
          alt=""
          src="./images/landing_page/hero-img.svg"
          width={660}
          height={660}
        />
      </div>
    </div>
  );
};

export default AboutUs;
