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
} from "./Component/index";

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
    // console.log(width, height);
  }, [width, height]);

  return (
    <div className="bg-scroll scrollNone">
      <ThemeProvider theme={theme}>
        <Navbar width={width} />
        <Hero />
        <CollegeWidget width={width} />
        <WhoWeAre />
        <NewsEvent />
        <Mission />
        <Achievements width={width} />
        <StraightFromSource width={width} height={height} />
        <NewToBit />
        {/* <StudentSection /> */}
        <Gallery />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
export { theme };
