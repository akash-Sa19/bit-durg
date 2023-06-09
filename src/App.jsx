import React from "react";
import { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from './component/Navbar';
// import HeroComponent from './component/HeroComponent';
import {
  Navbar,
  Hero,
  CollegeWidget,
  WhoWeAre,
  NewsEvent,
  Mission,
  Achievements,
  StraightFromSource,
  StudentSection,
  Gallery,
  Footer,
} from "./Component";

import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { search } from "./assets/asset";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const debounce = (fn, ms) => {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply();
      }, ms);
    };
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      window.innerWidth > 1440 ? setWidth(1440) : setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  useEffect(() => {
    console.log(width, height);
  }, [width, height]);

  return (
    <>
      <Navbar width={width} />
      <Hero />
      <CollegeWidget />
      <WhoWeAre />
      <NewsEvent />
      <Mission />
      <Achievements />
      <StraightFromSource width={width} height={height} />
      <StudentSection />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
