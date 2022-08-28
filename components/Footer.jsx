import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import logo from '../assets/logoblack.jpg'
const Footer = () => {
  return (
    <div className='w-full bg-white'>
    <div className='max-w-[1240px] mx-auto py-6 text-center flex justify-between'>  
        <div className=' text-center justify-center flex sm:justify-start'>
            <a className='cursor-pointer px-1' href='https://www.instagram.com/sa_mi_r_.s._thaku_ri_/'>
                <FaInstagram size={25}/>
            </a>
            <a className='cursor-pointer px-1' href='https://m.facebook.com/Samir-photography-700042700039193/'>
                <FaFacebook size={25}/>
            </a>
           
        </div>
        <div className='grid text-center'>
          <h4 className='text-xs'>@2022 Sameer Photography </h4>
          <h4 className='text-xs'>ALL RIGHTS RESERVED</h4>
          <h4 className='text-xs'>DESIGNED WITH  🖤</h4>
        </div>        
    </div>
    </div>
  )
}

export default Footer