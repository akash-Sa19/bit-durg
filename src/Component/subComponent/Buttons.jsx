import React, {useState} from 'react'


const Button = (props) => {
  // const [click, setClick] = useState(false)
  return (
    <div className={`bg-bit-CreamLite w-[200px] h-[45px] flex items-center justify-start px-[6px] border-[3px] border-bit-Cream 
     hover:shadow-[4px_4px_0px_rgba(0,0,0,0.25)] hover:border-[3px] hover:z-10  ${props.click ? 'shadow-[4px_4px_0px_rgba(0,0,0,0.25)]': '' } `} 
     onClick={props.buttonFunc}>

      <img src={props.img} alt={props.iconName} className='px-[6px] mr-[8px]' />
    <p className='font-[800] text-[20px] font-roboto text-bit-red'>{props.buttonContent}</p>
    </div>
  )
}
export default Button

