import {
  BellRing,
  BrainCircuit,
  CalendarClock,
  ClipboardCheck,
  MessageSquareText,
  Route,
  UsersRound,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    title: "Entrada",
    description: "WhatsApp, site, Instagram, anúncios e formulários.",
    icon: MessageSquareText,
  },
  {
    title: "Organização",
    description: "Origem, intenção, dados limpos e estágio do lead.",
    icon: Route,
  },
  {
    title: "IA",
    description: "Classificação de urgência, perfil e prioridade.",
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
  {
    title: "Follow-up",
    description: "Retomadas, lembretes e rastreabilidade.",
    icon: CalendarClock,
  },
];

const channels = [
  "WhatsApp",
  "Instagram",
  "Site",
  "Formulários",
  "Anúncios",
  "CRM",
  "E-mail",
  "Calendário",
];

export function AutomationFlowVisual() {
  return (
    <Reveal>
      <div className="glass-card rounded-[1.7rem] p-4 sm:p-6">
        <div className="relative">
          <div className="absolute left-7 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/35 to-cyan-200/0 lg:left-0 lg:right-0 lg:top-14 lg:block lg:h-px lg:w-auto" />
          <div className="grid gap-4 lg:grid-cols-6">
            {steps.map(({ title, description, icon: Icon }, index) => (
              <div className="relative h-full" key={title}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#07101D]/72 p-5 transition hover:border-cyan-200/30 hover:bg-white/[0.055]">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="grid size-12 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100 ring-1 ring-cyan-100/15">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-emerald-200/15 bg-emerald-300/[0.06] p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald-300/10 text-emerald-100">
                <BellRing className="size-5" aria-hidden="true" />
              </span>
              <p className="max-w-2xl text-sm leading-7 text-emerald-50/85">
                O acompanhamento funciona como camada contínua: alertas internos, retomadas, lembretes e histórico para reduzir falhas manuais.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {channels.map((channel) => (
                <span
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                  key={channel}
                >
                  {channel}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
