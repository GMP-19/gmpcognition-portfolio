import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Eye,
  LayoutGrid,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { Reveal, useReveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  brain: Brain,
  eye: Eye,
  cpu: Cpu,
  cloud: Cloud,
  shield: Shield,
  chart: BarChart3,
  layout: LayoutGrid,
  users: Users,
};

function SkillCard({
  group,
  delay,
}: {
  group: (typeof skillGroups)[number];
  delay: number;
}) {
  const Icon = icons[group.icon] ?? Brain;
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="glass glass-hover group h-full rounded-3xl p-6">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/30 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold">{group.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-secondary/40 group-hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-brand transition-[width] duration-1000 ease-out"
            style={{ width: visible ? `${group.level}%` : "0%" }}
          />
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              Technical <span className="text-gradient">Toolbox</span>
            </>
          }
          description="From deep learning models to edge devices and secure cloud deployments."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} delay={(i % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
