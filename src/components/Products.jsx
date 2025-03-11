import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';

function Products() {
    var products=[
        {title:"arqitel",description:"Arqu printers for the Internet and the Internet Services Services Services Services Services ", live:true, case:false},
        {title:"TTR",description:"Arqu printers for the Internet and the Internet Services Services Services Services Services ", live:true, case:false},
        {title:"yir 2022",description:"Arqu printers for the Internet and the Internet Services Services Services Services Services ", live:true, case:true},
        {title:"yahoo!",description:"Arqu printers for the Internet and the Internet Services Services Services Services Services ", live:true, case:true},
    ];

    const[pos, setPos]= useState(0);
    const mover=(val)=>{
        setPos(val*23);
    }

    
  return (
    <div className='mt-32 relative '>
        {products.map((val, index)=> <Product count={index} val={val} mover={mover} />)}
        <div className=' absolute w-full h-full top-0 pointer-events-none'>
          <motion.div
           initial={{y: pos, x:"-50%"}}
           animate={{y: pos+`rem`}}
           transition={{ease:[0.76, 0, 0.24, 1],duration:.6}}
           className=' window absolute w-[32rem] h-[23rem] bg-white left-[44%]  overflow-hidden'>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='  w-full h-full bg-sky-100'> </motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='  w-full h-full bg-sky-300'> </motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='  w-full h-full bg-sky-400'> </motion.div>
          <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='  w-full h-full bg-sky-500'> </motion.div>


          </motion.div>
        </div>
        
    </div>
  )
}

export default Products