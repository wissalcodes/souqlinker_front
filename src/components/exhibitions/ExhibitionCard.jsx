"use client";
import React from "react";
import Table from "./Table";
import "leaflet/dist/leaflet.css";
import Map from "./map";

export default function ExhibitionCard() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="relative mt-6 bg-[#FDFAFA] w-[90vw] h-[75vh] drop-shadow-2xl ">
          <h1 className="absolute top-4 left-8 font-lora font-semibold">
            Worldwide Exhibitions Dates
          </h1>
          <div className="flex gap-6">
            <Map />
            <div className=" overflow-y-auto w-[55vw] h-[55vh] slider pr-8 absolute top-20 flex-col ">
              <Table
                eventName={"Canton Fair (China Import and Export Fair)"}
                eventLocation={" Guangzhou, China"}
                Date={" 01.03.2024 - 03.03.2024"}
                Days={"Friday - Sunday"}
                Description={
                  "The Canton Fair, also known as the China Import and Export Fair, is one of the largest trade fairs in the world. It showcases a wide range of products from various industries, including electronics, textiles, machinery, and household goods."
                }
              />
              <Table
                eventName={"GITEX Technology Week"}
                eventLocation={"Dubai World Trade Centre, Dubai, UAE"}
                Date={"06.10.2024 - 10.10.2024"}
                Days={"Sunday - Thursday"}
                Description={
                  "GITEX Technology Week is the largest technology event in the Middle East, showcasing the latest innovations in sectors like artificial intelligence, robotics, cloud computing, and cybersecurity."
                }
              />
              <Table
                eventName={"Sands Expo and Convention Centre, Singapore"}
                eventLocation={"Sands Expo and Convention Centre, Singapore"}
                Date={"16.10.2024 - 18.10.2024"}
                Days={"Tuesday - Thursday"}
                Description={
                  "This event is a leading trade show venue in Singapore, hosting a variety of exhibitions, conferences, and corporate events across multiple industries."
                }
              />
              <Table
                eventName={"International CES (Consumer Electronics Show)"}
                eventLocation={" Las Vegas Convention Center, Las Vegas, USA"}
                Date={"07.03.2024 - 10.03.2024"}
                Days={"Tuesday - Friday"}
                Description={
                  "CES is the world's largest consumer electronics trade show, featuring the latest innovations and trends in consumer technology, including smartphones, smart home devices, and wearables."
                }
              />
              <Table
                eventName={"NRF Retail's Big Show"}
                eventLocation={
                  "Jacob K. Javits Convention Center, New York City, USA"
                }
                Date={"12.10.2024 - 14.10.2024"}
                Days={"Sunday - Tuesday"}
                Description={
                  "NRF Retail's Big Show is the world's largest retail conference and expo, attracting retail industry professionals, thought leaders, and solution providers to explore the latest trends and technologies shaping the future of retail"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
