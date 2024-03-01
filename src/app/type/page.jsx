import React from "react";
import Image from "next/image";
import ProgressDots from "../components/auth/progressbar/ProgressDots";
import Link from "next/link";
const Page = () => {
  return (
    <div className="flex flex-col w-full justify-start items-center h-full font-lora relative pb-[10%]">
      <div className="absolute bottom-[120px] right-[100px]">
        <Link href="/company_info">
          <Image
            src="./images/auth/next-arrow.svg"
            width={40}
            height={30}
            alt=""
          />
        </Link>
      </div>
      <ProgressDots index={0} />
      <h1 className="font-bold text-5xl">Are You a</h1>
      <div className=" w-[60%] grid grid-cols-[3fr,1fr,3fr] items-center justify-center py-[70px]">
        <div className="shadow-custom gap-[20px] w-full rounded-[10px] h-[200px] flex flex-col justify-center items-center bg-white border-light-blue border-[3px]">
          <Image
            src="./images/auth/moneybag.svg"
            width={40}
            height={40}
            alt=""
          />
          <p className="font-medium text-3xl">Client</p>
        </div>
        <p className="text-center text-light-blue text-3xl">or</p>
        <div className="bg-light-blue shadow-custom gap-[20px] w-full rounded-[10px] h-[200px] flex flex-col justify-center items-center  border-light-blue border-[3px]">
          <Image src="./images/auth/box.svg" width={40} height={40} alt="" />
          <p className="font-medium text-3xl text-black">Supplier</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
