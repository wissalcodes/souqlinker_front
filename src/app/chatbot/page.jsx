import React from "react";
import Image from "next/image";
import Question from "../components/shared/Question";

const Page = () => {
  const links = [
    {
      title: "Algerian Export Promotion Agency",
      link: "",
    },
    {
      title: "General Directorate of Customs",
      link: "",
    },
    {
      title: "Ministry of Commerce",
      link: "",
    },
    {
      title: "National Agency for the Promotion of Foreign Trade",
      link: "",
    },
  ];
  const expQuestions = [
    {
      question:
        "What are the general steps involved in exporting goods into Algeria?",
      response: "",
    },
    {
      question: "How do I obtain an export license in Algeria?",
      response: "",
    },
  ];
  const impQuestions = [
    {
      question:
        "What are the general steps involved in importing goods into Algeria?",
      response:
        "The general steps for importing goods into Algeria include obtaining an import license, preparing the required documentation (such as the commercial invoice, packing list, and certificate of origin), submitting the documents to customs authorities, paying applicable duties and taxes, and clearing customs inspection.",
    },
    {
      question:
        "Are there any specific import regulations or restrictions that I need to be aware of?",
      response: "",
    },
  ];
  return (
    <div className="w-full h-full grid grid-cols-2 px-[40px] py-[3%] ">
      <div className="flex flex-col border-r-[3px] border-r-green ">
        <h1 className="font-bold text-3xl ">
          Start a conversation with{" "}
          <span className="text-green font-normal font-lora">ENNASIH</span>- our
          Legal conseiller.
        </h1>
      </div>
      <div className="flex flex-col px-[8%]">
        <h1 className="font-bold text-3xl ">
          Frequently Asked Questions (FAQ){" "}
        </h1>
        <div className="flex border-r-[2px] border-b-[2px] justify-between border-r-green border-b-green my-[10px]">
          <p className="text-dark-blue font-semibold pl-[25px] text-2xl py-[10px]">
            Importation
          </p>
          <Image
            className="px-[3px]"
            alt=""
            src="./images/chatbot/drop.svg"
            width={50}
            height={50}
          />
        </div>
        <div className="w-full items-start px-[50px] justify-start flex flex-col h-[70%]">
          {impQuestions.map((q, index) => (
            <Question key={index} question={q} />
          ))}
        </div>
        <div className="flex border-r-[2px] border-b-[2px] justify-between border-r-green border-b-green my-[10px]">
          <p className="text-dark-blue font-semibold  pl-[25px] text-2xl py-[10px]">
            Exportation
          </p>
          <Image
            className="px-[3px]"
            alt=""
            src="./images/chatbot/drop.svg"
            width={50}
            height={50}
          />
        </div>
        <div className="w-full items-start px-[50px] justify-start flex flex-col h-[70%]">
          {expQuestions.map((q, index) => (
            <Question key={index} question={q} />
          ))}
        </div>
        <div className="flex justify-between my-[10px]">
          <p className=" pl-[15px] font-bold text-3xl py-[10px]">
            Important Links
          </p>
        </div>

        {/* Fix the mapping of links */}
        <div className="px-[50px]">
          {links.map((l, index) => (
            <p className="font-bold" key={index}>
              &bull; {l.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
