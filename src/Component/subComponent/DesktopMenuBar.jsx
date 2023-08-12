import React from 'react'

// constants
import { NavbarItems } from '../../Constants'


const DesktopMenuBar = () => {
  return (
    <div className='w-full h-[660px] md:hidden lg:absolute'>
        <About />
    </div>
  )
}

const About = () => {
    return (
        <div className={`w-full h-full m-[30px] border-8 border-bit-red`}>
            {/* {NavbarItems[0].map((item, index) => {
                <h2>{item.heading}</h2>
            })} */}
        </div>
    )
}

export default DesktopMenuBar
