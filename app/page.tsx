import { ContactSection } from "@/components/contact-section";
import { FloatingIcons } from "@/components/floating-icons";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { StorySection } from "@/components/story-section";
import { TeamSection } from "@/components/team-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <FloatingIcons />
      <div className="relative z-10">
        <HeroSection />
        <StorySection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
