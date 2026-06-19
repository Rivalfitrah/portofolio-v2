'use client'
import Navbar from '@/components/layout/Navbar'
import ProjectCard from '@/components/layout/ProjectCard'
import React, { useEffect, useState } from 'react'
import { projectsData } from '@/data/projects'

function Page() {
    const [loading, setLoading] = useState(true)

    // Selesaikan loading setelah komponen terpasang (mounted)
    useEffect(() => {
        setLoading(false)
    }, [])
    
    return (
        <div className='bg-[#000] min-h-screen'>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold mb-10 mt-15 text-center text-blue-400">My Projects</h2>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        {/* Ditambahkan animasi animate-spin agar loader-nya berputar */}
                        <div className="animate-spin ease-linear rounded-full border-8 border-t-8 border-cyan-500 border-t-transparent h-16 w-16"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page