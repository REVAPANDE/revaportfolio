import { Github, Linkedin, Mail, Twitter, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="gradient-text font-semibold">Reva Pande</span>. Crafted with React, TypeScript & Framer Motion.
        </div>
        <div className="flex gap-2">
          {[
            { Icon: Github, href: "https://github.com/REVAPANDE" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/revapande/" },
            { Icon: Code2, href: "https://leetcode.com/u/RevaP/" },
            { Icon: Twitter, href: "https://x.com/PandeReva14398" },
            { Icon: Mail, href: "mailto:iamrevapande@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:border-primary transition">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}