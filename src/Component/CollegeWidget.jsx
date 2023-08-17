// compoent is divided into 4 parts
// 1 - undergraduate
// 2 - graduate
// 3 - scholorship
// 4 - campuslife

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// assets
import {
  graduate,
  undergraduate,
  scholarship,
  campusLife,
} from "../assets/asset";

const CollegeWidget = (props) => {
  const iconStyle =
    "flex flex-col justify-between items-center lg:gap-5 md:gap-4 sm:gap-2  sm:col-span-1 my-2 lg:w-[200px] xl:w-[260px]";
  const imageStyle =
    " xl:h-[200px] lg:h-[180px] md:h-[120px] sm:h-[60px] h-[60px] w-auto object-contain";
  const textStyle =
    "md:text-xl sm:text-sm text-sm font-extrabold tracking-[0.15rem] text-center mt-2 uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#F26921] to-[#ED1065]";

  const elRef = useRef(null);
  useEffect(() => {
    const el = elRef.current;
    gsap.fromTo(
      el,
      {y: 500, opacity: 0.1, },
      {
        y: 0,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          // markers: true,
          start: `${props.width >= 1440 ? -500 : -400 } 100%`,
          scrub: true,
          toggleActions: 'play none none none',
          end: `${props.width >= 1440 ? -150 : -350 } 80%`,
        },
      }
    );
    
  }, []);
  return (
    <>
      <div
        className="new-container lg:mb-24 lg:mt-[96px] lg:flex lg:justify-evenly lg:items-center md:my-24 md:flex md:justify-evenly md:items-center sm:my-16 sm:grid sm:grid-cols-2 sm:gap-5 lg:gap-10 lg:w-[90%] xl:w-[90%] xxl:w-[90%]"
        ref={elRef}
      >
        <div className={iconStyle}>
          <img src={graduate} alt="Graduate" className={imageStyle} />
          <p className={textStyle}>Undergraduate</p>
        </div>
        <div className={iconStyle}>
          <img src={undergraduate} alt="Undergraduate" className={imageStyle} />
          <p className={textStyle}>Graduate</p>
        </div>
        <div className={iconStyle}>
          <img src={scholarship} alt="Scholarship" className={imageStyle} />
          <p className={textStyle}>Scholarship</p>
        </div>
        <div className={iconStyle}>
          <img src={campusLife} alt="Campus Life" className={imageStyle} />
          <p className={textStyle}>Campus Life</p>
        </div>
      </div>
    </>
  );
};

export default CollegeWidget;
