import React, { useState } from "react";
import {
  bitLogo3,
  bitBuildingIcon,
  callIcon,
  locationIcon,
  mailIcon,
} from "../assets/asset";
import { Stack, Link, IconButton, Collapse } from "@mui/material";
import { color } from "../Constants";
import "../index.css";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
// import ListItem from '@mui/material/ListItem';
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

// import PlayCircleTwoToneIcon from '@mui/icons-material/PlayCircleTwoTone';
// <IconButton aria-label='Play Button' size='small' sx={{color:'common.white'}} >
//     <PlayCircleTwoToneIcon fontSize='inherit' />
// </IconButton>

const LinkDesign = {
  fontWeight: 500,
  color: color.bitRed,
  fontSize: { md: "12px", lg: "18px" },
  textDecoration: "none",
};
// console.log(12 / 8.34);

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
// const calculation = (width, viewport) => {
//     const viewportSize = {
//         'lg': 1440,
//         'md': 834,
//         'sm': 360
//     }
//     return (
//         width / ((viewportSize[viewport]) / 100)
//     )
// }
// console.log(calculation(310, 'lg'))

const BitBuildingIcon = () => <img src={bitBuildingIcon} />;
const CallIcon = () => <img src={callIcon} />;
const LocationIcon = () => <img src={locationIcon} />;
const MailIcon = () => <img src={mailIcon} />;

// console.log(LinkDesign.color);

