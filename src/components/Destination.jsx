import React from 'react';
// import desti from '../assets/images/desti.png';
import building from '../assets/images/building.jpg';
import desti from '../assets/images/desti.png';
import view from '../assets/images/view.png';
import spring from '../assets/images/spring.png';


import { FaTelegramPlane } from "react-icons/fa";

const Destination = () => {
    // Card data
const cardData = [
    {
      id: 1,
      image: desti,
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      description: '10 Days Trip',
    },
    {
      id: 2,
      image: building,
      heading1: 'Heading 3',
      heading2: 'Heading 4',
      description: '5 Days Trip',
    },
    {
      id: 3,
      image: view, 
      heading1: 'Heading 5',
      heading2: 'Heading 6',
      description: '7 Days Trip',
    },
  ];
  return (
    <div className='max-w-7xl mx-auto my-11 relative'>
      <div className='text-center mb-8'>
        <p className='font-poppins font-semibold text-[18px] uppercase text-[#5E6282]'>Top Selling</p>
        <h3 className='font-volkhov text-[#14183E] font-bold text-[36px]'>Top Destinations</h3>
        <img src={spring} className='absolute -z-10  right-[26px] bottom-10  w-20'/>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 '>
       
      {cardData.map((card) => (
        <div key={card.id} className=' rounded-lg w-full h-full '>
          {/* Image Container */}
          <div className='w-full overflow-hidden h-[290px]'>
  <img src={card.image}  alt="Destination" className='w-full   object-cover' />
</div>

          
          {/* Content Section */}
          <div className=' bg-white shadow-lg w-[66%] mx-auto rounded-bl-[24px] rounded-br-[24px] p-5'>
            <div className='flex justify-between mb-2'>
              <p className='font-semibold'>{card.heading1}</p>
              <p className='font-semibold'>{card.heading2}</p>
            </div>
            <div className='flex items-center gap-2'>
            <FaTelegramPlane />
              <p>{card.description}</p>
            </div>
          </div>
        </div>
        ))}

        
      </div>
    </div>
  );
};

export default Destination;

