import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function CardProfile() {
  return (
    <motion.div
  initial={{ opacity: 0, x: 100 }}          // posisi awal (dari kanan & transparan)
  whileInView={{ opacity: 1, x: 0 }}        // animasi saat masuk layar
  viewport={{ once: true, amount: 0.3 }}    // jalankan sekali saat 30% elemen terlihat
  transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full max-w-sm text-center p-6 rounded-2xl backdrop-blur-md bg-gradient-to-b from-[#1e293b]/60 to-[#0f172a]/70 border border-blue-500/20 shadow-lg">
      {/* Profile Image */}
      <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-blue-400 shadow-md mb-4">
        <img
          src="/vercel.svg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Role */}
      <h2 className="text-2xl font-bold text-white">Rival</h2>
      <p className="text-blue-400 font-medium mt-1">Software Developer</p>

      {/* Availability */}
      <p className="mt-2 text-sm text-gray-300 italic">Available for freelancer</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-6">
        {[Github, Instagram, Linkedin].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 hover:bg-blue-500/30 border border-blue-400/30 transition-colors"
          >
            <Icon className="text-blue-300" size={20} />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default CardProfile;
