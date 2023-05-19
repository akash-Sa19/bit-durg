import React from "react";
import { startDoubleQuote, endDoubleQuote, deppHeard } from "../assets/asset";
import Typography from "@mui/material/Typography";

const Mission = () => {
  const textStyle =
    "font-medium text-justify lg:leading-loose lg:text-lg md:leading-normal md:text-base sm:leading-tight sm:text-xs";
  return (
    <div className="new-container my-8">
      <div
        className="bg-bit-red w-full rounded-lg relative 
        lg:h-[735px] 
        md:h-[600px] 
        sm:h-[550px]"
      >
        <div
          className="h-4 w-4 bg-green-800 z-40 
          lg:absolute lg:top-[40%] lg:left-[45%] lg:-translate-x-[40%] lg:-translate-y-[45%]
          md:absolute md:top-[40%] md:left-[45%] md:-translate-x-[40%] md:-translate-y-[45%]"
        >
          <div
            className="bg-white border-4 border-black rounded-xl z-10 
            lg:absolute lg:-bottom-[80px] lg:-right-[20px] lg:h-[270px] lg:w-[440px]
            md:absolute md:-bottom-[10px] md:-right-[30px] md:h-[215px] md:w-[350px]
            "
          >
            <img
              src={startDoubleQuote}
              alt="startDoubleQuote"
              className="absolute top-[-40px] left-[-5px]"
            />
            <img
              src={deppHeard}
              alt="Depp Heard Lawsuit"
              className="object-cover h-full w-full p-1 rounded-xl"
            />
          </div>
          <div
            className="bg-white border-4 border-black rounded-xl 
            lg:absolute lg:-top-[80px] lg:-left-[20px] lg:h-[385px] lg:w-[605px]
            md:absolute md:-top-[10px] md:-left-[30px] md:h-[286px] md:w-[450px]
            "
          >
            <img
              src={endDoubleQuote}
              alt="endDoubleQuote"
              className="absolute bottom-[-40px] right-[-5px]"
            />
            <div className="lg:px-20 md:px-10 flex items-center justify-center h-full">
              <div>
                <p className={textStyle}>
                  Bhilai Institute Of Technology, Durg, with a mission to
                  provide world class technical manpower to serve the industry,
                  profession and society and to contribute effectively to the
                  national economic development, has acquired the status of one
                  of the premier technological institutions of India. Read
                  more...
                </p>
                <p className={textStyle}>- Dr. Arun Arora, Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
