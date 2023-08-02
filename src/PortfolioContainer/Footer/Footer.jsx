import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className='bg-zinc-900 text-white text-center sm:px-24 md:px-24 lg:px-96 xl:px-96 py-10'>

        <div className="">

          <h1 className="text-3xl sm:text-4xl md:text-2xl md:text-center lg:text-3xl xl:text-4xl font-extralight mx-8 text-white items-center justify-center text-center mb-4"><span className='text-red-600'>A</span>NTHONY <span className='text-red-600'>V</span>ALDEZ</h1>


            <p className='text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base mx-8 text-white font-light mb-4'>"Connect with me and explore my web development projects. Let's collaborate and create exceptional digital experiences together!"</p>

            <div className='flex items-center justify-center space-x-8 mb-3 mt-4 text-2xl '>
            
              <a target="_blank" rel="noreferrer" href='https://www.facebook.com/nthnyvldz13/'><BsFacebook className='hover:text-red-500 cursor-pointer'/></a>
              <a target="_blank" rel="noreferrer" href='https://www.instagram.com/_nthonyvaldez/'><BsInstagram className='hover:text-red-500 cursor-pointer'/></a>
              <a target="_blank" rel="noreferrer" href='https://twitter.com/langgamngmundo'><BsTwitter className='hover:text-red-500 cursor-pointer'/></a>
              
            </div>

          <p className='text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base mx-8 text-white font-light mt-4'>&copy; Copyright 2023 Valdez. All Rights Reserved</p>


        </div>

    </div>
  )
}
