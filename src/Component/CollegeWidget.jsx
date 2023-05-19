import React from "react";
import {
  graduate,
  undergraduate,
  scholarship,
  campusLife,
} from "../assets/asset";

const CollegeWidget = () => {
  const iconStyle =
    "flex flex-col justify-between items-center lg:gap-5 md:gap-4 sm:gap-2 sm:col-span-1 my-2";
  const imageStyle =
    "lg:h-[120px] md:h-[120px] sm:h-[80px] w-auto object-contain";
  const textStyle =
    "text-xl font-extrabold tracking-[0.15rem] text-center mt-2 uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#F26921] to-[#ED1065]";

  return (
    <>
      <div
        className="new-container 
        lg:my-40 lg:flex lg:justify-evenly lg:items-center
        md:my-36 md:flex md:justify-evenly md:items-center
        sm:my-32 sm:grid sm:grid-cols-2 sm:gap-5"
      >
        <div className={iconStyle}>
          <img src={graduate} alt="Graduate" className={imageStyle} />
          <p className={textStyle}>Undergraduate</p>
        </div>
        <div className={iconStyle}>
          <img src={undergraduate} alt="Undergraduate" className={imageStyle} />
          <p className={textStyle}>Graduate</p>
        </div>
        <div className={iconStyle}>
          <img src={scholarship} alt="Scholarship" className={imageStyle} />
          <p className={textStyle}>Scholarship</p>
        </div>
        <div className={iconStyle}>
          <img src={campusLife} alt="Campus Life" className={imageStyle} />
          <p className={textStyle}>Campus Life</p>
        </div>
      </div>
    </>
  );
};

export default CollegeWidget;
