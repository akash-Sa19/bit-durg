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
          <p className="text-xl font-extrabold tracking-widest text-center mt-2 uppercase">
            Filler
          </p>
        </div>
        <div>
          <img src={Naac} alt="Naac" />
          <p className="text-xl font-extrabold tracking-widest text-center mt-2 uppercase">
            Filler
          </p>
        </div>
        <div>
          <img src={Nirf} alt="Nirg" />
          <p className="text-xl font-extrabold tracking-widest text-center mt-2 uppercase">
            Filler
          </p>
        </div>
        <div>
          <img src={Nba} alt="Nba" />
          <p className="text-xl font-extrabold tracking-widest text-center mt-2 uppercase">
            Filler
          </p>
        </div>
        <div>
          <img src={Margdarshan} alt="Margdarshan" />
          <p className="text-xl font-extrabold tracking-widest text-center mt-2 uppercase">
            Filler
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
