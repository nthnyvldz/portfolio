import React, {useState} from 'react'
import { Link } from 'react-scroll'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Navigation() {

  const [nav, setNav] = useState(!false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black'>
      <h1 className=' w-full text-3xl font-bold'>A<span className='text-red-700'>V</span></h1>

      <ul className='hidden md:flex'>
         <Link to='homeSection' smooth={true} duration={100} className='p-4 cursor-pointer hover:text-red-500'>Home </Link>
         <Link to='aboutSection' smooth={true} duration={100} className='p-4 cursor-pointer hover:text-red-500'>About </Link>
         <Link to='backgroundSection' smooth={true} duration={100} className='p-4 cursor-pointer hover:text-red-500'>Education </Link>
         <Link to='contactSection' smooth={true} duration={100} className='p-4 cursor-pointer hover:text-red-500'>Contact </Link>
      </ul>
      
      <div onClick={handleNav} className='block md:hidden'> 
          {!nav ? <AiOutlineMenu className='visibility:hidden cursor-pointer hover:text-red-600'/> : <AiOutlineMenu className='cursor-pointer hover:text-red-600' size={20} /> } 
      </div>

      <div className={!nav ? 'fixed left-0 top-0 pt-8 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300 lg:hidden' : 'fixed left-[-100%]'}>

        <div onClick={handleNav} className='flex md:hidden justify-end mr-4'> 
              <AiOutlineClose className='cursor-pointer hover:text-red-600' size = {20}/>
        </div>

        <h1 className=' w-full text-3xl font-bold text-center '>A<span className='text-red-700'>V</span></h1>
          <ul className='flex flex-col text-center pt-4'>
            <Link to="homeSection" className='p-4 hover:text-red-500 cursor-pointer'>Home</Link>
            <Link to="aboutSection" className=' p-4 hover:text-red-500 cursor-pointer'>About</Link>
            <Link to="backgroundSection" className=' p-4 hover:text-red-500 cursor-pointer'>Education</Link>
            <Link to="contactSection" className=' p-4 hover:text-red-500 cursor-pointer'>Contact</Link>
          </ul>
          
      </div>

    </div>
  )
}
