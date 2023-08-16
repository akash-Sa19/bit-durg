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
import { Search, DesktopMenuBar } from "./index";

// Material Ui Import
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import List from "@mui/material/List";
import GrandParent from "./subComponent/MenuItemList";



// The component
const Navbar = ({ width }) => {

  // variables for Desktop Navbar display 
  const [admission, setAdmission] = useState(false)
  const [academics, setAcademics] = useState(false)
  const [department, setDepartment] = useState(false)
  const [placement, setPlacement] = useState(false)
  const [campusLife, setCampusLife] = useState(false)
  const [about, setAbout] = useState(false)
  const [connect, setConnect] = useState(false)

  const visit = (url) => {
    window.open(url, '_blank');
    console.log(url);
  } 

  const [showSearchBar, setSearchBar] = useState(false);
  // This Function is used to transfer the state to the "showNavBar" to the child component Search
  // so that we can manipulate the state of the function
  const handleSearchBar = (showSearchBar) => {
    setSearchBar(!showSearchBar);
  };

  const [navbarDisplay, setNavbarDisplay] = useState(false);
  // This function on/off navbar for tables and mobile
  const handleNavbarDisplay = () => {
    setNavbarDisplay(!navbarDisplay);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // styles
  const buttonStyle = {
    color: "white",
    "&:hover": {
      color: "#ddd",
      backgroundColor: "rgba(245, 245, 245, 0.1)",
    },
  };
  const bottomNavLinkStyle = {
    color: "black",
    fontSize: '16px',
    transition: 'all 0.4 ease',
    borderRadius : 0,
    "&:hover": {
      color: color.bitRed,
      backgroundColor: "white",
    },
    '&:active': {
      color: color.bitRed,
    }
  };

  

  return (
    <div className="relative bg-scroll font-roboto">
      {/* Search Bar */}
      {/* This component overlay above the all content of the website, (High z-index)  */}
      {showSearchBar ? (
        <Search handleSearchBarState={handleSearchBar} />
      ) : (
        <></>
      )}

      {/* TopBar of Navbar - Down */}
      {/* Responsive for all three breakpoints */}
      {width >= 1440 ? (
        <div className="flex h-10 gap-4 px-2 bg-bit-red">
          {/* Left Side Nav-Links */}
          <div className="item basis-0 grow">
            <div className="flex items-center justify-end h-full gap-4">
              <Button variant="text" sx={buttonStyle} >
                Event
              </Button>
              <Button variant="text" sx={buttonStyle} onClick={ () => visit('#news')}>
                News
              </Button>
              <Button variant="text" sx={buttonStyle} onClick={ () => visit('https://bitdurg.ac.in/')}>
                Careers
              </Button>
              <Button variant="text" sx={buttonStyle} onClick={ () => visit('https://bitdurg.ac.in/all-notices-list')}>
                Notices
              </Button>
            </div>
          </div>

          {/* White Space for logo */}
          <div className="item">
            <div className={`w-[340px] h-full bg-bit-red inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div className="item basis-0 grow">
            <div
              className={`flex items-center h-full w-full justify-start gap-6`}
            >
              <div className="flex items-center justify-between w-full">
                {/* Nav-Links */}
                <div className="flex gap-4">
                  <Button variant="text" sx={buttonStyle} onClick={ () => visit('https://bitdurg.edu.in/')}>
                  Moodle
                  </Button>
                  <Button variant="text" sx={buttonStyle} >
                    Visit
                  </Button>
                  <Button variant="text" sx={buttonStyle} >
                    Contact Us
                  </Button>
                  <Button variant="text" sx={buttonStyle} onClick={() => visit('https://bitdurg.ac.in/iic')}>
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
                    className="overflow-hidden text-xs bg-white focus:outline-none"
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
        <div className="flex gap-4 bg-bit-red h-[30px] px-2">
          {/* Left Side Nav-Links */}
          <div className="item basis-0 grow"></div>

          {/* White Space for logo */}
          {/* <div className="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div> */}

          {/* Right Side Nav-Links */}
          <div className="item basis-0 grow"></div>
        </div>
      )}
      {/* TopBar of Navbar - up */}

      {/* ------------------------------------------------- */}
      {/* ------------------------------------------------- */}

      {/*  BottomBar of Navbar - down  */}
      {/* Conditional statement for navbar display acc. to screen size */}
      {width >= 1440 ? (
        // navbar > bottomBar for Desktop
        <div className="flex gap-4 h-[60px] px-2">
          {/* Left Side Nav-Links */}
          <div className="item basis-0 grow">
            <div className="flex items-center justify-end w-full h-full gap-6 ">
              <Button variant="text" sx={bottomNavLinkStyle} 
              onClick={() => {
                setAdmission((prevState) => !prevState);
                setAcademics(false);
                setDepartment(false);
                setCampusLife(false)
                setAbout(false);
                setConnect(false);
                setPlacement(false);
              }}>
                Admission
              </Button>
              <DesktopMenuBar menuIndex= {2} open={admission} />

              <Button variant="text" sx={bottomNavLinkStyle} 
              onClick={() => {
                setAcademics((prevState) => !prevState);
                setAdmission(false);
                setDepartment(false);
                setCampusLife(false)
                setAbout(false);
                setConnect(false);
                setPlacement(false);
              }}>
                Academics
              </Button>
              <DesktopMenuBar menuIndex= {1} open={academics} />

              <Button variant="text" sx={bottomNavLinkStyle}
              onClick={() => {
                setDepartment((prevState) => !prevState)
                setAdmission(false);
                setCampusLife(false)
                setAbout(false);
                setConnect(false);
                setPlacement(false);
                setAcademics(false);

              }}>
                Department
              </Button>
              <DesktopMenuBar menuIndex= {3} open={department} />

              <Button variant="text" sx={bottomNavLinkStyle}
              onClick={() => {
                setPlacement((prevState) => !prevState);
                setAdmission(false);
                setCampusLife(false)
                setAbout(false);
                setConnect(false);
                setAcademics(false);
                setDepartment(false);

              }}>
                Placement
              </Button>
              <DesktopMenuBar menuIndex= {4} open={placement} />

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
              <Button variant="text" sx={bottomNavLinkStyle} 
              onClick={() => {
                setCampusLife((prevState) => !prevState);
                setAdmission(false);
                setAbout(false);
                setConnect(false);
                setAcademics(false);
                setDepartment(false);
                setPlacement(false);

              }}>
                Campus Life
              </Button>
              <DesktopMenuBar menuIndex= {5} open={campusLife} />

              <Button variant="text" sx={bottomNavLinkStyle}
              onClick={() => {
                setAbout((prevState) => !prevState);
                setAcademics(false);
                setDepartment(false);
                setCampusLife(false)
                setConnect(false);
                setPlacement(false);
                setAdmission(false);

              }}>
                About
              </Button>
              <DesktopMenuBar menuIndex= {0} open={about} />


              <Button variant="text" sx={bottomNavLinkStyle}
              onClick={() => {
                setConnect((prevState) => !prevState);
                setAcademics(false);
                setDepartment(false);
                setCampusLife(false)
                setAbout(false);
                setPlacement(false);
                setAdmission(false);

              }}>
                Connect
              </Button>
              <DesktopMenuBar menuIndex= {6} open={connect} />


              <Button variant="text" sx={bottomNavLinkStyle} onClick={() => visit('http://bitdurg.ac.in/syllabus')}>
                Syllabus
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row-reverse h-[40px]">
          {/* Left Side Nav-Links */}
          {/* <div className="item basis-0 grow"></div> */}

          {/* White Space for logo */}
          {/* <div className="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div> */}

          {/* Right Side Nav-Links */}
          <div className="item basis-0 grow">
            {/* change here */}
            <div className="flex items-center justify-end h-full gap-1">
              <IconButton aria-label="Search" onClick={() => handleSearchBar()}>
                <img src={search} alt="Search Icon" />
              </IconButton>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ minWidth: 0 }}
                onClick={handleClick}
              >
                {/* <MenuIcon fontSize="large" /> */}
                <img
                  src={hamburgerMenu}
                  alt="Hamburger Menu"
                  className="w-[22px] h-[22px] min-w-0"
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={
                  width > 576
                    ? {
                        style: {
                          width: 418, // Set the desired width for the Menu
                          height: "100vh",
                          right: 0,
                          top: 16,
                          borderRadius: 0,
                        },
                      }
                    : {
                        style: {
                          width: width, // Set the desired width for the Menu
                          height: "100vh",
                          right: 0,
                          top: 16,
                          borderRadius: 0,
                        },
                      }
                }
                MenuListProps={{
                  style: {
                    padding: 0, // Remove padding from the MenuList
                  },
                }}
                sx={
                  width > 576
                    ? {
                        left: 15,
                        right: 0,
                        top: 16,
                        width: 418,
                        height: "115vh",
                      }
                    : {
                        left: 16,
                        right: 0,
                        top: 16,
                        width: width + 32,
                        height: "115vh",
                      }
                }
                TransitionComponent={Slide}
                TransitionProps={{ direction: "left" }} // Change to 'right' for leave animation
              >
                <div className="flex justify-between items-center h-[94px] pl-4 pr-3">
                  <div className="w-[210px] flex gap-2 items-center">
                    <img
                      src={bitLogo2}
                      alt="BIT Logo"
                      className="w-[60px] h-[61.68px] "
                    />
                    <p className="text-[24px] font-semibold text-[#800000]">
                      BIT-DURG
                    </p>
                  </div>
                  {/* change here */}
                  <div className="flex justify-end items-center w-[92px] gap-[21px] ">
                    <IconButton
                      aria-label="Search"
                      onClick={() => {
                        handleSearchBar();
                      }}
                    >
                      <img
                        src={search}
                        alt="Search Icon"
                        className="w-[30px] h-[30px]"
                      />
                    </IconButton>
                    <IconButton aria-label="Close" onClick={handleClose}>
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
                    <div key={currentValue.key} className="bg-[#f9f5ef]">
                      <GrandParent item={currentValue} />
                    </div>
                  ))}
                </List>
              </Menu>
            </div>

            {/* BottomBar > sideNavBar for tablet and phone */}
            {/* Not is use anymore, it has been replaced with Menu Component */}
            {navbarDisplay ? (
              <div className="bg-white z-50 fixed w-[418px] sml:w-[418px] sm:w-[100vw] top-0 right-0 h-[100vh] bg-fixed ">
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
                    <IconButton
                      aria-label="Search"
                      onClick={() => {
                        handleSearchBar();
                        handleNavbarDisplay();
                      }}
                    >
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
                    <div key={currentValue.key} className="bg-[#f9f5ef]">
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
      <div className="absolute top-0 z-20 -translate-x-1/2 -translate-y-1 left-1/2 ">
        <img src={Grouplogo1} alt="BitLogo" className="m-auto" />
      </div>
    </div>
  );
};

export default Navbar;
