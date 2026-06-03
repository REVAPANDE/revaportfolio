import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { Award, ExternalLink, ArrowRight } from "lucide-react";
import { certifications } from "./certifications-data";

export function Certifications({ limit = 8, showAll = false }: { limit?: number; showAll?: boolean }) {
  const list = showAll ? certifications : certifications.slice(0, limit);
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications & Programs" subtitle="A snapshot of programs, hackathons, and credentials.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {list.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.url}
            target="_blank" rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-5 shadow-card group flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition">
              <Award size={20} />
            </div>
            <h3 className="font-semibold text-sm leading-snug flex-1">{c.title}</h3>
            <div className="text-xs gradient-text font-medium mt-1">{c.org}</div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary group-hover:translate-x-1 transition">
              View Certificate <ExternalLink size={12} />
            </div>
          </motion.a>
        ))}
      </div>
      {!showAll && (
        <div className="mt-10 text-center">
          <Link to="/certifications" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:border-primary hover:shadow-glow transition">
            View All Certifications <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </Section>
  );
}