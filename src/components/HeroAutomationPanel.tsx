import {
  ArrowRight,
  BellRing,
  CalendarClock,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const leads = [
  {
    label: "Lead recebido",
    value: "Mariana Costa",
    meta: "Origem: WhatsApp · Intenção: Avaliação",
    status: "Prioridade: Alta",
  },
  {
    label: "IA gerou resumo",
    value: "Resumo gerado",
    meta: "Urgência alta · precisa de humano",
    status: "Pronto",
  },
  {
    label: "CRM",
    value: "CRM atualizado",
    meta: "Contato, origem, interesse e tarefa",
    status: "Sync",
  },
];

const metrics = ["Triagem inteligente", "CRM atualizado", "Follow-up ativo"];

const workflowStatus = [
  { label: "Equipe notificada", icon: BellRing },
  { label: "Follow-up programado", icon: CalendarClock },
  { label: "Handoff humano pronto", icon: UserCheck },
];

export function HeroAutomationPanel() {
  return (
    <Reveal delay={0.12} className="relative">
      <div className="glass-card rounded-[1.6rem] p-3 sm:p-4">
        <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#07101D]/95 p-4 sm:p-5">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
                Visual conceitual
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                Central de Operação Comercial
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Modelo de operação implementado com canais, IA, CRM e equipe.
              </p>
            </div>
            <span className="animate-pulse rounded-full border border-emerald-200/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
              Em fluxo
            </span>
          </div>
          <div className="relative mb-5 h-px overflow-hidden bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent">
            <span className="animate-flow-line absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />
          </div>

          <div className="grid gap-3">
            {leads.map((lead, index) => (
              <div
                className="relative rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-cyan-200/30 hover:bg-white/[0.065]"
                key={lead.label}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-cyan-200/10 text-cyan-100 ring-1 ring-cyan-100/15">
                        {index === 0 ? (
                          <MessageCircle className="size-4" aria-hidden="true" />
                        ) : index === 1 ? (
                          <Sparkles className="size-4" aria-hidden="true" />
                        ) : (
                          <CheckCircle2 className="size-4" aria-hidden="true" />
                        )}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {lead.label}
                      </p>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white">{lead.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{lead.meta}</p>
                  </div>
                  <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-100">
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="my-4 grid grid-cols-3 gap-2">
            {metrics.map((metric) => (
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-center text-[11px] font-semibold text-slate-200"
                key={metric}
              >
                {metric}
              </div>
            ))}
          </div>

          <div className="mb-4 grid gap-2 sm:grid-cols-3">
            {workflowStatus.map(({ label, icon: Icon }) => (
              <div
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] font-semibold text-slate-200"
                key={label}
              >
                <span className="size-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(34,211,238,.75)]" />
                <Icon className="size-3.5 shrink-0 text-cyan-100" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
            <div className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.06] p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                <UserCheck className="size-4 text-cyan-100" aria-hidden="true" />
                Handoff humano pronto
              </div>
              <p className="text-sm leading-6 text-slate-300">
                Resumo, prioridade, origem e próxima ação ficam disponíveis antes da equipe assumir.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-semibold text-[#07101f] transition hover:bg-cyan-50"
              aria-label="Botão ilustrativo: encaminhar oportunidade"
            >
              Encaminhar oportunidade
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
