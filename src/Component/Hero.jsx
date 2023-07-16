// compoent is divided into 2 parts 
// 1 - hero img 
// 2 - hero text 

import React from "react";

// asset
import { hero } from "../assets/asset";

// Material Ui  
import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <div className="h-[560px] w-full relative">
      <img src={hero} alt="Hero Image" className="w-full h-full object-cover" />
      <div className="absolute bottom-[60px] left-[60px]">
        <Typography
          variant="h2"
          component="h2"
          color="white"
          sx={{ fontWeight: 900 }}
        >
          ASPIRE
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="white"
          sx={{ fontWeight: 900 }}
        >
          TO
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="white"
          sx={{ fontWeight: 900 }}
        >
          EXCEL
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
