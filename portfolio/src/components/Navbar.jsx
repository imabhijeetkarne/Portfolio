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

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gray-900 fixed top-0 z-50">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold text-cyan-400">Abhijeet Karne</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-cyan-400 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-black text-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl hover:text-cyan-400"
              onClick={() => setNav(false)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
