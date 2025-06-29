import React, { useEffect, useState } from 'react'
import { FormDataType, FormProyek } from './FormProyek'
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase' 
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
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data: Proyek[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Proyek, "id">),
      }))
      setProjects(data)
      setLoading(false)
    })

    return () => unsubscribe()
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

    const handleUpdate = async (id: string, data: FormDataType) => {
  try {
    let imageUrl = data.imageSrc as string

    // Jika user memilih gambar baru (File), upload ke server dulu
    if (data.imageSrc instanceof File) {
      const formData = new FormData()
      formData.append("image", data.imageSrc)

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!uploadRes.ok) {
        throw new Error("Gagal mengunggah gambar.")
      }

      const uploadResult = await uploadRes.json()
      imageUrl = uploadResult.url // ← gunakan URL dari upload
    }

    const docRef = doc(db, "projects", id)
    await updateDoc(docRef, {
      title: data.title,
      description: data.description,
      githubUrl: data.githubUrl,
      liveUrl: data.liveUrl,
      imageSrc: imageUrl, // ← sudah pasti string URL
      technologies: data.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech !== ""),
    })

    Swal.fire({
      title: "Berhasil",
      text: "Proyek berhasil diperbarui.",
      icon: "success",
      confirmButtonText: "OK",
    })
  } catch (error) {
    console.error("Gagal memperbarui proyek:", error)
    Swal.fire({
      title: "Gagal",
      text: "Terjadi kesalahan saat memperbarui proyek.",
      icon: "error",
      confirmButtonText: "OK",
    })
  }
}


  return (
<div className="overflow-x-auto">
  <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300 mt-5 border-separate border-spacing-y-2">
    <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-4 py-3">Title</th>
        <th scope="col" className="px-4 py-3">Deskripsi</th>
        <th scope="col" className="px-4 py-3">Github URL</th>
        <th scope="col" className="px-4 py-3">Live URL</th>
        <th scope="col" className="px-4 py-3 text-center">Image</th>
        <th scope="col" className="px-4 py-3">Teknologi</th>
        <th scope="col" className="px-4 py-3 text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      {loading ? (
        <tr>
          <td colSpan={7} className="text-center py-10">Loading...</td>
        </tr>
      ) : projects.length === 0 ? (
        <tr>
          <td colSpan={7} className="text-center py-10">Tidak ada proyek ditemukan.</td>
        </tr>
      ) : (
        projects.map((project) => (
          <tr
            key={project.id}
            className="bg-white dark:bg-gray-900 shadow-sm rounded-md"
          >
            <td className="px-4 py-3 max-w-[150px] truncate">{project.title}</td>
            <td className="px-4 py-3 max-w-[200px] truncate">{project.description}</td>
            <td className="px-4 py-3 max-w-[160px] truncate">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {project.githubUrl}
              </a>
            </td>
            <td className="px-4 py-3 max-w-[160px] truncate">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {project.liveUrl}
              </a>
            </td>
            <td className="px-4 py-3 text-center">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-12 h-12 object-cover rounded-lg mx-auto"
              />
            </td>
            <td className="px-4 py-3 max-w-[200px] truncate">
              {project.technologies.join(", ")}
            </td>
            <td className="px-4 py-3 flex flex-col items-center gap-2">
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
                  handleUpdate(project.id, data)
                  console.log("Update proyek:", data)
                }}
              />
              <button
                onClick={() => handleDelete(project.id)}
                type="button"
                className="bg-red-600 text-white hover:bg-red-800 px-3 py-1 rounded-md text-sm"
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