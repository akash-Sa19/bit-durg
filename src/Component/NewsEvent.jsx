import React from 'react'
import { calender } from '../assets/asset'
import Ribbon from './Ribbon'

const NewsEvent = () => {
  return (
    <div className='mt-[150px]'>
      {/* Ribbon for Event and News */}
      <div className='lg:ml-[130px] md:ml-[90px] sm:ml-auto'>
        <Ribbon heading="The Impact of Work" description="Deploying knowledge to address  critical and complex problem in the world" />
      </div>
      {/* News and Event */}
      <div className='mt-[100px]'>
        <div>
          <img src={calender} alt="Calender Icon" />
          <span className='h-1 w-[200px] bg-grey'></span>
        </div>

        <div>

        </div>

      </div>
    </div>
  )
}

export default NewsEvent
