import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Correct import
import MainLogo from '../assets/mainlogo.png';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger and close icons

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
          }>Work</NavLink>
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
        {menuOpen && (
          <div className="absolute top-24 right-6 bg-white shadow-md rounded-md p-6 flex flex-col space-y-4 font-sans text-sm text-gray-700 md:hidden">
            <NavLink to="/"
              className={({ isActive }) =>
                `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"}`}>Home
            </NavLink>

            <NavLink to="/services"
              className={({ isActive }) =>
                `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"}`}>Services
            </NavLink>

            <NavLink to="/work"
              className={({ isActive }) =>
                `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"}`}>Work
            </NavLink>

            <NavLink to="/about"
              className={({ isActive }) =>
                `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"}`}>About
            </NavLink>

            <NavLink to="/contact"
              className={({ isActive }) =>
                `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"}`}>Contact
            </NavLink>
          </div>
        )}

        {/* Book Call Button (always visible) */}
        <button className="hidden md:block bg-[#0096C7] text-white px-4 py-2 rounded font-bold uppercase text-xs shadow hover:bg-[#023E8A] transition">
          Book Call
        </button>
      </nav>
    </div>
  );
}
