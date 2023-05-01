import React from "react";
import { whoWeAre } from "../assets/asset";

const WhoWeAre = () => {
  return (
    <>
      <div className="h-[605px] w-[1320px] mx-auto my-5">
        <div>
          <img src={whoWeAre} alt="Who We Are Image" />
        </div>
        <div>
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
