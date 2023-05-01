import React from "react";
import { Navbar } from "./index";
import { hero } from "../assets/asset";

const Hero = () => {
  return (
    <div className="h-[560px] w-full">
      <img src={hero} alt="Hero Image" className="w-full object-cover" />
    </div>
  );
};

export default Hero;