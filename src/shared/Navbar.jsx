import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className="relative">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-serif text-[#023E8A]">ThinkBeyondAds</div>
        <ul className="hidden md:flex space-x-6 font-sans text-sm text-gray-700">
          <NavLink to="/" className="hover:text-[#0096C7] cursor-pointer">Home</NavLink>
          <NavLink to="/services" className="hover:text-[#0096C7] cursor-pointer">Services</NavLink>
          <NavLink className="hover:text-[#0096C7] cursor-pointer">Work</NavLink>
          <NavLink to="/about" className="hover:text-[#0096C7] cursor-pointer">About</NavLink>
          <NavLink to="/contact" className="hover:text-[#0096C7] cursor-pointer">Contact</NavLink>
        </ul>
        <button className="bg-[#023E8A] text-white px-4 py-2 rounded font-bold uppercase text-xs shadow hover:bg-[#0096C7] transition">
          Book Call
        </button>
      </nav>
    </div>
  )
}
