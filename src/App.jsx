import React from "react";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
  NewToBit,
} from "./Component";

import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 834,
      mdl: 1275,
      lg: 1440,
      xl: 1740,
    },
  },
});

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
      <NewToBit />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
export { theme };
