import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Left - CopyRight */}
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Center - Quick Links */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Right - Socials */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://github.com/imabhijeetkarne"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhijeet-karne-a13799255/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="abhijeetkarne47@gmail.com"
            className="hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
