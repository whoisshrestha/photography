import React from 'react'
import Image from 'next/dist/client/image'
import { motion } from 'framer-motion'
import portfolioMain from '../assets/Portfolio/portfolio-main.jpg'
import portfolio1 from '../assets/Portfolio/portfolio1.jpg'
import portfolio2 from '../assets/Portfolio/portfolio2.jpg'
import portfolio3 from '../assets/Portfolio/portfolio3.jpg'
import portfolio4 from '../assets/Portfolio/portfolio4.jpg'
import portfolio5 from '../assets/Portfolio/portfolio5.jpg'
import portfolio6 from '../assets/Portfolio/portfolio6.jpg'
import portfolio7 from '../assets/Portfolio/portfolio7.jpg'
import portfolio8 from '../assets/Portfolio/portfolio8.jpg'
import portfolio9 from '../assets/Portfolio/portfolio9.jpg'

const Portfolio = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{duration:0.7, type:'tween'}  }  
    className='max-w-[1240px] mx-auto py-16 text-center'>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 md:gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image 
                src={portfolioMain}
                alt='/'
                layout='responsive'
                width='677'
                height='451'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio1}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio2}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio3}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio4}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio5}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio6}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image 
                src={portfolio7}
                alt='/'
                layout='responsive'
                width='677'
                height='451'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio8}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio9}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
        </div>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 md:gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image 
                src={portfolioMain}
                alt='/'
                layout='responsive'
                width='677'
                height='451'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio1}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio2}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio3}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio4}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio5}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio6}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image 
                src={portfolio7}
                alt='/'
                layout='responsive'
                width='677'
                height='451'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio8}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
            <div className='w-full h-full'>
                <Image 
                src={portfolio9}
                alt='/'
                layout='responsive'
                width='214'
                height='217'
                objectFit='cover'
                />
            </div>
        </div>
    </motion.div>
  )
}

export default Portfolio
