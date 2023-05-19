import React from 'react'
import { bitLogo3, bitBuildingIcon, callIcon, locationIcon, mailIcon, } from '../assets/asset'
import { Stack, Link, IconButton } from '@mui/material'
import { color } from '../Constants'
import '../index.css'



const LinkDesign = {
    color: color.bitRed,
    fontWeight: 500,

}
const HeadingDesign = {
    fontWeight: 800,
    fontSize: 28.8,
    fontFamily: 'Alegreya Sans',
    color: color.bitRed,
}

const BitBuildingIcon = () => (<img src={bitBuildingIcon} />)
const CallIcon = () => (<img src={callIcon} />)
const LocationIcon = () => (<img src={locationIcon} />)
const MailIcon = () => (<img src={mailIcon} />)

console.log(LinkDesign.color);

const Footer = () => {
    return (
        <div className='w-[100vw] relative'>
            {/* Footer Heading */}
            {/* 1 */}
            <div className='lg:h-[180px] bg-bit-red flex justify-center items-center gap-2'>
                {/* Div Contain logo */}
                {/* 1.a */}
                <div className='border border-white'>
                    <img src={bitLogo3} alt="BIT LOGO" />
                </div>
                {/* Div Contain Title */}
                {/* 1.b */}
                <div className='text-center'>
                    <p className='font-serif-pro font-semibold text-[37.94px] leading-10 border border-white'>BHILAI INSTITUTE<br />OF TECHNOLOGY
                    </p>
                </div>
            </div>
            {/* Horizonatal Bar 1 */}
            {/* 2 */}
            <div className='lg:h-[4px] bg-white'></div>
            {/* Horizonatal Bar 2*/}
            {/* 3 */}
            <div className='lg:h-[10px] bg-bit-red'></div>


            {/* Footer Links */}
            {/* 4 */}
            <div className='flex items-start justify-evenly gap-[36px] mt-6'>
                {/* Address */}
                {/* 4.a */}
                <div>
                    <h3 style={HeadingDesign}>ADDRESS</h3>
                    {/* Spacing in MUI is Multiple of 8 */}
                    {/* like in this example it is 8*2= 16px */}
                    {/* 4.a.a */}
                    <Stack direction={`column`} spacing={2} mt={4}>
                        {/* 4.a.a.a */}
                        <Stack direction={`row`} alignItems={`center`}>
                            <IconButton aria-label="BIT Building Icon">
                                <BitBuildingIcon />
                            </IconButton>
                            <Link sx={LinkDesign} className='underlineAnimation' underline="none" >Institute Code: 01</Link>
                        </Stack>

                        {/* 4.a.a.b */}
                        <Stack direction={`row`} alignItems={`center`}>
                            <IconButton aria-label="BIT Location Icon">
                                <LocationIcon />
                            </IconButton>
                            <Link sx={LinkDesign} className='underlineAnimation' underline="none" >Bhilai House, Durg<br />Chhattishgarh - 491001</Link>
                        </Stack>

                        {/* 4.a.a.c */}
                        <Stack direction={`row`} alignItems={`center`}>
                            <IconButton aria-label="Call Icon">
                                <CallIcon />
                            </IconButton>
                            <Link sx={LinkDesign} className='underlineAnimation' underline="none" >0788-2359297</Link>
                        </Stack>

                        {/* 4.a.a.d */}
                        <Stack direction={`row`} alignItems={`center`}>
                            <IconButton aria-label="Mail Icon">
                                <MailIcon />
                            </IconButton>
                            <Link sx={LinkDesign} className='underlineAnimation' underline="none" >bit@bitdurg.ac.in</Link>
                        </Stack>
                    </Stack>

                </div>

                {/* Quick Links */}
                {/* 4.a.b */}
                <div>
                    <h3 style={HeadingDesign}>QUICK LINKS</h3>
                    <Stack spacing={2} mt={4}>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">Online Fee Payment</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">Sitemap</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">UCO Bank</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">Gymnasium</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">E-Book</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">Facilities</Link>
                    </Stack>
                </div>

                {/* Downloads */}
                {/* 4.a.c */}
                <div>
                    <h3 style={HeadingDesign}>DOWNLOADS</h3>
                    <Stack spacing={2} mt={4}>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">Backlog Exam Form</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">Transfer & Provisional<br />Certificate Form</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">Revaluation Form</Link>
                        {/* <Link sx={LinkDesign} className='underlineAnimation' underline="none">Calender</Link> */}
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">Prospectus</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">Magazine</Link>
                    </Stack>
                </div>
                
                {/* 4.a.d */}
                <div>
                    <h3 style={HeadingDesign}>IMPORTANT LINKS</h3>
                    <Stack spacing={2} mt={4}>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">CSVTU Calender</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">BIT Alumni</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">AICTE</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">University Grants<br />Commission</Link>
                        <Link sx={LinkDesign} className='underlineAnimation' underline="none">DTE Raipur</Link>
                    </Stack>

                </div>
                {/* <p><a href="#acs" className="underline">Underline<br/>version</a></p> */}
                {/* <p><a href="#" className='text-red-700 hover:text-yellow-600'>Apple</a></p> */}
            </div>
            
            {/* Horizonatal Bar 3*/}
            <div className='absolute top-[262px] w-full'>
            <div className='bg-bit-yellow h-[4px] w-full'></div>
            <div className='bg-bit-red h-[4px] w-full'></div>
            </div>

        </div>
    )
}

export default Footer
