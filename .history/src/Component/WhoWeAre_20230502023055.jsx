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
            sx={{ textAlign: "justify", fontSize: "20px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            molestias omnis odio vero maiores rem repellat ea possimus soluta
            enim nobis, cupiditate, amet ullam at. Quos, eius consectetur. Id
            incidunt facere velit. Nulla facilis, possimus eos molestias
            consectetur nam eligendi numquam est atque, natus pariatur placeat
            odit aliquid quo fugit delectus, accusamus necessitatibus harum
            minima totam. Eveniet temporibus minus harum id? Veritatis facilis
            aperiam ea deserunt voluptates voluptatem numquam dicta dolore
            dolores possimus! Tempore enim reiciendis minus quae omnis nulla, a
            beatae, natus ipsam nihil porro repudiandae commodi odio nam
            assumenda praesentium architecto eum dignissimos cum ullam ea
            obcaecati voluptatum!
          </Typography>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
