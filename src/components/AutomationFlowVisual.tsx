import { ArrowRight, BrainCircuit, ClipboardCheck, MessageSquareText, Route, UsersRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Entrada",
    description: "WhatsApp, site, Instagram, anúncios ou formulários.",
    icon: MessageSquareText,
  },
  {
    title: "Organização",
    description: "Dados limpos, origem, intenção e estágio do lead.",
    icon: Route,
  },
  {
    title: "IA",
    description: "Classificação de interesse, urgência e prioridade.",
    icon: BrainCircuit,
  },
  {
    title: "CRM",
    description: "Registro, histórico, tarefa e distribuição.",
    icon: ClipboardCheck,
  },
  {
    title: "Equipe",
    description: "Handoff humano com resumo e próxima ação.",
    icon: UsersRound,
  },
];

export function AutomationFlowVisual() {
  return (
    <Reveal>
      <div className="glass-card rounded-[1.7rem] p-4 sm:p-5">
        <div className="grid gap-4 lg:grid-cols-5">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <div className="relative" key={title}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-cyan-200/10 text-cyan-100 ring-1 ring-cyan-100/15">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-full z-10 flex h-4 -translate-x-1/2 items-center text-cyan-100/60 lg:left-full lg:top-1/2 lg:h-auto lg:w-4 lg:-translate-y-1/2">
                  <ArrowRight className="hidden size-5 lg:block" aria-hidden="true" />
                  <span className="h-4 w-px bg-cyan-200/30 lg:hidden" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-emerald-200/15 bg-emerald-300/[0.06] p-4 text-sm leading-7 text-emerald-50/85">
          Follow-up e acompanhamento funcionam como camada contínua: retomadas, lembretes e rastreabilidade para reduzir falhas manuais.
        </div>
      </div>
    </Reveal>
  );
}