const Footer = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  return (
    <div className="w-[100vw] relative mt-[150px]">
      {/* Footer Heading */}
      {/* 1 */}
      <div className="lg:h-[180px] sm:h-[100px] bg-bit-red flex justify-center items-center gap-2">
        {/* Div Contain logo */}
        {/* 1.a */}
        <div className="">
          <img
            src={bitLogo3}
            alt="BIT LOGO"
            className="lg:w-[94px] lg:h-[98px] md:w-[59.06px] md:h-[60.88px] sm:w-[48.12px] sm:h-[49.74px]"
          />
        </div>
        {/* Div Contain Title */}
        {/* 1.b */}
        <div className="text-center">
          <p className="font-serif-pro font-semibold  lg:leading-10 sm:tracking-[3px] lg:text-[37.94px] md:text-[22.97px] sm:leading-[24.43px]  text-white">
            BHILAI INSTITUTE
            <br />
            OF TECHNOLOGY
          </p>
        </div>
      </div>
      {/* Horizonatal Bar 1 */}
      {/* 2 */}
      <div className="h-[4px] bg-white"></div>
      {/* Horizonatal Bar 2*/}
      {/* 3 */}
      <div className="h-[10px] bg-bit-red"></div>

      {/* Footer Links */}
      {/* 4 */}
      <div className="md:flex sm:hidden md:items-start md:justify-evenly md:gap-[36px] lg:mt-5 md:mt-3 ">
        {/* Address */}
        {/* 4.a */}
        <div>
          <h3
            className={`font-extrabold lg:text-[28.8px] font-alegreya-sans text-bit-red md:text-[20px] tracking-[2px]`}
          >
            ADDRESS
          </h3>
          {/* Spacing in MUI is Multiple of 8 */}
          {/* like in this example it is 8*2= 16px */}
          {/* 4.a.a */}
          <Stack sx={stackDesign} spacing="2px">
            {/* 4.a.a.a */}
            <Stack sx={innerStackDesign}>
              <IconButton aria-label="BIT Building Icon" size="small">
                <BitBuildingIcon />
              </IconButton>
              <Link sx={LinkDesign}>
                <span className="underlineAnimation">Institute Code: 01</span>
              </Link>
            </Stack>

            {/* 4.a.a.b */}
            <Stack sx={innerStackDesign}>
              <IconButton aria-label="BIT Location Icon" size="small">
                <LocationIcon />
              </IconButton>
              <Link sx={LinkDesign}>
                <span className="underlineAnimation">
                  Bhilai House, Durg
                  <br />
                  Chhattishgarh - 491001
                </span>
              </Link>
            </Stack>

            {/* 4.a.a.c */}
            <Stack sx={innerStackDesign}>
              <IconButton aria-label="Call Icon" size="small">
                <CallIcon />
              </IconButton>
              <Link sx={LinkDesign}>
                <span className="underlineAnimation">0788-2359297</span>
              </Link>
            </Stack>

            {/* 4.a.a.d */}
            <Stack sx={innerStackDesign}>
              <IconButton aria-label="Mail Icon" size="small">
                <MailIcon />
              </IconButton>
              <Link sx={LinkDesign}>
                <a href="mailto:bit@bitdurg.ac.in" target="_blank" className="underlineAnimation">bit@bitdurg.ac.in</a>
              </Link>
            </Stack>
          </Stack>
        </div>

        {/* Quick Links */}
        {/* 4.a.b */}
        <div>
          <h3
            className={`font-extrabold lg:text-[28.8px] font-alegreya-sans text-bit-red md:text-[20px] tracking-[2px]`}
          >
            QUICK LINKS
          </h3>
          <Stack sx={stackDesign}>
            <Link sx={LinkDesign}>
              <a
                href="https://www.bitdurg.ac.in/online-payment"
                target="_blank"
                className="underlineAnimation"
              >
                Online Fee Payment
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="https://bitdurg.ac.in/sitemap"
                target="_blank"
                className="underlineAnimation"
              >
                Sitemap
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="https://bitdurg.ac.in/bank"
                target="_blank"
                className="underlineAnimation"
              >
                UCO Bank
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="https://bitdurg.ac.in/gym"
                target="_blank"
                className="underlineAnimation"
              >
                Gymnasium
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="http://172.16.0.8/bitdurg_offline/elib.php"
                target="_blank"
                className="underlineAnimation"
              >
                E-Book
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="https://bitdurg.ac.in/amenities"
                target="_blank"
                className="underlineAnimation"
              >
                Facilities
              </a>
            </Link>
          </Stack>
        </div>

        {/* Downloads */}
        {/* 4.a.c */}
        <div>
          <h3
            className={`font-extrabold lg:text-[28.8px] font-alegreya-sans text-bit-red md:text-[20px] tracking-[2px]`}
          >
            DOWNLOADS
          </h3>
          <Stack sx={stackDesign}>
            <Link sx={LinkDesign}>
              <a
                href="http://bitdurg.ac.in/downloads/Forms/Backlog_Exam_Form_2021-22.pdf"
                target="_blank"
                className="underlineAnimation"
              >
                Backlog Exam Form
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="http://bitdurg.ac.in/downloads/Forms/Transfer_Provisional_Certificate_Form.pdf"
                target="_blank"
                className="underlineAnimation"
              >
                Transfer & Provisional
                <br />
                Certificate Form
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="https://bitdurg.ac.in/pdf/REVALUATION%20FORM%20FOR%20AUTONOMOUS%20BATCH.pdf"
                target="_blank"
                className="underlineAnimation"
              >
                Revaluation Form
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="https://www.bitdurg.ac.in/downloads/BIT_Durg_Calendar_2023.pdf"
                target="_blank"
                className="underlineAnimation"
              >
                Calender
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="https://drive.google.com/file/d/1JOqPbhfwY0tDfDHLDpP4xrsXcXw8j7j2/view"
                target="_blank"
                className="underlineAnimation"
              >
                Prospectus
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a
                href="http://www.bitdurg.ac.in/downloads/annual-magazine.pdf"
                target="_blank"
                className="underlineAnimation"
              >
                Magazine
              </a>
            </Link>
          </Stack>
        </div>

        {/* 4.a.d */}
        <div>
          <h3
            className={`font-extrabold lg:text-[28.8px] font-alegreya-sans text-bit-red md:text-[20px] tracking-[2px]`}
          >
            IMPORTANT LINKS
          </h3>
          <Stack sx={stackDesign}>
            <Link sx={LinkDesign}>
              <a href="http://csvtu.ac.in/" target="_blank" className="underlineAnimation">
                CSVTU Calender
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a href="https://alumni.bitdurg.ac.in/" target="_blank" className="underlineAnimation">
                BIT Alumni
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a href="https://www.aicte-india.org/" target="_blank" className="underlineAnimation">
                AICTE
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a href="https://www.ugc.ac.in/" target="_blank" className="underlineAnimation">
                University Grants
                <br />
                Commission
              </a>
            </Link>
            <Link sx={LinkDesign}>
              <a href="https://www.cgdte.in/" target="_blank" className="underlineAnimation">DTE Raipur</a>
            </Link>
          </Stack>
        </div>
        {/* <p><a href="#acs" className="underline">Underline<br/>version</a></p> */}
        {/* <p><a href="#" className='text-red-700 hover:text-yellow-600'>Apple</a></p> */}
      </div>

      {/* Footer For Small Devices like Phone */}
      {/* 5 */}

      <div className="md:hidden sm:block w-full my-[20px]">
        <div className="flex justify-center items-center">
          {/* 5.a */}
          <List component={`nav`} className="w-[90%] ">
            {/* Address */}
            {/* 5.a.a */}
            <Divider component="li" />
            <ListItemButton onClick={handleClick1}>
              <ListItemText primary="ADDRESS" sx={headListStyleText} />
              {open1 ? (
                <ArrowDropUpRoundedIcon />
              ) : (
                <ArrowDropDownRoundedIcon />
              )}
            </ListItemButton>
            <Collapse in={open1} timeout={`auto`} unmountOnExit>
              <List component={`div`} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BitBuildingIcon />
                  </ListItemIcon>
                  <ListItemText sx={listItemTextStyle}>
                    Institute Code: 01
                  </ListItemText>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <LocationIcon />
                  </ListItemIcon>
                  <ListItemText sx={listItemTextStyle}>
                    Bhilai House, Durg
                    <br />
                    Chhattishgarh - 491001
                  </ListItemText>
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <CallIcon />
                  </ListItemIcon>
                  <ListItemText sx={listItemTextStyle}>
                    0788-2359297
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="mailto:bit@bitdurg.ac.in" target="_blank">
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText sx={listItemTextStyle}>
                    bit@bitdurg.ac.in
                  </ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            <Divider component="li" />

            {/* Quick Links */}
            {/* 5.a.b */}
            <ListItemButton onClick={handleClick2}>
              <ListItemText primary="QUICK LINKS" sx={headListStyleText} />
              {open1 ? (
                <ArrowDropUpRoundedIcon />
              ) : (
                <ArrowDropDownRoundedIcon />
              )}
            </ListItemButton>
            <Collapse in={open2} timeout={`auto`} unmountOnExit>
              <List>

                <ListItemButton href="https://bitdurg.ac.in/online-payment" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle} >
                    Online Fee Payment
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://bitdurg.ac.in/sitemap" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    Sitemap
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://bitdurg.ac.in/bank" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    UCO Bank
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://bitdurg.ac.in/gym" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    Gymnasium
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="http://172.16.0.8/bitdurg_offline/elib.php" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    E-Book
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://bitdurg.ac.in/amenities" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    Facilities
                  </ListItemText>
                </ListItemButton>
                 
              </List>
            </Collapse>
            <Divider component="li" />

            {/* Download */}
            {/* 5.a.c */}
            <ListItemButton onClick={handleClick3}>
              <ListItemText primary="DOWNLOAD" sx={headListStyleText} />
              {open3 ? (
                <ArrowDropUpRoundedIcon />
              ) : (
                <ArrowDropDownRoundedIcon />
              )}
            </ListItemButton>
            <Collapse in={open3} timeout={`auto`} unmountOnExit>
              <List>

                <ListItemButton href="http://bitdurg.ac.in/downloads/Forms/Backlog_Exam_Form_2021-22.pdf" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    Backlog Exam Form
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="http://bitdurg.ac.in/downloads/Forms/Transfer_Provisional_Certificate_Form.pdf" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    Transfer & Provisional
                    <br />
                    Certificate Form
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://bitdurg.ac.in/pdf/REVALUATION%20FORM%20FOR%20AUTONOMOUS%20BATCH.pdf" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    Revaluation Form
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://www.bitdurg.ac.in/downloads/BIT_Durg_Calendar_2023.pdf" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    Calender
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://drive.google.com/file/d/1JOqPbhfwY0tDfDHLDpP4xrsXcXw8j7j2/view" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    Prospectus
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="http://www.bitdurg.ac.in/downloads/annual-magazine.pdf" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    Magazine
                  </ListItemText>
                </ListItemButton>

              </List>
            </Collapse>
            <Divider component="li" />

            {/* Important */}
            {/* 5.a.d */}
            <ListItemButton onClick={handleClick4}>
              <ListItemText primary="IMPORTANT" sx={headListStyleText} />
              {open4 ? (
                <ArrowDropUpRoundedIcon />
              ) : (
                <ArrowDropDownRoundedIcon />
              )}
            </ListItemButton>
            <Collapse in={open4} timeout={`auto`} unmountOnExit>
              <List>

                <ListItemButton href="http://csvtu.ac.in/" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    CSVTU Calender
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://alumni.bitdurg.ac.in/" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    BIT Alumni
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://www.aicte-india.org/" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    AICTE
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://www.ugc.ac.in/" target="_blank">
                  <ListItemText inset={true} sx={listItemTextStyle}>
                    University Grants
                    <br />
                    Commission
                  </ListItemText>
                </ListItemButton>

                <ListItemButton href="https://www.cgdte.in/" target="_blank">
                  <ListItemText
                    inset={true}
                    primary="DTE Raipur"
                    sx={listItemTextStyle}
                  />
                </ListItemButton>

              </List>
            </Collapse>
            <Divider component="li" />
          </List>
        </div>
      </div>

      {/* Horizonatal Bar 3*/}
      {/* 6 */}
      <div className="absolute lg:top-[276px] md:top-[168px] w-full md:block sm:hidden">
        <div className="bg-bit-yellow h-[4px] w-full"></div>
        <div className="bg-bit-red h-[4px] w-full"></div>
      </div>

      {/* Horizontal Bar 4 */}
      <div className="bg-bit-red lg:h-[60px] md:h-[50px] sm:h-[30px] md:mt-8 sm:mt-[0px] flex justify-start items-center ">
        <h4 className="text-white lg:text-[16px] md:text-[12px] sm:text-[8px] font-light lg:ml-[60px] md:ml-[35px] sm:ml-[25px]">
          Designed By{" "}
          <span className="font-medium tracking-wider">@Akash Sahu</span> &{" "}
          <span className="font-medium tracking-wider">
            @Satyaprakash Dewangan
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
