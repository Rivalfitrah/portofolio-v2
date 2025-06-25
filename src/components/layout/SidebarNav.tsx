"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  BadgeCheck,
  Mail,
  FolderOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, name: "home" },
  { icon: User, name: "about" },
  { icon: BadgeCheck, name: "skills" },
  { icon: FolderOpen, name: "project" },
  { icon: Mail, name: "contact" },
];

export default function SidebarNav() {
  const [active, setActive] = useState("home");
  // useRef untuk menyimpan referensi ke observer agar tidak dibuat ulang terus menerus
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Hentikan observer sebelumnya jika ada, untuk mencegah duplikasi
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Buat observer baru dengan konfigurasi yang lebih baik
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Cari entri yang sedang terlihat di layar
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        
        // Jika ada section yang terlihat, update state active
        if (intersectingEntry) {
          setActive(intersectingEntry.target.id);
        }
      },
      {
        // Ubah rootMargin untuk membuat 'trigger zone' di bagian atas layar
        // -20% dari atas: trigger aktif saat section sudah sedikit masuk dari atas
        // -80% dari bawah: trigger nonaktif saat bagian atas section sudah melewati 20% viewport
        rootMargin: "-20% 0px -75% 0px",
        threshold: 0, // Trigger langsung saat elemen masuk/keluar zona
      }
    );

    const { current: observer } = observerRef;

    // Amati setiap section
    navItems.forEach(({ name }) => {
      const section = document.getElementById(name);
      if (section) {
        observer.observe(section);
      }
    });

    // Fungsi cleanup untuk menghentikan observer saat komponen di-unmount
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []); // Dependensi kosong agar useEffect hanya berjalan sekali saat mount

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Kita tidak perlu setActive(id) di sini lagi,
      // karena IntersectionObserver akan menanganinya secara otomatis saat scrolling selesai.
      // Ini mencegah "kedipan" di mana state di-set oleh klik, lalu langsung di-set lagi oleh observer.
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-1/2 -translate-y-1/2 left-4 z-50" // Disesuaikan sedikit untuk posisi
    >
      <nav className="bg-[#111111]/70 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-6 flex flex-col items-center gap-6 shadow-lg shadow-black/30">
        {navItems.map(({ icon: Icon, name }) => (
          <button
            key={name}
            onClick={() => handleScroll(name)}
            className="group relative cursor-pointer p-2 rounded-full"
            aria-label={`Go to ${name} section`}
          >
            <Icon
              className={cn(
                "w-6 h-6 transition-all duration-300",
                active === name
                  ? "text-cyan-400 drop-shadow-[0_0_5px_rgba(45,212,191,0.7)] scale-110"
                  : "text-gray-400 group-hover:text-white group-hover:scale-110"
              )}
            />
            {/* Tooltip yang muncul saat hover */}
            <span 
              className="absolute left-full ml-4 px-3 py-1.5 text-sm capitalize bg-gray-800 text-white rounded-md 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
            >
              {name}
            </span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}