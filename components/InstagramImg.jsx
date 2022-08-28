import React from 'react'
import Image from 'next/dist/client/image'
import {FaInstagram} from 'react-icons/fa'
import { motion } from 'framer-motion'

const InstagramImg = ({socialImg}) => {
  return (
    <motion.div
      whileHover={{scale:1.1}}
      transition={{duration:0.7, type:'tween'}  }  
      className='relative grid'
     >
      <Image 
             className='w-full'  layout='responsive' src={socialImg} alt ='/'/> 
      <div className='flex justify-center items-center cursor-pointer absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
          <p className='text-gray-300 hidden group-hover:block'><FaInstagram size={30}/></p>
      </div>
    </motion.div>
  )
}

export default InstagramImg
