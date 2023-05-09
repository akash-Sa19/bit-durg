import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {img1} from '../assets/asset'
import { Stack } from '@mui/material';


export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 311 }}>
      <CardMedia
        sx={{ height: 208 }}
        image= {img1}
        title="Image 1"
      />
      <Box sx={{
        width: 72.5,
        height: 72.5,
        borderRadius: "50%",
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: 'white',
        top: -40,
        left: 36.25,
      }}
      
      >
        <Typography variant="body2" color="initial" sx={{fontWeight: 800}}>MAR</Typography>
        <Typography variant="h4" color="initial" sx={{fontWeight: 700}} >28</Typography>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}