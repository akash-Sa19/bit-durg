import React from "react";
import { Navbar } from "./index";
import { hero } from "../assets/asset";
import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <div className="h-[560px] w-full relative">
      <img src={hero} alt="Hero Image" className="w-full object-cover" />
      <div className="absolute bottom-4 left-4">
        <Typography variant="h1" component="h2">
          h1. Heading
        </Typography>
        ;
      </div>
    </div>
  );
};

export default Hero;
