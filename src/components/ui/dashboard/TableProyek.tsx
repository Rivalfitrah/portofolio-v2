import React, { useEffect, useState } from 'react'
import { FormProyek } from './FormProyek'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase' // Pastikan path ini sesuai dengan lokasi file firebase.ts Anda
import Swal from 'sweetalert2'

export type Proyek = {
  id: string
  title: string
  description: string
  githubUrl: string
  liveUrl: string
  imageSrc: string
  technologies: string[]
  createdAt: any
}


function TableProyek() {
  const [projects, setProjects] = useState<Proyek[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"))
        const data: Proyek[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Proyek, "id">),
        }))
        setProjects(data)
      } catch (err) {
        console.error("Gagal mengambil data proyek:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

    const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: 'Konfirmasi Hapus',
      text: "Apakah Anda yakin ingin menghapus proyek ini?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    })
    if (result.isConfirmed) {
        try {
            await deleteDoc(doc(db, "projects", id))
            Swal.fire({
                title: 'Berhasil',
                text: 'Proyek berhasil dihapus.',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            // Refresh data (jika data diambil dari Firestore langsung)
            setProjects((prev) => prev.filter((project) => project.id !== id))
        } catch (error) {
            console.error("Gagal menghapus proyek:", error)
            Swal.fire({
                title: 'Gagal',
                text: 'Terjadi kesalahan saat menghapus proyek.',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

    }

    }

  return (
    <div className='overflow-x-auto'>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">Tittle</th>
                <th scope="col" className="px-6 py-3">Deskripsi</th>
                <th scope="col" className="px-6 py-3">Github URL</th>
                <th scope="col" className="px-6 py-3">Live URL</th>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Teknologi</th>
                <th scope="col" className="px-6 py-3">Action</th>
            </tr>
            </thead>

           <tbody>
    {loading ? (
      <tr>
        <td colSpan={7} className="text-center py-10">
          Loading...
        </td>
      </tr>
    ) : projects.length === 0 ? (
      <tr>
        <td colSpan={7} className="text-center py-10">
          Tidak ada proyek ditemukan.
        </td>
      </tr>
    ) : (
      projects.map((project) => (
        <tr
          key={project.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td className="px-6 py-4">{project.title}</td>
          <td className="px-6 py-4">{project.description}</td>
          <td className="px-6 py-4">{project.githubUrl}</td>
          <td className="px-6 py-4">{project.liveUrl}</td>
          <td className="px-6 py-4">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-16 h-16 object-cover rounded-lg mt-2"
            />
          </td>
          <td className="px-6 py-4">{project.technologies.join(", ")}</td>
          <td className="px-6 py-4">
            <FormProyek
              isEdit
              defaultValues={{
                title: project.title,
                description: project.description,
                githubUrl: project.githubUrl,
                liveUrl: project.liveUrl,
                imageSrc: project.imageSrc,
                technologies: project.technologies.join(", "),
              }}
              onSubmit={(data) => {
                console.log("Update proyek:", data);
              }}
            />
            <button
              onClick={() => handleDelete(project.id)}
              type="button"
              className="bg-red-600 text-white hover:bg-red-900 p-2 rounded-lg mt-2 cursor-pointer mx-5"
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    )}
  </tbody>
        </table>

    </div>
  )
}

export default TableProyek