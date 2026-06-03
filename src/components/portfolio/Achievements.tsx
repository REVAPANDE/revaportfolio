import { motion } from "framer-motion";
import { Section } from "./Section";
import { Trophy, Sparkles, GraduationCap, FlaskConical, ShieldCheck } from "lucide-react";

const items = [
  { Icon: Trophy, title: "MSME Idea Hackathon 5.0", desc: "Selected through a highly competitive process and represented IGDTUW in a national innovation initiative." },
  { Icon: Sparkles, title: "Flipkart Girls Wanna Code 7.0", desc: "Selected as a mentee through a highly competitive nationwide selection among thousands of applicants." },
  { Icon: GraduationCap, title: "Academic Excellence", desc: "Maintaining a CGPA of 9.62 / 10 in Computer Science Engineering with Artificial Intelligence." },
  { Icon: FlaskConical, title: "Research & Innovation", desc: "Worked on AI-driven Dynamic Pricing and Demand Forecasting systems with measurable production-grade impact." },
  { Icon: ShieldCheck, title: "CDAC Cyber Gyan Program", desc: "Successfully completed cybersecurity and ethical hacking training under CDAC." },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Milestones" title="Achievements & Recognition" subtitle="A timeline of selected highlights.">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px gradient-primary opacity-40" />
        <div className="space-y-8">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative grid sm:grid-cols-2 gap-6 items-center ${i % 2 ? "sm:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-glow ring-4 ring-background z-10">
                <it.Icon size={20} />
              </div>
              <div className={`pl-20 sm:pl-0 ${i % 2 ? "sm:pl-16" : "sm:pr-16 sm:text-right"}`}>
                <div className="glass rounded-2xl p-5 shadow-card">
                  <h3 className="font-bold">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
                </div>
              </div>
              <div />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}