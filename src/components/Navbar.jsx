import React, { useState } from 'react';
import logo from '../assets/images/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const menus = ['Destinations', 'Hotels', 'Flights', 'Bookings'];
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className='max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6'>
            {/* Logo */}
            <div>
                <a href="/" className="ml-2">
                    <img src={logo} alt="Logo" className="w-24 h-auto" />
                </a>
            </div>

            {/* Hamburger Menu Icon for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? (
                        <FaTimes className="text-2xl" /> 
                    ) : (
                        <FaBars className="text-2xl" /> 
                    )}
                </button>
            </div>

            {/* Menu Items */}
            <ul
                className={`md:flex ${
                    isOpen ? 'flex' : 'hidden'
                } flex-col md:flex-row md:space-x-16 items-center text-[17px] text-[#212832] font-medium absolute md:relative top-20 left-0 w-full md:w-auto bg-white md:bg-transparent z-20 md:top-0 md:left-auto md:static transition-all duration-300 ease-in-out md:justify-end ${
                    isOpen ? 'p-8 md:p-0' : ''
                }`}
            >
                {menus.map((menu, index) => (
                    <li
                        key={index}
                        className="cursor-pointer hover:text-[#DF6951] text-[14px] font-semibold mb-5 md:mb-0"
                    >
                        {menu}
                    </li>
                ))}

                {/* Right Side Buttons */}
                <div className="md:flex space-x-16 items-center">
                    <button className="hover:text-[#DF6951] text-[14px] font-semibold mb-5 md:mb-0">
                        Login
                    </button>
                    <button className="px-5 py-2 text-[14px] font-semibold border border-[#212832] rounded-md hover:bg-[#DF6951] hover:text-white hover:border-white transition-all duration-200 ease-in-out">
                        Sign up
                    </button>
                    <div className="relative">
                        <button
                            onClick={toggleMenu}
                            className="flex items-center space-x-1 text-[14px] font-semibold"
                        >
                            <span className="hover:text-[#DF6951]">EN</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        {isOpen && (
                            <ul className="absolute right-0 mt-2 shadow-lg border rounded-md">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    EN
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    FR
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    DE
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
