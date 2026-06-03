import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github } from "lucide-react";
import kahaniAsset from "@/assets/project-kahani.png.asset.json";
import pricingAsset from "@/assets/project-pricing.png.asset.json";
import realAsset from "@/assets/project-realestate.png.asset.json";
const kahaniImg = kahaniAsset.url;
const pricingImg = pricingAsset.url;
const realImg = realAsset.url;

const projects = [
  {
    title: "KahaniVoices",
    cat: "Full Stack",
    img: kahaniImg,
    desc: "Storytelling platform empowering individuals — especially women and underrepresented voices — to write, publish, and share stories in a safe digital environment.",
    stack: ["React", "TypeScript", "Tailwind", "Shadcn UI"],
    features: ["Story Publishing", "Community Engagement", "Responsive Design", "Modern UX"],
    live: "https://kahani-3ttn.onrender.com",
    github: "https://github.com/REVAPANDE",
  },
  {
    title: "Dynamic Pricing Intelligence",
    cat: "AI / ML",
    img: pricingImg,
    desc: "ML-powered dynamic pricing platform that analyzes ecommerce data and predicts optimal product prices in real time.",
    stack: ["Python", "Streamlit", "XGBoost", "Random Forest", "Pandas", "NumPy"],
    features: ["100k+ records analyzed", "86% prediction accuracy", "Research contribution"],
    live: "https://dynamic-pricing-e-commerce-waz7mvsadrhhst9cbomyjt.streamlit.app/",
    github: "https://github.com/REVAPANDE",
  },
  {
    title: "Gurgaon Realtech",
    cat: "Full Stack",
    img: realImg,
    desc: "Modern real estate platform designed to simplify property discovery and showcase verified residential & commercial listings.",
    stack: ["JavaScript", "HTML", "CSS"],
    features: ["Responsive UI", "Optimized Performance", "User-Centric Design"],
    live: "https://www.gurgaonrealtech.com/",
    github: "https://github.com/REVAPANDE",
  },
];

const filters = ["All", "Full Stack", "AI / ML"];

export function Projects() {
  const [f, setF] = useState("All");
  const list = projects.filter((p) => f === "All" || p.cat === f);
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects & Builds" subtitle="Production-grade products and research-driven experiments.">
      <div className="flex justify-center gap-2 mb-10">
        {filters.map((x) => (
          <button key={x} onClick={() => setF(x)}
            className={`text-sm px-4 py-2 rounded-full transition border ${f === x ? "gradient-primary text-white border-transparent shadow-glow" : "glass border-border hover:border-primary"}`}>
            {x}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl overflow-hidden shadow-card group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest glass px-2.5 py-1 rounded-full">{p.cat}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-primary">{s}</span>
                  ))}
                </div>
                <ul className="mt-4 space-y-1">
                  {p.features.map((x) => <li key={x} className="text-xs text-muted-foreground flex gap-2"><span className="text-primary">▹</span>{x}</li>)}
                </ul>
                <div className="mt-5 flex gap-2 pt-4 border-t border-border/50">
                  <a href={p.live} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 text-sm py-2 rounded-xl gradient-primary text-white font-medium hover:opacity-90">
                    <ExternalLink size={14}/> Live
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 text-sm py-2 rounded-xl glass hover:border-primary">
                    <Github size={14}/> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}