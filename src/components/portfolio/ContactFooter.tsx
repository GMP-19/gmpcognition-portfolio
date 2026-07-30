import { useState } from "react";
import {
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { navLinks, profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
  { label: "Location", value: profile.location, href: undefined, Icon: MapPin },
  { label: "LinkedIn", value: "praveenkumargopinathmanjula", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "GMP-19", href: profile.github, Icon: Github },
  { label: "Resume", value: "View / Download", href: profile.resume, Icon: FileText },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio enquiry",
    )}&body=${body}`;
    toast.success("Opening your email client…", {
      description: "Your message is pre-filled and ready to send.",
    });
  };

  const field =
    "w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's Build Something <span className="text-gradient">Intelligent</span>
            </>
          }
          description="Open to AI/ML roles, research collaborations and working-student positions in Germany."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {details.map(({ label, value, href, Icon }) => {
                  const inner = (
                    <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-border p-4 transition-colors hover:border-primary/40">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-secondary">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                          {label}
                        </p>
                        <p className="truncate text-sm text-foreground">{value}</p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href} target="_blank" rel="noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div key={label}>{inner}</div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="glass h-full rounded-3xl p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  className={field}
                  placeholder="Your name"
                  aria-label="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  required
                  type="email"
                  className={field}
                  placeholder="Your email"
                  aria-label="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <input
                required
                className={`${field} mt-4`}
                placeholder="Subject"
                aria-label="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
              <textarea
                required
                rows={6}
                className={`${field} mt-4 resize-none`}
                placeholder="Tell me about the role or project…"
                aria-label="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = [
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
    { href: profile.instagram, label: "Instagram", Icon: Instagram },
  ];

  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center font-display text-xl font-semibold sm:text-2xl">
          <span className="text-gradient">Building Intelligent Systems</span> for a Smarter
          Tomorrow.
        </p>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 flex justify-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-secondary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Praveen Kumar Gopinath Manjula. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
