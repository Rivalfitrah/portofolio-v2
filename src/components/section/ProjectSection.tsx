import { Github, Link } from 'lucide-react'
import React from 'react'
import ProjectCard from '../layout/ProjectCard';


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
  return (
    <section className="min-h-screen py-16 bg-black" id='project'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 mt-15 text-center text-blue-400">My Projects</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 ">
            {DataProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
 
        </div>
      </div>
    </section>
  )
}

export default ProjectSection