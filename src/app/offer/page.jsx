import React from "react";
import Image from "next/image";
import ProgressDots from "../components/auth/progressbar/ProgressDots";
import Link from "next/link";
const Page = () => {
  return (
    <div className="flex flex-col w-full justify-start items-center h-full font-lora relative">
      <div className="absolute bottom-[120px] left-[100px]">
        <Link href="/auth_info">
          <Image
            src="./images/auth/previous-arrow.svg"
            width={30}
            height={30}
            alt=""
          />
        </Link>
      </div>
      <ProgressDots index={4} />
      <h1 className="font-bold text-5xl">Choose An Offer !</h1>
      <div className=" w-[50%] gap-[80px] grid grid-cols-[1fr,1fr] items-center justify-center py-[40px] ">
        <div className=" shadow-custom gap-[20px] w-full rounded-[10px] h-full flex flex-col justify-start py-[40px] items-center bg-white border-light-blue border-[3px]">
          <p className="font-medium text-4xl">Free</p>
          <p className="font-medium text-4xl">
            0<span className="text-xl">DZA</span>
            <span className="text-[5B5B5] text-xl">/mo</span>
          </p>
          <div className=" pt-[30px] flex w-full px-[30px] gap-[15px]">
            <Image
              src="./images/auth/black-check.svg"
              width={25}
              height={25}
              alt=""
            />
            <p className="text-lg">Search Feature</p>
          </div>
        </div>
        <div className=" shadow-custom gap-[20px] w-full rounded-[10px] h-full flex flex-col justify-start py-[40px] items-center bg-light-blue border-light-blue border-[3px]">
          <p className="font-medium text-4xl">Premium</p>
          <p className="font-medium text-4xl">
            10 000<span className="text-xl">DZA</span>
            <span className="text-[#5B5B5] text-xl">/mo</span>
          </p>
          <div className="flex w-full px-[30px] gap-[15px]">
            <Image
              src="./images/auth/green-check.svg"
              width={25}
              height={25}
              alt=""
            />
            <p className="text-lg">1-month free trial</p>
          </div>
          <div className="flex w-full px-[30px] gap-[15px]">
            <Image
              src="./images/auth/green-check.svg"
              width={25}
              height={25}
              alt=""
            />
            <p className="text-lg">Chatbot assistance</p>
          </div>
          <div className="flex w-full px-[30px] gap-[15px]">
            <Image
              src="./images/auth/green-check.svg"
              width={25}
              height={25}
              alt=""
            />
            <p className="text-lg">
              Recoommendation system powered by high quality algorithms
            </p>
          </div>
        </div>
      </div>
      <p className="font-semibold pb-[10px]">
        For more information about the offers, check the{" "}
        <span className="text-green">Pricing</span> section
      </p>
      <div className="flex gap-[20px] items-center justify-center">
        <input type="radio" className="border-green" />
        <p className="font-semibold">
          I agree to{" "}
          <span className="text-green"> terms of use and conditions</span>
        </p>
      </div>
      <div className="flex justify-center items-center w-full py-[35px] gap-[6%]">
        <Link href="/auth_info">
          <Image
            src="./images/auth/card1.svg"
            width={100}
            height={130}
            alt=""
          />
        </Link>
        <Link href="/auth_info">
          <Image
            src="./images/auth/card2.svg"
            width={130}
            height={130}
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <p className="font-semibold">Powered By</p>
        <Image src="./images/auth/satim.svg" width={100} height={30} alt="" />
      </div>
    </div>
  );
};

export default Page;
