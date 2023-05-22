import React from 'react'
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { img1 } from '../assets/asset'
import Typography from '@mui/material/Typography';
import {color} from '../Constants'




const Card2 = (props) => {
  return (
    <div>
    <Card sx={{
      // boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.25)',
      position: 'relative',
      width: {sm: '253.19px', lg: '310px' },
      height: {sm: '168.79px', lg: '208px'}
    }}
    >
      <CardMedia
        // sx={{ height: 208 }}
        image={img1}
        title="Image 1"
        className="lg:h-[208px] sm:h-[168.79px]"
      />
      {/* Image Border */}
      <Box sx={{
        border: '3px solid #ffffff',
        position: 'absolute',
        color: {color: 'white' , hover: color.bitRed },
        top: { sm: '8px', lg: '10px' },
        left: { sm: '8px', lg: '10px' },
        width: {sm: '237.19px', lg: '290px'},
        height: {sm: '152.79px', lg: '190px'}
      }}
      >
      </Box>
    </Card>
    
    {/* Card Content */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { sm: '16px', lg: '20px', xl: '24px' },
            marginTop : {sm: '16px', md: '36px'},
            marginX : {sm: '12px', md:'16px'},
            color : color.bitRed,
          }}
          >
          {props.heading}
        </Typography>
    </div>
  )
}

export default Card2







