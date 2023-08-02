import React from 'react'

export default function About() {

  return (
    <div className=" bg-white flex items-center justify-center pb-16 pt-16" id="aboutSection">
    
    <div className="container mx-auto px-12">

      <div className="flex flex-wrap-reverse items-center ">

        <div className="w-full h-full md:w-1/2 justify-center flex items-center pt-4">
          <img src="img2.jpg" alt="" className="rounded-lg shadow-lg border-l-8 border-b-8 border-red-800 w-3/5 h-auto mr-8"></img>
        </div>

        <div className="w-full md:w-1/2 justify-start text-center">

          <h1 className="text-3xl sm:text-4xl md:text-2xl md:text-center lg:text-3xl xl:text-4xl font-extralight mr-8 text-black items-center justify-center text-center mb-4">AS A <span className='text-red-600'>PROGRAMMER</span></h1>

          <div class="border-solid border-red-600 border-1 mr-8 mb-4"></div>

            <p className='text-sm sm:text-sm md:text-sm lg:text-sm xl:text-base mr-8 text-black font-light mb-4'>"I am driven by goals and family values, I approach learning with enthusiasm and adaptability. Proficient in <span className='text-red-600'>HTML, CSS, PHP, ReactJS, and SQL </span>, I create engaging and user-centric web solutions. Committed to professional growth and making a positive impact in the dynamic world of web development, join me on this exciting journey of innovation and creativity in Information Technology."</p>


            <div className='mb-2 mr-8'>

              <a href="resume.pdf" download="resume.pdf"><button className='border border-red-950 hover:bg-red-900 text-black font-semibold py-2 rounded-lg px-4 m-2'>DOWNLOAD RESUME</button></a>

            </div>

        </div>

      </div>
    </div>
  </div>
  )
}
