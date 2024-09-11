import React from 'react'
import letterspring from '../assets/images/letterspring.png';
import secondspring from '../assets/images/second-spring.png';
import letterpartical from '../assets/images/letter-partical.png';
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';

const Newsletter = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto my-20 relative'>
     
        <div className='relative bg-[rgba(223,215,249,0.32)] py-20 rounded-tl-[120px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]'>
        <img src= {letterpartical} className='absolute right-[-102px] bottom-[-71px]'/> 
            
            <div className='absolute top-[-10px] right-[-15px] bg-[#6246E5] p-3 rounded-full cursor-pointer'>
                <a>
                <FaTelegramPlane  className='text-white text-[18px]'/>
                </a>
            </div>
            <img src={letterspring} className='absolute top-0 right-0 '/>
            <img src={secondspring} className='absolute bottom-0 left-[32px] w-[30%] -z-10 opacity-10 '/>
            <p className='text-[33px] font-poppins font-semibold text-center text-[#5E6282] w-[70%] mx-auto '>Subscribe to get information, latest news and other
            interesting offers about Jadoo</p>
            <div>
            <form className="flex  gap-3 w-[50%] mx-auto mt-16 ">
        {/* Text Field with Icon */}
        <div className="relative w-[456px] mx-auto  ">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-5 pl-10 rounded-md focus:outline-none focus:[#FF946D] "
          />
          {/* Icon inside the input field */}
          <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
        </div>
        {/* Subscribe Button */}
        <button type="submit" className="bg-[#FF946D] text-white px-10 py-2 rounded-lg hover:bg-indigo-600">
          Subscribe
        </button>
      </form>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default Newsletter
