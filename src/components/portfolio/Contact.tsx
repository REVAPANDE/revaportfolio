import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Send, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const body = encodeURIComponent(`Hi Reva,\n\n${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:iamrevapande@gmail.com?subject=${encodeURIComponent("Portfolio inquiry from " + name)}&body=${body}`;
    setSent(true);
  };
  return (
    <Section id="contact" eyebrow="Get In Touch" title="Let's Build Something" subtitle="Open to internships, collaborations, and meaningful conversations.">
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
          {[
            { Icon: Mail, label: "Email", value: "iamrevapande@gmail.com", href: "mailto:iamrevapande@gmail.com" },
            { Icon: Linkedin, label: "LinkedIn", value: "/in/revapande", href: "https://www.linkedin.com/in/revapande/" },
            { Icon: Github, label: "GitHub", value: "@REVAPANDE", href: "https://github.com/REVAPANDE" },
            { Icon: MapPin, label: "Based In", value: "Delhi, India" },
          ].map(({ Icon, label, value, href }) => {
            const Comp: any = href ? "a" : "div";
            return (
              <Comp key={label} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary transition group">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0"><Icon size={20} /></div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{label}</div>
                  <div className="text-sm font-medium truncate">{value}</div>
                </div>
              </Comp>
            );
          })}
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="lg:col-span-3 glass rounded-3xl p-7 shadow-card space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Your Name" placeholder="Jane Recruiter" />
            <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
          </div>
          <Field name="subject" label="Subject" placeholder="Internship opportunity" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea required name="message" rows={5} placeholder="Tell me about the role or project…"
              className="mt-2 w-full bg-secondary/40 border border-border focus:border-primary outline-none rounded-xl p-3 text-sm resize-none" />
          </div>
          <button type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-white font-semibold shadow-glow hover:scale-[1.02] transition">
            <Send size={16}/> {sent ? "Sent!" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input required name={name} type={type} placeholder={placeholder}
        className="mt-2 w-full bg-secondary/40 border border-border focus:border-primary outline-none rounded-xl p-3 text-sm" />
    </div>
  );
}