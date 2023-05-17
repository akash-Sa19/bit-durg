import React from "react";
import { whoWeAre } from "../assets/asset";
import Typography from "@mui/material/Typography";

const WhoWeAre = () => {
  return (
    <>
      <div className="new-container h-[605px] my-5 bg-bit-red grid grid-cols-2 rounded-lg shadow-2xl shadow-black">
        <div className="col-span-1 p-16 flex justify-center items-center">
          <img src={whoWeAre} alt="Who We Are Image" />
        </div>
        <div className="col-span-1 p-16 flex justify-center items-center">
          <div>
            <Typography
              variant="h3"
              color="white"
              sx={{ textAlign: "center", mb: 5 }}
            >
              Who We Are
            </Typography>
            <Typography
              variant="subtitle1"
              color="white"
              sx={{
                textAlign: "justify",
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga
              amet quod magni ut repellendus, architecto consequuntur delectus
              natus perspiciatis modi laboriosam dolor quos harum doloremque
              optio cumque provident id aperiam fugit veniam asperiores. Eaque
              nam odit quaerat eius. Odit optio cupiditate voluptas illo!
              Deleniti repellat veniam facere sit debitis mollitia neque dicta
              aliquid. Facere provident explicabo dolores et in tempora illum.
              Animi accusantium provident voluptates, consequuntur doloremque
              laborum ullam?
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
