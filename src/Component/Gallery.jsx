import React from "react";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Gallery = () => {
  return (
    <div className="new-container my-10 h-[1000px] grid grid-cols-6 grid-rows-5 gap-8 mt-[200px]">
      <div className="h-full w-full p-2 text-center font-bold border-2 border-green-600 rounded-lg col-span-2 row-span-3 bg-[#E7D7C1]">
        <p className="text-xl">Academic Calender</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar sx={{
            backgroundColor: "white",
            borderRadius: 3,
            my: 2,
            height: "305px",
            minHeight: "220px",
          }} />
        </LocalizationProvider>

        <div className="my-2 bg-white p-2 w-[320px] mx-auto rounded-lg text-left">
          <p>21-May | Sunday | No Masturbation</p>
          <p>22-May | Monday | One Masturbation</p>
          <p>22-May | Tuesday | Infinite Masturbation</p>
        </div>
      </div>
      <div className="h-full w-full p-2 text-center font-bold border-2 border-green-600 rounded-lg col-span-3 row-span-2">
        Video Gallery
      </div>
      <div className="h-full w-full p-2 text-center font-bold border-2 border-green-600 rounded-lg col-span-1 row-span-1">
        Email Widgets
      </div>
      <div className="h-full w-full p-2 text-center font-bold border-2 border-green-600 rounded-lg col-span-1 row-span-1">
        Online Payment
      </div>
      <div className="h-full w-full p-2 text-center font-bold border-2 border-green-600 rounded-lg col-span-1 row-span-1">
        BIT Library
      </div>
      <div className="h-full w-full p-2 text-center font-bold border-2 border-green-600 rounded-lg col-span-3 row-span-3">
        ERP (Faculty Login)
      </div>
      <div className="h-full w-full p-2 text-center font-bold border-2 border-green-600 rounded-lg col-span-3 row-span-2">
        Sucess Stories
      </div>
    </div>
  );
};

export default Gallery;
