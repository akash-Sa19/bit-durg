import React from 'react'

const Ribbon = (props) => {
  return (
    <div className='flex lg:gap-[80px] lg:h-[120px]  w-auto
     items-center  md:h-[70px] md:gap-[60px]
     md:flex-row sm:flex-col sm:w-full sm:h-full'>

      {/* Horizontal Bar */}
      <span className='w-[140px] h-[10px] bg-bit-red hidden md:hidden sm:block '></span>

      {/* Title */}
      <div className='font-serif-pro font-bold 
      lg:text-[44px] lg:w-[300px] lg:h-[100px] lg:leading-[49px]
      md:-[58px] md:w-[177px] md:leading-[30px]
      sm:text-[26px] md:mt-0 sm:mt-[25px]'>{props.heading}</div>

      {/* Vertical Bar */}
      <span className='lg:w-[10px] lg:h-[120px] 
      md:h-[70px] md:w-[6px]
      bg-bit-red block md:block sm:hidden'></span>

      {/* Description */}
      <div className='italic lg:text-[30px] font-alegreya-sans text-[#5b5b5b] 
      md:font-normal lg:leading-9 lg:w-[487px] lg:h-[72px] 
      md:w-[290.75px] md:h-[42px] md:text-[17.91px] md:leading-[21px] md:mt-0 md:text-start
      sm:mt-[25px] sm:w-[294px] sm:text-center sm:font-medium 
      block'>{props.description}</div>
    </div>
  )
}

export default Ribbon
