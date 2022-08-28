import React from 'react'
import Link from 'next/link'
const Hero = ({heading,message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center custom-image'>
        {/*Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'/>
        <div className='p-5 text-white z-[2]  mt-[-10rem]'>
            <h2 className='text-5xl font-bold'>{heading}</h2>
            <p className='py-7 text-xl'>{message}</p>
            <Link href="/contact"><button className='px-8 py-2 border hover:bg-white hover:text-black hover:border-black delay-400 ease-in'>CONTACT ME</button></Link>
        </div>
    </div>
  )
}

export default Hero
