import React, { useState } from "react";
import { color } from "../../Constants";
import { Stack, Link, Collapse } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";

const listItemTextStyle = {
  "& .MuiTypography-body1 ": {
    fontSize: "12px",
    color: color.bitRed,
    fontWeight: 500,
  },
};
const headListStyleText = {
  "& .MuiTypography-root": {
    fontWeight: 800,
    fontFamily: "Alegreya Sans",
    color: color.bitRed,
    letterSpacing: "1px",
  },
};

/* 
  Child List
  props: {name, link}
  e.g.: {"Admission Procedure", "https://bitdurg.ac.in/"}
*/
const ChildList = ({ name, link }) => {
  return (
    <>
      <Divider component="li" />
      <ListItemButton href={link} target="_blank">
        <ListItemText sx={listItemTextStyle}>{name}</ListItemText>
      </ListItemButton>
    </>
  );
};

/* 
  Parent List
  props:{
          heading: 'parentName', 
          links:[
              ['childName': 'https://childNameLink.com'],
              ['childName': 'https://childNameLink.com'],
          ],
          key: 1
      },
      
  e.g.:{
          heading: "Get Started",
          links: [
              ["Admission Procedure", "https://bitdurg.ac.in/"],
              ["Reservation Policy", "https://bitdurg.ac.in/"],
          ],
          key: 1,
      },
            
*/
const ParentList = (props) => {
  const [open2, setOpen2] = useState(false);

  return (
    <>
      <Divider component="li" />
      <ListItemButton onClick={() => setOpen2(!open2)}>
        <ListItemText sx={listItemTextStyle}>{props.subHeading}</ListItemText>
        {open2 ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
      </ListItemButton>
      <Collapse in={open2} timeout={`auto`} unmountOnExit>
        {/* 
            Mapping Child List
            props: 
        */}
        {props.subItemArray.map((currentValue, index) => (
          <>
            <ChildList name={currentValue[0]} link={currentValue[1]} />
            {/* <Divider component="li" />
            <ListItemButton href={currentValue[1]} target="_blank">
              <ListItemText sx={listItemTextStyle}>
                {currentValue[0]}
              </ListItemText>
            </ListItemButton> */}
          </>
        ))}
      </Collapse>
    </>
  );
};

/* 
  Grand Parent List
  props: {title: 'grandParentName', 
          content: [
              {
                  heading: 'parentName', 
                  links:[
                      ['childName': 'https://childNameLink.com'],
                      ['childName': 'https://childNameLink.com'],
                  ],
                  key: 1
              },
              {
                  heading: 'parentName', 
                  links:[
                      ['childName': 'https://childNameLink.com'],
                      ['childName': 'https://childNameLink.com'],
                  ],
                  key: 2
              },
          ],
          key: 1,
      }
  e.g.: {
          title: "Admission",
          content: [
          {
              heading: "Get Started",
              links: [
                  ["Admission Procedure", "https://bitdurg.ac.in/"],
                  ["Reservation Policy", "https://bitdurg.ac.in/"],
              ],
              key: 1,
          },
          {
              heading: "Regular Course",
              links: [
                  ["B.Tech", "https://bitdurg.ac.in/"],
                  ["M.Tech", "https://bitdurg.ac.in/"],
              ],
              key: 2,
          },
          {
              heading: "Lateral Entry Courses",
              links: [
                  ["B.Tech Lateral Entry", "https://bitdurg.ac.in/"]
              ],
              key: 3,
          },
          ],
          key: 3,
      },
*/
const GrandParent = ({ item }) => {
  const [open, setOpen] = useState(false);
  // const [subList, SetSubList] = useState(false);
  //   console.log("item: ", item);
  return (
    <>
      <Divider component="li" />
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary={item.title} sx={headListStyleText} />
        {open ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout={`auto`} unmountOnExit>
        {/* 
            Mapping the Parent List
        */}
        {item.content.map((currentValue, index) => (
          <ParentList
            subHeading={currentValue.heading}
            subItemArray={currentValue.links}
            key={currentValue.key}
          />
        ))}
      </Collapse>
    </>
  );
};

export default GrandParent;
