"use client";
import React, { useState } from "react";

const Question = ({ question }) => {
  const [showResponse, setShowResponse] = useState(false);

  const toggleResponse = () => {
    setShowResponse(!showResponse);
  };

  return (
    <div className="text-xl w-full py-[10px]">
      <div
        onClick={toggleResponse}
        className={`font-semibold cursor-pointer ${
          showResponse ? `py-[20px]` : ""
        }`}>
        &bull; {question.question}
      </div>
      {showResponse && (
        <div className="font-normal px-[20px]">{question.response}</div>
      )}
    </div>
  );
};

export default Question;
