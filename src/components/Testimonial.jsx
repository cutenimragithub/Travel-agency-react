import React from 'react';
import Slider from 'react-slick';
import client from '../assets/images/client.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // For arrows

const Testimonial = () => {
  const testimonials = [
    {
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      message: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      image: client,
      ceoname: "Chris Thomas",
      designation: "CEO of Red Button",
    },
    {
      name: "Chris Thomas",
      location: "CEO of Red Button",
      message: "Sure last upon he same as knew next...",
      image: client,
      ceoname: "Chris Thomas",
      designation: "CEO of Red Button",
    },
  ];

  // Custom Arrow Components
  const NextArrow = ({ onClick }) => (
    <div className="cursor-pointer text-gray-500 absolute bottom-12 right-0 z-10" onClick={onClick}>
      <FaChevronDown className="text-[16px]" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="cursor-pointer text-gray-500 absolute top-56 right-0 z-10" onClick={onClick}>
      <FaChevronUp className="text-[16px]" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
  autoplaySpeed: 3000, 
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    appendDots: dots => (
        <div className="flex justify-start mt-4">
          {/* Render dots on the left side below the heading */}
          <ul className="space-x-2">{dots}</ul>
        </div>
      ),
      customPaging: i => (
        <div className="h-2 w-2 rounded-full custom-dot">
          <div className="bg-[#39425D] h-full rounded-full w-full transition-colors duration-300"></div>
        </div>
      ),
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Left Column: Text and Dots */}
        <div>
          <p className="font-poppins font-semibold text-[18px] uppercase text-[#5E6282]">Testimonials</p>
          <h3 className="font-volkhov text-[#14183E] font-bold text-[50px] capitalize w-[70%]">
            What people say about Us.
          </h3>
        </div>

        {/* Right Column: Slider and Arrows */}
        <div className="">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover "
                />
                <div className="p-4 bg-white rounded-lg shadow-lg  relative w-[75%] ml-9 overflow-hidden">
                  <div className="flex flex-col ">
                    <p className="mt-4 text-[#4E4E73] font-poppins font-medium text-[16px]" >{testimonial.message}</p>
                    <p className="text-lg font-semibold  text-[#5E6282] mt-10">{testimonial.name}</p>
                    <p className="text-sm text-[#5E6282] font-medium">{testimonial.location}</p>
                  </div>
                 
                </div>

                <div className="w-[75%] ml-[85px] h-[136px] mt-[-61px] border-2 border-[#F7F7F7] flex-col  rounded-lg flex  pl-4 pt-[67px]">
                    <p className="text-[#5E6282] text-[18px] font-semibold font-poppins">{testimonial.ceoname}</p>
                    <p className="text-[#5E6282] font-poppins font-normal ">{testimonial.designation}</p>
                  </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
