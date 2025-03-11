import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
            <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokuss.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-300 capitalize'>socials</h4>
                {["instagram","twitter(x?)","LinkedIn"].map((item, index)=> <a key={index} className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-300 capitalize'>sitemap</h4>
                {["home","work","careers","contact"].map((item, index)=> <a key={index} className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
            </div>
           <div className='basis-1/2 flex flex-col items-end'>
            <p className='text-right'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
            <img className='mt-10 w-32' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
           </div>
            
            </div>

        </div>
    </div>
  )
}

export default Footer