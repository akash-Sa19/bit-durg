import React from "react";
import Typography from "@mui/material/Typography";
import { Ariia, Naac, Nirf, Nba, Margdarshan } from "../assets/asset";

const Achievements = () => {
  const textStyle =
    "text-xl font-extrabold tracking-[0.15rem] text-center mt-2 uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#F26921] to-[#ED1065]";

  return (
    <div className="new-container">
      <Typography
        variant="h3"
        color="black"
        sx={{
          textAlign: "Center",
          textTransform: "uppercase",
        }}
      >
        Achievements
      </Typography>
      <div
        className="
        lg:my-20 lg:flex lg:justify-between lg:items-center
        md:my-16 md:flex md:justify-between md:items-center
        sm:my-12 sm:grid sm:grid-cols-2 sm:gap-5"
      >
        <div>
          <img src={Ariia} alt="Ariia" />
          <p className={textStyle}>ariia</p>
        </div>
        <div>
          <img src={Naac} alt="Naac" />
          <p className={textStyle}>naac</p>
        </div>
        <div>
          <img src={Nirf} alt="Nirg" />
          <p className={textStyle}>nirf</p>
        </div>
        <div>
          <img src={Nba} alt="Nba" />
          <p className={textStyle}>nba</p>
        </div>
        <div>
          <img src={Margdarshan} alt="Margdarshan" />
          <p className={textStyle}>margdarshan</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
