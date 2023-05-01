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

  // const ColorButton = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText(purple[500]),
  //   backgroundColor: purple[500],
  //   '&:hover': {
  //     backgroundColor: purple[700],
  //   },
  // }));

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
              <div className="bg-white border-0 rounded px-2">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Find Department..."
                  className="bg-white focus:outline-none"
                />
                <Button variant="text" sx={{ color: "black", p: 0 }}>
                  <SearchIcon />
                </Button>
                {/* <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  sx={{
                    backgroundColor: "white",
                    border: "none",
                    padding: "0",
                  }}
                  inputProps={{
                    "aria-label": "weight",
                  }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-bit-red font-bold text-[14px] h-10 flex justify-center items-center gap-5 w-full basis-0 grow hidden`}
      >
        <div className="flex items-center">
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
          {/* <ul className={`${styles.flexEnd}`}>
            <li>EVENT</li>
            <li>NEWS</li>
            <li>CAREERS</li>
            <li className={`${styles.flexEnd}`}>
              INFO ON
              <span>
                <img src={downArrow} alt="Down Arrow" />
              </span>
            </li>
          </ul> */}
        </div>

        <div className={`w-[340px] h-[135px] bg-white inline-block`}>
          {/* <img
            src={Grouplogo1}
            alt="BitLogo"
            className={`w-[${width}px] h-[${height}px`}
          /> */}
        </div>

        <div className={`flex items-center basis-0 grow`}>
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
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            sx={{ borderColor: "white" }}
            inputProps={{
              "aria-label": "weight",
            }}
          />
          {/* <TextField
            {...params}
            label="Find Department"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          /> */}
          {/* <ul className={`${styles.flexStart}`}>
            <li>ABOUT</li>
            <li>VISIT</li>
            <li>CONTACT US</li>
            <li>IIC</li>
          </ul>
          <div>
            <p>Find Department</p>
            <img src={search} alt="Search" />
          </div> */}
        </div>
      </div>

      <p>{width}</p>
    </div>
  );
};

export default Navbar;
