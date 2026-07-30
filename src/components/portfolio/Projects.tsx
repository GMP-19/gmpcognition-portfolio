import { CalendarDays, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const accentClass = {
  primary: "from-primary/30 to-transparent text-primary",
  secondary: "from-secondary/30 to-transparent text-secondary",
  accent: "from-accent/30 to-transparent text-accent",
};

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Selected <span className="text-gradient">Work</span>
            </>
          }
          description="Applied AI, computer vision and embedded systems projects."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 110}>
              <article className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                <div
                  className={`relative h-40 bg-gradient-to-br ${accentClass[project.accent]} overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(color-mix(in_oklab,var(--primary)_35%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklab,var(--primary)_35%,transparent)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <span className="absolute bottom-4 left-6 font-display text-2xl font-bold tracking-tight text-foreground transition-transform duration-500 group-hover:-translate-y-1">
                    {project.title}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm text-secondary">{project.subtitle}</p>
                  <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" /> {project.period}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
                    >
                      <Github className="h-4 w-4" /> View on GitHub
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
