// data/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    id: "limbara",
    title: "Waste Detection AI",
    description: "Sistem deteksi sampah berbasis AI yang menggunakan YOLOv8 untuk mengenali dan mengklasifikasikan jenis sampah plastik dari gambar, dilengkapi backend FastAPI dan integrasi Gemini API untuk memberikan wawasan serta rekomendasi pengelolaan sampah secara kontekstual.",
    imageSrc: "/img/projects/limbara.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Python", "FastAPI", "YOLOv8", "Docker", "Gemini API"],
  },
  {
    id: "poultrylink",
    title: "PoultryLink",
    description: "Platform marketplace multi-vendor untuk industri unggas yang memudahkan peternak dan pembeli bertransaksi secara online, mencakup fitur eksplorasi produk, pemesanan, dan sinkronisasi data secara real-time melalui REST API.",
    imageSrc: "/img/projects/poultrylink.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["HTML", "CSS", "JavaScript", "Axios", "Laravel", "MySQL"],
  },
  {
    id: "fast-fashion-webgis",
    title: "Fast Fashion WebGIS",
    description: "Platform geospasial berbasis web yang membantu pengguna menemukan toko fashion melalui peta interaktif, dengan fitur pencarian dan filter lokasi berdasarkan kategori dan area geografis.",
    imageSrc: "/img/projects/fast-fashion.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Next.js", "Supabase", "OpenStreetMap", "GeoJSON", "Leaflet"],
  },
  {
    id: "mitra-home",
    title: "Mitra Home Mobile Apps",
    description: "Aplikasi mobile internal perusahaan yang memberikan karyawan akses terpusat ke informasi kerja, termasuk fitur penjadwalan serta kalkulator KPR dan pajak untuk membantu perencanaan finansial.",
    imageSrc: "/img/projects/mitra-home.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Java", "Android Studio", "Firebase"],
  },
  {
    id: "elabs",
    title: "CervoSys e-Labs University Lab Management Platform",
    description: "A university lab needed a platform for students and staff to schedule lab time, borrow equipment, and manage rentals replacing what had been handled through manual booking sheets and email.",
    imageSrc: "/img/projects/elabs1.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "express.js", "postgreSQL"],
  },
  {
    id: "afrida-store",
    title: "Afrida Store",
    description: "An e-commerce platform for selling handmade crafts and accessories.",
    imageSrc: "/img/projects/afrida.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
  },
  {
    id: "mitra-bangun-desain",
    title: "Mitra Bangun Desain",
    description: "Platform web untuk perusahaan desain yang menghadirkan fitur tanda tangan digital pada proses persetujuan klien, sehingga waktu verifikasi dokumen dapat dipangkas secara signifikan.",
    imageSrc: "/img/projects/mitra-bangun-desain.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
  },
  {
    id: "smk-madya",
    title: "Web Absensi & Monitoring SMK Madya",
    description: "Memimpin pengembangan frontend untuk sistem absensi berbasis geolokasi yang digunakan oleh lebih dari 100 pengguna, membangun dashboard responsif untuk check-in, monitoring, dan pelaporan, serta mengintegrasikan REST API untuk data absensi real-time dan validasi lokasi.",
    imageSrc: "/img/projects/smk-madya.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Laravel", "Inertia.js", "React.js", "Tailwind CSS", "MySQL"],
  },
  {
    id: "reva-baju-anak",
    title: "Reva Baju Anak",
    description: "Mengembangkan aplikasi web e-commerce yang responsif dengan fitur listing produk, keranjang belanja, dan proses checkout, serta mengintegrasikan payment gateway Midtrans Snap untuk transaksi pembayaran yang aman dan mudah digunakan.",
    imageSrc: "/img/projects/reva-baju.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Golang", "React.js", "Axios", "Midtrans", "PostgreSQL"],
  },
];