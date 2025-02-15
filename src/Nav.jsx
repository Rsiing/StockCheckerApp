import {useState} from 'react'
import { HiMenu } from "react-icons/hi";

function Nav() {

  const [navExpand, setNavExpand] = useState(false);
  const toggleNav = () => {
    setNavExpand(!navExpand);
  };

  return (
    <div className='h-30 my-10 w-full flex justify-center items-center text-5xl lg:text-6xl xl:text-7xl'>
      <h1>Stock App</h1>
      <HiMenu 
        onClick={toggleNav}
        className="size-16 fixed z-3 sm:size-18 md:size-20 lg:size-22 xl:size-24 bg-sky-300 rounded-xl right-4  cursor-pointer hover:text-white duration-300" />
      <div 
        style={{height: navExpand ? 0 : 200,
        opacity: navExpand ? 0 : 1,
        transition: 'height 0.5s ease, opacity 0.5s ease',
        overflow: 'hidden'}}
        className='fixed w-full bg-sky-300 z-1 duration-500 flex justify-center text-3xl items-center gap-8  '>
          <a href='#' className='relative right-14 sm:right-12 md:right-4 md:text-4xl lg:right-0 lg:text-5xl hover:text-white duration-300 p-4'>Home</a>
          <a href='#' className='relative right-14 sm:right-12 md:right-4 md:text-4xl lg:right-0 lg:text-5xl hover:text-white duration-300'>About</a>
          <a href='#' className='relative right-14 sm:right-12 md:right-4 md:text-4xl lg:right-0 lg:text-5xl hover:text-white duration-300'>Contact</a>
          <a href='#' className='relative right-14 sm:right-12 md:right-4 md:text-4xl lg:right-0 lg:text-5xl hover:text-white duration-300'>Services</a>
      </div>
    </div>
    
  )
}

export default Nav