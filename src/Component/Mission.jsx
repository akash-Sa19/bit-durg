// screen breakpoints
// sm: '360px'
// md: '834px'
// mdl: '1275px'
// lg: '1440px'
// xl: '1640px

// parentDiv > childDiv > grandChildDiv
// grand child have 2 component
// 1 - super grand child 1
// 2 - super grand child 2

import React from "react";

// assets
import { startDoubleQuote, endDoubleQuote, Principal } from "../assets/asset";

const Mission = () => {
  const textStyle =
    "font-medium text-justify lg:leading-loose lg:text-lg md:leading-normal md:text-base sm:leading-tight sm:text-xs";
  return (
    <div className="new-container mt-[150px]">
      {/* child div */}
      <div
        className="bg-bit-red w-full rounded-lg relative border border-white
        lg:h-[735px] 
        md:h-[600px] 
        sm:h-[550px]"
      >
        {/* grand child */}
        <div
          className="md:h-4 md:w-4 z-40  border border-blue-500 
          lg:absolute lg:top-[40%] lg:left-[45%] lg:-translate-x-[40%] lg:-translate-y-[45%]
          md:absolute md:top-[40%] md:left-[45%] md:-translate-x-[40%] md:-translate-y-[45%] md:block
          sm:w-full sm:h-full sm:flex sm:justify-center sm:items-center sm:flex-col "
        >
          {/* super grand child 1 */}
          <div
            className="bg-white md:shadow-[8px_8px_10px_0px_rgba(0,0,0,0.25)] md:rounded-xl z-10 
            lg:absolute lg:-bottom-[80px] lg:-right-[20px] lg:h-[270px] lg:w-[440px]
            md:absolute md:-bottom-[20px] md:-right-[30px] md:h-[215px] md:w-[350px] 
            sm:block sm:relative sm:rounded-tl-xl sm:rounded-tr-xl sm:w-[310px] sm:h-[200px]"
          >
            <img
              src={startDoubleQuote}
              alt="startDoubleQuote"
              className="absolute md:top-[-40px] md:left-[-5px] sm:-left-[30px] sm:-top-[40px]"
            />
            <img
              src={Principal}
              alt="Depp Heard Lawsuit"
              className="object-cover h-full w-full p-1 rounded-xl"
            />
          </div>

          {/* super grand child 2 */}
          <div
            className="bg-white md:rounded-xl md:shadow-[8px_8px_10px_0px_rgba(0,0,0,0.25)]
            lg:absolute lg:-top-[80px] lg:-left-[20px] lg:h-[385px] lg:w-[605px]
            md:absolute md:top-[0px] md:-left-[55px] md:h-[286px] md:w-[450px]
            sm:block sm:relative sm:rounded-bl-xl sm:rounded-br-xl sm:w-[310px] sm:h-[200px]"
          >
            <img
              src={endDoubleQuote}
              alt="endDoubleQuote"
              className="absolute md:bottom-[-40px] md:right-[-5px]
               sm:-bottom-[40px] sm:-right-[30px]"
            />
            <div className="lg:px-20 md:px-10 flex items-center justify-center h-full mx-5">
              <div>
                <p className={textStyle}>
                  Bhilai Institute Of Technology, Durg, with a mission to
                  provide world class technical manpower to serve the industry,
                  profession and society and to contribute effectively to the
                  national economic development, has acquired the status of one
                  of the premier technological institutions of India.
                  <span className="md:block sm:inline"> Read more...</span>
                </p>
                <p className={`${textStyle} sm:mt-[8px] `}>
                  - Dr. Arun Arora, Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

7314823444;
