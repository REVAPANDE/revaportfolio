import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, Linkedin, Code2, ExternalLink } from "lucide-react";

const profiles = [
  { Icon: Github, name: "GitHub", handle: "@REVAPANDE", url: "https://github.com/REVAPANDE", color: "from-purple-500 to-indigo-500" },
  { Icon: Code2, name: "LeetCode", handle: "@RevaP", url: "https://leetcode.com/u/RevaP/", color: "from-amber-400 to-orange-500" },
  { Icon: ExternalLink, name: "Codolio", handle: "@reva", url: "https://codolio.com/profile/reva", color: "from-pink-500 to-rose-500" },
  { Icon: Linkedin, name: "LinkedIn", handle: "@revapande", url: "https://www.linkedin.com/in/revapande/", color: "from-sky-400 to-blue-600" },
];

export function CodingProfiles() {
  return (
    <Section id="profiles" eyebrow="Find Me Online" title="Coding & Social Profiles" subtitle="Track my progress and contributions.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url} target="_blank" rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
            className="glass rounded-2xl p-6 shadow-card group relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${p.color} opacity-30 blur-2xl group-hover:opacity-60 transition`} />
            <p.Icon size={28} className="text-foreground" />
            <div className="mt-5 font-bold text-lg">{p.name}</div>
            <div className="text-xs text-muted-foreground">{p.handle}</div>
            <div className="mt-4 text-xs gradient-text inline-flex items-center gap-1 font-medium">
              Visit <ExternalLink size={12} />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Mock contribution heatmap */}
      <div className="mt-12 glass rounded-3xl p-6 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold">GitHub Activity</h3>
            <p className="text-xs text-muted-foreground">Consistent contributions across the year</p>
          </div>
          <a href="https://github.com/REVAPANDE" target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">@REVAPANDE</a>
        </div>
        <Heatmap />
      </div>
    </Section>
  );
}

function Heatmap() {
  const weeks = 52, days = 7;
  return (
    <div className="flex gap-[3px] overflow-x-auto pb-1">
      {Array.from({ length: weeks }).map((_, w) => (
        <div key={w} className="flex flex-col gap-[3px]">
          {Array.from({ length: days }).map((_, d) => {
            const v = Math.random();
            const level = v < 0.4 ? 0 : v < 0.6 ? 1 : v < 0.8 ? 2 : v < 0.95 ? 3 : 4;
            const bgs = ["bg-secondary/40", "bg-primary/25", "bg-primary/50", "bg-primary/75", "bg-primary"];
            return <div key={d} className={`w-3 h-3 rounded-sm ${bgs[level]}`} />;
          })}
        </div>
      ))}
    </div>
  );
}