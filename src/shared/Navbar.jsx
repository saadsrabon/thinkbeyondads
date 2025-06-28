import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MainLogo from '../assets/mainlogo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      content: "Our brand visibility has skyrocketed thanks to the team’s tailored ad campaigns.",
      name: "Sami",
      role: "Founder - Motor City"
    },
    {
      content: "The results speak for themselves—our leads increased by 40% within the first month!",
      name: "AJ",
      role: "Founder - QuietBounce"
    },
    {
      content: "Think Beyond Ads takes the guesswork out of digital advertising and delivers real results.",
      name: "Juan",
      role: "Founder - Homewatch Caregivers"
    },
    {
      content: "We saw immediate growth in our online sales, all thanks to their precision-targeted ads.",
      name: "Marilyn",
      role: "Founder - The Queens Corner Charity"
    },
    {
      content: "Their attention to detail and ability to optimize campaigns has transformed our marketing.",
      name: "Marilyn",
      role: "Founder - Royalty Health Care"
    },
    {
      content: "Working with Think Beyond Ads has been a game changer for our business growth.",
      name: "Valeria",
      role: "Founder - Nails&Blinks"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Testimonial Bar */}
        <div className="bg-gradient-to-b from-[#023E8A] to-[#0096C7] text-white w-full py-2 px-6 sm:px-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-sm sm:text-md italic">“{testimonials[index].content}”</span>
              <span className="mt-2 text-xs sm:text-base text-gray-300 ml-2">
                – {testimonials[index].name}, {testimonials[index].role}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navbar */}
        <nav
          className={`px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
          {/* Logo */}
          <div>
            <img
              className={`transition-all duration-300 ${scrolled ? 'w-20 h-20' : 'w-32 h-32'}`}
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
            <NavLink to="/portfolio" className={({ isActive }) =>
              `hover:text-[#0096C7] text-[1rem] cursor-pointer ${isActive ? "text-[#0096C7] font-bold" : "text-gray-700"
              }`
            }>Portfolio</NavLink>
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

          {/* Book Call Button */}
          <button onClick={() => window.open('https://calendly.com/thinkbeyondads/30min')} className="hidden md:block bg-[#0096C7] text-white px-4 py-2 rounded font-bold uppercase text-xs shadow hover:bg-[#023E8A] transition">
            Book Call
          </button>
        </nav>
      </div>

      {/* Spacer to push content below the fixed header */}
      <div className="pt-[180px]" /> {/* Adjust this if logo size changes */}

      {/* Mobile Menu Overlay */}
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
            {['/', '/services', '/portfolio', '/about', '/contact'].map((path, index) => {
              const labelMap = {
                '/': 'Home',
                '/services': 'Services',
                '/portfolio': 'Portfolio',
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
                      `cursor-pointer transition-colors duration-300 hover:text-[#0096C7] ${isActive ? 'text-[#0096C7] font-bold' : 'text-gray-800'
                      }`
                    }
                  >
                    {labelMap[path]}
                  </NavLink>
                </motion.div>
              );
            })}
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
    </>
  );
}
