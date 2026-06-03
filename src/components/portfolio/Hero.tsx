import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, Github, Linkedin, Code2, Twitter, ExternalLink } from "lucide-react";
import reva from "@/assets/reva.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";
import { AnimatedCounter } from "./AnimatedCounter";

const techIcons = ["React", "TS", "Py", "ML", "AI", "Node", "SQL", "C++"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[oklch(0.55_0.25_275_/_25%)] blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[oklch(0.65_0.25_305_/_22%)] blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-[oklch(0.7_0.2_240_/_18%)] blur-3xl animate-blob" style={{ animationDelay: "10s" }} />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to SWE / AI / ML Internships 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm <span className="gradient-text text-glow">Reva Pande</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
          >
            Computer Science Engineering (AI) Student · AI/ML Enthusiast · Full Stack Developer.
            Building intelligent systems, scalable web apps, and data-driven solutions that create real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-white font-semibold shadow-glow hover:scale-105 transition-transform">
              <FolderGit2 size={18} /> View Projects
            </a>
            <a href={resume.url} download="Reva_Pande_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:border-primary/60 transition-colors">
              <Download size={18} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium hover:border-primary/60 transition-colors">
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex gap-3 pt-2"
          >
            {[
              { Icon: Github, href: "https://github.com/REVAPANDE", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/revapande/", label: "LinkedIn" },
              { Icon: Code2, href: "https://leetcode.com/u/RevaP/", label: "LeetCode" },
              { Icon: ExternalLink, href: "https://codolio.com/profile/reva", label: "Codolio" },
              { Icon: Twitter, href: "https://x.com/PandeReva14398", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a key={label} aria-label={label} href={href} target="_blank" rel="noreferrer"
                 className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary hover:-translate-y-1 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-2xl"
          >
            <Stat value={9.62} suffix="/10" label="CGPA" decimals={2} />
            <Stat value={15} suffix="+" label="Projects" />
            <Stat value={15} suffix="+" label="Certifications" />
            <Stat value={5} suffix="+" label="Hackathons" />
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:col-span-2 relative flex justify-center"
        >
          <div className="relative w-[300px] sm:w-[360px] lg:w-[420px] aspect-[5/6]">
            <div className="absolute -inset-3 rounded-3xl gradient-primary blur-2xl opacity-50 animate-pulse" />
            <div className="absolute inset-0 rounded-3xl gradient-primary p-[2px] shadow-glow">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-card">
                <img src={reva.url} alt="Reva Pande" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Floating chips */}
            {techIcons.map((t, i) => {
              const angle = (i / techIcons.length) * Math.PI * 2;
              const x = Math.cos(angle) * 50 + 50;
              const y = Math.sin(angle) * 50 + 50;
              return (
                <motion.div
                  key={t}
                  className="absolute glass rounded-xl px-3 py-1.5 text-xs font-mono font-semibold gradient-text"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                >
                  {t}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, decimals = 0 }: { value: number; suffix?: string; label: string; decimals?: number }) {
  return (
    <div className="glass rounded-2xl p-4 hover:border-primary/60 transition">
      <div className="text-2xl sm:text-3xl font-bold gradient-text">
        <AnimatedCounter to={value} decimals={decimals} />{suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}