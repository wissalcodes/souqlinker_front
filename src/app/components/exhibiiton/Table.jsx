"use client";
import React, { useState } from "react";

export default function Table({
  eventName,
  eventLocation,
  Date,
  Days,
  Description,
}) {
  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  return (
    <>
      <div className="flex  font-lora ml-12 mt-4 ">
        <div className="flex flex-col font-normal text-lg">
          <div
            className=" flex items-center justify-between w-full border-b pb-2 border-[#A7DDCB]"
          >
            <div className="flex flex-col">
              <h1 className="font-normal  text-lg ml-4">{eventName} </h1>
              <p className="font-normal text-lg ml-6">&bull;{eventLocation}</p>
            </div>
            <div className="flex flex-col items-center justify-center font-normal text-lg text-[#6A6868] ">
              <span>{Date}</span>
              <span> {Days}</span>
            </div>
          </div>

          {/* {showDescription && (
            <div className="font-normal text-base pr-6 mt-2 ml-6 text-[#545353] ">
              {Description}
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
