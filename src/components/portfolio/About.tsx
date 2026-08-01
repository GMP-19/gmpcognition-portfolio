import { useEffect, useState } from "react";
import { GraduationCap, Heart, Languages, MapPin } from "lucide-react";
import { interests, languages, stats } from "@/data/portfolio";
import { Reveal, useReveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  return (
    <span ref={ref} className="text-gradient font-display text-4xl font-bold">
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Designing <span className="text-gradient">Intelligent Systems</span>
            </>
          }
          description="22-year-old AI graduate student turning research curiosity into real-world systems."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass glass-hover rounded-3xl p-8">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Originally from India, he completed his Bachelor's degree in Artificial Intelligence
                at SRM University, Chennai, graduating in 2025 before relocating to Germany to
                continue his higher education.
              </p>
              <p>
                He enjoys working with Artificial Intelligence, Machine Learning, Data Science,
                Computer Vision, Cloud Computing, IoT, and Cybersecurity.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  <Heart className="h-4 w-4" /> Outside academics
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {interests.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-accent">
                  <Languages className="h-4 w-4" /> Languages
                </p>
                <div className="mt-3 space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{lang.name}</span>
                        <span>{lang.level}</span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-brand"
                          style={{ width: `${lang.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90}>
                <div className="glass glass-hover grid h-full place-items-center rounded-3xl p-8 text-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-xs tracking-[0.15em] text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={360} className="sm:col-span-2">
              <div className="glass flex flex-wrap items-center gap-4 rounded-3xl p-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" /> M.Sc. AI @ BTU Cottbus
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary" /> Berlin, Germany
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
