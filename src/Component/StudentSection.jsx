import React from "react";
import { college } from "../assets/asset";

const StudentSection = () => {
  return (
    <div
      className={`new-container h-[550px] my-10 bg-black bg-opacity-10 bg-[url('/src/assets/college.png')] blur-[7.5px]`}
    >
      <p className="text-3xl text-white font-alegreya-sans font-bold uppercase text-center">
        Student Section
      </p>
      <div className="grid grid-cols-2">
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default StudentSection;
