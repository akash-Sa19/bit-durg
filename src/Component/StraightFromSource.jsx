import React, { useEffect } from "react";
import { useState, useRef } from "react";
import Ribbon from "./Ribbon";
import IconButton from "@mui/material/IconButton";
import { video01, video02, video03 } from "../assets/video/asset";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Rectangle1, Rectangle2, Rectangle3 } from "../assets/asset";

const StraightFromSource = ({ width, height }) => {
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
    if (play.video02) {
      videoRef02.current.play();
    } else {
      videoRef02.current.pause();
    }
    if (play.video03) {
      videoRef03.current.play();
    } else {
      videoRef03.current.pause();
    }
  }, [play]);

  // useEffect(() => {}, [play.video02]);

  // useEffect(() => {}, [play.video03]);

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

  const calculateResolution = () => {
    //  aspect ratio = 16:9
    //  no of video card = 3
    //  max height = 90%
    //  max width = 100%

    let videoWidth = width * (1 / 3);
    let videoHeight = videoWidth * (16 / 9);
    if (videoHeight > height * (9 / 10)) {
      console.log("Exceeding Height");
      console.log("Original: ", [
        videoHeight.toString(),
        videoWidth.toString(),
      ]);
      videoHeight = height * (9 / 10);
      videoWidth = videoHeight * (9 / 16);
    }
    return [videoHeight.toString(), videoWidth.toString()];
  };

  const videoSize = {
    height: calculateResolution()[0] + "px",
    width: calculateResolution()[1] + "px",
  };

  // const videoContainer = `relative col-span-1
  // h-[${calculateResolution()[0]}px]
  // w-[${calculateResolution()[1]}px]`;
  const videoContainer = `relative col-span-1`;

  console.log(videoSize);

  return (
    <div className="new-container mt-[150px]">
      <div className="">
        <Ribbon
          heading="Straight From The Source"
          description="Bitians answering your most pressing question about BIT"
        />
      </div>

      {/* Video Section */}

      <div className="my-10 flex justify-center mt-[100px]">
        {/* Video Component */}
        {/* {console.log(width * (3 / 10) * (16 / 9))} */}
        <div className={videoContainer} style={videoSize}>
          <div className="relative h-full w-full">
            <video
              className="h-full w-full object-cover"
              ref={videoRef01}
              controls
              onPause={() => setPlay({ ...play, video01: false })}
            >
              <source src={video01} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src={Rectangle1}
              style={{ display: !play.video01 ? "block" : "none" }}
              alt="Poster Image"
            />
          </div>
          <div
            className={`${
              play.video01 ? "hidden" : "unset"
            } absolute w-full h-full top-0 left-0 outline outline-4 -outline-offset-[12px] ${
              !play.video01 ? "outline-red-800" : "outline-white"
            } hover:outline-white z-20`}
          >
            <IconButton
              sx={iconButtonStyle}
              size="large"
              onClick={() =>
                setPlay({
                  video01: true,
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
        <div className={videoContainer} style={videoSize}>
          <div className="relative h-full w-full">
            <video
              className="h-full w-full object-cover"
              ref={videoRef02}
              controls
              onPause={() => setPlay({ ...play, video02: false })}
            >
              <source src={video02} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src={Rectangle2}
              style={{ display: !play.video02 ? "block" : "none" }}
              alt="Poster Image"
            />
          </div>
          <div
            className={`${
              play.video02 ? "hidden" : "unset"
            } absolute w-full h-full top-0 left-0 outline outline-4 -outline-offset-[12px] ${
              !play.video02 ? "outline-red-800" : "outline-white"
            } hover:outline-white z-20`}
          >
            <IconButton
              sx={iconButtonStyle}
              size="large"
              onClick={() =>
                setPlay({
                  video01: false,
                  video02: true,
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
        <div className={videoContainer} style={videoSize}>
          <div className="relative h-full w-full">
            <video
              className="h-full w-full object-cover"
              ref={videoRef03}
              controls
              onPause={() => setPlay({ ...play, video03: false })}
            >
              <source src={video03} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img
              className="absolute top-0 left-0 h-full w-full object-cover"
              src={Rectangle3}
              style={{ display: !play.video03 ? "block" : "none" }}
              alt="Poster Image"
            />
          </div>
          <div
            className={`${
              play.video03 ? "hidden" : "unset"
            } absolute w-full h-full top-0 left-0 outline outline-4 -outline-offset-[12px] ${
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
                  video03: true,
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
