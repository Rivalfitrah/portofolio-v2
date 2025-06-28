"use client";
import React from "react";
import { Github, Link } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Proyek } from "../ui/dashboard/TableProyek";

type ProjectCardProps = {
  project: Proyek
};

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="border border-cyan-200 rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 bg-[#0f0f0f] rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300">
        <div className="relative group overflow-hidden rounded-xl">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" // Efek zoom saat hover
          />
          {/* 2. Ikon Link (Github, dll) */}
          <div className="absolute top-3 left-3 z-20 flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Repository"
            >
              <Github className="w-7 h-7 text-white bg-slate-800/60 rounded-full p-1.5 hover:bg-cyan-500 transition-colors duration-300" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <Link className="w-7 h-7 text-white bg-slate-800/60 rounded-full p-1.5 hover:bg-cyan-500 transition-colors duration-300" />
            </a>
          </div>
          {/* 3. Overlay Tech Stack (DIPINDAHKAN KE SINI) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                // Pastikan overlay juga memiliki sudut yang sama dengan gambar
                className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-10"
              >
                <div className="text-center p-4">
                  <h4 className="text-white font-bold mb-3">Built With:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Deskripsi Proyek (di luar div relative) */}
        <div className="p-4">
          <h3 className="font-bold text-white text-lg">{project.title}</h3>
          <p className="text-gray-400 text-sm mt-1">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
