
import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { color } from '../../Constants';
import { img1 } from '../../assets/asset'



function MediaCard(props) {
  return (
    <Card sx={{
      // width: 310,
      // height: 420,
      // position: 'relative',
      boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.25)',
      
    }}
    // Increasing the height of card by 10px
    className={` relative
    lg:w-[310px] lg:h-[420px]
    sm:w-[253.19px] sm:h-[324.46px] `}
    // className={` relative
    // lg:min-w-[310px] lg:min-h-[420px] lg:w-[21.52778vw] lg:h-[29.1667vw] 
    // md:min-w-[253.19px] md:min-h-[314.46px] md:w-[30.3585vw] md:h-[37.70vw]
    //  `}
    >
      <CardMedia
        // sx={{ height: 208 }}
        image={img1}
        title="Image 1"
        className="lg:h-[208px] sm:h-[168.79px]"
      />
      {/* Image Border */}
      <Box sx={{
        // width: 290,
        // height: 190,
        border: '3px solid #ffffff',
        position: 'absolute',
        color: 'rgba(217, 217, 217, 0)',
        top: {sm: '8px', lg: '10px'},
        left: {sm: '8px', lg: '10px'},
      }}
      className="lg:w-[290px] lg:h-[190px] 
      sm:w-[237.19px] sm:h-[152.79px]"
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
      className={`lg:w-[72.5px] lg:h-[72.5px] lg:top-[170.89px] lg:left-[36.25px] sm:w-[50px] sm:h-[50px]
      sm:top-[138.41px] sm:left-[29.87px] `}
      >
        {/* Calender Month */}
        <p
          className={`text-bit-blue lg:text-[14px] sm:text-[10px] lg:top-[12px] sm:top-[10px] relative font-extrabold uppercase`}>{props.month}</p>

        {/* Calender Date */}
        <p 
          className="font-bold text-bit-lightblue lg:text-[36px] sm:text-[26px] "
          >{props.date}</p>
      </Box>


      {/* Card Content */}
      <CardContent className='lg:mt-[34px] sm:mt-[8px] xl:mt-[38px]'>

        {/* Content Heading */}
        <Typography 
          // variant="h6"
          sx={{ fontWeight: 700,
          fontSize: {sm: '16px', lg: '20px', xl: '24px'}, 
        }}
          className={`text-bit-red font-bold lg:h-[64px] sm:h-[48px] 
          xl:h-[72px]`}>
          {props.heading}
        </Typography>

        {/* Content Description */}
        <Typography
          // variant="body2"
          color="text.black"
          sx={{ fontWeight: 500,
                fontSize: {sm: '12px',lg: '14px', xl: '16px'},
                marginTop: {sm: '4px'}
          }} >
          {props.description}
        </Typography>

      </CardContent>

      <CardActions sx={{
        position: 'absolute',
        bottom: {sm: '0px', lg: '4px', xl: '-2px'},
        left: 0,
      }}>

        {/* Share Button */}
        <Button size='small' variant='text'>Share</Button>
        {/* Read More Button */}
        <Button size="small" variant='text'>Read More</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;