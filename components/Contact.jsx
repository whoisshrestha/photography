import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [success,setSuccess] = useState(false);

    const handleSuccess = ()=>{
        setSuccess(!success);
    }
    const form = useRef();
 
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_peu1klb', 'template_jl2oijm', form.current, 'qKgK4xn7GqVw_N_zL')
        .then((result) => {
            console.log(result.text);
            handleSuccess(false);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Let us Have A TALK</h1>
        <form ref={form} onSubmit={sendEmail} className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' name='user_name' required />
                <input className='border shadow-lg p-3' type="email" placeholder='Email' name='user_email' required />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' name='subject' required/>
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' name='message' required ></textarea>
            <button type='submit' className='border shadow-lg p-3 w-full mt-2'>Submit</button>
            <p className={success ? 'flex w-full text-center text-white bg-[#198754] py-4 px-3 mt-2 justify-center items-center ease-in duration-500' : 'hidden'}>Thank You For your Email.</p>
        </form>
        
    </div>
  )
}

export default Contact