import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children }: { id: string; eyebrow?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          {eyebrow && <div className="inline-block text-xs uppercase tracking-[0.3em] glass px-3 py-1 rounded-full mb-4 gradient-text font-semibold">{eyebrow}</div>}
          <h2 className="text-4xl sm:text-5xl font-bold">{title.split(" ").map((w, i, a) => i === a.length - 1 ? <span key={i} className="gradient-text">{" " + w}</span> : (i === 0 ? w : " " + w))}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}