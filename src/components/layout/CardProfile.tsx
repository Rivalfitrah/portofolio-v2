// components/layout/CardProfileNew.jsx
'use client';

import { Github, Instagram, Linkedin } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function CardProfile() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  interface RotateState {
    x: number;
    y: number;
  }

  interface MouseMoveEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  const handleMouseMove = (e: MouseMoveEvent) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    // Menentukan seberapa besar rotasi yang diinginkan
    const rotateX = (y / (height / 2)) * -10; // Invert Y-axis
    const rotateY = (x / (width / 2)) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.05)`,
        transition: "transform 0.1s ease-out",
      }}
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-xs text-center p-6 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-slate-800/60 to-slate-900/70 border border-blue-500/30 shadow-2xl shadow-blue-500/10"
    >
      {/* Profile Image */}
      <div className="relative w-32 h-32 mx-auto mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-md animate-pulse"></div>
        <Image
          src="/img/profile.png" // Ganti dengan URL foto profilmu
          alt="Profile Rival"
          className="relative w-full h-full object-cover rounded-full border-4 border-slate-700"
          width={128}
          height={128}
        />
      </div>

      {/* Name & Role */}
      <h2 className="text-3xl font-bold text-white">Rival</h2>
      <p className="text-blue-400 font-semibold mt-1 tracking-wide">
        Software Developer
      </p>

      {/* Availability */}
      <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-300">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Available for Freelance
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mt-8">
        {[
          { Icon: Github, href: "https://github.com/rivalfitrah" },
          { Icon: Instagram, href: "https://www.instagram.com/_rvlfd_9/" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/rivalfitrah/" },
        ].map(({ Icon, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            whileHover={{ scale: 1.15, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-700/50 hover:bg-blue-500/50 border border-blue-400/40"
          >
            <Icon className="text-blue-300" size={24} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default CardProfile;