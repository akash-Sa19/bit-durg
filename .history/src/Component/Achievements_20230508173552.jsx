import React from "react";
import Typography from "@mui/material/Typography";
import { Ariia, Naac, Nirf, Nba, Margdarshan } from "../assets/asset";

const Achievements = () => {
  return (
    <div className="custom-cont">
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
      <div className="flex justify-between my-16">
        <img src={Ariia} alt="Ariia" />
        <img src={Naac} alt="Naac" />
        <img src={Nirf} alt="Nirg" />
        <img src={Nba} alt="Nba" />
        <img src={Margdarshan} alt="Margdarshan" />
      </div>
    </div>
  );
};

export default Achievements;
