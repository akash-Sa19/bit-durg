import React from "react";
import { color, NavbarItems, About, VarNavbarItems } from "../Constants";
import { NavbarMenuItem } from './index'
import { search, Grouplogo1 } from "../assets/asset";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

import List from '@mui/material/List';

// Akash - Edited - Up


// Akash - Edited - Down
const stackDesign = {
  marginTop: { md: '40px', lg: '48px' },
  display: 'flex',
  justifyContent: 'space-between',
  height: { md: '160px', lg: '226px' }
}
const innerStackDesign = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
}
const headListStyleText = {
  '& .MuiTypography-root': {
    fontWeight: 800,
    fontFamily: 'Alegreya Sans',
    color: color.bitRed,
    letterSpacing: '1px',

  }
}
const listItemTextStyle = {
  '& .MuiTypography-body1 ': {
    fontSize: '12px',
    color: color.bitRed,
    fontWeight: 500,
  }
}
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


  // Akash - Edit - Down
  // const [open1, setOpen1] = useState(false);
  // const [open1a, setOpen1a] = useState(false);
  // const [open1b, setOpen1b] = useState(false);
  // const [open1c, setOpen1c] = useState(false);
  // const [open1d, setOpen1d] = useState(false);
  // const [open1e, setOpen1e] = useState(false);
  // const [open1f, setOpen1f] = useState(false);
  // const [open2, setOpen2] = useState(false);
  // const [open2a, setOpen2a] = useState(false);
  // const [open2b, setOpen2b] = useState(false);
  // const [open2c, setOpen2c] = useState(false);
  // const [open2d, setOpen3d] = useState(false);
  // const [open2e, setOpen4e] = useState(false);
  // const [open3, setOpen3] = useState(false);
  // const [open4, setOpen4] = useState(false);

  const [navbarDisplay, setNavbarDisplay] = useState(true);

  const [show, setShow] = useState(false);
  const handleShow = (show) => {
    setShow(!show)
  }

  // const handleClick1 = () => {
  //   setOpen1(!open1);
  // }
  // const handleClick1a = () => {
  //   setOpen1a(!open1a);
  // }
  // const handleClick1b = () => {
  //   setOpen1b(!open1b);
  // }
  // const handleClick1c = () => {
  //   setOpen1c(!open1c);
  // }
  // const handleClick1d = () => {
  //   setOpen1d(!open1d);
  // }
  // const handleClick1e = () => {
  //   setOpen1e(!open1e);
  // }
  // const handleClick1f = () => {
  //   setOpen1f(!open1f);
  // }
  // const handleClick2 = () => {
  //   setOpen2(!open2);
  // }
  // const handleClick3 = () => {
  //   setOpen3(!open3);
  // }
  // const handleClick4 = () => {
  //   setOpen4(!open4);
  // }
  const handleNavbarDisplay = () => {
    setNavbarDisplay(!navbarDisplay);
  }

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
            {/* <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu> */}
            {/* Akash - commented - down */}
            {/* <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  // mt: 1,
                  px: 1,
                  width: 300,
                  borderRadius: 2,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
            >
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <MenuItem
                sx={menuItemCSS}
                onClick={() =>
                  miniMenu === "admission"
                    ? setMiniMenu("none")
                    : setMiniMenu("admission")
                }
              >
                Admission
              </MenuItem>
              <ul className="list-none">
                <li>Mini Menu</li>
                <li>Mini Menu</li>
                <li>Mini Menu</li>
                <li>Mini Menu</li>
              </ul>
              {miniMenu === "admission" ? (
                <>
                  <MenuItem sx={menuItemCSS}>Admission</MenuItem>
                  <MenuItem sx={menuItemCSS}>Admission</MenuItem>
                  <MenuItem sx={menuItemCSS}>Admission</MenuItem>
                </>
              ) : (
                <></>
              )}

              <MenuItem sx={menuItemCSS}>Academics</MenuItem>
              <MenuItem sx={menuItemCSS}>Department</MenuItem>
              <MenuItem sx={menuItemCSS}>Placement</MenuItem>
              <MenuItem sx={menuItemCSS}>More</MenuItem>
            </Menu> */}
            {/* Akash - commented - up */}

            {/* Akash - Edited - down */}
            {navbarDisplay ?
              (
                // <List
                //   // set position and desifn it for responsive 
                //   // the on and off of tablet nav bar is done 
                //   // then we just have to make it responsive 
                //   // start work from there ->
                //   component={`nav`}
                //   className=' absolute '
                // >
                //   {/* About  1 */}
                //   <Divider component="li" />
                //   <ListItemButton onClick={handleClick1}>
                //     <ListItemText primary="ABOUT" sx={headListStyleText} />
                //     {open1 ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //   </ListItemButton>
                //   <Collapse in={open1} timeout={`auto`} unmountOnExit >

                //     <List component={`div`} disablePadding>
                //       {/* Glance At BIT-Durg 1.a */}
                //       <ListItemButton onClick={handleClick1a}>
                //         <ListItemText sx={listItemTextStyle}>Glance At BIT-Durg</ListItemText >
                //         {open1a ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //       </ListItemButton>
                //       {/* Inside Glance At BIT-Durg  1.a.a */}
                //       <Collapse in={open1a} timeout={`auto`} unmountOnExit >

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>About</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Mission & Vision</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Quality Policy</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Visionaries</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Principal</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Vice Principal</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Mandatory Disclosures</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>NAAC-NBA Status</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Committees (2022-24)</ListItemText >
                //         </ListItemButton>
                //       </Collapse>

                //       {/* Administration  1.b */}
                //       <ListItemButton onClick={handleClick1b}>
                //         <ListItemText sx={listItemTextStyle}>Administration</ListItemText>
                //         {open1b ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //       </ListItemButton>
                //       {/* Inside Administration  1.b.a */}
                //       <Collapse in={open1b} timeout={`auto`} unmountOnExit>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Audit Report</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Governance</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Governance Member</ListItemText >
                //         </ListItemButton>

                //       </Collapse>
                //       {/* Collaboration  1.c */}
                //       <ListItemButton onClick={handleClick1c}>
                //         <ListItemText sx={listItemTextStyle}>Collaboration</ListItemText >
                //         {open1c ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //       </ListItemButton>
                //       {/* Inside Collaboration 1.c.a  */}
                //       <Collapse in={open1c} timeout={`auto`} unmountOnExit>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>MOU & Tie-Ups</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Professional Membership</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>ERASMUS + Staff & Student Mobility</ListItemText >
                //         </ListItemButton>
                //       </Collapse>
                //       {/* Care @ BIT-Durg 1.d */}
                //       <ListItemButton onClick={handleClick1d}>
                //         <ListItemText sx={listItemTextStyle}>Care @ BIT-Durg</ListItemText >
                //         {open1d ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //       </ListItemButton>
                //       {/* Inside Care @ BIT-Durg 1.d.a  */}
                //       <Collapse in={open1d} timeout={`auto`} unmountOnExit>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Anti Ragging</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Women Security Cell</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Grievance Redressal</ListItemText >
                //         </ListItemButton>
                //       </Collapse>

                //       {/* More... 1.e */}
                //       <ListItemButton onClick={handleClick1e}>
                //         <ListItemText sx={listItemTextStyle}>More...</ListItemText >
                //         {open1e ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //       </ListItemButton>
                //       {/* Inside More... 1.e.a  */}
                //       <Collapse in={open1e} timeout={`auto`} unmountOnExit>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Awards & Achievements</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Panaroma Magazine</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Newspaper</ListItemText >
                //         </ListItemButton>
                //       </Collapse>

                //       {/* Another Campus 1.f */}
                //       <ListItemButton onClick={handleClick1f}>
                //         <ListItemText sx={listItemTextStyle}>Another Campus</ListItemText >
                //         {open1f ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //       </ListItemButton>
                //       {/* Inside Another Campus 1.f.a  */}
                //       <Collapse in={open1f} timeout={`auto`} unmountOnExit>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>BIT Raipur</ListItemText >
                //         </ListItemButton>
                //       </Collapse>
                //     </List>
                //   </Collapse>

                //   {/* Academic 2 */}
                //   <Divider component='li' />
                //   <ListItemButton onClick={() => handleShow(show)}>
                //     <ListItemText primary="ACADEMICS" sx={headListStyleText} />
                //     {show ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //   </ListItemButton>
                //   <Collapse in={show} timeout={`auto`} unmountOnExit >
                //     <ListItemButton onClick={() => handleShow(show)}>
                //       <ListItemText primary={Academics[0].heading} sx={headListStyleText} />
                //       {show ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //     </ListItemButton>
                //     <Collapse in={show} timeout={`auto`} unmountOnExit >
                //       <ListItemButton >
                //         <ListItemText sx={listItemTextStyle}>Reservation Policy</ListItemText >
                //       </ListItemButton>
                //       <ListItemButton >
                //         <ListItemText sx={listItemTextStyle}>Reservation Policy</ListItemText >
                //       </ListItemButton>
                //       <ListItemButton >
                //         <ListItemText sx={listItemTextStyle}>Reservation Policy</ListItemText >
                //       </ListItemButton>
                //       <ListItemButton >
                //         <ListItemText sx={listItemTextStyle}>Reservation Policy</ListItemText >
                //       </ListItemButton>
                //       <ListItemButton >
                //         <ListItemText sx={listItemTextStyle}>Reservation Policy</ListItemText >
                //       </ListItemButton>
                //     </Collapse>
                //   </Collapse>



                //   {/* Admission 3 */}
                //   <Divider component="li" />
                //   {/* Admission Button  */}
                //   <ListItemButton onClick={handleClick1}>
                //     <ListItemText primary="ADMISSION" sx={headListStyleText} />
                //     {open1 ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //   </ListItemButton>
                //   <Collapse in={open1} timeout={`auto`} unmountOnExit >

                //     {/* Middle List */}
                //     <List component={`div`} disablePadding>
                //       {/* Get Started 3.a */}
                //       <ListItemButton onClick={handleClick1a}>
                //         <ListItemText sx={listItemTextStyle}>Get Started</ListItemText >
                //         {open1a ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //       </ListItemButton>
                //       {/* Inside GetStarted 3.a.a */}
                //       <Collapse in={open1a} timeout={`auto`} unmountOnExit >

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Admission Procedure</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Reservation Policy</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Tution Fees Waiver Scheme</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Scholorships</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Fees Structure (2022-23)</ListItemText >
                //         </ListItemButton>

                //         <ListItemButton >
                //           <ListItemText sx={listItemTextStyle}>Fees Structure (2021-22)</ListItemText >
                //         </ListItemButton>

                //       </Collapse>

                //       {/* Regular Course  3.b */}
                //       <ListItemButton onClick={handleClick1b}>
                //         <ListItemText sx={listItemTextStyle}>Regular Course</ListItemText>
                //         {open1b ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //       </ListItemButton>
                //       {/* Inside RegularCourse  3.b.a*/}
                //       <Collapse in={open1b} timeout={`auto`} unmountOnExit>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>B.Tech</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>M.Tech</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>MCA</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>MBA</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>Ph.D</ListItemText >
                //         </ListItemButton>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>B.Voc</ListItemText >
                //         </ListItemButton>

                //       </Collapse>
                //       {/* Lateral Entry Courses 3.c */}
                //       <ListItemButton onClick={handleClick1c}>
                //         <ListItemText sx={listItemTextStyle}>Lateral Entry Courses</ListItemText >
                //         {open1c ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //       </ListItemButton>
                //       {/* Inside LateralEntryCourse  */}
                //       <Collapse in={open1c} timeout={`auto`} unmountOnExit>
                //         <ListItemButton>
                //           <ListItemText sx={listItemTextStyle}>B.Tech Lateral Entry</ListItemText >
                //         </ListItemButton>
                //       </Collapse>
                //     </List>
                //   </Collapse>
                //   <Divider component="li" />

                //   {/* Quick Links */}
                //   {/* 5.a.b */}
                //   <ListItemButton
                //     onClick={handleClick2}
                //   >
                //     <ListItemText primary="QUICK LINKS"
                //       sx={headListStyleText}
                //     />
                //     {open1 ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //   </ListItemButton>
                //   <Collapse in={open2} timeout={`auto`} unmountOnExit>
                //     <List>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Online Fee Payment
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Sitemap
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           UCO Bank
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Gymnasium
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           E-Book
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Facilities
                //         </ListItemText>
                //       </ListItemButton>
                //     </List>
                //   </Collapse>
                //   <Divider component="li" />


                //   {/* Download */}
                //   {/* 5.a.c */}
                //   <ListItemButton
                //   //  onClick={handleClick3}
                //   >
                //     <ListItemText primary="DOWNLOAD"
                //       sx={headListStyleText}
                //     />
                //     {open3 ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //   </ListItemButton>
                //   <Collapse in={open3} timeout={`auto`} unmountOnExit>
                //     <List>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Backlog Exam Form
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Transfer & Provisional<br />Certificate Form
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Revaluation Form
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Calender
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Prospectus
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           Magazine
                //         </ListItemText>
                //       </ListItemButton>

                //     </List>
                //   </Collapse>
                //   <Divider component="li" />

                //   {/* Important */}
                //   {/* 5.a.d */}
                //   <ListItemButton
                //     onClick={handleClick4}
                //   >
                //     <ListItemText primary="IMPORTANT"
                //       sx={headListStyleText}
                //     />
                //     {open4 ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
                //   </ListItemButton>
                //   <Collapse in={open4} timeout={`auto`} unmountOnExit>
                //     <List>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           CSVTU Calender
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           BIT Alumni
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           AICTE
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} sx={listItemTextStyle}>
                //           University Grants<br />Commission
                //         </ListItemText>
                //       </ListItemButton>
                //       <ListItemButton>
                //         <ListItemText inset={true} primary="DTE Raipur" sx={listItemTextStyle} />
                //       </ListItemButton>
                //     </List>
                //   </Collapse>
                //   <Divider component="li" />

                // </List>

                <List component={`nav`}>
                  {NavbarItems.map((currentValue, index1) => (
                    <div key={currentValue.key}>
                    {currentValue.content.map((current, index2) => (
                      <>
                        <NavbarMenuItem heading={currentValue.title}
                          itemArray={current.heading}
                          subItemArray={current.links[index2]}
                          key={current.key} />
                        {/* {console.log(currentValue.content[index].heading)} */}
                      </>
                      ))}
                     </div>
                  ))}
                  {console.log(NavbarItems[0].title)}
                  {console.log(NavbarItems[0].content[0].heading)}
                  {console.log(NavbarItems[0].content[0].links[2])}
                </List>
              )
              : (<></>)}

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
