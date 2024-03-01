import React from "react";

export default function Table({ eventName, eventLocation, Date }) {
  return (
    <>
      <div className="flex  font-lora ml-12 mt-4 gap-x-4 ">
        <div className="font-normal text-lg">
          <div className="flex items-center justify-center gap-x-[15vw] border-b pb-2 border-[#A7DDCB]">
            <div className="flex flex-col">
              <h1 className="font-normal text-lg ml-4">
                Canton Fair (China Import and Export Fair)
              </h1>
              <p className="font-normal text-lg ml-6">
                &bull; Guangzhou, China
              </p>
            </div>
            <span className="font-normal text-lg text-[#6A6868]">
              21/03/2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
