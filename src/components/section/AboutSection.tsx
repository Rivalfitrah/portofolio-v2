// components/section/AboutSectionNew.jsx

'use client';
import React from "react";
import CardProfileNew from "@/components/layout/CardProfile"; 
import { Download } from "lucide-react";
import { cubicBezier, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.17, 0.67, 0.83, 0.67)}
  },
};

function AboutSection() {
  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center py-24 bg-[#000] overflow-hidden" 
      id="about"
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center"
        >
          {/* Kolom Kiri: Deskripsi dan Aksi */}
          <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400"
            >
              About Me
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              I'm a passionate Software Developer with a love for creating beautiful, 
              intuitive, and high-performance user interfaces. With a strong foundation in modern web technologies,
              I enjoy turning complex problems into elegant solutions. Let's build something amazing together.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <button
                disabled 
                className="inline-flex items-center gap-3 bg-gray-500 text-gray-300 font-bold py-3 px-8 rounded-full cursor-not-allowed"
              >
                <Download className="w-5 h-5" />
                Download My CV
              </button>
            </motion.div>
          </div>

          {/* Kolom Kanan: Card Profile */}
          <div className="lg:col-span-2 flex justify-center items-center">
            {/* CardProfileNew sudah memiliki animasi masuknya sendiri */}
            <CardProfileNew /> 
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;