import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
const work = () => {
  return (
    <div className='bg-black pt-9'>
       {/* <Hero heading='My Works' message='These are my best work'/> */}
       <Portfolio/>
       <Footer/>
    </div>
  )
}

export default work
