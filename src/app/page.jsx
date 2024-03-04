import Image from "next/image";
import AboutUs from "../components/landing_page/landing_page/AboutUs";
import Solutions from "../components/landing_page/landing_page/Solutions";
import FAQ from "../components/landing_page/landing_page/FAQ";
export default function Home() {
  return (
    <div className="font-lora flex flex-col items-center justify-center w-full h-full px-[40px] overflow-x-hidden">
      <AboutUs />
      <Solutions />
      <FAQ />
    </div>
  );
}
