import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Certifications } from "@/components/portfolio/Certifications";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "All Certifications — Reva Pande" },
      { name: "description", content: "All certifications, programs, and credentials earned by Reva Pande." },
    ],
  }),
  component: AllCerts,
});

function AllCerts() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <div className="pt-28 px-6 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} /> Back to home
        </Link>
      </div>
      <Certifications showAll />
      <Footer />
    </div>
  );
}