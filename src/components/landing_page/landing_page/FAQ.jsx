import React from "react";
import Question from "../../shared/Question";

const FAQ = () => {
  const questions = [
    {
      question: "Can I trust the suppliers?",
      response:
        "Yes! Our suppliers go through a thorough verification process to ensure reliability and quality for our users.",
    },
    {
      question: "What if I need support?",
      response:
        "Our support team is available 24/7 to assist with any questions or issues you may encounter while using our platform.",
    },
    {
      question: "Is there a trial version?",
      response:
        "Yes, we offer a free trial period so you can explore SouQLinker's features and discover how it can benefit your business before committing.",
    },
  ];

  return (
    <div className="w-full h-[80vh] flex flex-col items-start justify-center">
      <div className="flex flex-col items-start justify-center w-full h-[30%]">
        <h1 className="font-bold flex items-center">
          FAQs -
          <span className="text-xl font-semibold">
            {"    "}here are the answers to the most asked questions
          </span>
        </h1>
      </div>
      <div className="w-full items-start justify-start flex flex-col h-[70%]">
        {questions.map((q, index) => (
          <Question key={index} question={q} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
