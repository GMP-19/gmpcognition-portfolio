import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              Academic <span className="text-gradient">Journey</span>
            </>
          }
        />

        <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 120}>
              <li className="relative">
                <span className="glow-ring absolute -left-[2.55rem] top-6 grid h-8 w-8 place-items-center rounded-full bg-background text-secondary">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div className="glass glass-hover rounded-3xl p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-semibold">{item.degree}</h3>
                      <p className="mt-1 text-sm text-secondary">{item.school}</p>
                      <p className="text-xs text-muted-foreground">{item.place}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-primary/40 px-3 py-1 text-xs text-primary">
                      {item.period}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.subjects.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Professional <span className="text-gradient">Experience</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {experience.map((item, i) => (
            <Reveal key={item.company} delay={i * 120}>
              <div className="glass glass-hover h-full rounded-3xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand">
                  <Briefcase className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 text-sm text-secondary">
                  {item.company}
                  {item.place ? ` • ${item.place}` : ""}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{item.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
