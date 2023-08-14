import React, { useState } from "react";
import "../../index.css";

const loginCard = (props) => {
  const [fold, setFold] = useState(props.foldValue);
  const LoginCardDesign = `lg:w-[440px] sm:w-[90%] sm:max-w-[360px] md:max-w-[90%] ${
    fold ? "lg:h-[60px] md:h-[36px] sm:h-[40px]" : "lg:h-[440px] md:h-[250px] sm:h-[360px]"
  } flex flex-col items-center bg-white rounded-md text-bit-red drop-shadow-[8px_8px_10px_rgba(0,0,0,0.25)] overflow-y-hidden transition-all duration-500 
    `;

  const inputFieldDesign = "lg:w-[360px] sm:w-[220px]  lg:h-[50px] md:h-[30px] sm:h-[25px] lg:border-4 sm:border-2 border-bit-CreamLite  rounded-[8px] px-4 py-4 lg:text-xl md:text-sm sm:text-base mt-1 focus:border-bit-Cream active:border-bit-Cream hover:border-bit-Cream inputDesign text-black font-medium focus:shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)] transitions duration-300 font-normal";
  return (
    <div className={`${LoginCardDesign} transition`}>
      <p
        className={`lg:text-2xl md:text-lg sm:text-lg ${
          fold ? "lg:mt-[14px] sm:mt-[6px]" : "lg:mt-8 sm:mt-4"
        } transition-all duration-500`}
        onClick={props.foldFunctState}
          // () => {

          // setFold((prevState) => !prevState);
          // props.foldFunct
        // }
        
        
      >
        {props.heading}
      </p>
      <div className={`${fold ? 'hidden' : 'block'}`}>
        <div className="flex flex-col items-start lg:mt-10 md:mt-4 sm:mt-[60px]">
          <label htmlFor="username" className=" lg:text-2xl md:text-sm sm:text-base">
            Username :
          </label>
          <input type="text" id="username" className={`${inputFieldDesign} `} />

          <label htmlFor="password" className="mt-3 lg:text-2xl md:text-sm sm:text-base">
            Password :
          </label>
          <input
            type="password"
            id="password"
            className={`${inputFieldDesign} `}
          />
        </div>
        <div className="lg:mt-[60px] md:mt-[15px] sm:mt-[60px] flex justify-between items-center lg:w-[360px] md:w-[220px] h-auto ">
          <div className="flex flex-col text-left text-bit-lightblue cursor lg:text-base sm:text-xs">
            <p className="hover:underline hover:decoration-solid">
              Forgot Password
            </p>
            <p className="hover:underline hover:decoration-solid">
              SignUp (New User)
            </p>
          </div>
          <button
            type="button"
            className="lg:w-[75px] md:w-[55px] sm:w-[55px] lg:h-[30px] md:h-[25px] sm:h-[30px]  bg-bit-lightblue lg:text-base md:text-xs text-white rounded-[5px] font-medium tracking-wider hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)] transitions duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default loginCard;
