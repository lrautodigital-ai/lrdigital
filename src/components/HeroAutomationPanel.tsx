import { ArrowRight, Bell, CalendarClock, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const leads = [
  {
    name: "Mariana Costa",
    source: "WhatsApp",
    status: "Alta",
    intent: "Avaliação",
    color: "text-emerald-200 bg-emerald-300/10 border-emerald-200/20",
  },
  {
    name: "Grupo Atlas",
    source: "Site",
    status: "Média",
    intent: "Proposta B2B",
    color: "text-cyan-200 bg-cyan-300/10 border-cyan-200/20",
  },
  {
    name: "Lead portal",
    source: "Formulário",
    status: "Baixa",
    intent: "Dúvida inicial",
    color: "text-violet-200 bg-violet-300/10 border-violet-200/20",
  },
];

export function HeroAutomationPanel() {
  return (
    <Reveal delay={0.15} className="relative">
      <div className="absolute -left-8 top-12 hidden w-28 rounded-2xl border border-cyan-200/15 bg-cyan-200/10 p-3 text-xs text-cyan-50 shadow-glow backdrop-blur xl:block">
        <div className="mb-2 flex items-center gap-2">
          <Bell className="size-4" aria-hidden="true" />
          Alerta
        </div>
        Lead prioritário recebido
      </div>
      <div className="absolute -right-6 bottom-10 hidden w-36 rounded-2xl border border-violet-200/15 bg-violet-200/10 p-3 text-xs text-violet-50 shadow-glow backdrop-blur xl:block">
        <div className="mb-2 flex items-center gap-2">
          <CalendarClock className="size-4" aria-hidden="true" />
          Follow-up
        </div>
        Retomar em 24h
      </div>
      <div className="glass-card rounded-[1.7rem] p-3 sm:p-4">
        <div className="rounded-[1.35rem] border border-white/10 bg-[#07101D]/88 p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
                Operação comercial
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">Pipeline inteligente</h3>
            </div>
            <span className="rounded-full border border-emerald-200/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
              Ativo
            </span>
          </div>

          <div className="grid gap-3">
            {leads.map((lead) => (
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-200/25 hover:bg-white/[0.065]"
                key={lead.name}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="size-4 shrink-0 text-cyan-200" aria-hidden="true" />
                      <p className="truncate text-sm font-semibold text-white">{lead.name}</p>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Origem: {lead.source} · Intenção: {lead.intent}
                    </p>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${lead.color}`}>
                    {lead.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="my-4 flex items-center gap-2 text-cyan-100/70">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-200/30 to-cyan-200/10" />
            <Sparkles className="size-4" aria-hidden="true" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-violet-200/30 to-violet-200/10" />
          </div>

          <div className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.06] p-4">
            <div className="flex items-start gap-3">
              <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-cyan-200/10 text-cyan-100">
                <Sparkles className="size-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Resumo gerado para a equipe</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Lead interessado em avaliação, pediu retorno rápido e deve ser encaminhado para atendimento humano com prioridade média/alta.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                <CheckCircle2 className="size-4 text-emerald-200" aria-hidden="true" />
                CRM atualizado
              </div>
              <p className="text-xs leading-5 text-slate-400">
                Nome, origem, interesse, status e próxima ação registrados.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-semibold text-[#07101f] transition hover:bg-cyan-50"
              aria-label="Botão ilustrativo: enviar para equipe"
            >
              Enviar para equipe
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
