
import * as React from "react";
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



// const cal = (width, viewport) => {
//   const viewportSize = {
//       'lg': 1440,
//       'mdl': 1000,
//       'md': 834,
//       'sm': 360
//   }
//   return (
//       width / ((viewportSize[viewport]) / 100)
//   )
// }


// export default function MediaCard(props) {
//   return (
//     <Card sx={{
//       // width: 310,
//       // height: 420,
//       // position: 'relative',
//       boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.25)',
      
//     }}
//     className={` relative
//     lg:min-w-[310px] lg:min-h-[420px] lg:w-[21.52778vw] lg:h-[29.1667vw] 
//     md:min-w-[253.19px] md:min-h-[314.46px] md:w-[30.3585vw] md:h-[37.70vw]
//     md:max-w-[288.25px] md:max-h-[358.3px] 
//     mdl:max-w-[331.03px] mdl:max-h-[411.08px]
//     lg:max-w-[344.44px] lg:max-h-[466.66px]
//     xl:max-w-[374.58px] xl:max-h-[507.5px]`}
//     // className={` relative
//     // lg:min-w-[310px] lg:min-h-[420px] lg:w-[21.52778vw] lg:h-[29.1667vw] 
//     // md:min-w-[253.19px] md:min-h-[314.46px] md:w-[30.3585vw] md:h-[37.70vw]
//     //  `}
//     >
//       <CardMedia
//         // sx={{ height: 208 }}
//         image={img1}
//         title="Image 1"
//         className="lg:min-h-[208px] lg:h-[14.44vw] md:min-h-[168.79px] md:h-[20.2386vw]"
//       />
//       {/* Image Border */}
//       <Box sx={{
//         // width: 290,
//         // height: 190,
//         border: '3px solid #ffffff',
//         position: 'absolute',
//         color: 'rgba(217, 217, 217, 0)',
//         top: {md: '8px', lg: '10px'},
//         left: {md: '8px', lg: '10px'},
//       }}
//       className="lg:min-w-[290px] lg:w-[20.138vw] lg:min-h-[190px] lg:h-[13.1944vw] 
//       md:min-w-[237.19px] md:w-[28.44vw] md:min-h-[152.79px] md:h-[18.3201vw]"
//       >
//       </Box>

//       {/* Calender Sphere */}
//       <Box sx={{
//         // width: 72.5,
//         // height: 72.5,
//         borderRadius: "50%",
//         // border: "1px solid red",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "absolute",
//         backgroundColor: 'white',
//         // top: 170.89,
//         // left: 36.25,
//         filter: 'drop-shadow(3.6px 3.6px 3.6px rgba(0, 0, 0, 0.25))',
//       }}
//       className={`lg:min-w-[72.5] lg:w-[5.03472vw] lg:min-h-[72.5] lg:h-[5.03472vw] lg:top-[11.8673vw] lg:left-[2.51736vw] md:min-w-[50px] md:w-[6vw] md:min-h-[50px] md:h-[6vw]  
//       md:top-[16.5959vw] md:left-[3.5815vw] `}
//       >
//         {/* Calender Month */}
//         <p
//           className={`text-bit-blue text-[0.9722vw] relative top-[0.41667vw] font-extrabold`}>{props.month}</p>

//         {/* Calender Date */}
//         <p 
//           className="font-bold text-bit-lightblue text-[2.3611vw] "
//           >{props.date}</p>
//       </Box>


//       {/* Card Content */}
//       <CardContent className='lg:mt-[34px] md:mt-[14px] xl:mt-[38px]'>

//         {/* Content Heading */}
//         <Typography 
//           // variant="h6"
//           sx={{ fontWeight: 700,
//           fontSize: {md: '16px',mdl: '18px', lg: '20px', xl: '24px'}, 
//         }}
//           className={`text-bit-red font-bold lg:h-[64px] md:h-[50px] xl:h-[72px]`}>
//           {props.heading}
//         </Typography>

//         {/* Content Description */}
//         <Typography
//           // variant="body2"
//           color="text.black"
//           sx={{ fontWeight: 500,
//                 fontSize: {md: '12px',mdl: '14px',lg: '14px', xl: '16px'},
//           }} >
//           {props.description}
//         </Typography>

//       </CardContent>

//       <CardActions sx={{
//         position: 'absolute',
//         bottom: {md: '-6px', mdl: '1px', lg: '8px'},
//         left: 0,
//       }}>

//         {/* Share Button */}
//         <Button size='small' variant='text'>Share</Button>
//         {/* Read More Button */}
//         <Button size="small" variant='text'>Read More</Button>
//       </CardActions>
//     </Card>
//   );
// }


export default function MediaCard(props) {
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
          className={`text-bit-blue lg:text-[14px] sm:text-[10px] lg:top-[12px] sm:top-[10px] relative font-extrabold`}>{props.month}</p>

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
        bottom: {sm: '0px', lg: '4px'},
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
