// app/components/Footer.tsx

import React from 'react';
import { 
  CodeXml, 
  Type, 
  Wind, 
  Instagram, 
  Mail, 
  MapPin,
  Copyright
} from 'lucide-react';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'; 

// Data untuk teknologi
const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs size={24} /> },
  { name: 'React', icon: <SiReact size={24} /> },
  { name: 'TypeScript', icon: <SiTypescript size={24} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} /> },
];

// Data untuk Quick Links
const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Project', href: '#project' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kolom Kiri */}
          <div className="space-y-8">
            {/* Bagian Teknologi */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Tech stack
              </h3>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2" title={tech.name}>
                    <span className="text-cyan-400">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bagian Kontak & Lokasi */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contack me & Location
              </h3>
              <div className="space-y-3">
                <a href="mailto:youremail@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail size={20} className="text-cyan-400" />
                  <span>rivalfitrah9@gmail.com</span>
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Instagram size={20} className="text-cyan-400" />
                  <span>@</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-cyan-400" />
                  <span>Based in Bogor, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="md:justify-self-end">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white hover:underline transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="flex items-center text-center justify-center gap-2">
            <Copyright size={16} />
            <span className='text-center'>{currentYear} Rival. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}