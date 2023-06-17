import React from "react";
import { college } from "../assets/asset";

const StudentSection = () => {
  return (
    <div
      className={`new-container h-[550px] mt-[150px] py-6 bg-[url('/src/assets/college.png')] bg-black bg-opacity-20`}
    >
      <p className="text-4xl w-full text-white font-alegreya-sans font-bold uppercase text-center ">
        Student Section
      </p>
      <div className="grid grid-cols-2">
        <div className="col-span-1 px-10 py-2">
          <p className="w-full block border-b-4 mb-3 border-red-900 text-2xl text-red-900 font-bold">
            NSS
          </p>
          <p className="text-white text-xl text-justify">
            Bhilai Institute Of Technology, Durg is having NSS wing since its
            inception. Earlier it was affiliated to the Pandit Ravi Shanker
            Shukla University, Raipur till 2006 than afterward to Chhattisgarh
            Swami Vivekanand Technical University, Bhilai. Initially BIT has
            single unit of 100 students. In year 2012 another unit of 50
            students (girls ) was sanctioned to the Institute. The performance
            of BIT NSS unit has been phenomenal and in Year 2014 the intake of
            50 student was hiked to 100 student. Thus Bhilai Institute Of
            Technology, became the first Institute of Chhattisgarh Swami
            Vivekanand Technical University ,Bhilai. To have two units of
            100-100 both for Boys (co) and Girls.
          </p>
        </div>
        {/* <div className="col-span-1 px-10 py-2 grid grid-cols-2 gap-2 bg-black bg-opacity-50 p-2">
          <div className="col-span-1">
            <p className="text-white text-lg font-bold text-center border-4 border-transparent blur-sm">
              NSS
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-white text-lg font-bold text-center border-4 border-white">
              Hult Prize
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-white text-lg font-bold text-center border-4 border-white">
              NSS
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-white text-lg font-bold text-center border-4 border-white">
              Hult Prize
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default StudentSection;
