import { createFileRoute } from "@tanstack/react-router";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Leadership } from "@/components/portfolio/Leadership";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Certifications } from "@/components/portfolio/Certifications";
import { CodingProfiles } from "@/components/portfolio/CodingProfiles";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reva Pande — CS-AI Student, AI/ML & Full Stack Engineer" },
      { name: "description", content: "Portfolio of Reva Pande — Computer Science Engineering (AI) student at IGDTUW. AI/ML, Full Stack, and Data Science projects, research, and achievements." },
      { property: "og:title", content: "Reva Pande — AI/ML & Full Stack Engineer" },
      { property: "og:description", content: "CSE-AI student at IGDTUW building intelligent systems, scalable web apps, and data-driven products." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Leadership />
        <Projects />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
