import React from "react";
import {
  graduate,
  undergraduate,
  scholarship,
  campusLife,
} from "../assets/asset";

const CollegeWidget = () => {
  return (
    <>
      <div className="flex justify-center">
        <img src={graduate} alt="Graduate" />
        <img src={undergraduate} alt="Undergraduate" />
        <img src={scholarship} alt="Scholarship" />
        <img src={campusLife} alt="Campus Life" />
      </div>
    </>
  );
};

export default CollegeWidget;
