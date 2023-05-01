import React from 'react';
import styles from "../style";
import { search, downArrow, Grouplogo1 } from "../assets/asset";
import { useState } from 'react';

const Navbar = () => {
	const [width, setWidth] = useState(338.8)
	const [height , setHeight] = useState(134.2)
  return (
    <div className="font-roboto">

      <div
        className={`bg-bit-red font-bold text-[14px] h-10 flex justify-center items-center gap-5 w-full`}>

        <div className="">
          <ul className={`${styles.flexEnd}`}>
            <li>EVENT</li>
            <li>NEWS</li>
            <li>CAREERS</li>
            <li className={`${styles.flexEnd}`}>
              INFO ON
              <span>
                <img src={downArrow} alt="Down Arrow" />
              </span>
            </li>
          </ul>
        </div>

        <div className={`w-[340px] h-[135px] top-0 absolute`}>
          <img
            src={Grouplogo1}
            alt="BitLogo"
            className={`w-[${width}px] h-[${height}px`}
          />
        </div>

        <div className={`${styles.flexStart}`}>
          <ul className={`${styles.flexStart}`}>
            <li>ABOUT</li>
            <li>VISIT</li>
            <li>CONTACT US</li>
            <li>IIC</li>
          </ul>
          <div>
            <p>Find Department</p>
            <img src={search} alt="Search" />
          </div>
        </div>
      </div>


      <p>{width}</p>
    </div>
  );
}

export default Navbar
