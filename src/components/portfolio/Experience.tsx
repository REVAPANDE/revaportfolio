import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const items = [
  {
    org: "IGDTUW Anveshan Foundation",
    role: "Machine Learning Research Intern",
    period: "Research",
    bullets: [
      "Developed a Dynamic Pricing application using Python and Streamlit.",
      "Analyzed 100,000+ ecommerce records for pricing intelligence.",
      "Trained XGBoost, Random Forest, and Regression models — achieved 86% prediction accuracy.",
      "Contributed to ML research documentation and reproducibility.",
    ],
  },
  {
    org: "MSME Idea Hackathon 5.0",
    role: "SmartChain360 — AI Demand Forecasting",
    period: "National Hackathon",
    bullets: [
      "Selected as the only student from IGDTUW CSE-AI.",
      "Built AI-powered demand forecasting with ARIMA, Random Forest, and Gradient Boosting.",
      "Achieved 85% forecast reliability on enterprise supply-chain data.",
      "Developed a Streamlit dashboard for live business insights.",
    ],
  },
  {
    org: "CDAC — Centre for Development of Advanced Computing",
    role: "Cyber Gyan Internship",
    period: "Cybersecurity",
    bullets: [
      "Ethical Hacking and Penetration Testing.",
      "Digital Footprinting & Vulnerability Assessment.",
      "Network Security and Security Countermeasures.",
      "Hands-on with Nmap, Nikto, cURL, and WAF technologies.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Work" title="Experience & Research" subtitle="Hands-on ML research, hackathons, and cybersecurity.">
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px gradient-primary opacity-50" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 ${i % 2 ? "" : "sm:rtl"}`}
            >
              <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:col-start-2"} ltr`}>
                <div className="absolute left-2 sm:left-1/2 top-2 -translate-x-1/2 w-5 h-5 rounded-full gradient-primary ring-4 ring-background shadow-glow" />
                <div className="glass rounded-2xl p-6 shadow-card text-left">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Briefcase size={14} /> {it.period}
                  </div>
                  <h3 className="mt-2 text-xl font-bold">{it.role}</h3>
                  <div className="text-sm gradient-text font-medium">{it.org}</div>
                  <ul className="mt-4 space-y-2">
                    {it.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">▹</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}