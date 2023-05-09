import React from "react";
import { startDoubleQuote, endDoubleQuote, deppHeard } from "../assets/asset";
import Typography from "@mui/material/Typography";
import { Translate } from "@mui/icons-material";

const Mission = () => {
  return (
    <div className="custom-cont">
      <div
        className="bg-bit-red w-full rounded-lg relative 
        lg:h-[735px] 
        md:h-[600px] 
        sm:h-[550px]"
      >
        <div
          className="bg-white border-4 border-black rounded-xl absolute top-[8vw] left-[12vw] z-10
          lg:h-[270px] lg:w-[440px]
          md:h-[215px] md:w-[350px]"
        >
          <img
            src={startDoubleQuote}
            alt="startDoubleQuote"
            className="absolute top-[-40px] left-[-5px]"
          />
          <img
            src={deppHeard}
            alt="Depp Heard Lawsuit"
            className="object-cover h-full w-full"
          />
        </div>
        <div
          className="bg-white border-4 border-black rounded-xl absolute bottom-[8vw] right-[12vw]
        lg:h-[385px] lg:w-[605px]
        "
        >
          <img
            src={endDoubleQuote}
            alt="endDoubleQuote"
            className="absolute bottom-[-40px] right-[-5px]"
          />
          <div className="mx-20 flex items-center justify-center h-full">
            <div>
              <Typography
                variant="subtitle1"
                color="black"
                sx={{
                  textAlign: "justify",
                  lineHeight: "30px",
                }}
              >
                Bhilai Institute Of Technology, Durg, with a mission to provide
                world class technical manpower to serve the industry, profession
                and society and to contribute effectively to the national
                economic development, has acquired the status of one of the
                premier technological institutions of India. Read more...
              </Typography>
              <Typography
                variant="subtitle1"
                color="black"
                sx={{
                  textAlign: "justify",
                  lineHeight: "30px",
                  pt: 1,
                }}
              >
                - Dr. Arun Arora, Director
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
