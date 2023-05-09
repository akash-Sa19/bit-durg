import React from 'react'
import { calender, event_icon, news_icon, filter } from '../assets/asset'
import {Ribbon, Card} from './index'
import { Button, colors, } from '@mui/material'
// import DeleteIcon from '@mui/icons-material/Delete';
// import { styled } from '@mui/material/styles'
// import { BorderAllSharp } from '@mui/icons-material'
import '../index.css'



// const BitDurgButton = styled(Button)(({ theme }) => ({
//   backgroundColor: 'rgba(231, 215, 193, 0.25)',
//   color: "#800000",
//   width: 200,
//   height: 45,
//   borderColor: '#E7D7C1',
//   border: '3px solid',
//   fontFamily: 'Alegreya Sans',
//   fontWeight: 800,
//   fontSize: 20,
//   borderRadius: 0,

// }));
// s

// fontFamily: "Alegreya Sans",

// border: '3px solid #E7D7C1'
// '& .MuiButton-root'
// }));


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
    <div className='mt-[150px] '>
      {/* Ribbon for Event and News */}
      <div className='lg:ml-[130px] md:ml-[90px] sm:ml-auto'>
        <Ribbon heading="The Impact of Work" description="Deploying knowledge to address  critical and complex problem in the world" />
      </div>
      {/* News and Event */}
      <div className='mt-[100px] flex'>
        <div className='w-[202px] flex flex-col items-center ml-[60px]'>
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

        {/* News and Event Card */}
        <div className='border border-red-400'>
          <Card heading="Solar Energy Workshop 2022" description="BIT is conducting Solar Energy workshop for three days." />
        </div>

        

      </div>
    </div>
  )
}

export default NewsEvent
