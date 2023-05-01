import React from "react";
import styles from "../style";
import { search, downArrow, Grouplogo1 } from "../assets/asset";
import { useState } from "react";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [width, setWidth] = useState(338.8);
  const [height, setHeight] = useState(134.2);

  // const ColorButton = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText(purple[500]),
  //   backgroundColor: purple[500],
  //   '&:hover': {
  //     backgroundColor: purple[700],
  //   },
  // }));

  return (
    <div className="font-roboto">
      <div
        className={`bg-bit-red font-bold text-[14px] h-10 flex justify-center items-center gap-5 w-full`}
      >
        <div className="text">
          <Button
            variant="text"
            color="secondary"
            sx={{
              color: "white",
              "&:hover": {
                color: "#333333",
              },
            }}
          >
            Event
          </Button>
          <Button variant="text">News</Button>
          <Button variant="text">Careers</Button>
          <Button variant="text">Info On</Button>
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

        <div className={`w-[340px] h-[135px] bg-white`}>
          {/* <img
            src={Grouplogo1}
            alt="BitLogo"
            className={`w-[${width}px] h-[${height}px`}
          /> */}
        </div>

        <div className={`${styles.flexStart}`}>
          <ul className={`${styles.flexStart}`}>
            <li>ABOUT</li>
            <li>VISIT</li>
            <li>CONTACT US</li>
            <li>IIC</li>
          </ul>
          <div>
            <p>Find Department</p>
            <img src={search} alt="Search" />
          </div>
        </div>
      </div>

      <p>{width}</p>
    </div>
  );
};

export default Navbar;
