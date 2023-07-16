// screen breakpoints
// sm: '360px'
// md: '834px'
// mdl: '1275px'
// lg: '1440px'
// xl: '1640px

// compoent is divided into 4 parts 
// 1 - Search Bar
// 2 - TopBar of navbar 
// 3 - BottomBar of navbar
// 4 - Main website log (BIT logo)

// structure
// bottomBar (of navBar) > sideNavbar (for Tablet and Phone)

import React from "react";
import { useState } from "react";

// consant
import { color, NavbarItems } from "../Constants";

// asset
import {
  Grouplogo1,
  bitLogo3,
  bitLogo2,
  closeIcon,
  search,
  hamburgerMenu,
} from "../assets/asset";

// imported components
import { Search } from "./index";


// Material Ui
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import GrandParent from "./subComponent/MenuItemList";



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

// const menuItemCSS = {
//   // textTransform: "capitalize",
//   color: "red",
// };

// The component
const Navbar = ({ width }) => {

  const [showSearchBar, setSearchBar] = useState(false);
  // This Function is used to transfer the state to the "showNavBar" to the child component Search 
  // so that i can manipulate the state of the function
  const handleSearchBar = (showSearchBar) => {
    setSearchBar(!showSearchBar);
  };
  
  const [navbarDisplay, setNavbarDisplay] = useState(false);
  // This function on/off navbar for tables and mobile 
  const handleNavbarDisplay = () => {
    setNavbarDisplay(!navbarDisplay);
  };


  return (
    <div className="font-roboto relative bg-scroll">
      {/* Search Bar */}
      {/* This component overlay above the all content of the website, (High z-index)  */}
      {showSearchBar ? <Search handleSearchBarState= {handleSearchBar} /> : <></>}


      {/* TopBar of Navbar - Down */}
      {/* Responsive for all three breakpoints */}
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
        // For Tablet and Mobile Devices
        <div className="flex gap-4 bg-bit-red h-10 px-2">
          {/* Left Side Nav-Links */}
          <div className="item basis-0 grow"></div>

          {/* White Space for logo */}
          <div className="item md:block sm:hidden">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div className="item basis-0 grow"></div>
        </div>
      )}
      {/* TopBar of Navbar - up */}

      {/*  BottomBar of Navbar - down  */}
      {/* Conditional statement for navbar display acc. to screen size */}
      {width >= 1440 ? (
        // navbar > bottomBar for Desktop 
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
                Moodle (lsm)
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
        // navbar > bottomBar Tablet and Mobile Devices, (contains HamburgerMenu and SearchBar) 
        <div className="flex gap-4 h-[60px] px-2">
          {/* Left Side Nav-Links */}
          <div className="item basis-0 grow"></div>

          {/* White Space for logo */}
          <div className="item md:block sm:hidden">
            <div className={`w-[340px] h-full bg-white inline-block `}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div className="item basis-0 grow">
            {/* change here */}
            <div className="h-full flex items-center justify-end gap-2 mr-[5px]">
              <IconButton aria-label="Search" onClick={() => (handleSearchBar())}>
                <img src={search} alt="Search Icon" />
              </IconButton>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleNavbarDisplay}
              >
                {/* <MenuIcon fontSize="large" /> */}
                <img
                  src={hamburgerMenu}
                  alt="Hamburger Menu"
                  className="w-[22px] h-[22px]"
                />
              </Button>
            </div>

            {/* BottomBar > sideNavBar for tablet and phone */}
            {navbarDisplay ? (
              <div className="bg-white z-50 fixed w-[418px] top-0 right-0 h-[100vh] bg-fixed ">
                <div className="flex flex-start items-center h-[138px] justify-between ml-[16px] mr-[26px]">
                  <div className="w-[210px] flex justify-around items-center">
                    <img
                      src={bitLogo2}
                      alt="BIT Logo"
                      className="w-[60px] h-[61.68px] "
                    />
                    <p className="text-[24px] font-semibold text-[#800000]">
                      BIT-DURG
                    </p>
                  </div>
                  <div className="flex justify-end items-center w-[92px] gap-[21px] ">
                    <IconButton aria-label="Search" onClick={() => {
                      handleSearchBar();
                      handleNavbarDisplay();
                    }}>
                      <img
                        src={search}
                        alt="Search Icon"
                        className="w-[30px] h-[30px]"
                      />
                    </IconButton>
                    <IconButton
                      aria-label="Close"
                      onClick={() => setNavbarDisplay(!navbarDisplay)}
                    >
                      <img
                        src={closeIcon}
                        alt="Close Icon"
                        className="w-[22px] h-[22px]"
                      />
                    </IconButton>
                  </div>
                </div>
                <List
                  component={`nav`}
                  sx={{
                    zIndex: "50",
                    bgcolor: "white",
                    position: "relative",
                    bottom: "15px",
                  }}
                >
                  {NavbarItems.map((currentValue, index1) => (
                    <div key={currentValue.key}>
                      <GrandParent item={currentValue} />
                    </div>
                  ))}
                </List>
              </div>
            ) : (
              <></>
            )}

          </div>
        </div>
      )}
      {/* BottomBar of Navbar - up */}


      {/* BIT Logo */}
      {/* The main middle logo */}
      <div className="absolute sm:hidden md:block top-0 left-1/2 -translate-x-1/2 z-20 ">
        <img src={Grouplogo1} alt="BitLogo" className="m-auto" />
      </div>
    </div>
  );
};

export default Navbar;
