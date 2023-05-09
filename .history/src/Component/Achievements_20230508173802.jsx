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
      <div className="flex justify-between my-20 mx-16">
        <div>
          <img src={Ariia} alt="Ariia" />
        </div>
        <div>
          <img src={Naac} alt="Naac" />
        </div>
        <div>
          <img src={Nirf} alt="Nirg" />
        </div>
        <div>
          <img src={Nba} alt="Nba" />
        </div>
        <div>
          <img src={Margdarshan} alt="Margdarshan" />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
