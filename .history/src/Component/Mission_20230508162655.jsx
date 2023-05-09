import React from "react";
import { startDoubleQuote, endDoubleQuote } from "../assets/asset";

const Mission = () => {
  return (
    <div className="custom-cont">
      <div className="bg-bit-red h-[735px] w-full rounded-lg relative">
        <div className="h-[270px] w-[440px] bg-white border-4 border-black rounded-lg absolute top-[110px] left-[185px] z-10">
          <img
            src={startDoubleQuote}
            alt="startDoubleQuote"
            className="absolute top-[-35px] left-[-10px]"
          />
        </div>
        <div className="h-[385px] w-[605px] bg-white border-4 border-black rounded-lg absolute bottom-[110px] right-[185px]">
          <img src={endDoubleQuote} alt="endDoubleQuote" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
