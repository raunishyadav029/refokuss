import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title="Get Started"}){
  return (
    <div className='max-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between '>
        <span className='text-sm font-medium '>{title}</span>
        <IoIosReturnRight className='ml-2 h-6 w-6 text-zinc-500' />
    </div>
  )
}

export default Button