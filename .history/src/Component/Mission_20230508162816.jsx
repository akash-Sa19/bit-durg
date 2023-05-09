import React from "react";
import { startDoubleQuote, endDoubleQuote } from "../assets/asset";

const Mission = () => {
  return (
    <div className="custom-cont">
      <div className="bg-bit-red h-[735px] w-full rounded-lg relative">
        <div className="h-[270px] w-[440px] bg-white border-4 border-black rounded-xl absolute top-[110px] left-[185px] z-10">
          <img
            src={startDoubleQuote}
            alt="startDoubleQuote"
            className="absolute top-[-40px] left-[-5px]"
          />
        </div>
        <div className="h-[385px] w-[605px] bg-white border-4 border-black rounded-xl absolute bottom-[110px] right-[185px]">
          <img
            src={endDoubleQuote}
            alt="endDoubleQuote"
            className="absolute bottom-[-40px] right-[-5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
