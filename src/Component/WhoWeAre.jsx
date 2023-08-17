// screen breakpoints
// sm: '360px'
// md: '834px'
// mdl: '1275px'
// lg: '1440px'
// xl: '1640px

// compoent is divided into 2 parts
// 1 - div > img
// 2 - Description

import React from "react";

// assets
import { whoWeAre } from "../assets/asset";

const WhoWeAre = () => {
  return (
    <div
      className="new-container flex md:justify-evenly sm:items-center bg-bit-red shadow-2xl shadow-black lg:mt-[150px]
    lg:h-[605px] lg:min-w-[1320px] lg:w-[90vw] lg:max-w-[1520px]
     md:min-w-[765px] md:w-[90vw] md:max-w-[900px] md:h-[350px] md:flex-row md:rounded-lg
      sm:min-w-[360px] sm:w-[100vw] sm:max-w-[420px] sm:h-[680px] sm:flex-col sm:justify-start sm:rounded-none"
    >
      {/* image div */}
      {/* <div className="flex items-center justify-center w-auto "> */}
      <img
        src={whoWeAre}
        alt="Who We Are Image"
        className="lg:w-[493px] lg:max-w-[493px] lg:h-[496px] 
          md:min-w-[274px] md:w-[30vw] md:max-w-[320px] md:h-[288px] 
           sm:min-w-[360px] sm:w-[100vw] sm:max-w-[420px] sm:h-[260px]  "
      />
      {/* </div> */}

      {/* description div */}
      <div
        className=" flex flex-col justify-start items-center 
        lg:w-[493px] lg:h-[496px] lg:max-w-[496px] lg:mt-[40px]
         md:min-w-[274px] md:w-[30vw] md:max-w-[320px] md:h-[288px] md:mt-[20px]
          sm:min-w-[300px] sm:w-[80%] sm:h-auto sm:mt-[40px]"
      >
        <div className="flex flex-col items-center justify-start ">
          {/* description title */}
          <p className="mb-3 text-center text-white font-serif-pro lg:text-4xl md:text-2xl sm:text-2xl ">
            Who We Are
          </p>
          {/* desription  */}
          <p
            className="text-white text-justify
             lg:leading-[40px] lg:text-2xl
             md:leading-[20px] 
             sm:leading-[28px] md:text-base font-alegreya-sans"
          >
            We are one of the Premier Technical and Management Educational
            Institutions in the Country, delivering excellent professional
            education, creating value based globally competitive professionals
            and achieving excellence in all our endeavor. Putting in well
            directed and honest efforts to create peace, prosperity and growth
            for all stakeholders by exhibiting team work, commitment and zeal to
            excel in all our endeavor and striving to be the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
