'use client'
import React, { useState, useEffect } from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { motion } from 'framer-motion'
import { navItems } from './SidebarNav'

function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`text-white p-6 shadow-md border-b border-white/10 fixed top-0 left-0 w-full z-50 ${isScrolled ? "backdrop-blur-md bg-black/50" : "bg-transparent"}`}
    
    >

      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-semibold tracking-wide">
          <span className="text-blue-400">My</span> Portfolio
        </motion.div>

        {/* CTA Button */}
        <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
        <HoverBorderGradient
        containerClassName="rounded-full p-[2px]" // ✅ ruang untuk efek tebal
        as="button"
        onClick={() => window.location.href = "#contact"}
        className="bg-black text-white px-6 py-2 font-medium rounded-full cursor-pointer"
        >
        <span>Contact Me</span>
        </HoverBorderGradient>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar
