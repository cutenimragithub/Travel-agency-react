import React from 'react';
import axon from '../assets/images/axon.png';
import jetstar from '../assets/images/jetstar.png';
import expedia from '../assets/images/expedia.png';
import qantas from '../assets/images/qantas.png';
import talia from '../assets/images/talia.png';

const Logo = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto my-12'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center'>
          <img src={axon} alt="Axon" className='w-22 h-22  mx-auto '/>
          <img src={jetstar} alt="Jetstar" className='w-22 h-22 mx-auto '/>
          <img src={expedia} alt="Expedia" className='w-22 h-22 mx-auto'/>
          <img src={qantas} alt="Qantas" className='w-22 h-22 mx-auto '/>
          <img src={talia} alt="Talia" className='w-22 h-22 mx-auto'/>
        </div>
      </div>
    </>
  );
}

export default Logo;
