import SidebarNav from "../components/layout/SidebarNav"; // tambahkan ini
import AboutSection from "../components/section/AboutSection";
import HeroSection from "../components/section/HeroSection";
import SkillSection from "../components/section/SkillSection";
import ProjectSection from "../components/section/ProjectSection";
import ContactSection from "../components/section/ContactSection";

export default function Home() {
  return (
    <>
      <SidebarNav />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />

    </>
  );
}
