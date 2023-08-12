import React, { useState } from "react";

// importing css 
import '../index.css'

// component
import { Card2, Ribbon } from "./index";

// assets
import { bitLogo3 } from "../assets/asset";

// constant
import { LearnAboutBit, AcademicOffering, CampusCommunity, } from "../Constants";

// Material UI import
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import Divider from "@mui/material/Divider";

// import Card from "@mui/material/Card";
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Declaration } from "postcss";

const headListStyleText = {
  fontSize: "16px",
};

const NewToBit = () => {
  // variable Declaration
  const [topic, setTopic] = useState(LearnAboutBit)
  const [open, setOpen] = useState(true);
  const [click, setClick] = useState([true, false, false, false ]);

  // functions
  const handleClick = () => {
    setOpen(!open);
  };
  const button1 = () => {
    setClick([true, false, false, false ])
  }
  const button2 = () => {
    setClick([ false, true, false, false ])
  }
  const button3 = () => {
    setClick([false, false, true, false ])
  }
  const button4 = () => {
    setClick([false, false, false, true ])
  }

  // style declaration
  const buttonDesign = {
    backgroundColor: "#800000",
    color: "white",
    // width: { sm: "200px", md: "175px", lg: "200px" },
    width: "200px",
    '&:hover': {
        backgroundColor: "#800000",
    color: "white",
    }
  };
  const listItemButtonStyle = {
      color: "#800000",
    //   width: { sm: "200px", md: "175px", lg: "200px" },
      width: "200px",
      height: 45,
      fontWeight: 800,
      fontSize: 20,
      borderRadius: 0,
      display: "flex",
      alignItem: "center",
      justifyContent: "flex-start",
      padding: "6px 16px",
      textTransform: "none",
      '&:hover': {
          border: "3px solid #E7D7C1",
          backgroundColor: "rgba(231, 215, 193, 0.25)",
    },
  };

  return (
    <div className="w-[100vw] mt-[150px]">
      {/* 1 */}
      {/* Ribbon for New to Bit */}
      <div className="sm:ml-auto md:ml-[10%]">
        <Ribbon
          heading="Find your way around BIT"
          description="Explore the countless paths and opportunities that BIT has to offer."
        ></Ribbon>
      </div>
      {/* 2 */}
      {/* New to Bit */}
      <div className="mt-[100px] flex md:flex-row sm:flex-col md:items-start sm:items-center md:justify-center lg:gap-[100px] md:gap-[46px] w-auto ">
        {/* 2.a */}
        <div className="flex flex-col justify-start items-center ">
          {/* Bit Logo */}
          {/* 2.a.a */}
          <img
            src={bitLogo3}
            alt="BIT Logo"
            width={`50px`}
            height={`48.43px`}
          />
          {/* 2.a.b */}
          <span className="h-1 w-[200px] bg-grey block mt-5"></span>
          {/* 2.a.c */}
          <div className="text-bit-red font-medium">
            <List>
              <ListItemButton onClick={handleClick} 
              sx={buttonDesign} align-items='flex-start'>
                <ListItemIcon sx={{ color: "white", minWidth: '36px' }}>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="New To BIT" sx={headListStyleText} />
                {open ? (
                  <ArrowDropUpRoundedIcon />
                ) : (
                  <ArrowDropDownRoundedIcon />
                )}
              </ListItemButton>
              <Collapse in={open} timeout={`auto`} unmountOnExit>
                <List component={`div`} disablePadding sx={{mt: '12px'}}>
                  <ListItemButton sx={{
                    ...listItemButtonStyle,  
                    ...(click[0] ? {border: "3px solid #E7D7C1",
                    backgroundColor: "rgba(231, 215, 193, 0.25)"}: '')
                  }} 
                  onClick={() => {
                    setTopic(LearnAboutBit);
                    button1();
                  }}>
                    <ListItemText >
                      Learn About BIT
                    </ListItemText>
                  </ListItemButton>
                  {/* <Divider component="li" /> */}

                  <ListItemButton sx={{
                    ...listItemButtonStyle,  
                    ...(click[1] ? {border: "3px solid #E7D7C1",
                    backgroundColor: "rgba(231, 215, 193, 0.25)"}: '')
                  }} 
                  onClick={() => {
                    setTopic(AcademicOffering);
                    button2();
                  }}>
                    <ListItemText >
                      Academic Offerings
                    </ListItemText>
                  </ListItemButton>
                  {/* <Divider component="li" /> */}

                  <ListItemButton sx={{
                    ...listItemButtonStyle,  
                    ...(click[2] ? {border: "3px solid #E7D7C1",
                    backgroundColor: "rgba(231, 215, 193, 0.25)"}: '')
                  }} 
                  onClick={() => {
                    setTopic(CampusCommunity)
                    button3();
                  }}>
                    <ListItemText >
                      Campus & Community
                    </ListItemText>
                  </ListItemButton>
                  {/* <Divider component="li" /> */}

                  <ListItemButton sx={{
                    ...listItemButtonStyle,  
                    ...(click[3] ? {border: "3px solid #E7D7C1",
                    backgroundColor: "rgba(231, 215, 193, 0.25)"}: '')
                  }} 
                  onClick={() => {
                    button4();

                  }}>
                    <ListItemText >
                      Visit BIT
                    </ListItemText>
                  </ListItemButton>
                  {/* <Divider component="li" /> */}
                </List>
              </Collapse>
            </List>
          </div>
        </div>

        {/* 2.b */}
        <div className="flex flex-wrap w-auto overflow-x-scroll scrollNone 
        lg:min-w-[1024px] lg:w-[70.27778vw] lg:gap-10 lg:h-[630px]
        md:flex-col md:w-[540px] mdl:w-[840px] md:mt-[0] md:h-[530px]
        sm:flex-col sm:mt-10 sm:gap-8 sm:h-[790px] ">
          {/* Add Map to card in this */}
          {topic.map((items, index) => (
            <Card2 key={items.id} heading={items.heading}
            img={items.img} link={items.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewToBit;
