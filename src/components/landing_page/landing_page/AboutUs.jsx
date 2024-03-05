import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full h-[80vh] grid grid-cols-[45%,55%]">
      <div className="flex flex-col w-full justify-center items-start">
        <h1 className="leading-[120%] font-bold w-[100%] py-[3%] text-lg lg:text-3xl xl:text-5xl">
          Global Trade, Simplified
        </h1>
        <div className="py-[40px] text-md lg:text-lg xl:text-2xl ">
          <p>
            Welcome to
            <Image
              className="py-[10px]"
              src="./images/logo.svg"
              width={200}
              height={100}
              alt="SouQLinker logo"
            />
          </p>
          <p>
            revolutionizing international trade in Algeria. Say goodbye to
            complexities and discover endless opportunities.
          </p>
        </div>
        <p className="font-semibold text-md lg:text-md xl:text-lg">
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
