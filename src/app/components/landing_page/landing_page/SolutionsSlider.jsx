"use client";
import React from "react";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SolutionCard from "./SolutionCard";

const SolutionsSlider = ({ solutions }) => {
  const settings = {
    dots: false,
    // number of slides to show per screen depending on the screen size
    slidesToShow:
      window.innerWidth > 1024
        ? 3.25
        : window.innerWidth > 768
        ? 3.4
        : window.innerWidth > 520
        ? 2.5
        : window.innerWidth > 410
        ? 2
        : window.innerWidth > 345
        ? 1.75
        : 1.3,
    slidesToScroll: 1, // number of slides to scroll when the next button is clicked
    infinite: true, // scroll infinitely
  };

  return (
    <div className=" relative w-full items-center justify-center h-[100%]">
      <Slider {...settings}>
        {solutions.map((s, index) => (
          <SolutionCard key={index} solution={s} />
        ))}
      </Slider>
    </div>
  );
};

export default SolutionsSlider;
