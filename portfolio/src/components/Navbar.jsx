import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

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
      setIsOpen(false);
    }
  };

  return (
    <motion.div 
      ref={navRef}
      className={`flex justify-between items-center w-full h-16 sm:h-20 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-transparent'
      } text-white`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Logo */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
          <span className="hidden sm:inline">Abhijeet Karne</span>
          <span className="sm:hidden">AK</span>
        </h1>
      </div>

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

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 rounded-full focus:outline-none md:hidden"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-cyan-400"
            >
              <FaTimes size={28} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <FaBars size={28} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-gray-900/95 backdrop-blur-md z-50 shadow-2xl border-l border-gray-800/50 p-6 pt-20"
            >
              <motion.ul 
                className="space-y-2"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {links.map(({ id, link }) => (
                  <motion.li
                    key={id}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 }
                        }
                      }
                    }}
                    onClick={() => scrollToSection(link)}
                    className="text-xl font-medium text-gray-300 hover:text-cyan-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-800/50"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </motion.li>
                ))}
              </motion.ul>
              
              <div className="absolute bottom-8 left-0 right-0 px-6">
                <div className="h-px bg-gray-800/50 my-6" />
                <p className="text-sm text-gray-500 text-center">
                  {new Date().getFullYear()} Abhijeet Karne
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;