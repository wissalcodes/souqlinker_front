import Image from "next/image";
import AboutUs from "./components/landing_page/AboutUs";
import Solutions from "./components/landing_page/Solutions";

export default function Home() {
  return (
    <div className="font-lora flex flex-col items-center justify-center w-screen h-full px-[5%] overflow-x-hidden">
      <AboutUs />
      {/* <Solutions /> */}
    </div>
  );
}
