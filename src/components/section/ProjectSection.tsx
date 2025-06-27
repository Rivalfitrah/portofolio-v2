'use client'

import { Github, Link } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../layout/ProjectCard';
import { Proyek } from '../ui/dashboard/TableProyek';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';



export type Project = {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    githubUrl: string;
    liveUrl: string;
    technologies: string[];
}

const DataProjects: Project[] = [
    {
    id: 1,
    title: "project 1",
    description: "lorem ipsum",
    imageSrc: "/img/peakpx.jpg",
    githubUrl: "https://github.com/rivalfitrah",
    liveUrl: "https://example.com",
    technologies: ["React", "Next.js", "Tailwind CSS"]
    },
    {
    id: 2,
    title: "project 1",
    description: "lorem ipsum",
    imageSrc: "/img/peakpx.jpg",
    githubUrl: "https://github.com/rivalfitrah",
    liveUrl: "https://example.com",
    technologies: ["React", "Next.js", "Tailwind CSS"]
    
    }
];








function ProjectSection() {
  const [projects, setProjects] = useState<Proyek[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"))
      const data: Proyek[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Proyek, "id">),
      }))
      setProjects(data)
      setLoading(false)
    }

    fetchProjects()
  }, [])
    
  return (
<section className="min-h-screen py-16 bg-black" id='project'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 mt-15 text-center text-blue-400">My Projects</h2>

        {/* Gunakan conditional rendering untuk KONTEN di dalam section */}
        {loading ? (
          // Tampilan saat loading
          <div className="text-center text-white py-10">Loading projects...</div>
        ) : projects.length === 0 ? (
          // Tampilan saat data kosong
          <div className="text-center text-white py-10">No projects found.</div>
        ) : (
          // Tampilan saat data ada
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8"> {/* <-- saya ganti gap menjadi 8 agar lebih rapi */}
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectSection