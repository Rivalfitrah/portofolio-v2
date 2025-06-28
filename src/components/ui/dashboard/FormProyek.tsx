"use ";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export type FormDataType = {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  imageSrc: string | File;
  technologies: string;
};

// ✅ Ini yang benar
export type FormProyekProps = {
  defaultValues?: FormDataType;
  onSubmit: (formData: FormDataType) => void | Promise<void>;
  isEdit?: boolean;
};



export function FormProyek({
  defaultValues,
  onSubmit,
  isEdit = false,
}: FormProyekProps) {
  const [form, setForm] = useState({
    title: defaultValues?.title || "",
    description: defaultValues?.description || "",
    githubUrl: defaultValues?.githubUrl || "",
    liveUrl: defaultValues?.liveUrl || "",
    imageSrc: defaultValues?.imageSrc || "",
    technologies: defaultValues?.technologies || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      await onSubmit(form);

      setForm({
        title: "",
        description: "",
        githubUrl: "",
        liveUrl: "",
        imageSrc: "",
        technologies: "",
      });

      document.getElementById("cancel")?.click(); // Close the dialog

    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show a notification)
    }
  };

  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{isEdit ? "Edit" : "Tambah"}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit} className="w-full">
            <DialogHeader>
              <div className="mb-5">
              <DialogTitle>
                {isEdit ? "Edit Proyek" : "Tambah Proyek"}
              </DialogTitle>
              </div>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="Title">Tittle</Label>
                <Input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="masukan tittle"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="Deskripsi">Deskripsi</Label>
                <Textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="deskripsi"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="Github URL">Github</Label>
                <Input
                  type="text"
                  name="githubUrl"
                  value={form.githubUrl}
                  onChange={handleChange}
                  placeholder="https://example.com"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="Live URL">Live URL</Label>
                <Input
                  type="text"
                  name="liveUrl"
                  value={form.liveUrl}
                  onChange={handleChange}
                  placeholder="https://example.com"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  type="file"
                  name="imageSrc"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setForm((prev) => ({ ...prev, imageSrc: file }));
                    }
                  }}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="teknologi">Teknologi</Label>
                <Input
                  type="text"
                  name="technologies"
                  value={form.technologies}
                  onChange={handleChange}
                  placeholder="React, Next.js, Tailwind CSS"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
            <DialogFooter>
              <DialogClose asChild>
                <Button id="cancel" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">{isEdit ? "Update" : "save"}</Button>
            </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
  );
}
