import React from 'react'
import { BiSelection, BiMap } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri"; // Correct package
import trip from '../assets/images/trip.png';

const Booking = () => {
  const options = [
    {
      id: 1,
      icon: <BiSelection className='text-white text-[25px]' />,
      bgColor: '#F0BB1F',
      title: 'Choose Destination',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
    },
    {
      id: 2,
      icon: <RiSecurePaymentLine className='text-white text-[25px]' />,
      bgColor: '#F15A2B',
      title: 'Make Payment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
    },
    {
      id: 3,
      icon: <BiMap className='text-white text-[25px]' />,
      bgColor: '#006380',
      title: 'Reach Airport on Selected Date',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.'
    }
  ];
  
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='grid md:grid-cols-2 items-center'>
        {/* Text Section */}
        <div>
          <p className='font-poppins font-semibold text-[18px] uppercase text-[#5E6282]'>Easy and Fast</p>
          <h3 className='font-volkhov text-[#14183E] font-bold text-[50px] capitalize lg:w-[80%]'>
            Book your next trip in 3 easy steps
          </h3>
          <div className='my-10'>
            <div className='space-y-10'>
              {options.map((item) => (
                <div key={item.id} className='flex items-center gap-4'>
                  <div style={{ backgroundColor: item.bgColor }} className='p-3 rounded-[13px]'>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className='font-poppins text-[16px] font-bold text-[#5E6282]'>{item.title}</h4>
                    <p className='font-poppins text-[16px] font-normal md:w-[65%] text-[#5E6282]'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex justify-center'>
          <img src={trip} alt="Trip" className='w-full h-auto object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Booking;
