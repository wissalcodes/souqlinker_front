import logo from "../../../../public/images/logo.svg";
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

  return (
    <div className="shadow-custom py-[14px] grid grid-cols-[30%,50%,20%] mx-[40px] my-[20px] xl:px-[50px] items-center justify-center h-full">
      <div className="w-full">{/* <img src={logo} /> */}</div>
      <div className="flex w-full items-center justify-end gap-[20px] px-[30px]">
        {navbarItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`text-darkish-blue  ${
              item.name === "HOME"
                ? "border-b-light-blue border-b-[2px] font-bold"
                : ""
            }`}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-end justify-center gap-[20px] ">
        <button className="border-[#5C7394] text-light-blue">Login</button>
        <button className="bg-[#5C7394] text-white">Register</button>
      </div>
    </div>
  );
};

export default Navbar;