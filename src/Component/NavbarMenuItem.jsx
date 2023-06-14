import React, { useState } from 'react'
import { color } from '../Constants'
import { Stack, Link, Collapse } from '@mui/material'
// import List from '@mui/material/List';
// import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';


const listItemTextStyle = {
    '& .MuiTypography-body1 ': {
        fontSize: '12px',
        color: color.bitRed,
        fontWeight: 500,
    }
}
const headListStyleText = {
    '& .MuiTypography-root': {
        fontWeight: 800,
        fontFamily: 'Alegreya Sans',
        color: color.bitRed,
        letterSpacing: '1px',

    }
}
const SubList = (props) => {

    const [open2, setOpen2] = useState(false);

    return (

        <>
            <Divider component="li" />
            <ListItemButton onClick={() => setOpen2(!open2)}>
                <ListItemText sx={listItemTextStyle}>{props.subHeading}</ListItemText >
                {open2 ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
            </ListItemButton>
            <Collapse in={open2} timeout={`auto`} unmountOnExit >
                {
                    props.subItemArray.map((currentValue, index) => (
                        <>
                            <Divider component="li" />
                            <ListItemButton >
                                <ListItemText sx={listItemTextStyle}>{currentValue}</ListItemText >
                            </ListItemButton>
                        </>
                    ))
                }
            </Collapse>
        </>
    )
}

const NavbarMenuItem = (props) => {

    const [open, setOpen] = useState(false);
    // const [subList, SetSubList] = useState(false);
    return (
        <>
            <Divider component="li" />
            <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemText primary={props.heading} sx={headListStyleText} />
                {open ? <ArrowDropUpRoundedIcon /> : <ArrowDropDownRoundedIcon />}
            </ListItemButton>
            <Collapse in={open} timeout={`auto`} unmountOnExit >
                {
                    props.itemArray.map((currentValue, index) => (
                        <SubList subHeading={currentValue.heading} subItemArray={currentValue.links} key ={currentValue.key} />
                    ))}
            </Collapse>
        </>
    )
}

export default NavbarMenuItem
// export {Sublist};
