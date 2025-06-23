import React from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient'

function Navbar() {
  return (
    <nav className="bg-[#000] text-white p-6 shadow-md border-b border-white/10 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-semibold tracking-wide">
          <span className="text-blue-400">My</span> Portfolio
        </div>

        {/* CTA Button */}
        <HoverBorderGradient
        containerClassName="rounded-full p-[2px]" // ✅ ruang untuk efek tebal
        as="button"
        className="bg-black text-white px-6 py-2 font-medium rounded-full cursor-pointer"
        >
        <span>Contact Me</span>
        </HoverBorderGradient>
      </div>
    </nav>
  )
}

export default Navbar
