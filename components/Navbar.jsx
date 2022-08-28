import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const [color, setColor] =useState('transparent')
    const [logo,setLogo] = useState("logo-white");
    const [textColor, setTextColor] = useState('white')
    const handleNav = () =>{
        setNav(!nav);
    }
useEffect(()=>{
    const changeColor = () =>{
        if(window.scrollY>=90){
            setColor('#fff');
            setTextColor('#000000')
            setLogo("logo-black")
        }else{
            setColor('transparent')
            setTextColor('white')
            setLogo("logo-white")
        }
    }
    window.addEventListener('scroll',changeColor);
},[]);

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
                <div className={(`${logo}`)} >

                
                </div>
            <ul style={{color:`${textColor}`}} className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li className='p-4'>
                    <Link href='/work'>Work</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            {/* Mobile button */}
            <div onClick={handleNav} className='block sm:hidden z-10 cursor-pointer'>
                {nav ? (
                    <AiOutlineClose style={{color:`${textColor}`}} size={30}/> 
                ):(
                    <AiOutlineMenu style={{color:`${textColor}`}} size={30}/>
                )}
            </div>
            {/* Mobile Menu */}
            <div className={
                nav
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            }>
                <ul>
                    <li onClick={handleNav} className='cursor-pointer p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={handleNav} className='cursor-pointer p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li onClick={handleNav} className='cursor-pointer p-4 text-4xl hover:text-gray-500'>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li onClick={handleNav} className='cursor-pointer p-4 text-4xl hover:text-gray-500'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
