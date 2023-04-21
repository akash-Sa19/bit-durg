import React from 'react'
// import { search, Grouplogo1 } from '../assets/asset.js'
// import search from ''
const svg_img = '../assets/search.svg'
const Navbar = () => {
  return (
	<div className='font-roboto'>
	  <div className='h-10 bg-bit-red '>
		{/* <ul>
			<li>EVENT</li>
			<li>NEWS</li>
			<li>CAREERS</li>
			<li>INFO ON</li>
			<li>ABOUT</li>
			<li>VISIT</li>
			<li>CONTACT US</li>
			<li>IIC</li>
		</ul> */}
		<div>
			Find Department....
			<span>
				{search}
				<img src={svg_img} alt="svg"/>
			</span>
		</div>
	  </div>
	  <div>

	  </div>
	  {/* <div>{Grouplogo1}</div> */}
	</div>
  )
}

export default Navbar
