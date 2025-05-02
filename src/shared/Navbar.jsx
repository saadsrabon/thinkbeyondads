import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Correct import
import MainLogo from '../assets/mainlogo.png';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger and close icons
import { AnimatePresence , motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative mb-10">
      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
          }`}
      >
        {/* Logo */}
        <div>
          <img
            className={`transition-all duration-300 ${scrolled ? 'w-20 h-20' : 'w-40 h-40'}`}
            src={MainLogo}
            alt="Main Logo"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-sans text-sm text-gray-700">
          <NavLink to="/" className={({ isActive }) =>
            `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"
            }`
          }>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) =>
            `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"
            }`
          }>Services</NavLink>
          <NavLink to="/work" className={({ isActive }) =>
            `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"
            }`
          }>Case Studies</NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"
            }`
          }>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
            `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"
            }`
          }>Contact</NavLink>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer text-gray-800" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
  {menuOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-gray-800 text-xl font-semibold"
    >
      {['/', '/services', '/work', '/about', '/contact'].map((path, index) => {
        const labelMap = {
          '/': 'Home',
          '/services': 'Services',
          '/work': 'Work',
          '/about': 'About',
          '/contact': 'Contact',
        };
        return (
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `cursor-pointer transition-colors duration-300 hover:text-[#0096C7] ${
                  isActive ? 'text-[#0096C7] font-bold' : 'text-gray-800'
                }`
              }
            >
              {labelMap[path]}
            </NavLink>
          </motion.div>
        );
      })}
      {/* Optional: Close button at the bottom */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-gray-500 hover:text-red-500 text-sm underline"
        onClick={() => setMenuOpen(false)}
      >
        Close Menu
      </motion.button>
    </motion.div>
  )}
</AnimatePresence>
        {/* Book Call Button (always visible) */}
        <button onClick={() => window.open('https://calendly.com/thinkbeyondads/30min')} className="hidden md:block bg-[#0096C7] text-white px-4 py-2 rounded font-bold uppercase text-xs shadow hover:bg-[#023E8A] transition">
          Book Call
        </button>
      </nav>
    </div>
    
  );
}
