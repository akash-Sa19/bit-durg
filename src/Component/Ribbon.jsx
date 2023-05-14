import React from 'react'
// Commented code are the absolute value of the elements
// Here Elemnt are using the viewport width to determine the value of there elemt or font
const Ribbon = (props) => {
  return (
    <div className='flex xl:gap-[82px] lg:gap-[5.556vw] lg:h-[8.333vw] lg:max-h-[137px] w-auto 
     items-center md:h-[8.39328vw] md:gap-[7.1942vw]
     md:flex-row sm:flex-col sm:w-full sm:h-full border border-green-600'>

    {/* <div className='flex lg:gap-[80px] lg:h-[120px] w-auto 
     items-center md:h-[70px] md:gap-[60px]
     md:flex-row sm:flex-col sm:w-full sm:h-full border border-green-600'> */}

      {/* Horizontal Bar */}
      {/* <span className='w-[140px] h-[10px] bg-bit-red hidden md:hidden sm:block '></span> */}
      <span className='w-[38.88vw] h-[10px] bg-bit-red hidden md:hidden sm:block '></span>

      {/* Title */}
      {/* <div className='font-serif-pro font-bold 
      lg:text-[44px] lg:w-[300px] lg:h-[100px] lg:leading-[49px]
      md:-[58px] md:w-[177px] md:leading-[30px]
      sm:text-[26px] md:mt-0 sm:mt-[25px]'>{props.heading}</div> */}

      <div className='font-serif-pro font-bold 
      xl:text-[50px] xl:max-w-[342px] xl:max-h-[114px] xl:leading-[54px]
      lg:text-[3.056vw] lg:w-[20.83vw] lg:h-[6.94vw] lg:leading-[3.4027vw]
      md:text-[3.1175vw] md:leading-[3.59712vw] md:w-[21.223vw]
      sm:text-[7.2vw] md:mt-0 sm:mt-[6.944vw]'>{props.heading}</div>
      {/* setting the font size according to the view post width of the screen */}
        {/* multuiply by 3.056 */}
      {/* Vertical Bar */}
      <span className=' xl:max-h-[136.61px]
      lg:w-[10px] lg:h-[8.33vw] 
      md:h-[8.393285vw] md:w-[10px] 
      bg-bit-red block md:block sm:hidden'></span>

      {/* Description */}
      <div className={`xl:text-[35px] xl:max-h-[82px] xl:max-w-[555px]
      italic lg:text-[2.083vw] font-alegreya-sans text-[#5b5b5b] 
      md:font-normal lg:leading-9 lg:w-[33.81944vw] lg:h-[5vw] 
      md:w-[34.8621vw] md:h-[5.03597vw] md:text-[2.158273vw] md:leading-[2.51798vw] md:mt-0 md:text-start
      sm:mt-[6.944vw] sm:w-[81.667vw] sm:text-center sm:font-medium sm:text-[5vw]
      block`}>{props.description}</div>
      {/* <div className='italic lg:text-[30px] font-alegreya-sans text-[#5b5b5b] 
      md:font-normal lg:leading-9 lg:w-[487px] lg:h-[72px] 
      md:w-[290.75px] md:h-[42px] md:text-[17.91px] md:leading-[21px] md:mt-0 md:text-start
      sm:mt-[25px] sm:w-[294px] sm:text-center sm:font-medium 
      block'>{props.description}</div> */}
    </div>
  )
}

export default Ribbon
