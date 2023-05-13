import React from "react";
import styles from "../style";
import { search, downArrow, Grouplogo1 } from "../assets/asset";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(134.2);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  useEffect(() => {
    console.log(width);
  }, [width]);

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

  const [miniMenu, setMiniMenu] = useState("none");

  return (
    <div className="font-roboto relative">
      {/* Top Navbar */}
      {width >= 1440 ? (
        <div class="flex gap-4 bg-bit-red h-10 px-2">
          {/* Left Side Nav-Links */}
          <div class="item basis-0 grow">
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
          <div class="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div class="item basis-0 grow">
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
        <div class="flex gap-4 bg-bit-red h-10 px-2">
          {/* Left Side Nav-Links */}
          <div class="item basis-0 grow"></div>

          {/* White Space for logo */}
          <div class="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div class="item basis-0 grow"></div>
        </div>
      )}

      {/* Bottom Navbar */}
      {width >= 1440 ? (
        <div class="flex gap-4 h-[60px] px-2">
          {/* Left Side Nav-Links */}
          <div class="item basis-0 grow">
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
          <div class="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div class="item basis-0 grow">
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
        <div class="flex gap-4 h-[60px] px-2">
          {/* Left Side Nav-Links */}
          <div class="item basis-0 grow"></div>

          {/* White Space for logo */}
          <div class="item">
            <div className={`w-[340px] h-full bg-white inline-block`}></div>
          </div>

          {/* Right Side Nav-Links */}
          <div class="item basis-0 grow">
            <div className="h-full flex items-center justify-end gap-2">
              <IconButton aria-label="delete">
                <SearchIcon fontSize="large" />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  setAnchorEl(true);
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </div>
            <Menu
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
            </Menu>
            {/* <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              // onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 10.5,
                  left: "unset",
                  right: 0,
                  borderRadius: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
            >
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
          </div>
        </div>
      )}

      {/* BIT Logo */}
      <div className="block absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <img
          src={Grouplogo1}
          alt="BitLogo"
          className={`w-[${width}px] h-[${height}px m-auto`}
        />
      </div>
    </div>
  );
};

export default Navbar;
