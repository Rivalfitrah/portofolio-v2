"use client";
import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  BadgeCheck,
  Mail,
  FolderOpen,
} from "lucide-react";
import { cn } from "@/app/components/lib/utils";
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

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0.3,
      }
    );

    navItems.forEach(({ name }) => {
      const section = document.getElementById(name);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    
    className="fixed top-1/2 -translate-y-1/2 left-6 z-50">
      <div className="bg-[#111111] border border-gray-700 rounded-full px-3 py-6 flex flex-col items-center gap-6 shadow-md">
        {navItems.map(({ icon: Icon, name }) => (
          <button
            key={name}
            onClick={() => handleScroll(name)}
            className="group relative cursor-pointer"
          >
            <Icon
              className={cn(
                "w-6 h-6 transition-all duration-300",
                active === name
                  ? "text-[#61dafb] drop-shadow-[0_0_6px_#00FF94]"
                  : "text-gray-400 group-hover:text-white"
              )}
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
