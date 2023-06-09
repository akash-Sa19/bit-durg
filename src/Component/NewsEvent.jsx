import React from "react";
import { calender, event_icon, news_icon, filter } from "../assets/asset";
import { Ribbon, Card, BottomCircle } from "./index";
import { Button } from "@mui/material";
import { news, color } from "../Constants";
import "../index.css";

const buttonDesign = {
  backgroundColor: "rgba(231, 215, 193, 0.25)",
  color: "#800000",
  width: { sm: "200px", md: "175px", lg: "200px" },
  height: 45,
  // fontFamily: 'Alegreya Sans',
  fontWeight: 800,
  fontSize: 20,
  borderRadius: 0,
  display: "flex",
  alignItem: "center",
  justifyContent: "flex-start",
  padding: "6px 16px",
  textTransform: "none",
  borderBottom: "3px solid #E7D7C1",

  // '&:active': {
  //   border: '3px solid #E7D7C1',

  // },
  "&:hover": {
    border: "3px solid #E7D7C1",
    boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(231, 215, 193, 0.25)",
  },
  "&:onClick": {
    border: "3px solid #E7D7C1",
    boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(231, 215, 193, 0.25)",
  },
};
const NewsIcon = () => {
  return <img src={news_icon} width="20px" height="20px" />;
};
const NewsEvent = () => {
  return (
    <div className="w-full">
      <div className="mt-[150px]">
        {/* 1 */}
        {/* Ribbon for Event and News */}
        <div className=" sm:ml-auto md:ml-[10%]">
          <Ribbon
            heading="The Impact of Work"
            description="Deploying knowledge to address  critical and complex problem in the world"
          />
        </div>
        {/* The Approch -> is to maintain the conxtant size of the card and let the view port growth and when the viewport reaches to 1225px the 2col of NewsEvent becomes 3Col  */}
        {/* 2 */}
        {/* News and Event */}
        <div className="mt-[100px] flex md:flex-row sm:flex-col md:items-start sm:items-center md:justify-center lg:gap-[100px] md:gap-[46px]  w-auto ">
          {/* 2.a */}
          <div className="w-[202px] flex flex-col items-center ">
            {/* Calender Icon */}
            <img
              src={calender}
              alt="Calender Icon"
              width="40px"
              height="40px"
            />
            {/* Horizontal Bar */}
            <span className="h-1 w-[200px] bg-grey block mt-5"></span>
            <div className="mt-[60px] flex flex-col font-alegreya-sans">
              {/* <Button variant='contained' className='bitButton '>News</Button> */}

              <Button
                variant="contained"
                sx={buttonDesign}
                startIcon={
                  <img
                    src={news_icon}
                    width="20px"
                    height="20px"
                    style={{ marginRight: "8px" }}
                  />
                }
              >
                News
              </Button>

              <Button
                variant="contained"
                sx={buttonDesign}
                startIcon={
                  <img
                    src={event_icon}
                    width="20px"
                    height="20px"
                    style={{ marginRight: "8px" }}
                  />
                }
              >
                Event
              </Button>
            </div>
            <div className="mt-[90px]">
              <Button
                varient="contained"
                sx={buttonDesign}
                startIcon={
                  <img
                    src={filter}
                    width="20px"
                    height="20px"
                    style={{ marginRight: "8px" }}
                  />
                }
              >
                Filter
              </Button>
            </div>
          </div>

          {/* 2.b */}
          {/* News and Event Card */}

          <div className="flex flex-col justify-center">
            {/* <div className='flex flex-col justify-center lg:min-w-[1024px] lg:w-[70.27778vw] md:min-w-[550px] md:w-[64.7482vw] border border-yellow-600 '> */}
            {/* 2.b.a */}
            <div className="flex md:flex-row sm:flex-col md:mt-[0] sm:mt-10 flex-wrap lg:gap-10 sm:gap-8 w-auto lg:min-w-[1024px] lg:w-[70.27778vw] md:w-[540px] mdl:w-[840px]">
              {news.map((newsItem, index) => (
                <Card
                  key={newsItem.id}
                  heading={newsItem.heading}
                  description={newsItem.description}
                  date={newsItem.date}
                  month={newsItem.month}
                  img={newsItem.imgSrc}
                />
              ))}
            </div>

            {/* 2.b.b */}
            {/* Bottom Circle */}
            <div className="flex gap-2 mt-[46px]">
              <BottomCircle circleColor={color.bitRed} />
              <BottomCircle circleColor={color.bitRed} />
              {/* <BottomCircle circleColor={color.bitRed} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
