import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Award, Brain, Code2 } from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Engineer. Researcher. Builder." subtitle="Turning ideas into impactful products.">
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3 glass rounded-3xl p-8 shadow-card">
          <p className="text-base leading-relaxed text-muted-foreground">
            I am a B.Tech Computer Science Engineering student specializing in <span className="text-foreground font-medium">Artificial Intelligence</span> at <span className="gradient-text font-semibold">IGDTUW</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            My interests span Artificial Intelligence, Machine Learning, Full Stack Development, Data Science, and Generative AI. I am passionate about building impactful technology products, exploring emerging technologies, and solving complex problems.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I believe in combining <span className="text-foreground">technical excellence</span> with <span className="text-foreground">practical problem-solving</span> to create meaningful solutions.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {[
              { Icon: Brain, label: "AI / ML Research", text: "Real-world ML systems" },
              { Icon: Code2, label: "Full Stack Dev", text: "React · Node · TS" },
              { Icon: Award, label: "Top 1% Academic", text: "CGPA 9.62/10" },
              { Icon: GraduationCap, label: "IGDTUW '28", text: "CSE-AI" },
            ].map(({ Icon, label, text }) => (
              <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/40">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0"><Icon size={18} /></div>
                <div>
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="text-xs text-muted-foreground">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
          <div className="glass rounded-3xl p-6 shadow-card">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Education</div>
            <div className="mt-3 font-bold text-lg">IGDTUW</div>
            <div className="text-sm text-muted-foreground">B.Tech Computer Science Engineering (AI)</div>
            <div className="text-xs text-muted-foreground mt-1">2024 — 2028</div>
            <div className="mt-4 flex items-center justify-between p-3 rounded-xl gradient-primary text-white">
              <span className="text-sm font-medium">Current CGPA</span>
              <span className="text-2xl font-bold">9.62</span>
            </div>
          </div>
          <div className="glass rounded-3xl p-6 shadow-card">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Class XII</div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-4xl font-bold gradient-text">95.4%</span>
              <span className="text-sm text-muted-foreground">CBSE</span>
            </div>
          </div>
          <div className="glass rounded-3xl p-6 shadow-card">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Focus</div>
            <div className="flex flex-wrap gap-2 mt-3">
              {["AI", "ML", "Gen AI", "Full Stack", "Data Science"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary/60 border border-border">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}