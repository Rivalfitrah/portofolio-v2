import React from 'react'
import { cn } from "@/app/components/lib/utils";

function HeroSection() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-black dark:bg-black">
  <div
    className={cn(
      "absolute inset-0",
      "[background-size:40px_40px]",
      "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
      "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
    )}
  />
  
  {/* Radial mask untuk fade-out */}
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    <div className="flex justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">Explore my projects and skills</p>
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          View Projects
        </a>
      </div>
    </div>
</div>

  )
}

export default HeroSection