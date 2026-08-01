import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import profilePhoto from "@/assets/profile-photo.jpg.asset.json";

function useTyping(words: readonly string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? 1600 : cleared ? 250 : deleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => i + 1);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

const socials = [
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  { href: profile.instagram, label: "Instagram", Icon: Instagram },
];

const orbitNodes = [0, 72, 144, 216, 288];

export function Hero() {
  const typed = useTyping(profile.typing);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-24">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-[0.2em] text-secondary uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              Available for AI roles &amp; research
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" /> {profile.location}
            </span>
          </div>

          <p className="mt-8 flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> AI Engineer · M.Sc. BTU
          </p>

          <h1 className="mt-3 font-display text-[2.6rem] leading-[1.02] font-bold sm:text-6xl lg:text-[4.25rem]">
            <span className="text-gradient-anim">Praveen Kumar</span>
            <br />
            Gopinath Manjula
          </h1>

          <p className="mt-5 font-display text-lg text-foreground sm:text-2xl">
            I build with{" "}
            <span className="text-secondary">{typed}</span>
            <span className="animate-caret text-primary">|</span>
          </p>

          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted-foreground">
            {profile.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-border px-3 py-1 transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {role}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold transition-all hover:scale-[1.04] hover:shadow-[var(--glow-primary)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-secondary"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-secondary hover:shadow-[var(--glow-primary)]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background/70 px-4 py-4 text-center backdrop-blur">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-gradient">
                  {s.value}
                  {s.suffix}
                </dd>
                <p className="mt-1 text-[0.65rem] tracking-wide text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float-slow relative aspect-square">
            <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-brand opacity-70 blur-[2px]" />
            <div className="absolute inset-[3px] rounded-full bg-background" />
            <div className="animate-pulse-glow absolute inset-6 rounded-full bg-primary/25 blur-2xl" />

            <div className="glass absolute inset-3 grid place-items-center overflow-hidden rounded-full">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full opacity-25"
                style={{
                  backgroundImage:
                    "repeating-conic-gradient(from 0deg, transparent 0deg 12deg, color-mix(in oklab, var(--secondary) 20%, transparent) 12deg 13deg)",
                }}
              />
              <img
                src={profilePhoto.url}
                alt="Praveen Kumar Gopinath Manjula"
                className="relative h-full w-full rounded-full object-cover"
              />
            </div>

            {/* orbiting nodes */}
            <div aria-hidden className="animate-orbit absolute inset-[-8%]">
              {orbitNodes.map((deg) => (
                <span
                  key={deg}
                  className="absolute top-1/2 left-1/2 h-2 w-2 rounded-full bg-secondary shadow-[0_0_12px_2px_color-mix(in_oklab,var(--secondary)_60%,transparent)]"
                  style={{ transform: `rotate(${deg}deg) translateX(52%)` }}
                />
              ))}
            </div>
            <div aria-hidden className="animate-orbit-reverse absolute inset-[-18%] rounded-full border border-dashed border-primary/20">
              <span className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_12px_2px_color-mix(in_oklab,var(--accent)_60%,transparent)]" />
            </div>

            <div className="glass glass-hover absolute -right-2 top-8 rounded-2xl px-4 py-2 text-center">
              <p className="font-display text-lg font-bold text-secondary">M.Sc.</p>
              <p className="text-[0.65rem] text-muted-foreground">BTU Germany</p>
            </div>
            <div className="glass glass-hover absolute -left-2 bottom-10 rounded-2xl px-4 py-2 text-center">
              <p className="font-display text-lg font-bold text-accent">4</p>
              <p className="text-[0.65rem] text-muted-foreground">Internships</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-secondary sm:flex"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="animate-scroll-cue h-4 w-4" />
      </a>
    </section>
  );
}
