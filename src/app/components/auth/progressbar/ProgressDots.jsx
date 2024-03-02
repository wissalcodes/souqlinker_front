import React from "react";
import Image from "next/image";
const ProgressDots = ({ index }) => {
  return (
    <div className="flex items-center justify-center w-[40%] relative h-[15vh]">
      {/* Dot 1 */}
      <div
        className={`w-6 h-6 rounded-full  border-2 border-green ${
          index === 0 ? "bg-green" : "bg-white"
        }`}></div>
      <Image
        alt=""
        className="px-[3px]"
        src="./images/auth/line.svg"
        width={30}
        height={30}
      />
      {/* Dot 2 */}
      <div
        className={`w-6 h-6 rounded-full  border-2 border-green ${
          index === 1 ? "bg-green" : "bg-white"
        }`}></div>
      <Image
        className="px-[3px]"
        alt=""
        src="./images/auth/line.svg"
        width={30}
        height={30}
      />
      {/* Dot 3 */}
      <div
        className={`w-6 h-6 rounded-full  border-2 border-green ${
          index === 2 ? "bg-green" : "bg-white"
        }`}></div>
      <Image
        className="px-[3px]"
        alt=""
        src="./images/auth/line.svg"
        width={30}
        height={30}
      />
      {/* Dot 4 */}
      <div
        className={`w-6 h-6 rounded-full border-2 border-green ${
          index === 3 ? "bg-green" : "bg-white"
        }`}></div>
      <Image
        className="px-[3px]"
        alt=""
        src="./images/auth/line.svg"
        width={30}
        height={30}
      />
      {/* Dot 5 */}
      <div
        className={`w-6 h-6 rounded-full border-2 border-green ${
          index === 4 ? "bg-green" : " bg-white"
        }`}></div>
    </div>
  );
};

export default ProgressDots;
