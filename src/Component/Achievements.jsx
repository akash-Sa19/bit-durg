import React from "react";
import Typography from "@mui/material/Typography";
import { Ariia, Naac, Nirf, Nba, Margdarshan } from "../assets/asset";
import { color } from "../Constants";

const Achievements = () => {
  const textStyle =
    "text-xl font-extrabold tracking-[0.15rem] text-center mt-2 uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#F26921] to-[#ED1065]";
  const imgStyle = 
    "lg:w-[160px] lg:h-[160px] mdl:w-[140px] mdl:h-[140px] md:w-[92px] md:h-[92px] sm:w-[72px] sm:h-[72px] ";
  
  return (
    <div className="new-container md:mt-[150px] sm:mt-[100px] flex flex-col items-center">
      <Typography
        variant="h3"
        color="black"
        sx={{
          textAlign: "Center",
          textTransform: "uppercase",
          color: color.bitRed,
          fontFamily: "Source Serif Pro",
          fontSize: {sm:'40px' },
        }}
      >
        Achievements
      </Typography>
      <div
        className=" md:w-[90%] sm:w-[90%]
        lg:my-20 lg:flex lg:justify-between lg:items-center
        md:my-16 md:flex md:justify-between md:items-center md:gap-x-0 md:gap-y-0 md:flex-nowrap
        sm:my-12 sm:flex sm:justify-center sm:items-center sm:gap-x-[10vw] sm:gap-y-[20px] sm:flex-wrap"
      >
        <div >
          <img className={imgStyle} src={Ariia} alt="Ariia"  />
          <p className={textStyle}>ariia</p>
        </div>
        <div >
          <img className={imgStyle} src={Naac} alt="Naac" />
          <p className={textStyle}>naac</p>
        </div>
        <div >
          <img className={imgStyle} src={Nirf} alt="Nirg" />
          <p className={textStyle}>nirf</p>
        </div>
        <div >
          <img className={imgStyle} src={Nba} alt="Nba" />
          <p className={textStyle}>nba</p>
        </div>
        <div >
          <img className={imgStyle} src={Margdarshan} alt="Nba" />
          <p className={textStyle}>nba</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

