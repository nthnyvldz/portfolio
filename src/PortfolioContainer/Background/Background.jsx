import React from 'react'
import {FaGraduationCap } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

export default function Background() {
  return (
    <div className="bg-zinc-900 items-center justify-center pb-16 pt-16" id="backgroundSection">

      <h1 className='text-white text-center mb-8 text-3xl font-light'>EDUCATIONAL BACKGROUND</h1>

      <div className=' flex flex-col lg:flex-row'>

          <div class="w-full p-12 sm:p-12 md:p-12 lg:p-8 xl:p-4 text-center items-center justify-center ">
            <div class="bg-transparent rounded-lg shadow-2xl p-6 border border-white ">
              <GiDiploma className='text-white text-2xl mb-4 flex'/>
              <h1 class="text-2xl text-white font-bold mb-4">Elementary Education</h1>
              <p class="text-white text-sm">Graduated at Cuyapo West Central School as Class Valedictorian</p>
            </div>
          </div>


          <div class="w-full p-12 sm:p-12 md:p-12 lg:p-8 xl:p-4 text-center items-center justify-center">
            <div class="bg-transparent rounded-lg shadow-2xl p-6 border border-white ">
              <GiDiploma className='text-white text-2xl mb-4'/>
              <h1 class="text-2xl text-white font-bold mb-4">Secondary Education</h1>
              <p class="text-white text-sm">Graduated at Dr. Ramon De Santos National High School With Highest Honors</p>
            </div>
          </div>

          <div class="w-full p-12 sm:p-12 md:p-12 lg:p-8 xl:p-4 text-center items-center justify-center">
            <div class="bg-transparent rounded-lg shadow-2xl p-6 border border-white ">
              <FaGraduationCap className='text-white text-2xl mb-4'/>
              <h1 class="text-2xl text-white font-bold mb-4">Tertiary Education</h1>
              <p class="text-white text-sm">Currently a 3rd Year BSIT Student in Central Luzon State University</p>
            </div>
          </div>

      </div>

    </div>

  )
}
