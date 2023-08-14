import React from "react";

// constants
import { NavbarItems } from "../../Constants";
import { hero } from "../../assets/asset";

const DesktopMenuBar = (props) => {
  return (
    <div
          className={`w-full h-[660px] md:hidden lg:absolute z-[19] ${props.open ? 'lg:flex' : 'lg:hidden'} top-[100px] left-0  justify-center items-center backdrop-blur-lg `}
    > 
      <div className={`w-[95%] h-[600px]  border-8 border-bit-white flex flex-col flex-wrap z-[18] relative`}> 
        <GrandParent menuIndex = {props.menuIndex} />
      </div>
    </div>
  );
};

const GrandParent = (props) => {
  return (
    <>
      {NavbarItems.map((grandParent, index) => {
        return (
          <>
            {index == props.menuIndex ? (
              <div className=" p-[30px] flex flex-col flex-wrap justify-start items-center w-full h-full text-white">
                {/* <p>{grandParent.title}</p>  == About */}
                {grandParent.content.map((parent, index) => {
                  return (
                    <div className=" m-4 w-[30%]">
                      <h2
                        className="text-3xl font-bold tracking-wide font-alegreya-sans text-bit-red"
                        key={parent.key}
                      >
                        {parent.heading}
                      </h2>
                      <div className="mt-5">
                        <ul className="">
                          {parent.links.map((child, index) => {
                            return (
                              <li className="mt-2 font-medium mdl:text-base lg:text-xl font-roboto" 
                              key={child[2].key}>
                                - <a
                                  className="font-medium tracking-wide mdl:text-base lg:text-xl font-roboto"
                                  href={child[1]}
                                  target="_blank"
                                >
                                  {child[0]}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div >
            ) : (
              null
            )}
          </>
        );
      })}
    </>
  );
};

export { GrandParent };
export default DesktopMenuBar;
