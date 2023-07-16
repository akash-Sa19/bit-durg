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
import { whoWeAre } from "../assets/asset";

const WhoWeAre = () => {
  return (
    <div className="new-container flex md:flex-row sm:flex-col justify-evenly items-center bg-bit-red rounded-lg shadow-2xl shadow-black
    lg:h-[605px] lg:w-[1350px]
     md:min-w-[765px] md:min-h-[350px] md:w-[90vw] md:h-[40vw] 
      sm:min-w-[360px] sm:min-h-[700px] sm:w-[90vw] sm:h-[194vw]">

          {/* image div */}
        <div className="flex justify-center items-center ">
          <img src={whoWeAre} alt="Who We Are Image" className="lg:w-[493px] lg:h-[496px]
           md:w-[30vw] md:h-[34vw] md:min-w-[274px] md:min-h-[288px]
           sm:min-w-[276px] sm:min-h-[264px] sm:w-[77vw] sm:h-[74vw]"/>
        </div>

        {/* description div */}
        <div className=" flex justify-center items-center md:w-full sm:w-11/12">
          <div className=" flex flex-col justify-start items-center lg:w-[493px] lg:h-[496px] 
          md:h-[34vw] md:min-w-[274px] md:w-[30vw] md:min-h-[288px] ">
            {/* description title */}
            <p className="text-white font-serif-pro text-center mb-5 lg:text-4xl mdl:text-3xl md:text-2xl sm:text-[6.7vw] ">
              Who We Are
            </p>
            {/* desription  */}
            <p
              className="text-white text-justify
             lg:leading-loose lg:text-xl
             md:leading-normal md:text-sm mdl:text-lg
             sm:leading-relaxed sm:text-[4vw]"
            >
              We are one of the Premier Technical and Management Educational
              Institutions in the Country, delivering excellent professional
              education, creating value based globally competitive professionals
              and achieving excellence in all our endeavor. Putting in well
              directed and honest efforts to create peace, prosperity and growth
              for all stakeholders by exhibiting team work, commitment and zeal
              to excel in all our endeavor and striving to be the best.
            </p>
          </div>
        </div>
      </div>
  );
};

export default WhoWeAre;
