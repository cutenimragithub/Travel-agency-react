import React from 'react';
import decor from '../assets/images/Decore.png';
import traveller from '../assets/images/Traveller.png';
import plane from '../assets/images/plane.png';
import { FaPlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div >
      {/* Background Image */}
      <div className='absolute top-0 right-0 w-[690px] h-full bg-cover bg-right mt-[-85px] z-[-1]'>
        <div
          className='w-full h-full bg-cover bg-right'
          style={{ backgroundImage: `url(${decor})` }}
        />
      </div>

      {/* Hero Section Content */}
      <div className='grid md:grid-cols-2 max-w-[90%] lg:max-w-7xl mx-auto '>
        {/* Hero Text Content */}
        <div className='hero-content order-2 md:order-1 flex flex-col mt-14 gap-5 md:gap-7'>
          <p className="text-[16px] md:text-[20px] font-poppins font-bold text-primary uppercase">
            Best Destinations around the world
          </p>
          <h1 className="font-volkhov font-bold text-4xl md:text-6xl leading-tight md:leading-[60px]">
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </h1>
          <p className="w-full md:w-[400px] font-poppins text-[#5E6282] text-[14px] font-normal leading-[26px] md:leading-[30px]">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className='flex gap-6 md:gap-8'>
            <a className='text-white px-4 md:px-5 bg-[#F1A501] hover:bg-[#DF6951]  transition-all ease-in-out duration-200 py-2 md:py-3 rounded-[10px] cursor-pointer'>
              Find out more
            </a>
            <div>
              <a className='cursor-pointer'>
              <div className='flex items-center gap-3 group'>
  <div className='bg-[#DF6951] hover:bg-white p-3 md:p-4 rounded-full transition-all duration-200 ease-in-out shadow-custom-orange'>
    <FaPlay className='text-white group-hover:text-[#DF6951] text-[10px]' />
  </div>
  <p className='items-center'>Play Demo</p>
</div>

              </a>
            </div>
          </div>
        </div>

        {/* Traveller Image */}
        <div className='flex items-center justify-center relative order-1 md:order-2 '>
          <div>
            <img src={traveller} alt="Traveller" className="w-full max-w-[250px] md:max-w-none" />
          </div>
          <div className='absolute top-[78px] left-[131px] md:left-[131px]'>
            <img src={plane} alt="Plane" className='w-[60%]' />
          </div>
          <div className='absolute top-28 right-[-30px] md:right-[-72px]'>
            <img src={plane} alt="Plane" className='w-[60%]'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
