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
    description: "AI-based waste detection system utilizing YOLOv8 and Gemini API.",
    imageSrc: "/img/projects/limbara.png",
    githubUrl: "https://github.com/zollahrp/limbara",
    liveUrl: "https://limbara.vercel.app",
    technologies: ["Python", "FastAPI", "YOLOv8", "Docker", "Gemini API"],
  },
  {
    id: "poultrylink",
    title: "PoultryLink",
    description: "A multi-vendor marketplace platform for the poultry industry designed to facilitate seamless online transactions between farmers and buyers.",
    imageSrc: "/img/projects/poltrylink1.png",
    githubUrl: "https://github.com/Rivalfitrah/Poultrylink-web",
    liveUrl: "",
    technologies: ["HTML", "CSS", "JavaScript", "Axios", "Laravel", "MySQL"],
  },
  {
    id: "fast-fashion-webgis",
    title: "Fast Fashion WebGIS",
    description: "A web-based geospatial platform that helps users locate fashion stores through an interactive map, featuring advanced search capabilities and location filtering by category and geographic area.",
    imageSrc: "/img/projects/fast-fashion.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Next.js", "Supabase", "OpenStreetMap", "GeoJSON", "Leaflet"],
  },
  {
    id: "mitra-home",
    title: "Mitra Home Mobile Apps",
    description: "A mobile application for mortgage (KPR) calculations and property management, serving as an all-in-one property solution in the palm of your hand.",
    imageSrc: "/img/projects/mitra-home.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Java", "Android Studio", "Firebase"],
  },
  {
    id: "elabs",
    title: "CervoSys e-Labs University Lab Management Platform",
    description: "A university lab needed a platform for students and staff to schedule lab time, borrow equipment, and manage rentals replacing what had been handled through manual booking sheets and email.",
    imageSrc: "/img/projects/elabs+.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "express.js", "postgreSQL"],
  },
  {
    id: "mitra-bangun-desain",
    title: "Mitra Bangun Desain",
    description: "A web platform for a design company featuring digital signatures for the client approval process, significantly reducing document verification time.",
    imageSrc: "/img/projects/mitra-bangun.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
  },
  {
    id: "smk-madya",
    title: "Web Absensi & Monitoring SMK Madya",
    description: "Geolocation-based attendance and monitoring system for a school, handling daily check-ins for staff and students with automated absence detection.",
    imageSrc: "/img/projects/smk-madya-absensi.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Laravel", "Inertia.js", "React.js", "Tailwind CSS", "MySQL"],
  },
  {
    id: "reva-baju-anak",
    title: "Reva Baju Anak",
    description: "Developed a responsive e-commerce web application for a children's clothing store, integrated with Midtrans payment gateway.",
    imageSrc: "/img/projects/reva-baju-anak.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Golang", "React.js", "Axios", "Midtrans", "PostgreSQL"],
  },
  {
    id: "Dinas-Kesehatan-Cianjur",
    title: "CMS Dinas Kesehatan Cianjur",
    description: "Built a Content Management System (CMS) for the Cianjur Health Office, featuring content management, patient data administration, and health statistical reporting.",
    imageSrc: "/img/projects/proyek10.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Laravel", "php", "MySQL"],
  },
  {
    id: "simedika",
    title: "SIMEDIKA",
    description: "A management dashboard website for SIMEDIKA to streamline and optimize medical service data management.",  
    imageSrc: "/img/projects/proyek11.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Laravel", "php", "MySQL"],
  },
  {
    id: "kodehana",
    title: "KODEHANA",
    description: "Company profile website for KODEHANA, a creative agency focusing on digital solutions.",  
    imageSrc: "/img/projects/proyek12.png",
    githubUrl: "",
    liveUrl: "",
    technologies: ["Next.js", "Tailwind CSS", "react", "TypeScript"],
  }
];