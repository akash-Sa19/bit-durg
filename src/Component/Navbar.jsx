import React from 'react'
import { search } from "../assets/asset"
const Navbar = () => {
  return (
	<div className='font-roboto'>
	  <div className='h-10 bg-bit-red '>
		<ul>
			<li>EVENT</li>
			<li>NEWS</li>
			<li>CAREERS</li>
			<li>INFO ON</li>
			<li>ABOUT</li>
			<li>VISIT</li>
			<li>CONTACT US</li>
			<li>IIC</li>
		</ul>
		<div>
			Find Department....
			<span>
				<img src={search} alt="Search" />
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
