import { Award, BadgeCheck, Trophy } from "lucide-react";
import { achievements, certifications } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Internships & Certifications"
          title={
            <>
              Verified <span className="text-gradient">Credentials</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
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
