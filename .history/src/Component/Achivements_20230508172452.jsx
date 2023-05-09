import React from "react";
import Typography from "@mui/material/Typography";

const Achievements = () => {
  return (
    <div className="custom-cont">
      <Typography
        variant="subtitle1"
        color="black"
        sx={{
          textAlign: "justify",
          lineHeight: "30px",
          textTransform: "uppercase",
        }}
      >
        Achievements
      </Typography>
    </div>
  );
};

export default Achievements;
