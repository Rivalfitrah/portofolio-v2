'use client';
import React from 'react';
import { motion } from 'framer-motion';

function SkillSection() {
  const skills = [
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animasi anak elemen akan muncul berurutan
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9 }
    },
  };

  return (
    <section className="min-h-screen py-16 bg-black" id='skills'>
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-bold mb-10 mt-15 text-center text-blue-400">
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          transition={{ duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-[#0f0f0f] rounded-xl border border-blue-500/30 shadow-md hover:shadow-blue-500/40 transition duration-300"
            >
              <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              
              className="w-16 h-16 rounded-full border border-blue-500/60 flex items-center justify-center mb-4">
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
              </motion.div>
              <h3 className="text-white text-center font-semibold">{skill.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillSection;
