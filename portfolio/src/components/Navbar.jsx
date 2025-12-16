import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "experience" },
    { id: 5, link: "skills" },
    { id: 6, link: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setNav(false); // Close mobile menu after clicking
    }
  };

  return (
    <div className="flex justify-between items-center w-full h-16 sm:h-20 px-4 sm:px-6 lg:px-8 text-white bg-gray-900/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      {/* Logo */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
          <span className="hidden sm:inline">Abhijeet Karne</span>
          <span className="sm:hidden">AK</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-1 lg:space-x-2">
        {links.map(({ id, link }) => (
          <li
            key={id}
            onClick={() => scrollToSection(link)}
            className="px-3 lg:px-4 py-2 rounded-md cursor-pointer capitalize font-medium text-sm sm:text-base text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer p-2 z-20 text-gray-300 hover:text-cyan-400 transition-colors duration-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <>
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-10" 
            onClick={() => setNav(false)}
          />
          <ul 
            className="flex flex-col justify-center items-center fixed top-0 right-0 w-3/4 h-screen bg-gray-900/95 backdrop-blur-md text-gray-300 z-20 transform transition-transform duration-300 ease-in-out"
            style={{ transform: nav ? 'translateX(0)' : 'translateX(100%)' }}
          >
            {links.map(({ id, link }) => (
              <li
                key={id}
                onClick={() => scrollToSection(link)}
                className="w-full text-center px-4 py-4 cursor-pointer capitalize text-lg sm:text-xl hover:bg-gray-800 hover:text-cyan-400 transition-colors duration-300 border-b border-gray-800"
              >
                {link}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;