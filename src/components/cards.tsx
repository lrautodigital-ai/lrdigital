import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
};

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass-card h-full rounded-2xl p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan-200/35">
        <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/10 text-cyan-100">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </article>
    </Reveal>
  );
}

type SolutionCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: string;
  tags?: string[];
  featured?: boolean;
  delay?: number;
};

export function SolutionCard({
  icon: Icon,
  title,
  description,
  index,
  tags = [],
  featured = false,
  delay = 0,
}: SolutionCardProps) {
  return (
    <Reveal delay={delay} className={cn("h-full", featured && "md:col-span-2")}>
      <article
        className={cn(
          "group glass-card flex h-full flex-col rounded-2xl p-6 transition duration-200 hover:-translate-y-1",
          featured ? "border-cyan-200/35 bg-cyan-200/[0.065]" : "hover:border-violet-200/35",
        )}
      >
        <div className="mb-7 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold tracking-[0.24em] text-slate-500">{index}</span>
          <span className="grid size-11 place-items-center rounded-xl bg-white/[0.05] text-cyan-100 ring-1 ring-white/10 transition group-hover:text-white">
            <Icon className="size-5" aria-hidden="true" />
          </span>
        </div>
        <h3 className="text-xl font-semibold leading-snug text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
        {tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Reveal>
  );
}

type UseCaseCardProps = {
  icon: LucideIcon;
  title: string;
  pain: string;
  action: string;
  examples: string[];
  delay?: number;
};

export function UseCaseCard({
  icon: Icon,
  title,
  pain,
  action,
  examples,
  delay = 0,
}: UseCaseCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass-card flex h-full flex-col rounded-2xl p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-200/35">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-300/20 to-violet-300/10 text-cyan-100 ring-1 ring-white/10">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="grid gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Dor operacional
            </p>
            <p className="text-sm leading-7 text-slate-300">{pain}</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/70">
              Como atuamos
            </p>
            <p className="text-sm leading-7 text-slate-300">{action}</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {examples.map((example) => (
            <span
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
              key={example}
            >
              {example}
            </span>
          ))}
        </div>
        <Button href="#contato" variant="secondary" size="sm" className="mt-6 w-fit">
          Ver fluxo recomendado
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </article>
    </Reveal>
  );
}

type MetricCardProps = {
  title: string;
  description: string;
  delay?: number;
};

export function MetricCard({ title, description, delay = 0 }: MetricCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-200 hover:border-cyan-200/30 hover:bg-white/[0.055]">
        <div className="mb-4 flex size-8 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-100">
          <Check className="size-4" aria-hidden="true" />
        </div>
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      </article>
    </Reveal>
  );
}

type ProcessStepProps = {
  index: string;
  title: string;
  description: string;
  status: string;
  icon: LucideIcon;
  delay?: number;
  className?: string;
};

export function ProcessStep({
  index,
  title,
  description,
  status,
  icon: Icon,
  delay = 0,
  className,
}: ProcessStepProps) {
  return (
    <Reveal delay={delay} className={cn("relative h-full", className)}>
      <article className="glass-card flex h-full flex-col rounded-2xl p-5">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-cyan-100">{index}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
            {status}
          </span>
        </div>
        <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-white/[0.05] text-cyan-100 ring-1 ring-white/10">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </article>
    </Reveal>
  );
}
