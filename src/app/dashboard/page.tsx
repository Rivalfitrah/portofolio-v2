'use client'

import DashboardLayout from "@/components/layout/DashboardLayout"
import { FormProyek, FormDataType } from "@/components/ui/dashboard/FormProyek"
import TableProyek from "@/components/ui/dashboard/TableProyek"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import Swal from "sweetalert2"

export default function Page() {
  return (
    <DashboardLayout breadcrumbTitle="My Proyek">
      <h1 className="text-2xl font-semibold mb-4">My Proyek</h1>
      <FormProyek
        onSubmit={async (data: FormDataType) => {
          try {
            const formData = new FormData()
            formData.append("image", data.imageSrc as unknown as File)

            const uploadRes = await fetch("/api/upload", {
              method: "POST",
              body: formData,
            })

            if (!uploadRes.ok) throw new Error("Gagal upload gambar.")

            const uploadResult = await uploadRes.json()
            const imageUrl = uploadResult.url

            await addDoc(collection(db, "projects"), {
              title: data.title,
              description: data.description,
              githubUrl: data.githubUrl,
              liveUrl: data.liveUrl,
              imageSrc: imageUrl,
              technologies: data.technologies
                .split(",")
                .map((tech) => tech.trim())
                .filter((tech) => tech !== ""),
              createdAt: serverTimestamp(),
            })

            Swal.fire({
              icon: "success",
              title: "Proyek berhasil ditambahkan!",
              showConfirmButton: false,
              timer: 1500,
            })
          } catch (err) {
            Swal.fire({
              icon: "error",
              title: "Gagal menambahkan proyek",
              text: (err as Error).message || "Terjadi kesalahan",
              confirmButtonText: "OK",
            })
          }
        }}
      />
      <TableProyek />
    </DashboardLayout>
  )
}
