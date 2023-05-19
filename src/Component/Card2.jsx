

import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
// import Stack from '@mui/material/Stack'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Stack } from '@mui/material';
import { color } from '../Constants';
// import { Block } from '@mui/icons-material';
import { img1 } from '../assets/asset'
import { useState, useEffect } from "react";



const news = [
  {
    imgSrc: { img1 },
  },
];

const size = {'lg': 310, 'md':253.19, 'sm': 100 }

/* 
  lg: 
  md: 
  sm:
*/




console.log('rerendering...')



export default function MediaCard(props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  useEffect(() => {
    console.log(width);
  }, [width]);

  const calculation = (text) => {
    return size[text] / (width / 100)
  } // 310/(vw/100)
  return (
    <Card sx={{
      // width: 310,
      // height: 420,
      // position: 'relative',
      boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.25)',

    }}
      // calculatedHeight-${calculation('lg')}
      className={` relative calculatedHeight-${calculation('lg')}
    lg:w-[${calculation('lg')}px] lg:min-h-[420px] lg:w-[21.52778vw] lg:h-[29.1667vw] 
    md:min-w-[253.19px] md:min-h-[314.46px] md:w-[30.3585vw] md:h-[37.70vw]
    `}
    >
      <CardMedia
        // sx={{ height: 208 }}
        image={img1}
        title="Image 1"
        className="lg:min-h-[208px] lg:h-[14.44vw]"
      />
      {/* Image Border */}
      <Box sx={{
        // width: 290,
        // height: 190,
        border: '2px solid #ffffff',
        position: 'absolute',
        color: 'rgba(217, 217, 217, 0)',
        top: 10,
        left: 10,
      }}
        className="lg:min-w-[290px] lg:w-[20.138vw] lg:min-h-[190px] lg:h-[13.1944vw] "
      >

      </Box>

      {/* Calender Sphere */}
      <Box sx={{
        // width: 72.5,
        // height: 72.5,
        borderRadius: "50%",
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        backgroundColor: 'white',
        // top: 170.89,
        // left: 36.25,
        filter: 'drop-shadow(3.6px 3.6px 3.6px rgba(0, 0, 0, 0.25))',
      }}
        className="lg:min-w-[72.5] lg:w-[5.03472vw] lg:min-h-[72.5] lg:h-[5.03472vw] lg:top-[11.8673vw] lg:left-[2.51736vw]"
      >
        {/* Calender Month */}
        <p
          className={`text-bit-blue text-[0.9722vw] relative top-[0.41667vw] font-extrabold`}>{props.month}</p>

        {/* Calender Date */}
        <p
          className="font-bold text-bit-lightblue text-[2.3611vw]"
        >{props.date}</p>
      </Box>


      {/* Card Content */}
      <CardContent className='mt-[34px] '>

        {/* Content Heading */}
        <Typography gutterBottom
          variant="h6"
          sx={{ fontWeight: 700, }}
          className={`text-bit-red font-bold mb-[7px] text-[]`}>
          {props.heading}
        </Typography>

        {/* Content Description */}
        <Typography
          variant="body2"
          color="text.black"
          sx={{ fontWeight: 500, }} >
          {props.description}
        </Typography>

      </CardContent>

      <CardActions sx={{
        position: 'absolute',
        bottom: 8,
        left: 0,
      }}>

        {/* Share Button */}
        <Button size="small" variant='text'>Share</Button>
        {/* Read More Button */}
        <Button size="small" variant='text'>Read More</Button>
      </CardActions>
    </Card>
  );
}
