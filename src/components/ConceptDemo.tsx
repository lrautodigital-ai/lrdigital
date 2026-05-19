import {
  BellRing,
  CalendarClock,
  CheckCircle2,
  MessageCircle,
  Send,
  Sparkles,
  TableProperties,
  UserCheck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const tabs = ["WhatsApp", "IA", "CRM", "Equipe", "Follow-up"];

const intelligence = [
  "intenção: agendamento",
  "prioridade: média/alta",
  "serviço: avaliação",
  "origem: WhatsApp",
];

const crm = ["contato criado", "status definido", "tarefa adicionada", "origem registrada"];

export function ConceptDemo() {
  return (
    <Reveal>
      <div className="glass-card rounded-[1.7rem] p-4 sm:p-6">
        <div className="mb-5 flex flex-wrap gap-2">
          {tabs.map((tab, index) => (
            <span
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                index === 0
                  ? "border-cyan-200/35 bg-cyan-200/12 text-cyan-50"
                  : "border-white/10 bg-white/[0.035] text-slate-400"
              }`}
              key={tab}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-[#07101D] p-5">
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="grid size-10 place-items-center rounded-full bg-emerald-300/10 text-emerald-100">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Mensagem recebida</p>
                <p className="text-xs text-slate-500">Canal: WhatsApp · tempo real</p>
              </div>
            </div>
            <div className="rounded-2xl rounded-tl-md border border-emerald-200/15 bg-emerald-300/[0.08] p-4 text-sm leading-7 text-emerald-50/90">
              Olá, gostaria de saber mais sobre avaliação.
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.06] p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-cyan-50">
                  <Sparkles className="size-4" aria-hidden="true" />
                  IA identifica
                </div>
                <div className="grid gap-2 text-xs text-slate-300">
                  {intelligence.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <TableProperties className="size-4 text-cyan-100" aria-hidden="true" />
                  CRM
                </div>
                <div className="grid gap-2 text-xs text-slate-300">
                  {crm.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <UserCheck className="size-4 text-cyan-100" aria-hidden="true" />
                Resumo para equipe
              </div>
              <p className="text-sm leading-7 text-slate-300">
                Lead quer avaliação, tem intenção de agendamento e deve receber retorno humano com prioridade média/alta.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200/15 bg-emerald-300/[0.06] p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-emerald-50">
                  <BellRing className="size-4" aria-hidden="true" />
                  Alerta enviado
                </div>
                <p className="text-xs leading-5 text-emerald-50/75">
                  Novo lead qualificado aguardando retorno.
                </p>
              </div>
              <div className="rounded-2xl border border-violet-200/15 bg-violet-300/[0.07] p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-violet-50">
                  <CalendarClock className="size-4" aria-hidden="true" />
                  Retomada em 24h
                </div>
                <p className="text-xs leading-5 text-violet-50/75">
                  Follow-up se não houver resposta.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-cyan-200/20 bg-cyan-200/[0.07] p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-cyan-50">
                <CheckCircle2 className="size-4" aria-hidden="true" />
                Próxima ação recomendada
              </div>
              <p className="text-sm leading-7 text-slate-300">
                Encaminhar para recepção/comercial com script de retorno, contexto do interesse e tarefa registrada no CRM.
              </p>
            </div>
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
