import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { title: "Languages", items: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL", "R"] },
  { title: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Databases", items: ["MongoDB", "SQL"] },
  { title: "AI / ML", items: ["Machine Learning", "Scikit-Learn", "XGBoost", "Random Forest", "Regression", "ARIMA", "Pandas", "NumPy", "Feature Engineering", "Model Evaluation"] },
  { title: "Tools", items: ["Git", "GitHub", "Streamlit", "Postman", "Power BI", "Vercel"] },
  { title: "Soft Skills", items: ["Problem Solving", "Analytical Thinking", "Leadership", "Team Collaboration", "Communication"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Tech Stack" title="Skills & Toolkit" subtitle="A modern, full-stack and AI-first toolbox.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass rounded-2xl p-6 hover:border-primary/60 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-8 rounded-full gradient-primary" />
              <h3 className="font-bold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 hover:border-primary hover:bg-primary/10 transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}