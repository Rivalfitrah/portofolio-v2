'use client'
import Navbar from '@/components/layout/Navbar'
import ProjectCard from '@/components/layout/ProjectCard'
import { Proyek } from '@/components/ui/dashboard/TableProyek'
import { db } from '@/lib/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

function Page() {
    const [projects, setProjects] = useState<Proyek[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, "projects"), orderBy("createdAt", "desc"))

        const unsubscribe = onSnapshot(q, (querySnapshot: { docs: any[] }) => {
            const data: Proyek[] = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as Omit<Proyek, "id">),
            }))
            setProjects(data)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])
    
    return (
        <div className='bg-[#000] min-h-screen'>
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-10"> {/* Menambahkan sedikit padding vertikal (py-10) */}
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
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Menambahkan lg:grid-cols-3 untuk layar besar */}
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page