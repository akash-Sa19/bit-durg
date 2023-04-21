import React from 'react'
import "./App.css";
// import Navbar from './component/Navbar';
// import HeroComponent from './component/HeroComponent';
import { Navbar, HeroComponent } from './component';

import { search } from './assets/asset';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <HeroComponent /> 
    </div>
  );
}

export default App
