"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "../layout/ProjectCard"; // Pastikan path ke ProjectCard sudah benar
import Link from "next/link"; 
import { projectsData } from "@/data/projects"; // Mengambil data statis dari base code

function ProjectSection() {
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4); 

  useEffect(() => {
    // Karena menggunakan data lokal/base code, loading bisa langsung diselesaikan
    setLoading(false);
  }, []);

  return (
    <>
      <section className="min-h-screen py-16 bg-black" id="project">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 mt-15 text-center text-blue-400">
            My Projects
          </h2>

          {loading ? (
            <div className="text-center text-white py-10">
              Loading projects...
            </div>
          ) : projectsData.length === 0 ? (
            <div className="text-center text-white py-10">
              No projects found.
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {/* Memotong array projectsData sesuai jumlah visibleCount */}
              {projectsData.slice(0, visibleCount).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>

        {/* --- LOGIKA KONDISIONAL --- */}
        {projectsData.length > visibleCount && (
          <div className="mt-16 flex justify-center">
            <Link href="/project">
              <div className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 p-[2px] group transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/40">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 px-8 py-3 text-white transition-all duration-300 ease-in-out group-hover:bg-transparent cursor-pointer">
                  View More
                </div>
              </div>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}

export default ProjectSection;