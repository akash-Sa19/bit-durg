import React from "react";
import { startDoubleQuote, endDoubleQuote } from "../assets/asset";
import Typography from "@mui/material/Typography";
import { Translate } from "@mui/icons-material";

const Mission = () => {
  return (
    <div className="custom-cont">
      <div className="bg-bit-red h-[735px] w-full rounded-lg relative">
        <div className="h-[270px] w-[440px] bg-white border-4 border-black rounded-xl absolute top-[110px] left-[185px] z-10">
          <img
            src={startDoubleQuote}
            alt="startDoubleQuote"
            className="absolute top-[-40px] left-[-5px]"
          />
        </div>
        <div className="h-[385px] w-[605px] bg-white border-4 border-black rounded-xl absolute bottom-[110px] right-[185px]">
          <img
            src={endDoubleQuote}
            alt="endDoubleQuote"
            className="absolute bottom-[-40px] right-[-5px]"
          />
          <div className="m-16">
            <Typography
              variant="subtitle1"
              color="black"
              sx={{
                textAlign: "justify",
                // fontSize: "20px",
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
    </div>
  );
};

export default Mission;
