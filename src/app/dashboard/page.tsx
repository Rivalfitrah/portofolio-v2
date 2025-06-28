'use client'
import { AppSidebar } from "@/components/app-sidebar"
import AuthGuard from "@/components/AuthGuard"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {FormDataType, FormProyek,} from "@/components/ui/dashboard/FormProyek"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TableProyek from "@/components/ui/dashboard/TableProyek"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase" // Pastikan path ini sesuai dengan lokasi file firebase.ts Anda
import Swal from "sweetalert2"


export default function Page() {

  return (
    <>
    <AuthGuard >
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
          <h1 className="text-2xl font-semibold mb-4">My Proyek</h1>
              <FormProyek
                onSubmit={async (data: FormDataType ) => {
                  try {
                    // 1. Upload gambar ke /api/upload
                    const formData = new FormData()
                    formData.append("image", data.imageSrc as unknown as File)

                    const uploadRes = await fetch("/api/upload", {
                      method: "POST",
                      body: formData,
                    })

                    if (!uploadRes.ok) {
                      throw new Error("Gagal upload gambar.")
                    }

                    const uploadResult = await uploadRes.json()
                    const imageUrl = uploadResult.url // Contoh: "/uploads/123456-nama.jpg"

                    // 2. Simpan data proyek ke Firestore
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
          
        </main>
      </SidebarInset>
    </SidebarProvider>
    </AuthGuard>
    </>
  )
}
