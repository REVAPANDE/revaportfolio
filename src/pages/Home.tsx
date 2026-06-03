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

export default function HomePage() {
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
