"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "../layout/ProjectCard";
import { Proyek } from "../ui/dashboard/TableProyek"; // Pastikan tipe ini benar, terutama 'id'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import  Link  from "next/link"; 

function ProjectSection() {
  const [projects, setProjects] = useState<Proyek[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4); 

  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data: Proyek[] = querySnapshot.docs.map((doc) => ({
        id: doc.id, // ID dari Firestore adalah string
        ...(doc.data() as Omit<Proyek, "id">),
      }));
      setProjects(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // --- FUNGSI DIPERBAIKI ---
  const handleViewMore = () => {
    // Hanya perbarui state untuk menampilkan semua proyek
    setVisibleCount(projects.length);
  };

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
          ) : projects.length === 0 ? (
            <div className="text-center text-white py-10">
              No projects found.
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
              {/* Gunakan state yang sudah diganti namanya */}
              {projects.slice(0, visibleCount).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>

        {/* --- LOGIKA KONDISIONAL DIPERBAIKI --- */}
{projects.length > visibleCount && (
          <div className="mt-16 flex justify-center">
            {/* 2. Bungkus semua dengan komponen Link */}
            <Link href="/project">
              <div className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 p-[2px] group transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-500/40">
                {/* 3. Ganti <button> menjadi <div> agar lebih valid secara semantik di dalam link */}
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