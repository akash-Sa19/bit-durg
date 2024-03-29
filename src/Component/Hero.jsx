// compoent is divided into 2 parts 
// 1 - hero img 
// 2 - hero text 

import React from "react";

// asset
import { hero } from "../assets/asset";
import {heroVideo} from '../assets/video/asset'

// Material Ui  
import Typography from "@mui/material/Typography";

const Hero = () => {
  const heroText = {
    fontWeight: 900,
    fontSize: {sm:'45px', md:'60px', lg:'80px', xl:'80px'},
  }
  return (
    <div className="h-[92vh] w-full relative">
      {/* <img src={hero} alt="Hero Image" className="object-cover w-full h-full" /> */}
      <video src={heroVideo} loop muted autoPlay className="object-cover w-full h-full" />
      <div className="absolute md:bottom-[60px] sm:bottom-[30px] md:left-[60px] sm:left-[30px]">
        <Typography
          variant="h2"
          component="h2"
          color="white"
          sx={heroText}
        >
          ASPIRE
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="white"
          sx={heroText}
        >
          TO
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="white"
          sx={heroText}
        >
          EXCEL
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
