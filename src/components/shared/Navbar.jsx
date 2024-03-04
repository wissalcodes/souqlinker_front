"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { usePathname } from "next/navigation";

import Link from "next/link";

const Navbar = () => {
  const navbarItems = [
    {
      name: "HOME",
      link: "/home",
    },
    {
      name: "ABOUT US",
      link: "/about_us",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "EXHIBITIONS",
      link: "/exhibitions",
    },
    {
      name: "PRICING",
      link: "/pricing",
    },
  ];

  const pathname = usePathname();
  return (
    <div className="font-lora shadow-custom py-[14px] gap-[10px] grid grid-cols-[35%,40%,25%] mx-[2%] my-[20px] xl:px-[50px] items-center justify-center h-full">
      <div className="w-full flex flex-col justify-center">
        <Image
          alt="App logo"
          src={logo}
          sizes="100vw"
          style={{
            width: "30%",
            height: "auto",
          }}
        />
      </div>
      <div className="flex w-full items-center justify-end gap-[20px] px-[30px]">
        {pathname === "/" &&
          navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`text-darkish-blue  ${
                item.name === "HOME"
                  ? "border-b-light-blue border-b-[2px] font-bold "
                  : ""
              }`}>
              {item.name}
            </Link>
          ))}
      </div>
      <div className="flex items-end justify-end gap-[20px] ">
        {(pathname === "/" ||
          pathname === "/register" ||
          pathname === "/company_info" ||
          pathname === "/company_info_next" ||
          pathname === "/auth_info" ||
          pathname === "/offer") && (
          <Link href="/login" className="text-gdg-second-gray text-xl">
            <button
              className={`border-[#5C7394] ${
                pathname !== "/" ? "bg-light-blue text-white" : ""
              } text-light-blue font-semibold`}>
              Login
            </button>
          </Link>
        )}
        {pathname != "/register" &&
          pathname != "/company_info" &&
          pathname != "/company_info_next" &&
          pathname != "/auth_info" &&
          pathname != "/offer" && (
            <Link href="/register" className="text-gdg-second-gray text-xl">
              <button className="bg-[#5C7394]  text-white font-semibold">
                {" "}
                Register
              </button>
            </Link>
          )}
      </div>
    </div>
  );
};

export default Navbar;
