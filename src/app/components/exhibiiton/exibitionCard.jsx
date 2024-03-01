import Image from "next/image";
import React from "react";
import { icons } from "../assets/assets";
export default function ExibitionCard() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" mt-6 bg-[#FDFAFA] w-[90vw] h-[75vh] drop-shadow-lg ">
          <h1 className="font-lora font-semibold">
            Worldwide Exhibitions Dates
          </h1>
          <div>
            <Image
            alt="map"
              src={icons.map}
              width={40}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
}
