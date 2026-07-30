import { Award, BadgeCheck, Brain, Briefcase, ChartColumn, Cloud, Code, ExternalLink, Trophy } from "lucide-react";
import { achievements, certificationGroups, internships } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  cloud: Cloud,
  code: Code,
  chart: ChartColumn,
  briefcase: Briefcase,
};

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Certifications & Workshops"
          title={
            <>
              Verified <span className="text-gradient">Credentials</span>
            </>
          }
        />

        {/* Internships */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {internships.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 100}>
              <div className="glass glass-hover relative h-full overflow-hidden rounded-3xl p-6">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
                <div className="relative">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-secondary/40 text-secondary">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{cert.title}</h3>
                  <p className="mt-1 text-sm text-secondary">{cert.issuers.join(" • ")}</p>
                  {cert.period && (
                    <p className="mt-1 text-xs text-muted-foreground">{cert.period}</p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certification groups */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {certificationGroups.map((group, gi) => {
            const Icon = categoryIcons[group.icon] || BadgeCheck;
            return (
              <Reveal key={group.title} delay={gi * 100}>
                <div className="glass relative overflow-hidden rounded-3xl p-6">
                  <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                    </div>
                    <ul className="mt-6 space-y-4">
                      {group.items.map((item, ii) => (
                        <li
                          key={`${item.title}-${ii}`}
                          className="group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-colors hover:border-border/60 hover:bg-muted/30"
                        >
                          <Award className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-medium text-foreground">{item.title}</span>
                              <span className="text-xs text-muted-foreground">— {item.issuer}</span>
                            </div>
                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                              {item.date && <span>{item.date}</span>}
                              {item.validity && (
                                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-secondary">
                                  Valid: {item.validity}
                                </span>
                              )}
                              {item.certNo && (
                                <span className="truncate">Cert: {item.certNo}</span>
                              )}
                            </div>
                            {item.tasks && item.tasks.length > 0 && (
                              <p className="mt-1 text-xs text-muted-foreground">
                                Tasks: {item.tasks.join(", ")}
                              </p>
                            )}
                          </div>
                          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Recognition & <span className="text-gradient">Badges</span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="glass glass-hover h-full rounded-3xl p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-brand">
                  {i % 2 === 0 ? (
                    <Trophy className="h-6 w-6" />
                  ) : (
                    <Award className="h-6 w-6" />
                  )}
                </span>
                <h3 className="mt-4 font-display text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
