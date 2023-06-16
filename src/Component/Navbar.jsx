import React from "react";
import { color, NavbarItems, About, VarNavbarItems } from "../Constants";
import { search, Grouplogo1 } from "../assets/asset";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import GrandParent from "./subComponent/GrandParent";

const stackDesign = {
  marginTop: { md: "40px", lg: "48px" },
  display: "flex",
  justifyContent: "space-between",
  height: { md: "160px", lg: "226px" },
};
const innerStackDesign = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
};
const headListStyleText = {
  "& .MuiTypography-root": {
    fontWeight: 800,
    fontFamily: "Alegreya Sans",
    color: color.bitRed,
    letterSpacing: "1px",
  },
};
const listItemTextStyle = {
  "& .MuiTypography-body1 ": {
    fontSize: "12px",
    color: color.bitRed,
    fontWeight: 500,
  },
};
// Akash - Edited - Up

const Navbar = ({ width }) => {
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemCSS = {
    // textTransform: "capitalize",
    color: "red",
  };

  const [navbarDisplay, setNavbarDisplay] = useState(true);

  const [show, setShow] = useState(false);
  const handleShow = (show) => {
    setShow(!show);
  };

  const handleNavbarDisplay = () => {
    setNavbarDisplay(!navbarDisplay);
  };

  // Akash - edit - Up

  const [miniMenu, setMiniMenu] = useState("none");

  return (
    <div className="font-roboto relative">
      {/* TopBar of Top Navbar */}
      {width >= 1440 ? (
        <div className="flex gap-4 bg-bit-red h-10 px-2">
          {/* Left Side Nav-Links */}
          <div className="item basis-0 grow">
            <div className="flex items-center h-full justify-end gap-4">
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

          {/* White Space for logo */}
          <div className="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div className="item basis-0 grow">
            <div
              className={`flex items-center h-full w-full justify-start gap-6`}
            >
              <div className="flex justify-between items-center w-full">
                {/* Nav-Links */}
                <div className="flex gap-4">
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
                {/* Search Bar */}
                <div className="bg-white w-[160px] border-0 rounded px-2 py-1 flex items-center justify-between gap-2">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Find Department..."
                    className="bg-white focus:outline-none overflow-hidden text-xs"
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
      ) : (
        <div className="flex gap-4 bg-bit-red h-10 px-2">
          {/* Left Side Nav-Links */}
          <div className="item basis-0 grow"></div>

          {/* White Space for logo */}
          <div className="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div className="item basis-0 grow"></div>
        </div>
      )}

      {/* BottomBar of Top Navbar */}
      {width >= 1440 ? (
        <div className="flex gap-4 h-[60px] px-2">
          {/* Left Side Nav-Links */}
          <div className="item basis-0 grow">
            <div className="flex items-center h-full w-full justify-end gap-6">
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

          {/* White Space for logo */}
          <div className="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div className="item basis-0 grow">
            <div
              className={`flex items-center h-full w-full justify-start gap-6`}
            >
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
      ) : (
        <div className="flex gap-4 h-[60px] px-2">
          {/* Left Side Nav-Links */}
          <div className="item basis-0 grow"></div>

          {/* White Space for logo */}
          <div className="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div className="item basis-0 grow">
            <div className="h-full flex items-center justify-end gap-2">
              <IconButton aria-label="delete">
                <SearchIcon fontSize="large" />
              </IconButton>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleNavbarDisplay}
              >
                <MenuIcon fontSize="large" />
              </Button>
            </div>

            {navbarDisplay ? (
              <List component={`nav`} sx={{ zIndex: "50", bgcolor: "white" }}>
                {/* {console.log(NavbarItems)} */}
                {NavbarItems.map((currentValue, index1) => (
                  <div key={currentValue.key}>
                    {/* {console.log(currentValue)} */}
                    {/* <p className="text-2xl text-green-600">
                      {currentValue.title}
                      {console.log(currentValue)}
                    </p> */}
                    <GrandParent item={currentValue} />
                    {/* {console.log(currentValue)} */}
                    {currentValue.content.map((current, index2) => (
                      <>
                        {/* <p className="text-xl text-red-600">
                          {current.heading}
                        </p>
                        {current.links.map((item) => (
                          <>
                            <a className="text-blue-600 block" href={item[1]}>
                              {item[0]}
                            </a>
                          </>
                        ))} */}

                        {/* <NavbarMenuItem
                          heading={currentValue.title}
                          itemArray={current.heading}
                          subItemArray={current.links[index2]}
                          key={current.key}
                        /> */}
                        {/* {console.log(currentValue.content[index].heading)} */}
                      </>
                    ))}
                  </div>
                ))}
                {/* {console.log(NavbarItems[0].title)}
                {console.log(NavbarItems[0].content[0].heading)}
                {console.log(NavbarItems[0].content[0].links[2])} */}
              </List>
            ) : (
              <></>
            )}

            {/* Akash - Edited - up */}
          </div>
        </div>
      )}

      {/* BIT Logo */}
      <div className="block absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <img src={Grouplogo1} alt="BitLogo" className="m-auto" />
      </div>
    </div>
  );
};

export default Navbar;
