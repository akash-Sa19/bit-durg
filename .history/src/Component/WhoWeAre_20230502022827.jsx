import React from "react";
import { whoWeAre } from "../assets/asset";
import Typography from "@mui/material/Typography";

const WhoWeAre = () => {
  return (
    <>
      <div className="h-[605px] w-[1320px] mx-auto my-5 bg-bit-red grid grid-cols-2">
        <div className="col-span-1 p-16">
          <img src={whoWeAre} alt="Who We Are Image" />
        </div>
        <div className="col-span-1">
          <Typography variant="h5" color="white">
            Who We Are
          </Typography>
          <Typography variant="body1" color="white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            molestias vel harum non quisquam repellat voluptate exercitationem
            odit eligendi est veritatis sunt, libero ut assumenda! Debitis,
            rerum. Hic, quia dolor.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
