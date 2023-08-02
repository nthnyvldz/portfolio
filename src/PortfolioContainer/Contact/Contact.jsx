import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import Swal from 'sweetalert2'

export default function Contact() {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
    
      emailjs.sendForm('service_x005ozp', 'template_7kn3lkx', form.current, 'qOZifY3-gKfDuuLk8')
        .then((result) => {
              Swal.fire({
                position: 'top-end',
                text: 'Your message has been sent',
                showConfirmButton: false,
                timer: 1500,
                width: '400px',
                padding: '0 20 0 0'
              })
            
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className='bg-white flex items-center justify-center py-24 pt-20' id="contactSection">

      <div className="flex flex-wrap-reverse items-center w-full p-4 text-center justify-center">

        <div className="w-full md:w-1/2 p-12 ">
             <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col mb-6">

                  <div className="">
                    <label className="block text-gray-500 font-bold pr-4 mb-2" for="inline-full-name">
                      Name
                    </label>
                  </div>
                      
                  <div className="">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-black focus:outline-none focus:bg-white focus:border-red-500 mb-2 py-2 px-2"  type="text" placeholder="Enter Name" name="user_name" autoComplete='off'></input>
                  </div>    

                  <div className="">
                    <label className="block text-gray-500 font-bold pr-4 mb-2" for="inline-full-name">
                      Email
                    </label>
                  </div>

                  <div className="">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-black focus:outline-none focus:bg-white focus:border-red-500 mb-2 py-2 px-2"  type="text" placeholder="Enter Email" name="user_email" autoComplete='off'></input>
                  </div>
                      
                  <label className="block text-gray-500 font-bold pr-4 mb-2" for="inline-full-name">
                      Message
                  </label>

                  <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full text-black focus:outline-none focus:bg-white focus:border-red-500 mb-2 py-8 px-2"  type="text" placeholder="Enter Message" autoComplete='off' name="message" />

                  <input className='shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4' type='submit' value='Send'>
                  </input>


                </div>  
            </form>
        </div>

        <div className="w-full md:w-1/2 justify-center text-center px-2 py-4 shadow-2xl border-red-500 border-r-4 border-b-4 ">
          

          <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-3 text-black sm:text-center md:text-center">CONTACT ME</h1>

          <p className='text-base sm:text-base sm:ml-0 md:text-sm lg:text-base xl:text-lg font-light mb-3 text-black italic sm:text-center md:text-center'>"Need a Web Developer to enhance your Website? Send me an email and let's have a chat!"</p>

          <div class="border-solid border-red-500 border-1 mb-3 mr-8 ml-8"></div>

          <div className='flex items-center justify-center space-x-8 mb-3 mt-8 text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl'>
            
            <AiFillHtml5 className='hover:text-orange-500'/>
            <BiLogoReact className='hover:text-blue-400'/>
            <BiLogoTailwindCss className='hover:text-blue-400'/>
            
          </div>

        </div>

      </div>

    </div>
  )
}
