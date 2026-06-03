import { motion } from "framer-motion";
import { Section } from "./Section";
import { Users, Leaf } from "lucide-react";

const positions = [
  {
    Icon: Users,
    title: "Operations Coordinator",
    org: "Entrepreneurship Cell (E-Cell), IGDTUW",
    bullets: [
      "Coordinating entrepreneurship-focused initiatives and events.",
      "Collaborating with startups and student founders.",
      "Managing operations and event execution.",
      "Supporting innovation and entrepreneurial culture on campus.",
    ],
  },
  {
    Icon: Leaf,
    title: "Outreach Member",
    org: "GreenSphere Society, IGDTUW",
    bullets: [
      "Conducting outreach campaigns.",
      "Building partnerships and collaborations.",
      "Promoting sustainability initiatives.",
      "Supporting event management and engagement.",
    ],
  },
];

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Beyond Code" title="Leadership & Campus Involvement" subtitle="Driving initiatives, communities, and impact on campus.">
      <div className="grid md:grid-cols-2 gap-6">
        {positions.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl p-7 shadow-card relative overflow-hidden group"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition" />
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 shadow-glow">
              <p.Icon size={26} />
            </div>
            <h3 className="text-xl font-bold">{p.title}</h3>
            <div className="text-sm gradient-text mt-1">{p.org}</div>
            <ul className="mt-5 space-y-2">
              {p.bullets.map((b) => (
                <li key={b} className="text-sm text-muted-foreground flex gap-2"><span className="text-primary">▹</span>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}