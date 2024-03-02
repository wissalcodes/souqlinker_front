"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

// Message component
const Message = ({ sender, text }) => (
  <div
    className={`bg-[#DDE3EA] rounded-[12px] px-[20px] py-[30px] font-semibold my-[20px] ${
      sender === "user" ? "text-right" : "text-left"
    }`}>
    {text}
  </div>
);

const Chatbot = () => {
  // State variables
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  // Function to handle user input
  const handleUserInput = async (e) => {
    e.preventDefault();
    const userMessage = userInput.trim();
    if (userMessage !== "") {
      const userMessageObj = {
        sender: "user",
        text: userMessage,
      };
      setMessages([...messages, userMessageObj]); // Append user message to messages array
      setUserInput("");
      await fetchRepos(userMessage); // Await the fetchRepos function call
    }
  };

  // Function to fetch data from the chatbot API
  const fetchRepos = async (userMessage) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/chatbot",
        {
          input: userMessage,
        }
      );
      const chatbotMessage = {
        sender: "chatbot",
        text: response.data, // Use the response data from the API
      };
      setMessages([...messages, chatbotMessage]); // Append chatbot message to messages array
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }
  };

  return (
    <div className="h-[70vh] flex flex-col relative ">
      <div className="h-[50vh] overflow-y-scroll">
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} text={message.text} />
        ))}
      </div>
      <div className="bottom-[0px] absolute bg-[#00659E] px-[30px] py-[20px] flex w-[100%] rounded-[6px] justify-between">
        <input
          className="bg-[#00659E] w-full text-white"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Message ..."
        />
        <Image
          onClick={handleUserInput}
          className="px-[3px]"
          alt=""
          src="./images/chatbot/upload.svg"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Chatbot;
