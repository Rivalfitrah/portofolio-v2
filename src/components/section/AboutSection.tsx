'use client';
import React from "react";
import CardProfile from "@/components/layout/CardProfile";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="min-h-screen py-16 bg-[#0a0a0a]" id="about">
      <div className="max-w-6xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-15 text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
      >
        About Me
      </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Deskripsi dan Aksi */}
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            
            className="text-lg text-gray-300">
              I'm a passionate frontend developer who enjoys creating beautiful and responsive user interfaces. I love exploring new technologies and continuously improving my craft.
            </motion.p>

            {/* Tombol Download CV */}
            <a
              href="/CV-Rival-Fitrah.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Card Profile */}
          <div className="flex justify-center">
            <CardProfile />
        
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
