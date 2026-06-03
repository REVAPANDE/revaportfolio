import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Certifications } from "@/components/portfolio/Certifications";
import { Footer } from "@/components/portfolio/Footer";

export default function CertificationsPage() {
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
