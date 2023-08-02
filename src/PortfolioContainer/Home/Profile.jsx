import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";


export default function Profile() {
  return (
    
          <div className="flex items-center justify-center pb-14" id="homeSection">
            <div className="container mx-auto px-12">
              <div className="flex flex-wrap-reverse items-center ">

                <div className="w-full md:w-1/2 justify-center text-center">

                  <div className='flex items-center justify-center space-x-6 mb-3 text-2xl '>
            
                    <AiFillHtml5 className='text-orange-500'/>
                    <BiLogoTailwindCss className='text-blue-400'/>
                    <BiLogoReact className='text-blue-400'/>
            
                  </div>

                  <p className='text-lg sm:text-lg md:text-sm lg:text-lg xl:text-xl font-light mb-3 mr-8 text-white italic sm:text-center md:text-center lg:ml-12 '>"Full-Stack Web Developer"</p>

                  <h1 className="text-2xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 mr-8 text-white sm:text-center md:text-center lg:ml-12 ">I am Anthony Valdez</h1>

                  <div className='text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 mr-8 text-white sm:text-center md:text-center lg:ml-12'>Proficient in

                      <TypeAnimation className='text-red-700'
                      sequence={[
                        ' HTML', 1000, 
                        ' Tailwind', 1000,
                        ' ReactJS', 1000
                      ]}
                      wrapper="span"
                      speed={60}
                      repeat={Infinity}
                      />

                  </div>

                  <div class="border-solid border-white-500 border-1 mt-4 mb-2 mr-8 sm:text-center md:text-center lg:ml-12 "></div>


                </div>

                <div className="w-full h-full md:w-1/2 justify-center flex items-center">
                  <img src="bh.png" alt="" className=""></img>
                </div>

              </div>
            </div>
          </div>

  )
}
