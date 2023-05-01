import React from "react";
import { Navbar } from "./index";
import { hero } from "../assets/asset";

const Hero = () => {
  return (
    <div className="w-[560px]">
      <p>Another New Hero component</p>
      <img src={hero} alt="Hero Image" />
    </div>
  );
};

export default Hero;
