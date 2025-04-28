import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className="relative">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50  px-6 flex justify-between items-center">
        <div>
          <img className='w-20 h-20' src="/src/assets/1.png" alt="" />
        </div>
        <ul className="hidden md:flex space-x-8 font-sans text-sm text-gray-700">
          <NavLink to="/" className="hover:text-[#0096C7] text-[1rem] cursor-pointer">Home</NavLink>
          <NavLink to="/services" className="hover:text-[#0096C7] text-[1rem] cursor-pointer">Services</NavLink>
          <NavLink className="hover:text-[#0096C7] text-[1rem] cursor-pointer">Work</NavLink>
          <NavLink to="/about" className="hover:text-[#0096C7] text-[1rem] cursor-pointer">About</NavLink>
          <NavLink to="/contact" className="hover:text-[#0096C7] text-[1rem] cursor-pointer">Contact</NavLink>
        </ul>
        <button className="bg-[#0096C7] text-white px-4 py-2 rounded font-bold uppercase text-xs shadow hover:bg-[#023E8A] transition">
          Book Call
        </button>
      </nav>
    </div>
  )
}
