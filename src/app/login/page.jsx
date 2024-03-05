import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center h-[90vh] font-lora ">
      <div className="shadow-custom w-[60%] h-[82%] items-center justify-center rounded-[10px] flex flex-col ">
        <h1 className="font-bold text-5xl">Welcome back To</h1>
        <Image
          alt="logo"
          className="py-[20px]"
          src="./images/logo.svg"
          width={200}
          height={30}
        />
        <input
          placeholder="E-mail"
          type="text"
          className="border-light-blue border-[1px] rounded-[5px] w-[60%] py-[10px] px-[20px] mb-[30px]"
        />
        <input
          placeholder="Password"
          type="password"
          className="border-light-blue border-[1px] rounded-[5px] w-[60%] py-[10px] px-[20px] mb-[30px]"
        />
        <button className="bg-light-blue w-[60%] text-white lg:py-[7px] xl:py-[10px]">
          SIGN IN
        </button>
        <p className="text-lg py-[40px] font-semibold">
          Forgot your password?{" "}
          <span className="text-green">recover it now!</span>
        </p>
      </div>
    </div>
  );
};

export default page;
