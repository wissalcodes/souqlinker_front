import React from "react";
import Image from "next/image";
const SolutionCard = ({ solution }) => {
  return (
    <div className="grid grid-rows-[40%,60%] items-center justify-center lg:px-[20px] xl:px-[30px] w-[300px] h-[350px] bg-turquoise rounded-[10px]">
      <div className="h-full w-full flex flex-col justify-center items-center ">
        <Image width={40} height={40} alt="icon" src={solution.icon} />
      </div>
      <div className="h-full w-full flex flex-col items-start justify-start">
        <p className="text-white font-normal text-sm lg:text-md xl:text-lg ">
          {solution.description}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
