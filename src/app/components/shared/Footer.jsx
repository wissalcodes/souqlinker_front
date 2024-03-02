"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div
      className={`border-t-[1px] relative font-lora px-[5%]  w-full ${
        pathname === "/"
          ? "h-[30vh] py-[40px]"
          : "h-[12vh] items-center justify-center"
      } grid grid-cols-2`}>
      <div className="w-full justify-start bg-green-500 flex flex-col gap-[20px]">
        <p className="text-xl font-semibold">© 2024 All rights are reserved</p>
        {pathname === "/" && (
          <div className="flex gap-[30px] items-center">
            <Image
              alt="icon"
              src="./images/landing_page/linkedin.svg"
              width={40}
              height={40}
            />
            <Image
              alt="icon"
              src="./images/landing_page/fb.svg"
              width={40}
              height={40}
            />
            <Image
              alt="icon"
              src="./images/landing_page/ig.svg"
              width={40}
              height={40}
            />
            <Image
              alt="icon"
              src="./images/landing_page/yt.svg"
              width={40}
              height={40}
            />
          </div>
        )}
      </div>
      {pathname === "/" && (
        <div className="w-full h-full grid grid-cols-3 text-xl">
          <div className="flex flex-col items-start justify-start">
            <p className="font-semibold">Plans</p>
            <p className="font-normal">Free Plan</p>
            <p className="font-normal">Premium Plan</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="font-semibold">Company</p>
            <p className="font-normal">Blog</p>
            <p className="font-normal">About us</p>
            <p className="font-normal">Contacts</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="font-semibold">Legal</p>
            <p className="font-normal">Privacy Policy</p>
            <p className="font-normal">Cookies Policy</p>
            <p className="font-normal">Terms of use</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
