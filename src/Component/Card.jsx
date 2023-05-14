import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
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




export default function MediaCard(props) {
  return (
    <Card sx={{
      width: 310,
      height: 420,
      position: 'relative',
      boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.25)',
    }}
    className={`
    
    `}
    >
      <CardMedia
        sx={{ height: 208 }}
        image={img1}
        title="Image 1"
      />
      {/* Image Border */}
      <Box sx={{
        width: 290,
        height: 190,
        border: '2px solid #ffffff',
        position: 'absolute',
        color: 'rgba(217, 217, 217, 0)',
        top: 10,
        left: 10,
      }}>

      </Box>

      {/* Calender Sphere */}
      <Box sx={{
        width: 72.5,
        height: 72.5,
        borderRadius: "50%",
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        backgroundColor: 'white',
        top: 170.89,
        left: 36.25,
        filter: 'drop-shadow(3.6px 3.6px 3.6px rgba(0, 0, 0, 0.25))',
      }}>
        {/* Calender Month */}
        <Typography variant="body2" color="initial"
          sx={{
            fontWeight: 800,
            color: color.bitBlue,
            position: 'relative',
            top: 6,
          }}
          className={`text-bit-lightblue`}>{props.month}</Typography>

        {/* Calender Date */}
        <Typography variant="h4" color="initial"
          sx={{
            fontWeight: 700,
            color: color.bitLightBlue,
          }} >{props.date}</Typography>
      </Box>


      {/* Card Content */}
      <CardContent className='mt-[34px] '>

        {/* Content Heading */}
        <Typography gutterBottom
          variant="h6"
          sx={{ fontWeight: 700, }}
          className={`text-bit-red font-bold `}>
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