import React from "react";
import { startDoubleQuote, endDoubleQuote } from "../assets/asset";
import Typography from "@mui/material/Typography";
import { Translate } from "@mui/icons-material";

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
          <div className="mx-16 flex items-center justify-center h-full">
            <Typography
              variant="subtitle1"
              color="black"
              sx={{
                textAlign: "justify",
                // fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Bhilai Institute Of Technology, Durg, with a mission to provide
              world class technical manpower to serve the industry, profession
              and society and to contribute effectively to the national economic
              development, has acquired the status of one of the premier
              technological institutions of India. Read more... - Dr. Arun
              Arora, Director
            </Typography>
            <Typography
              variant="subtitle1"
              color="black"
              sx={{
                textAlign: "justify",
                // fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              - Dr. Arun Arora, Director
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
