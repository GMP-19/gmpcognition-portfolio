import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

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

export function Hero() {
  const typed = useTyping(profile.typing);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-[0.2em] text-secondary uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
            Available for AI roles & research
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Praveen Kumar</span>
            <br />
            Gopinath Manjula
          </h1>

          <p className="mt-5 font-display text-lg text-foreground sm:text-xl">
            I build with{" "}
            <span className="text-secondary">{typed}</span>
            <span className="animate-caret text-primary">|</span>
          </p>

          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted-foreground">
            {profile.roles.map((role) => (
              <li key={role} className="rounded-full border border-border px-3 py-1">
                {role}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.04]"
            >
              View Projects <ArrowRight className="h-4 w-4" />
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
                className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-secondary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="animate-float-slow relative aspect-square">
            <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-brand opacity-70 blur-[2px]" />
            <div className="absolute inset-[3px] rounded-full bg-background" />
            <div className="animate-pulse-glow absolute inset-6 rounded-full bg-primary/25 blur-2xl" />
            <div className="glass absolute inset-3 grid place-items-center overflow-hidden rounded-full">
              <span className="text-gradient font-display text-7xl font-bold">PK</span>
              <span className="absolute bottom-10 text-[0.65rem] tracking-[0.35em] text-muted-foreground uppercase">
                AI Engineer
              </span>
            </div>
            <div className="glass absolute -right-2 top-8 rounded-2xl px-4 py-2 text-center">
              <p className="font-display text-lg font-bold text-secondary">M.Sc.</p>
              <p className="text-[0.65rem] text-muted-foreground">BTU Germany</p>
            </div>
            <div className="glass absolute -left-2 bottom-10 rounded-2xl px-4 py-2 text-center">
              <p className="font-display text-lg font-bold text-accent">4</p>
              <p className="text-[0.65rem] text-muted-foreground">Internships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
