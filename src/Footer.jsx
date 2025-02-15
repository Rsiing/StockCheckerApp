import React from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
    <div className='h-70 bg-slate-500 flex flex-row items-center gap-8 px-12 sm:h-70 md:h-60 lg:h-40 xl:h-30'>
        <div className=' w-1/3'>
        <h3>copyright©2025 Stock App. All rights reserved.</h3>
        </div>
        <div className=' flex flex-col lg:flex-row gap-4 cursor-pointer'>
            <FaXTwitter className='size-10 hover:text-white duration-300'/>
            <FaInstagram className='size-10 hover:text-white duration-300'/>
            <FaFacebook className='size-10 hover:text-white duration-300'/>
        </div>
        <div className=''>
            <p>
                Risk Warning and Disclaimer
                CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
                66% of retail investor accounts lose money when trading CFDs with this provider. You should consider
                whether you understand how CFDs work and whether you can afford to take the high risk of losing your
                money.
            </p>
        </div>
            
        
    </div>
  )
}

export default Footer