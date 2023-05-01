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
        <div className="col-span-1 p-16">
          <Typography variant="h3" color="white" sx={{ textAlign: "center" }}>
            Who We Are
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ textAlign: "justify", fontSize: "20px", lineHeight: "30px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            laborum, repellat sapiente tempore quia iure consequatur tempora,
            eligendi, harum quasi nobis praesentium ratione debitis. Iure iusto,
            aut fugit natus sunt voluptas sint dolores sed autem rerum
            voluptates quae deserunt, temporibus accusantium ea debitis officiis
            sit ullam? Quibusdam dolor aliquid eveniet.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
