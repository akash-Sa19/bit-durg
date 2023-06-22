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
      className={`w-[100vw] fixed lg:h-[250px] md:h-[200px] border border-[#800000] z-[60] text-[26px] font-bold text-[${color.bitRed}] font-alegreya-sans flex  gap-[30px] bg-white `}
    >
      <div className="gap-[30px] flex flex-col justify-center ml-[50px]">
        {/* 1.a */}
        <div className="flex justify-between">
          {/* 1.| */}
          <div className="flex gap-[30px] ">
            {/* 1.a.a */}
            {/* Button 1 - All in BIT */}
            <div className="gap-[10px] flex flex-col" onClick={clickButton1}>
              {/* 1.a.a.a */}
              {/* Button Icon */}
              <div className="flex gap-[16px] items-center">
                <img
                  src={global_icon}
                  alt="Globe Icon"
                  className="w-[26px] h-[26px]"
                />
                <p>All of BIT.in</p>
              </div>
              {/* 1.a.a.b */}
              {/* Button bottom figures */}
              <div className="w-auto flex flex-col items-center">
                {selected1 ? (
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

            {/* 1.a.b */}
            {/* Button 2 - People */}
            <div className="gap-[10px] flex flex-col" onClick={clickButton2}>
              {/* 1.a.b.a */}
              {/* Button Icon */}
              <div className="flex gap-[16px] items-center">
                <img
                  src={peopleCircleRed}
                  alt="People Icon"
                  className="w-[26px] h-[26px]"
                />
                <p>People</p>
              </div>
              {/* 1.a.b.b */}
              {/* Button bottom figures */}
              <div className="w-auto flex flex-col items-center">
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
              <div className="flex gap-[16px] items-center">
                <img
                  src={news_icon}
                  alt="News Icon"
                  className="w-[26px] h-[26px]"
                />
                <p>News</p>
              </div>
              {/* 1.a.c.b */}
              {/* Button bottom figures */}
              <div className="w-auto flex flex-col items-center">
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
          <IconButton
            aria-label="Close Icon"
            onClick={props.handleSearchBarState}
            sx={{position: 'relative', top: '11px', left: '5px' }}
          >
            <img
              src={closeIcon}
              alt="Close Icon"
              className="w-[22px] h-[22px]"
            />
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
              className="w-[30px] h-[30px] mx-[26px] -scale-x-100"
            />
            <p className="lg:text-[26px] md:text-[20px] font-normal ">
              {searchTitle}
            </p>
          </div>
          {/* 2.a.b */}
          {/* Search Button */}
          <div
            className={`bg-[${color.bitRed}] lg:text-[20px] md:text-[16px] text-white w-[135px] lg:h-[75px] md:h-[55px] flex items-center justify-evenly font-normal`}
          >
            <p>SEARCH</p>
            <img
              src={arrowRight}
              alt="Right Arrow"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>

    // ----------------------------------------------------
    // 2nd try
    // <div className={`w-[100vw] fixed h-[250px] border border-[#800000] z-[100] text-[26px] font-bold text-[${color.bitRed}] font-alegreya-sans flex gap-[30px]`}>
    //   {SearchItems.map((currentValue, index) => (
    //     <div className="gap-[10px] flex flex-col" key={currentValue.key}>
    //       <div className="flex gap-[16px] items-center">
    //         <img
    //           src={currentValue.img}
    //           alt={currentValue.alt}
    //           className="w-[30px] h-[30px]"
    //         />
    //         <p>{currentValue.heading}</p>
    //       </div>
    //       <div className="w-auto flex flex-col items-center">
    //         {
    //             selected ?
    //             (<>
    //             <div className={`w-full h-[5px] bg-[${color.bitRed}] `}></div>
    //             <img src={triangle} alt="Down Arrow" />
    //             </>)
    //             :
    //             (
    //                 <div className={`w-full h-[5px] border border-[${color.bitRed}] `}></div>
    //             )
    //         }
    //       </div>
    //     </div>
    //   ))}
    // </div>

    //  {/* ---------------------------------------------------- */}
    // <div className="">
    // <img src={peopleCircleRed} alt="" />
    // <img src={peopleCircleWhite} alt="" />
    // </div>
  );
};

export default Search;
