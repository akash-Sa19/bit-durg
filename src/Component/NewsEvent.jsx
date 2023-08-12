// screen breakpoints
// sm: '360px'
// md: '834px'
// mdl: '1275px'
// lg: '1440px'
// xl: '1640px

import React, { useState } from "react";
// assets
import { calender, event_icon, news_icon, filter } from "../assets/asset";

// component import
import { Ribbon, Card, BottomCircle, Buttons } from "./index";

// material Ui
import { Button } from "@mui/material";

// constant
import { news, events, color } from "../Constants";

// import "../index.css";

// const buttonDesignStyle = {
//   backgroundColor: "rgba(231, 215, 193, 0.25)",
//   color: "#800000",
//   width: { sm: "200px", md: "175px", lg: "200px" },
//   height: 45,
//   fontWeight: 800,
//   fontSize: 20,
//   borderRadius: 0,
//   display: "flex",
//   alignItem: "center",
//   justifyContent: "flex-start",
//   padding: "6px 16px",
//   textTransform: "none",
//   borderBottom: "3px solid #E7D7C1",

//   // "&:hover": {
//   //   border: "3px solid #E7D7C1",
//   //   boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
//   //   backgroundColor: "rgba(231, 215, 193, 0.25)",
//   // },
//   "&:active": {
//     border: "3px solid #E7D7C1",
//     boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.25)",
//     // backgroundColor: "rgba(231, 215, 193, 0.25)",
//     backgroundColor: "rgba(0, 0, 193, 0.25)",
//   },
// };
const NewsIcon = () => {
  return <img src={news_icon} width="20px" height="20px" />;
};
const NewsEvent = () => {
  // declaring variable
  const [clickNews, setClickNews] = useState(true);
  const [clickEvent, setClickEvent] = useState(false);
  const [clickFilter, setClickFilter] =useState(false);
  const [topic, setTopic] = useState(news);

  // functions
  const chngTopicToNews = () => {
    setTopic(news);
    if (clickEvent == false) {
      setClickNews(true);
    }
  };
  const chngTopicToEvents = () => {
    setTopic(events);
    if (clickNews == false) {
      setClickEvent(true);
    }
  };
  const chngFilter = () => {
    setClickFilter(!clickFilter);
  }
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
            {/* Buttons */}
            <div className="mt-[60px] flex flex-col font-alegreya-sans">
              {/* News Icon */}
              <div
                className={`bg-bit-CreamLite w-[200px] h-[45px] flex items-center justify-start px-[6px] border-[3px] ${clickNews ? 'shadow-[4px_4px_0px_rgba(0,0,0,0.25)]': '' } border-bit-Cream hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:border-[3px] hover:z-10 `}
                onClick={(props) => {
                  setTopic(news)
                  if (clickEvent == true) {
                    setClickEvent(false);
                    setClickNews(true);
                  }
                }}
              >
                <img
                  src={news_icon}
                  alt="news icon"
                  className="px-[6px] mr-[8px]"
                />
                <p className="font-[800] text-[20px] font-roboto text-bit-red">
                  News
                </p>
              </div>

              {/* Event Icon */}
              <div
                className={`bg-bit-CreamLite w-[200px] h-[45px] flex items-center justify-start px-[6px] mt-[8px]
               border-[3px] ${clickEvent ? 'shadow-[4px_4px_0px_rgba(0,0,0,0.25)]': '' } border-bit-Cream hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:border-[3px] hover:z-10 `}
                onClick={(props) => {
                  setTopic(events)
                  if(clickNews == true) {
                    setClickNews(false)
                    setClickEvent(true)
                  }
                }}
              >
                <img
                  src={event_icon}
                  alt="Event icon"
                  className="px-[6px] mr-[8px]"
                />
                <p className="font-[800] text-[20px] font-roboto text-bit-red">
                  Events
                </p>
              </div>


            </div>
            <div className="mt-[90px]">
              
              <Buttons
                img={filter}
                iconName="filter icon"
                buttonContent="Filter"
                click = {clickFilter}
                buttonFunc ={chngFilter}
              />
            </div>
          </div>

          {/* 2.b */}
          {/* News and Event Card */}

          <div className="flex flex-col justify-center">
            {/* 2.b.a */}
            <div
              className="scrollNone flex flex-wrap w-auto overflow-x-scroll
            lg:gap-10 lg:min-w-[1024px] lg:w-[70.27778vw] lg:h-[890px]
            md:mt-[0] md:w-[540px] mdl:w-[840px] md:flex-col md:h-[690px]
            sm:flex-col sm:mt-10 sm:gap-8 sm:h-[690px] "
            >
              {topic.map(function (newsItem, index) {
                return (
                  <Card
                    key={newsItem.id}
                    heading={newsItem.heading}
                    description={newsItem.description}
                    date={newsItem.date}
                    month={newsItem.month}
                    img={newsItem.imgSrc}
                  />
                );
              })}
            </div>

            {/* 2.b.b */}
            {/* Bottom Circle */}
            {/* <div className="flex justify-center gap-4 mt-[46px] ">
              <BottomCircle circleColor={color.bitRed} borderColor= {color.bitRed} />
              <BottomCircle circleColor={color.bitWhite} borderColor= {color.bitRed} />
              <BottomCircle circleColor={color.bitWhite} borderColor= {color.bitRed} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvent;
