import React from "react";
import { Navbar } from "./index";
import { hero } from "../assets/asset";
import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <div className="h-[560px] w-full relative">
      <img src={hero} alt="Hero Image" className="w-full object-cover" />
      <div className="absolute bottom-[60px] left-[60px]">
        <Typography
          variant="h3"
          component="h3"
          color="white"
          sx={{ fontWeight: 900 }}
        >
          ASPIRE
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          color="white"
          sx={{ fontWeight: 900 }}
        >
          TO
        </Typography>
        <Typography
          variant="h3"
          component="h3"
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
