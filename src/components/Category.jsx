import React from 'react';
import weather from '../assets/images/weathericon.png';
import aeroplane from '../assets/images/aeroplane.png';
import events from '../assets/images/events.png';
import custom from '../assets/images/custom.png';
import partcle from '../assets/images/particle.png';

const Category = () => {
  const cardsData = [
    {
      id: 1,
      image: weather, 
      heading: 'Calculated Weather ',
      paragraph: 'Built Wicket longer admire do barton vanity itself do in it.',
    },
    {
      id: 2,
      image: aeroplane,
      heading: 'Best Flights',
      paragraph: 'Engrossed listening. Park gate sell they west hard for the.',
    },
    {
      id: 3,
      image: events,
      heading: 'Local Events',
      paragraph: 'Barton vanity itself do in it. Preferd to men it engrossed listening. ',
    },
    {
      id: 4,
      image: custom,
      heading: 'Customization',
      paragraph: 'We deliver outsourced aviation services for military customers',
    },
  ];

  return (
    <>
   <div className='relative'>
  <div className='absolute right-[53px] top-0'>
    <img src={partcle} alt="Particle" />
  </div>

  
  <div className='max-w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto my-24'>
    <div className='text-center mb-8'>
      <p className='font-poppins font-semibold text-[18px] uppercase text-[#5E6282]'>CATEGORY</p>
      <h3 className='font-volkhov text-[#14183E] font-bold text-[36px]'>We Offer Best Services</h3>
    </div>

  
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center'>
      {cardsData.map((card) => (
        <div key={card.id} className="card my-8 w-60 flex flex-col items-center gap-2 justify-center rounded-[36px] hover:shadow-md p-6 bg-white relative group">
          <div className='w-20 h-20'>
            <img src={card.image} alt={card.heading} className="w-full h-full object-contain" />
          </div>
          <p className='font-semibold mt-2'>{card.heading}</p>
          <p className="text-center font-poppins font-normal text-[#5E6282] text-[16px] mt-1">{card.paragraph}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  
    </>
  );
};

export default Category;
