import React, {useState} from 'react'
import { Card2, Ribbon } from './index'
import { bitLogo3 } from '../assets/asset'
import {LearnAboutBit} from '../Constants'

import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

// import Card from "@mui/material/Card";
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const headListStyleText = {
    fontSize: '16px'
}

const listItemTextStyle = {
    fontSize: '16px'

}

const NewToBit = () => {
    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className='w-[100vw] mt-[150px]'>
            {/* 1 */}
            {/* Ribbon for New to Bit */}
            <div className='sm:ml-auto md:ml-[10%]'>
                <Ribbon heading="Find your way around BIT" description="Explore the countless paths and opportunities that BIT has to offer."></Ribbon>
            </div>
            {/* 2 */}
            {/* New to Bit */}
            <div className='mt-[100px] flex md:flex-row sm:flex-col md:items-start sm:items-center md:justify-center lg:gap-[100px] md:gap-[46px] w-auto '>
                {/* 2.a */}
                <div className='flex flex-col justify-start items-center '>
                    {/* Bit Logo */}
                    {/* 2.a.a */}
                    <img src={bitLogo3} alt="BIT Logo" width={`50px`} height={`48.43px`} />
                    {/* 2.a.b */}
                    <span className='h-1 w-[200px] bg-grey block mt-5'></span>
                    {/* 2.a.c */}
                    <div className='text-bit-red font-medium'>
                        <List>
                            <ListItemButton onClick={handleClick}>
                                <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                                <ListItemText primary="New To BIT" sx={headListStyleText} />
                                {/* {open ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />} */}
                            </ListItemButton>
                            {/* <Collapse in={open} timeout={`auto`} unmountOnExit > */}
                                <List component={`div`} disablePadding>
                                    <ListItemButton >
                                        <ListItemText sx={listItemTextStyle}>Learn About BIT</ListItemText>
                                    </ListItemButton>

                                    <ListItemButton>
                                        <ListItemText sx={listItemTextStyle}>Academic Offerings</ListItemText>
                                    </ListItemButton>

                                    <ListItemButton>
                                        <ListItemText sx={listItemTextStyle}>Campus & Community</ListItemText >
                                    </ListItemButton>

                                    <ListItemButton>
                                        <ListItemText sx={listItemTextStyle}>Visit BIT</ListItemText >
                                    </ListItemButton>
                                </List>
                            {/* </Collapse> */}
                        </List>
                    </div>


                </div>

                {/* 2.b */}
                <div className='flex md:flex-row sm:flex-col md:mt-[0] sm:mt-10 flex-wrap lg:gap-10 sm:gap-8 w-auto lg:min-w-[1024px] lg:w-[70.27778vw] md:w-[540px] mdl:w-[840px]'>
                {/* Add Map to card in this */}
                {
                   LearnAboutBit.map((items, index) => (
                        <Card2 
                        key={items.id}
                        heading={items.heading}
                         />
                   ))
                }
                </div>

            </div>
        </div>
    )
}

export default NewToBit
