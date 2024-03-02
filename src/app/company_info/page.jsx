"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProgressDots from "../components/auth/progressbar/ProgressDots";
import Link from "next/link";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CompanyInfo = () => {
  const countryOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const stateOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const defaultOption = countryOptions[0];

  const handleSelect = (selected) => {
    setSelectedOption(selected);
    console.log("Selected option:", selected);
  };

  return (
    <div className="flex flex-col w-full px-[5%] justify-start items-center h-full font-lora relative">
      <ProgressDots index={1} />
      <div className="w-full px-[20%] flex flex-col items-center justify-center">
        <h1 className="text-start w-full font-bold text-4xl pb-[40px]">
          Company’s Information
        </h1>
        <input
          placeholder="Industry Secctor"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />
        <input
          placeholder="Start Date Activity"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />
        <input
          placeholder="Business Phone Number"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />

        <input
          placeholder="Business E-mail"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />
        <input
          placeholder="Certifications"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />
        <input
          placeholder="Business License"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />
      </div>
      <div className="pb-[30px] pt-[15px] px-[20%] flex items-center justify-between w-full">
        <Link href="/type">
          <Image
            src="./images/auth/previous-arrow.svg"
            width={30}
            height={30}
            alt=""
          />
        </Link>

        <Link href="/company_info_next">
          <Image
            src="./images/auth/next-arrow.svg"
            width={40}
            height={30}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default CompanyInfo;
