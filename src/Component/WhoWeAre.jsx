import React from "react";
import { whoWeAre } from "../assets/asset";
import Typography from "@mui/material/Typography";

const WhoWeAre = () => {
  return (
    <>
      <div className="new-container lg:h-[605px] md:h-[350px] my-5 bg-bit-red grid grid-cols-2 rounded-lg shadow-2xl shadow-black">
        <div className="col-span-1 lg:p-16 md:p-8 flex justify-center items-center">
          <img src={whoWeAre} alt="Who We Are Image" />
        </div>
        <div className="col-span-1 lg:p-16 md:p-8 flex justify-center items-center">
          <div>
            <p className="text-white font-serif-pro text-center mb-5 lg:text-4xl md:text-2xl">
              Who We Are
            </p>
            <p
              className="text-white text-justify
             lg:leading-loose lg:text-xl
             md:leading-normal md:text-sm
             sm:leading-relaxed sm:text-base"
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
    </>
  );
};

export default WhoWeAre;
