import React from 'react'
import IgImg1 from '../assets/ig-img-1.jpg'
import IgImg2 from '../assets/ig-img-2.jpg'
import IgImg3 from '../assets/ig-img-3.jpg'
import IgImg4 from '../assets/ig-img-4.jpg'
import IgImg5 from '../assets/ig-img-5.jpg'
import IgImg6 from '../assets/ig-img-6.jpg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-8'>@Sameer Photography</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
          <InstagramImg className='z-10' socialImg={IgImg1}/>
          <InstagramImg className='z-10' socialImg={IgImg2}/>
          <InstagramImg className='z-10' socialImg={IgImg3}/>
          <InstagramImg className='z-10' socialImg={IgImg4}/>
          <InstagramImg className='z-10' socialImg={IgImg5}/>
          <InstagramImg className='z-10' socialImg={IgImg6}/>
        </div>
    </div>
  )
}

export default Instagram
