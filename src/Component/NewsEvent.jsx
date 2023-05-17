import React from 'react'
import { calender, event_icon, news_icon, filter } from '../assets/asset'
import { Ribbon, Card, BottomCircle } from './index'
import { Button } from '@mui/material'
import { news, color } from '../Constants'
import '../index.css'

const buttonDesign = {
  backgroundColor: 'rgba(231, 215, 193, 0.25)',
  color: "#800000",
  width: 200,
  height: 45,
  // fontFamily: 'Alegreya Sans',
  fontWeight: 800,
  fontSize: 20,
  borderRadius: 0,
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'flex-start',
  padding: "6px 16px",
  textTransform: 'none',
  borderBottom: '3px solid #E7D7C1',

  // '&:active': {
  //   border: '3px solid #E7D7C1',

  // },
  '&:hover': {
    border: '3px solid #E7D7C1',
    boxShadow: '3px 3px 0px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'rgba(231, 215, 193, 0.25)',
  },
  '&:onClick': {
    border: '3px solid #E7D7C1',
    boxShadow: '3px 3px 0px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'rgba(231, 215, 193, 0.25)',
  }




}
const NewsIcon = () => {
  return (
    <img src={news_icon} width="20px" height="20px" />
  )
}
const NewsEvent = () => {
  return (
    <div className='w-[100vw] border border-blue-500'>

      <div className='mt-[150px]'>
        {/* 1 */}
        {/* Ribbon for Event and News */}
          <div className=' sm:ml-auto md:ml-[10%]'>
            <Ribbon heading="The Impact of Work" description="Deploying knowledge to address  critical and complex problem in the world" />

          </div>




          {/* this is not work when scaleing  */}
          {/* try different approch or somthing */}
        {/* 2 */}
        {/* News and Event */}
        <div className='mt-[100px] flex justify-center lg:gap-[100px] md:gap-[46px]  w-auto border border-yellow-700'>
          {/* 2.a */}
          <div className='w-[202px] flex flex-col items-center lg:scale-[1] md:scale-75 '>
            {/* Calender Icon */}
            <img src={calender} alt="Calender Icon" width='40px' height='40px' />
            {/* Horizontal Bar */}
            <span className='h-1 w-[200px] bg-grey block mt-5'></span>
            <div className='mt-[60px] flex flex-col font-alegreya-sans'>
              {/* <Button variant='contained' className='bitButton '>News</Button> */}

              <Button variant='contained' sx={buttonDesign} startIcon={<img src={news_icon} width="20px" height="20px" style={{ marginRight: "8px" }}
              />}>News</Button>

              <Button variant='contained' sx={buttonDesign} startIcon={<img src={event_icon} width="20px" height="20px" style={{ marginRight: "8px" }} />}>Event</Button>

            </div>
            <div className='mt-[90px]'>
              <Button varient='contained' sx={buttonDesign} startIcon={<img src={filter} width="20px" height="20px" style={{ marginRight: "8px" }} />}>Filter</Button>
            </div>
          </div>

          {/* 2.b */}
          {/* News and Event Card */}
          {/* <div className='flex flex-col items-center lg:min-w-[1014px] lg:w-[70.27778vw] md:min-w-[554px] md:w-[66.4268vw] border border-yellow-600'> */}
          
          <div className='flex flex-col justify-center lg:min-w-[1014px] lg:w-[70.27778vw] md:w-[700px] border border-yellow-600 '>
            {/* 2.b.a */}
            <div className='flex flex-row flex-wrap gap-10 border border-red-600 w-auto lg:scale-[1] md:scale-75'>
            {
              news.map((newsItem, index) => (
                <Card
                  key={newsItem.id}
                  heading={newsItem.heading}
                  description={newsItem.description}
                  date={newsItem.date}
                  month={newsItem.month}
                  img={newsItem.imgSrc}
                  className="lg:scale-[1] md:scale-[100%]"
                />))

            }
            </div>

            {/* 2.b.b */}
            {/* Bottom Circle */}
            <div className='flex gap-2 mt-[46px]'>
              <BottomCircle circleColor={color.bitRed} />
              <BottomCircle circleColor={color.bitRed} />
              {/* <BottomCircle circleColor={color.bitRed} /> */}
            </div>

          
          </div>
        </div>
        
      </div>
    </div>

  )
}

export default NewsEvent
