import React from "react";

// importing css 
import CardContent from "@mui/material/CardContent";
import '../../index.css'

// Material UI 
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// constants
import { color } from "../../Constants";

const Card2 = (props) => {
  return (
    <div className="w-auto lg:h-[290px] sm:h-[240px] scrollNone">
      <Card 
        sx={{
          // boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.25)',
          position: "relative",
          width: { sm: "253.19px", lg: "310px" },
          height: { sm: "168.79px", lg: "208px" },
        }}
      >
        <CardMedia
          // sx={{ height: 208 }}
          image={props.img}
          title="Image 1"
          className="lg:h-[208px] sm:h-[168.79px]"
          onClick = {() => {
            
          }}
        />
        {/* Image Border */}
        <Box
          sx={{
            border: "3px solid #ffffff",
            position: "absolute",
            color: { color: "white", hover: color.bitRed },
            top: { sm: "8px", lg: "10px" },
            left: { sm: "8px", lg: "10px" },
            width: { sm: "237.19px", lg: "290px" },
            height: { sm: "152.79px", lg: "190px" },
          }}
        ></Box>
      </Card>

      {/* Card Content */}
      <div className="sm:w-[237.19px] lg:w-[290px]">
        <Typography 
          sx={{
            fontWeight: 700,
            fontSize: { sm: "16px", lg: "20px", xl: "24px" },
            marginTop: { sm: "16px", md: "20px" },
            marginX: { sm: "12px", md: "16px" },
            // width: {sm: '253.19px', lg: '310px' },
            color: color.bitRed,
          }}
        >
          <a href={props.link} target="_blank">{props.heading}</a>
        </Typography>
      </div>
    </div>
  );
};

export default Card2;
