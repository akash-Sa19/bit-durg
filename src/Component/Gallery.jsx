import React, { useState } from "react";
import ReactPlayer from "react-player";

// material UI import
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

// assets
import {
  facebookIcon,
  youtubeIcon,
  mailIcon,
  linkedinIcon,
  moneyIcon,
  bookIcon,
} from "../assets/asset";

// sub Component
import { LoginCard } from "./index";

const Gallery = () => {
  const iconDesign =
    "lg:w-[45px] md:w-[22px] lg:h-[45px] md:h-[22px] text-bit-red";
  const boxShadow = "drop-shadow-[8px_8px_10px_rgba(0,0,0,0.25)] ";

  const [fold1, setFold1] = useState(false);
  const [fold2, setFold2] = useState(true);

  // Unable to alter the states in the Components even through passing function
  const foldFunct = () => {
    setFold1(!fold1)
    setFold2(!fold2)
    console.log('fold function runned');
    console.log('fold1:' + fold1);
    console.log('fold2:' + fold2);
  }

  return (
    <div
      className={`new-container md:w-[90%] sm:w-[90%] sm:max-w-[400px] md:max-w-[750px] lg:max-w-[1296px] my-10 lg:h-[1000px] md:h-[560px] sm:h-auto grid sm:grid-cols-6 md:grid-rows-5 sm:grid-rows-[repeat(16, minmax(0, 1fr))] lg:gap-12 md:gap-6 sm:gap-7 mt-[200px] lg:scale-1 `}
    >
      <div
        className={`h-full w-full p-2 text-center font-bold rounded-lg md:col-span-2 sm:col-span-6 md:row-span-3 sm:row-span-4 bg-[#E7D7C1] ${boxShadow} flex flex-col justify-between items-center transition-all duration-500 `}
      >
        <div className="">
          <p className="lg:text-xl md:text-base text-bit-red">
            Academic Calender
          </p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              sx={{
                backgroundColor: "white",
                borderRadius: 3,
                my: 2,
                height: { md: "158px", lg: "305px" },
                minHeight: "220px",
                width: { md: "198px", lg: "340px" },
                fontSize: { md: "8px", lg: "14px" },
              }}
            />
          </LocalizationProvider>
        </div>

        {/* <div className="my-2 bg-white p-2 lg:w-[340px] md:w-[200px] lg:h-[200px] mx-auto rounded-tl-lg rounded-tr-lg  text-left border border-red-500 translate translate-y-4">
          <p>21-May | Sunday | Holiday</p>
          <p>22-May | Monday | Somthing</p>
          <p>22-May | Tuesday | Nothing</p>
        </div> */}
      </div>

      {/* video player */}
      <div
        className={`md:h-full md:w-full sm:h-[189px] p-2 text-center font-bold rounded-lg md:col-span-3 sm:col-span-6 md:row-span-2 sm:row-span-3 bg-bit-Cream ${boxShadow} overflow-hidden transition-all duration-500 `}
      >
          <ReactPlayer
            url={[
              "https://www.youtube.com/watch?v=endr6-pvgHt-xA",
              "https://www.youtube.com/watch?v=Kr0qKVgAsZ4",
            ]}
            muted={true}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            onContextMenu={(e) => e.preventDefault()}
            loop={true}
          />
      </div>

      {/* Social Media Card */}
      <div
        className={` h-full w-full p-2 rounded-lg md:col-span-1 md:row-span-1 bg-bit-Cream ${boxShadow}  sm:col-span-2 sm:row-span-2 transition-all duration-500 `}
      >
        <div className="flex flex-col items-center w-full h-full justify-evenly ">
          <div className="flex w-full justify-evenly ">
            <img
              src={facebookIcon}
              alt="Facebook Icon"
              className={iconDesign}
            />
            <img src={mailIcon} alt="Mail Icon" className={iconDesign} />
          </div>
          <div className="flex w-full justify-evenly ">
            <img src={youtubeIcon} alt="Youtube Icon" className={iconDesign} />
            <img src={linkedinIcon} alt="Linkdin Icon" className={iconDesign} />
          </div>
        </div>
      </div>

      {/* online payment card */}
      <div
        className={`h-full w-full p-2 text-center font-bold rounded-lg md:col-span-1 md:row-span-1 sm:col-span-2 sm:row-span-2 bg-bit-Cream ${boxShadow} flex flex-col justify-around items-center transition-all duration-500 `}
      >
        <img
          src={moneyIcon}
          alt="payment icon"
          className={`lg:w-[65px] sm:w-[35px] lg:h-[65px] sm::h-[35px]`}
        />
        <p className="uppercase lg:text-lg md::text-xs sm:text-xs text-bit-red">
          Online <br /> Payment
        </p>
      </div>

      {/* bit Library */}
      <div
        className={`h-full w-full p-2 font-bold rounded-lg md:col-span-1 md:row-span-1 sm:col-span-2 sm:row-span-2  bg-bit-Cream ${boxShadow} flex flex-col justify-around items-center text-center transition-all duration-500 `}
      >
        <img
          src={bookIcon}
          alt="library icon"
          className={`translate-x-[3px] lg:w-[166px] lg:h-[109px] md:w-[95.75px] md:h-[62.88px]`}
        />
        <p className="uppercase lg:text-lg sm:text-xs text-bit-red">
          BIT Library
        </p>
      </div>

      {/* login Card */}
      <div
        className={`md:h-full sm:h-[500px] md:w-full p-2 text-center font-bold bg-bit-Cream ${boxShadow} rounded-lg md:col-span-3 sm:col-span-6 md:row-span-3 sm:row-span-4 flex flex-col items-center justify-evenly sm:max-w-[420px] md:max-w-full md:min-w transition-all duration-500 `}
      >
        <LoginCard heading="ERP (Faculty Login)" foldValue={fold1} foldFunctState= {foldFunct} />

        <LoginCard heading="ERP (Student Login)" foldValue={fold2} foldFunctState= {foldFunct} />
      </div>

      {/* Sucess Stories */}
      <div
        className={`w-full md:h-full sm:h-[189px] md:col-span-3 sm:col-span-6 md:row-span-2 sm:row-span-3 p-2 font-bold text-center rounded-lg bg-bit-Cream ${boxShadow} transition-all duration-500 `}
      > 

        <ReactPlayer
          url={[
            "https://youtu.be/E08Lu3ajVi0",
            "https://youtu.be/aTWRXqfos0c",
            "https://youtu.be/ifMPZ1Srt9M",
          ]}
          muted={true}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
          onContextMenu={(e) => e.preventDefault()}
          loop={true}
          />
          </div>
    </div>
  );
};

export default Gallery;
