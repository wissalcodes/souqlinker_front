import Image from "next/image";
import React from "react";
import { icons } from "@/app/components/assets/assets";
import Table from "./Table";
export default function ExibitionCard() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="relative mt-6 bg-[#FDFAFA] w-[90vw] h-[75vh] drop-shadow-2xl ">
          <h1 className="absolute top-4 left-8 font-lora font-semibold">
            Worldwide Exhibitions Dates
          </h1>
          <div className="flex gap-6">
            <Image
              alt="map"
              className="absolute right-10 top-4"
              src={icons.map}
              width={400}
              height={400}
            />

            <div className="flex overflow-y-auto h-[55vh] slider pr-8 absolute top-20 flex-col gap-y-3">
              <Table />
              <Table />
              <Table />
              <Table />
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
