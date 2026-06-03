import { motion } from "framer-motion";
import { Section } from "./Section";
import { Download, FileText, ExternalLink } from "lucide-react";
import resume from "@/assets/resume.pdf.asset.json";

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Download My Resume" subtitle="Complete background — education, experience, projects, and credentials.">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-3xl mx-auto glass rounded-3xl p-8 shadow-card grid sm:grid-cols-[auto_1fr_auto] gap-6 items-center">
        <div className="w-20 h-24 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
          <FileText size={36} />
        </div>
        <div>
          <div className="text-xl font-bold">Reva Pande — Resume.pdf</div>
          <div className="text-sm text-muted-foreground mt-1">Updated · IGDTUW CSE-AI · Class of 2028</div>
          <div className="flex flex-wrap gap-2 mt-3">
            {["AI / ML", "Full Stack", "Data Science"].map(t => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">{t}</span>
            ))}
          </div>
        </div>
        <div className="flex sm:flex-col gap-2">
          <a href={resume.url} download="Reva_Pande_Resume.pdf"
             className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-white font-semibold shadow-glow hover:scale-105 transition">
            <Download size={16}/> Download
          </a>
          <a href={resume.url} target="_blank" rel="noreferrer"
             className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl glass hover:border-primary">
            <ExternalLink size={16}/> Preview
          </a>
        </div>
      </motion.div>
    </Section>
  );
}