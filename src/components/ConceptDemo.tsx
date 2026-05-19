import { BellRing, CalendarClock, MessageCircle, Send, Sparkles, TableProperties } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const demoSteps = [
  {
    title: "Lead entra pelo WhatsApp",
    body: "Olá, gostaria de saber mais sobre avaliação.",
    icon: MessageCircle,
  },
  {
    title: "IA identifica contexto",
    body: "Intenção: agendamento · Prioridade: média/alta · Serviço: avaliação.",
    icon: Sparkles,
  },
  {
    title: "CRM recebe o registro",
    body: "Nome, telefone, origem, interesse e status ficam organizados.",
    icon: TableProperties,
  },
  {
    title: "Equipe recebe alerta",
    body: "Novo lead qualificado aguardando retorno.",
    icon: BellRing,
  },
  {
    title: "Follow-up programado",
    body: "Retomar se não houver resposta em 24h.",
    icon: CalendarClock,
  },
];

export function ConceptDemo() {
  return (
    <Reveal>
      <div className="glass-card rounded-[1.7rem] p-4 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-[#07101D] p-5">
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="grid size-10 place-items-center rounded-full bg-emerald-300/10 text-emerald-100">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">WhatsApp</p>
                <p className="text-xs text-slate-500">Mensagem recebida agora</p>
              </div>
            </div>
            <div className="rounded-2xl rounded-tl-md border border-emerald-200/15 bg-emerald-300/[0.08] p-4 text-sm leading-7 text-emerald-50/90">
              Olá, gostaria de saber mais sobre avaliação.
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.06] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-cyan-50">
                <Sparkles className="size-4" aria-hidden="true" />
                Leitura inteligente
              </div>
              <div className="grid gap-2 text-xs text-slate-300">
                <span>Intenção: agendamento</span>
                <span>Prioridade: média/alta</span>
                <span>Origem: WhatsApp</span>
                <span>Serviço: avaliação</span>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {demoSteps.map(({ title, body, icon: Icon }, index) => (
              <div
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                key={title}
              >
                <div className="flex gap-4">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-cyan-100 ring-1 ring-white/10">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">{body}</p>
                  </div>
                </div>
                {index < demoSteps.length - 1 && (
                  <span className="absolute left-9 top-[3.7rem] h-4 w-px bg-cyan-200/25" />
                )}
              </div>
            ))}
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-[#07101f]">
              Oportunidade pronta para ação humana
              <Send className="size-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
