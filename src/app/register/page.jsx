"use client";
import React, { useState } from "react";
import Image from "next/image";
import UserType from "../../components/auth/registration/UserType";
import CompanyInfo from "../../components/auth/registration/CompanyInfo";
import CompanyInfoNext from "../../components/auth/registration/CompanyInfoNext";
import AuthInfo from "../../components/auth/registration/AuthInfo";
import Offer from "../../components/auth/registration/Offer";

const RegistrationPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <ProgressDots index={currentPage} />
      {currentPage === 0 && <UserType onNext={handleNext} />}
      {currentPage === 1 && (
        <CompanyInfo onPrevious={handlePrevious} onNext={handleNext} />
      )}
      {currentPage === 2 && (
        <CompanyInfoNext onPrevious={handlePrevious} onNext={handleNext} />
      )}
      {currentPage === 3 && (
        <AuthInfo onPrevious={handlePrevious} onNext={handleNext} />
      )}
      {currentPage === 4 && <Offer onPrevious={handlePrevious} />}
    </div>
  );
};

const ProgressDots = ({ index }) => {
  return (
    <div className="flex items-center justify-center w-[100%] relative h-[15vh]">
      {[0, 1, 2, 3, 4].map((pageNumber) => (
        <React.Fragment key={pageNumber}>
          <div
            className={`w-6 h-6 rounded-full border-2 border-green ${
              index === pageNumber ? "bg-green" : "bg-white"
            }`}></div>
          {pageNumber < 4 && (
            <Image
              className="px-[3px]"
              alt=""
              src="/images/auth/line.svg" // Update the path accordingly
              width={30}
              height={30}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RegistrationPage;
