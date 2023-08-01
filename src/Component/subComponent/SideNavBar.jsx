import React from "react";

// assets
import { bitLogo2, search, closeIcon } from "../../assets/asset";

// constant
import { NavbarItems } from "../../Constants";

//material ui
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";

const SideNavBar = (props) => {
  return (
    <div className="bg-white z-50 fixed w-[418px] sml:w-[418px] sm:w-[100vw] top-0 right-0 h-[100vh] bg-fixed ">
      <div className="flex flex-start items-center h-[138px] justify-between ml-[16px] mr-[26px]">
        <div className="w-[210px] flex justify-around items-center">
          <img
            src={bitLogo2}
            alt="BIT Logo"
            className="w-[60px] h-[61.68px] "
          />
          <p className="text-[24px] font-semibold text-[#800000]">BIT-DURG</p>
        </div>
        <div className="flex justify-end items-center w-[92px] gap-[21px] ">
          {/* Search Icon */}
          <IconButton
            aria-label="Search"
            onClick={() => {
            //   props.handleNavbarDisplayState;
            //   props.handleSearchBarState;
            }}
          >
            <img src={search} alt="Search Icon" className="w-[30px] h-[30px]" />
          </IconButton>

          {/* Close Icon */}
          <IconButton
            aria-label="Close"
            onClick={() => setNavbarDisplay(!navbarDisplay)}
          >
            <img
              src={closeIcon}
              alt="Close Icon"
              className="w-[22px] h-[22px]"
            />
          </IconButton>
        </div>
      </div>

      <List
        component={`nav`}
        sx={{
          zIndex: "50",
          bgcolor: "white",
          position: "relative",
          bottom: "15px",
        }}
      >
        {NavbarItems.map((currentValue, index) => (
          <div key={currentValue.key} className="bg-[#f9f5ef]">
            <GrandParent item={currentValue} />
          </div>
        ))}
      </List>
    </div>
  );
};

export default SideNavBar;
