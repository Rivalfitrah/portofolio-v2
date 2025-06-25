'use client';
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

function HeroSection() {
  return (
    <>
    <Navbar />
<div className="relative flex h-[50rem] w-full items-center justify-center bg-black dark:bg-black" id="home">
  {/* Background grid */}
  <div
    className={cn(
      "absolute inset-0 z-0",
      "[background-size:40px_40px]",
      "[background-image:linear-gradient(to_right,rgba(97,218,251,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(97,218,251,0.12)_1px,transparent_1px)]",
      "dark:[background-image:linear-gradient(to_right,rgba(97,218,251,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(97,218,251,0.12)_1px,transparent_1px)]"
    )}
  />

  {/* Radial mask */}
  <div className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

  {/* Konten */}
  <div className="flex justify-center relative z-10">
    <div className="text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Hello, I'm <span className="text-blue-400">Rival</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="text-lg mb-8"
      >
        Explore my projects and skills
      </motion.p>

<motion.a
  href="#projects"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
>
  View Projects
</motion.a>
    </div>
  </div>
</div>
 

    </>
  );
}

export default HeroSection;
