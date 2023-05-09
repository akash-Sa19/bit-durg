import React from "react";
// import "./App.css";
// import Navbar from './component/Navbar';
// import HeroComponent from './component/HeroComponent';
import { Navbar, Hero, CollegeWidget, WhoWeAre, NewsEvent } from "./Component";

import { search } from "./assets/asset";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <CollegeWidget />
      <WhoWeAre />
      <NewsEvent />
    </div>
  );
};

export default App;
