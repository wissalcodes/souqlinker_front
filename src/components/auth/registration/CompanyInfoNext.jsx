"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CompanyInfoNext = ({ onPrevious, onNext }) => {
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
    <div className="flex flex-col w-full px-[5%] justify-start items-center h-[90vh] font-lora relative">
      <div className="w-full px-[20%] flex flex-col items-center justify-center">
        <h1 className="text-start w-full font-bold text-4xl pb-[40px]">
          Company’s Information
        </h1>
        <input
          placeholder="Company Name"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />
        <input
          placeholder="Type of Company (SARL, EURL ... )"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />
        <input
          placeholder="Commercial Register Number"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />
        <div className="w-full grid grid-cols-[4fr,1fr,1fr] gap-[14px]">
          <input
            placeholder="E-mail"
            type="text"
            className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
          />
          <div className="w-full">
            <Dropdown
              options={countryOptions}
              onChange={handleSelect}
              value={defaultOption}
              placeholder="Country"
            />
          </div>
          <div className="w-full">
            <Dropdown
              options={stateOptions}
              onChange={handleSelect}
              value={defaultOption}
              placeholder="State"
            />
          </div>
        </div>
        <input
          placeholder="CA"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-full py-[10px] px-[20px] mb-[30px]"
        />
      </div>
      <div className="pb-[30px] pt-[15px] px-[20%] flex items-center justify-between w-full">
        <Image
          src="./images/auth/previous-arrow.svg"
          width={30}
          height={30}
          alt=""
          onClick={onPrevious}
        />
        <Image
          src="./images/auth/next-arrow.svg"
          width={40}
          height={30}
          alt=""
          onClick={onNext}
        />
      </div>
    </div>
  );
};

export default CompanyInfoNext;
