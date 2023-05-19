import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Ribbon from "./Ribbon";
import IconButton from "@mui/material/IconButton";
import { video01, video02, video03 } from "../assets/video/asset";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { image01, image02, image03 } from "../assets/asset";

const StraightFromSource = () => {
  const [play, setPlay] = useState({
    video01: false,
    video02: false,
    video03: false,
  });

  const videoRef01 = useRef(null);
  const videoRef02 = useRef(null);
  const videoRef03 = useRef(null);

  useEffect(() => {
    if (play.video01) {
      videoRef01.current.play();
    } else {
      videoRef01.current.pause();
    }
  }, [play.video01]);

  useEffect(() => {
    if (play.video02) {
      videoRef02.current.play();
    } else {
      videoRef02.current.pause();
    }
  }, [play.video02]);

  useEffect(() => {
    if (play.video03) {
      videoRef03.current.play();
    } else {
      videoRef03.current.pause();
    }
  }, [play.video03]);

  const iconButtonStyle = {
    p: 0,
    minWidth: "unset",
    position: "absolute",
    bottom: "100px",
    left: "50%",
    zIndex: 30,
    transform: "translateX(-50%)",
    fontSize: "60px",
    backgroundColor: "#800000",
    "&:hover": {
      backgroundColor: "#D00000",
    },
  };

  const iconStyle = {
    color: "white",
    fontSize: "60px",
    m: 0,
    p: 0,
    border: 5,
    borderColor: "white",
    borderRadius: "50%",
  };

  const videoText =
    "absolute bottom-6 w-full px-8 text-center text-2xl font-bold font-alegreya-sans text-white z-30";

  return (
    <div className="new-container">
      <div className="">
        <Ribbon
          heading="Straight From The Source"
          description="Bitians answering your most pressing question about BIT"
        />
      </div>

      {/* Video Section */}

      <div className="my-10 grid grid-cols-3">
        {/* Video Component */}
        <div className="relative col-span-1 h-[700px] bg-slate-400">
          <div className="relative h-full w-full opacity-80">
            <video className="h-full w-full object-cover" ref={videoRef01}>
              <source src={video01} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src={image01}
              style={{ display: !play.video01 ? "block" : "none" }}
              alt="Poster Image"
            />
          </div>
          <div
            className={`absolute w-full h-full top-0 left-0 outline outline-4 -outline-offset-[12px] ${
              !play.video01 ? "outline-red-800" : "outline-white"
            } hover:outline-white z-20`}
          >
            <IconButton
              sx={iconButtonStyle}
              size="large"
              onClick={() =>
                setPlay({
                  video01: !play.video01,
                  video02: false,
                  video03: false,
                })
              }
            >
              <PlayArrowIcon sx={iconStyle} />
            </IconButton>
            <p className={videoText}>Why did you choose BIT?</p>
          </div>
        </div>

        {/* Video Component */}
        <div className="relative col-span-1 h-[700px] bg-slate-400">
          <div className="relative h-full w-full opacity-80">
            <video className="h-full w-full object-cover" ref={videoRef02}>
              <source src={video02} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src={image02}
              style={{ display: !play.video02 ? "block" : "none" }}
              alt="Poster Image"
            />
          </div>
          <div
            className={`absolute w-full h-full top-0 left-0 outline outline-4 -outline-offset-[12px] ${
              !play.video02 ? "outline-red-800" : "outline-white"
            } hover:outline-white z-20`}
          >
            <IconButton
              sx={iconButtonStyle}
              size="large"
              onClick={() =>
                setPlay({
                  video01: false,
                  video02: !play.video02,
                  video03: false,
                })
              }
            >
              <PlayArrowIcon sx={iconStyle} />
            </IconButton>
            <p className={videoText}>
              What advice do you have for incoming B.Tech Student
            </p>
          </div>
        </div>

        {/* Video Component */}
        <div className="relative col-span-1 h-[700px] bg-slate-400">
          <div className="relative h-full w-full opacity-80">
            <video className="h-full w-full object-cover" ref={videoRef03}>
              <source src={video03} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src={image03}
              style={{ display: !play.video03 ? "block" : "none" }}
              alt="Poster Image"
            />
          </div>
          <div
            className={`absolute w-full h-full top-0 left-0 outline outline-4 -outline-offset-[12px] ${
              !play.video03 ? "outline-red-800" : "outline-white"
            } hover:outline-white z-20`}
          >
            <IconButton
              sx={iconButtonStyle}
              size="large"
              onClick={() =>
                setPlay({
                  video01: false,
                  video02: false,
                  video03: !play.video03,
                })
              }
            >
              <PlayArrowIcon sx={iconStyle} />
            </IconButton>
            <p className={videoText}>What is BIT like in this time of year?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StraightFromSource;
