import React from "react";
import Image from "next/image";

const SolutionCard = ({ solution }) => {
  return (
    <div className="grid grid-rows-[30%,70%] items-center justify-center py-[20px] px-[20px] w-[300px] h-[400px] bg-dark-blue rounded-[10px]">
      <div className="h-full">
        <Image width={40} height={40} alt="icon" src={solution.img} />
      </div>
      <p className="text-white font-normal text-lg flex flex-col items-start justify-center">
        {solution.description}
      </p>
    </div>
  );
};

export default SolutionCard;
