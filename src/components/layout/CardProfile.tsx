'use client';

import { Github, Instagram, Linkedin } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CardProfile() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current || isMobile) return;

    const card = cardRef.current;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (y / (height / 2)) * -5;
    const rotateY = (x / (width / 2)) * 5;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (!isMobile) setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isMobile
          ? "scale(1)"
          : `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)`,
        transition: "transform 0.2s ease",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-xs text-center p-6 rounded-3xl backdrop-blur-sm bg-gradient-to-br from-slate-800/70 to-slate-900/80 border border-blue-500/20 shadow-lg"
    >
      <div className="relative w-28 h-28 mx-auto mb-5">
        <Image
          src="/img/profile.png"
          alt="Profile Rival"
          className="w-full h-full object-cover rounded-full border-4 border-slate-700"
          width={112}
          height={112}
        />
      </div>

      <h2 className="text-2xl font-bold text-white">Rival</h2>
      <p className="text-blue-400 font-medium mt-1 tracking-wide">
        Software Developer
      </p>

      <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-300">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Available for Freelance
      </div>

      <div className="flex justify-center gap-4 mt-6">
        {[
          { Icon: Github, href: "https://github.com/rivalfitrah" },
          { Icon: Instagram, href: "https://www.instagram.com/_rvlfd_9/" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/rivalfitrah/" },
        ].map(({ Icon, href }, idx) => (
          <motion.a
            key={idx}
            href={href}
            whileHover={{ scale: 1.1, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700/50 hover:bg-blue-500/40 border border-blue-400/20"
          >
            <Icon className="text-blue-300" size={20} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default CardProfile;
