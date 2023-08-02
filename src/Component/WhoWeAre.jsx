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
      className="new-container flex justify-evenly items-center bg-bit-red md:rounded-lg sm:rounded-none shadow-2xl shadow-black 
    lg:h-[605px] lg:w-[1350px]
     md:min-w-[765px] md:min-h-[350px] md:w-[90vw] md:h-[40vw] mdl:h-[460px] md:flex-row
      sm:min-w-[360px] sm:h-[500px] sm:w-[360px] sm:flex-col sm:justify-evenly"
    >
      {/* image div */}
      {/* <div className="flex justify-center items-center w-auto "> */}
        <img
          src={whoWeAre}
          alt="Who We Are Image"
          className="lg:w-[493px] lg:h-[496px] 
           md:w-[30vw] md:h-[34vw] md:min-w-[274px] md:min-h-[288px] m:h-[250px] mdl:h-[300px]
           sm:min-w-[300px] sm:h-[180px] sm:w-[82%] "
        />
      {/* </div> */}

      {/* description div */}
      <div
        className=" flex justify-center items-center 
        lg:w-[493px] lg:h-[496px] 
          md:h-[34vw] md:min-w-[274px] md:w-[30vw] md:min-h-[288px] m:h-[250px] mdl:h-[300px]
          sm:min-w-[300px] sm:w-[90%] sm:h-[228px] "
      >
        <div className=" flex flex-col justify-start items-center">
          {/* description title */}
          <p className="text-white font-serif-pro text-center mb-3 lg:text-4xl mdl:text-3xl md:text-2xl sm:text-2xl ">
            Who We Are
          </p>
          {/* desription  */}
          <p
            className="text-white text-justify
             lg:leading-loose lg:text-xl
             md:leading-normal md:text-sm mdl:text-lg
             sm:leading-[20px] sm:text-[14px] font-alegreya-sans"
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
