import React from "react";
import styles from "../style";
import { search, downArrow, Grouplogo1 } from "../assets/asset";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [width, setWidth] = useState(338.8);
  const [height, setHeight] = useState(134.2);

  const buttonStyle = {
    color: "white",
    "&:hover": {
      color: "#ddd",
      backgroundColor: "rgba(245, 245, 245, 0.1)",
    },
  };
  const bottomNavLinkStyle = {
    color: "black",
    "&:hover": {
      color: "rgb(0, 0, 255)",
      textDecoration: "underline",
      backgroundColor: "white",
    },
  };

  return (
    <div className="font-roboto">
      <div class="flex gap-4 bg-bit-red h-10 px-2">
        <div class="item basis-0 grow">
          <div className="flex items-center h-full justify-end gap-6">
            <Button variant="text" sx={buttonStyle}>
              Event
            </Button>
            <Button variant="text" sx={buttonStyle}>
              News
            </Button>
            <Button variant="text" sx={buttonStyle}>
              Careers
            </Button>
            <Button variant="text" sx={buttonStyle}>
              Info On
            </Button>
          </div>
        </div>
        <div class="item">
          <div className={`w-[340px] h-full bg-white inline-block`}>
            {/* <img
            src={Grouplogo1}
            alt="BitLogo"
            className={`w-[${width}px] h-[${height}px`}
          /> */}
          </div>
        </div>
        <div class="item basis-0 grow">
          <div
            className={`flex items-center h-full w-full justify-start gap-6`}
          >
            <div className="flex justify-between items-center w-full">
              <div>
                <Button variant="text" sx={buttonStyle}>
                  About
                </Button>
                <Button variant="text" sx={buttonStyle}>
                  Visit
                </Button>
                <Button variant="text" sx={buttonStyle}>
                  Contact Us
                </Button>
                <Button variant="text" sx={buttonStyle}>
                  IIC
                </Button>
              </div>
              <div className="bg-white border-0 rounded px-2 py-1 flex items-center justify-between gap-2">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Find Department..."
                  className="bg-white focus:outline-none"
                />
                <Button
                  variant="text"
                  sx={{ color: "black", p: 0, minWidth: 0 }}
                >
                  <SearchIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-4 h-[60px] px-2">
        <div class="item basis-0 grow">
          <div className="flex items-center h-full justify-end gap-6">
            <Button variant="text" sx={bottomNavLinkStyle}>
              Admission
            </Button>
            <Button variant="text" sx={bottomNavLinkStyle}>
              Academics
            </Button>
            <Button variant="text" sx={bottomNavLinkStyle}>
              Department
            </Button>
            <Button variant="text" sx={bottomNavLinkStyle}>
              Placement
            </Button>
          </div>
        </div>
        <div class="item">
          <div className={`w-[340px] h-full bg-white inline-block`}>
            {/* <img
            src={Grouplogo1}
            alt="BitLogo"
            className={`w-[${width}px] h-[${height}px`}
          /> */}
          </div>
        </div>
        <div class="item basis-0 grow">
          <div
            className={`flex items-center h-full w-full justify-start gap-6`}
          >
            <div className="flex justify-between items-center w-full">
              <div>
                <Button variant="text" sx={bottomNavLinkStyle}>
                  Central Library
                </Button>
                <Button variant="text" sx={bottomNavLinkStyle}>
                  Moodle(lms)
                </Button>
                <Button variant="text" sx={bottomNavLinkStyle}>
                  Connect
                </Button>
                <Button variant="text" sx={bottomNavLinkStyle}>
                  Syllabus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block m-auto">
        <img
          src={Grouplogo1}
          alt="BitLogo"
          className={`w-[${width}px] h-[${height}px`}
        />
      </div>
    </div>
  );
};

export default Navbar;
