import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import google from '../assets/images/Google.png';
import play from '../assets/images/Play.png';

const Footer = () => {
  return (
    <footer className=" text-black pt-36">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
        
        {/* First Column */}
        <div>
          <h3 className="text-[44px] font-semibold mt-[-22px] text-[#181E4B] font-poppins mb-4">Jadoo.</h3>
          <p className='text-[13px] font-poppins text-[#5E6282] font-medium'>Book your trip in minute, get full
Control for much longer.
</p>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-xl font-bold font-poppins text-[#080809] mb-4">Company</h3>
          <ul className="space-y-2 mt-9">
            <li><a href="#" className=" font-poppins text-[#5E6282] hover:underline font-semibold">About</a></li>
            <li><a href="#" className="font-poppins text-[#5E6282] hover:underline font-semibold">Careers</a></li>
            <li><a href="#" className="font-poppins text-[#5E6282] hover:underline font-semibold">Mobile</a></li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-xl font-bold font-poppins text-[#080809] mb-4">Contact</h3>
          <ul className="space-y-2 mt-9">
            <li><a href="#" className="font-poppins text-[#5E6282] hover:underline font-semibold">Help/FAQ</a></li>
            <li><a href="#" className="font-poppins text-[#5E6282] hover:underline font-semibold">Press</a></li>
            <li><a href="#" className="font-poppins text-[#5E6282] hover:underline font-semibold">Affiliates</a></li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div>
          <h3 className="text-xl font-bold font-poppins text-[#080809] mb-4">More</h3>
          <ul className="space-y-2 mt-9">
            <li><a href="#" className="font-poppins text-[#5E6282] hover:underline font-semibold">Airline Fees</a></li>
            <li><a href="#" className="font-poppins text-[#5E6282] hover:underline font-semibold">Airlines</a></li>
            <li><a href="#" className="font-poppins text-[#5E6282] hover:underline font-semibold">Low Fare Tips</a></li>
          </ul>
        </div>

        {/* Fifth Column */}
        <div>
          <div className="flex space-x-4 mb-4">
          <a 
      href="#" 
      className="shadow-lg bg-white p-3 hover:text-white rounded-full flex items-center transition-all duration-300 hover:bg-gradient-custom">
      <FaFacebookF className='text-[13px]' />
    </a>
            <a href="#" className="shadow-lg bg-white p-3 hover:text-white rounded-full flex items-center transition-all duration-300 hover:bg-gradient-custom"><FaInstagram className='text-[13px] ' /></a>
            <a href="#" className="shadow-lg bg-white p-3 hover:text-white rounded-full flex items-center transition-all duration-300 hover:bg-gradient-custom"><FaTwitter className='text-[13px] ' /></a>
          </div>
          <h3 className="text-xl font-poppins font-medium text-[#5E6282] mb-2 mt-8">Discover Our Apps</h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className=""><img src={google}/> </a>
            <a href="#" className="hover:text-gray-500"><img src={play}/> </a>
          </div>
        </div>
        
      </div>
      <div className='text-center py-9 font-poppins  my-10 '>
            <p className='text-center text-[#5E6282] text-[14px]'>
            All rights reserved@jadoo.co
            </p>
        </div>
    </footer>

    
  );
};

export default Footer;
