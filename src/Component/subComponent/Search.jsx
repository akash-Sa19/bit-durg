import React, { useState } from "react";
import {
  global_icon,
  news_icon,
  triangle,
  search,
  peopleCircleRed,
  arrowRight,
  closeIcon,
} from "../../assets/asset";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { color, SearchItems } from "../../Constants";
import { IconButton } from "@mui/material";
// import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const Search = (props) => {
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [searchTitle, setSearchTitle] = useState("Search keywords...");

  const clickButton1 = () => {
    setSelected1(true);
    setSelected2(false);
    setSelected3(false);
    setSearchTitle("Search keywords...");
  };
  const clickButton2 = () => {
    setSelected1(false);
    setSelected2(true);
    setSelected3(false);
    setSearchTitle("Search people...");
  };
  const clickButton3 = () => {
    setSelected1(false);
    setSelected2(false);
    setSelected3(true);
    setSearchTitle("Search news...");
  };
  return (
    // Main Div
    <div
      className={`w-[100vw] sm:px-4 sm:py-4 sml:px-12 sml:py-12 fixed lg:h-[250px] md:h-[200px] z-[60] font-bold text-[${color.bitRed}] font-alegreya-sans bg-white sm:gap-4 sml:gap-6 flex flex-col justify-center`}
    >
      {/* 1.a */}
      <div className="flex flex-row items-start justify-between">
        {/* 1.| */}
        <div className="flex flex-wrap sm:gap-4 sml:gap-8">
          {/* 1.a.a */}
          {/* Button 1 - All in BIT */}
          <div className="gap-[10px] flex flex-col" onClick={clickButton1}>
            {/* 1.a.a.a */}
            {/* Button Icon */}
            <div className="flex md:gap-[16px] sm:gap-[8px] items-center">
              <img
                src={global_icon}
                alt="Globe Icon"
                className="sm:w-[16px] sm:h-[16px] sml:w-[26px] sml:h-[26px] "
              />
              <p className="sm:text-base sml:text-2xl">All of BIT.in</p>
            </div>
            {/* 1.a.a.b */}
            {/* Button bottom figures */}
            <div className="flex flex-col items-center w-auto">
              {selected1 ? (
                <>
                  <div className={`w-full h-[5px] bg-[#800000]`}></div>
                  <img src={triangle} alt="Down Arrow" />
                </>
              ) : (
                <div
                  className={`w-full h-[5px] border border-[${color.bitRed}] `}
                ></div>
              )}
            </div>
          </div>

          {/* 1.a.b */}
          {/* Button 2 - People */}
          <div className="gap-[10px] flex flex-col" onClick={clickButton2}>
            {/* 1.a.b.a */}
            {/* Button Icon */}
            <div className="flex sm:gap-[8px] md:gap-[16px] items-center">
              <img
                src={peopleCircleRed}
                alt="People Icon"
                className="sm:w-[16px] sm:h-[16px] sml:w-[26px] sml:h-[26px]"
              />
              <p className="sm:text-base sml:text-2xl">People</p>
            </div>
            {/* 1.a.b.b */}
            {/* Button bottom figures */}
            <div className="flex flex-col items-center w-auto">
              {selected2 ? (
                <>
                  <div className={`w-full h-[5px] bg-[#800000] `}></div>
                  <img src={triangle} alt="Down Arrow" />
                </>
              ) : (
                <div
                  className={`w-full h-[5px] border border-[${color.bitRed}] `}
                ></div>
              )}
            </div>
          </div>

          {/* 1.a.c */}
          {/* Button 3 - News */}
          <div className="gap-[10px] flex flex-col" onClick={clickButton3}>
            {/* 1.a.c.a */}
            {/* Button Icon */}
            <div className="flex md:gap-[16px] sm:gap-[8px] items-center">
              <img
                src={news_icon}
                alt="News Icon"
                className="sm:w-[16px] sm:h-[16px] sml:w-[26px] sml:h-[26px]"
              />
              <p className="sm:text-base sml:text-2xl">News</p>
            </div>
            {/* 1.a.c.b */}
            {/* Button bottom figures */}
            <div className="flex flex-col items-center w-auto">
              {selected3 ? (
                <>
                  <div className={`w-full h-[5px] bg-[#800000] `}></div>
                  <img src={triangle} alt="Down Arrow" />
                </>
              ) : (
                <div
                  className={`w-full h-[5px] border border-[${color.bitRed}] `}
                ></div>
              )}
            </div>
          </div>
        </div>
        {/* 1.|| */}
        {/* close Button */}
        <IconButton
          aria-label="Close Icon"
          onClick={props.handleSearchBarState}
          sx={{
            position: "relative",
            // top: "11px",
            // left: "5px",
            width: {sm:'30px', md:'38px'},
            height: {sm:'35px', md:'35px'},
          }}
        >
          <img src={closeIcon} alt="Close Icon" className="w-[22px] h-[22px]" />
        </IconButton>
      </div>

      {/* 2.a */}
      {/* Search Bar */}
      <div className="flex gap-[18px]">
        {/* 2.a.a */}
        <div className="border-2 border-[rgba(0,0,0,0.2)] lg:h-[75px] md:h-[55px] w-[535px] flex items-center">
          <img
            src={search}
            alt="Search Icon"
            className="md:w-[30px] sm:w-[15px] sm:h-[15px] sml:h-[20px] sml:w-[20px] md:h-[30px]  md:ml-[26px] sm:ml-2 -scale-x-100"
          />
          <p className="lg:text-[26px] md:text-[20px] sml:text-[20px] sm:text-[14px] sm:ml-3 font-normal ">
            {searchTitle}
          </p>
        </div>
        {/* 2.a.b */}
        {/* Search Button */}
        <div
          className={`bg-[${color.bitRed}] lg:text-[20px] md:text-[16px] text-white w-[135px] lg:h-[75px] md:h-[55px] flex items-center justify-evenly font-normal `}
        >
          <p className="sm:text-[10px] md:text-base sml:text-sm">SEARCH</p>
          <img
            src={arrowRight}
            alt="Right Arrow"
            className="md:w-[24px] md:h-[24px] sm:w-[15px] sm:h-[15px]"
          />
        </div>
      </div>
    </div>

  );
};

export default Search;
