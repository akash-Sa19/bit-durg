import React from "react";
import {
  graduate,
  undergraduate,
  scholarship,
  campusLife,
} from "../assets/asset";

const textStyle =
  "text-xl font-extrabold tracking-[0.15rem] text-center mt-2 uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#F26921] to-[#ED1065]";

const CollegeWidget = () => {
  return (
    <>
      <div
        className="new-container 
        lg:my-40 lg:flex lg:justify-evenly lg:items-center
        md:my-36 md:flex md:justify-evenly md:items-center
        sm:my-32 sm:grid sm:grid-cols-2 sm:gap-5"
      >
        <div className="flex flex-col justify-between items-center lg:gap-5 md:gap-4 sm:gap-2 sm:col-span-1 my-2">
          <img
            src={graduate}
            alt="Graduate"
            className="lg:h-[120px] md:h-[120px] sm:h-[80px] w-auto object-contain"
          />
          <p className={textStyle}>Undergraduate</p>
        </div>
        <div className="flex flex-col justify-between items-center lg:gap-5 md:gap-4 sm:gap-2 sm:col-span-1 my-2">
          <img
            src={undergraduate}
            alt="Undergraduate"
            className="lg:h-[120px] md:h-[120px] sm:h-[80px] w-auto object-contain"
          />
          <p className={textStyle}>Graduate</p>
        </div>
        <div className="flex flex-col justify-between items-center lg:gap-5 md:gap-4 sm:gap-2 sm:col-span-1 my-2">
          <img
            src={scholarship}
            alt="Scholarship"
            className="lg:h-[120px] md:h-[120px] sm:h-[80px] w-auto object-contain"
          />
          <p className={textStyle}>Scholarship</p>
        </div>
        <div className="flex flex-col justify-between items-center lg:gap-5 md:gap-4 sm:gap-2 sm:col-span-1 my-2">
          <img
            src={campusLife}
            alt="Campus Life"
            className="lg:h-[120px] md:h-[120px] sm:h-[80px] w-auto object-contain"
          />
          <p className={textStyle}>Campus Life</p>
        </div>
      </div>
    </>
  );
};

export default CollegeWidget;
