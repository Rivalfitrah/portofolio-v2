'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function SkillSection() {
  const skills = [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css/blue" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
    { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
    { name: "Vue.js", icon: "https://cdn.simpleicons.org/vue.js" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/white" },
    { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/white" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Dibuat sedikit lebih cepat (0.15) agar tidak terlalu lama menunggu jika skill banyak
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } // Durasi disesuaikan agar lebih responsif
    },
  };

  return (
    <section className="min-h-screen py-16 bg-black" id='skills'>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-bold mb-10 mt-15 text-center text-blue-400"
        >
          My Skills
        </motion.h2>

        {/* PARENT CONTAINER: Cukup deklarasikan initial dan whileInView di sini */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Amount dikecilkan agar animasi lebih cepat tertrigger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            /* CHILD CONTAINER: Ubah <div> biasa menjadi <motion.div> dan cukup panggil variants */
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center p-6 bg-[#0f0f0f] rounded-xl border border-blue-500/30 shadow-md hover:shadow-blue-500/40 transition duration-300"
            >
              {/* Bagian bungkus icon dikembalikan menjadi <div> biasa karena animasinya sudah ditangani oleh parent card-nya */}
              <div className="w-16 h-16 rounded-full border border-blue-500/60 flex items-center justify-center mb-4">
                <Image 
                  width={100} 
                  height={100} 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-8 h-8" 
                  unoptimized // SUDAH BENAR! Ini kunci anti error 502
                />
              </div>
              <h3 className="text-white text-center font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillSection;