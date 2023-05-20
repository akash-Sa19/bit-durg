import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
  Footer,
} from "./Component";

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
  return (
    <ThemeProvider theme={theme}>
      <div className="">
        {/* <Navbar /> */}
        {/* <Hero /> */}
        {/* <CollegeWidget /> */}
        {/* <WhoWeAre /> */}
        <NewsEvent />
        {/* <Mission /> */}
        {/* <Achievements /> */}
        {/* <StraightFromSource /> */}
        {/* <Footer /> */}
      </div>
    </ThemeProvider>

  );
};

export default App;
export {theme};
