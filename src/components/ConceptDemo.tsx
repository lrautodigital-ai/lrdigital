"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BellRing,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Edit3,
  MailCheck,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  TableProperties,
  UserCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type DemoTabId = "whatsapp" | "ia" | "crm" | "equipe" | "followup";

type DemoTab = {
  id: DemoTabId;
  label: string;
  icon: LucideIcon;
};

const demoLead = {
  name: "Mariana Costa",
  channel: "WhatsApp",
  message: "Olá, gostaria de saber mais sobre avaliação.",
  intent: "Agendamento",
  service: "Avaliação",
  priority: "Média/Alta",
  source: "WhatsApp",
  summary:
    "Lead interessada em avaliação. Pediu retorno rápido e deve ser encaminhada para atendimento humano com prioridade média/alta.",
};

const tabs: DemoTab[] = [
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "ia", label: "IA", icon: BrainCircuit },
  { id: "crm", label: "CRM", icon: TableProperties },
  { id: "equipe", label: "Equipe", icon: UsersRound },
  { id: "followup", label: "Follow-up", icon: CalendarClock },
];

const tabOrder = tabs.map((tab) => tab.id);

const whatsappMeta = [
  ["Canal", "WhatsApp"],
  ["Origem", "Campanha / Site / Link direto"],
  ["Horário", "Agora"],
  ["Status", "Aguardando leitura inteligente"],
];

const captureSteps = [
  "Mensagem capturada",
  "Dados preparados para análise",
  "Fluxo iniciado",
  "Aguardando classificação da IA",
];

const aiAnalysis = [
  ["Intenção detectada", demoLead.intent],
  ["Serviço de interesse", demoLead.service],
  ["Prioridade", demoLead.priority],
  ["Urgência", "Retorno rápido"],
  ["Necessidade de humano", "Sim"],
  ["Confiança da análise", "Alta"],
];

const crmContact = [
  ["Nome", demoLead.name],
  ["Telefone", "+55 (xx) xxxxx-xxxx"],
  ["Canal", demoLead.channel],
  ["Origem", "Site"],
  ["Interesse", demoLead.service],
  ["Status", "Novo lead qualificado"],
];

const crmDeal = [
  ["Pipeline", "Atendimento inicial"],
  ["Etapa", "Aguardando retorno humano"],
  ["Prioridade", demoLead.priority],
  ["Responsável", "Recepção / Comercial"],
  ["Tarefa", "Retornar contato"],
  ["Prazo", "Hoje"],
];

const crmTimeline = [
  "Contato criado",
  "Interesse registrado",
  "Tarefa adicionada",
  "Alerta preparado",
  "Follow-up programado",
];

const kanbanColumns = [
  {
    title: "Novos",
    items: ["Mariana Costa — Avaliação — Média/Alta", "Lead portal — Dúvida inicial — Baixa"],
  },
  {
    title: "Em atendimento",
    items: ["Grupo Atlas — Proposta B2B — Alta"],
  },
  {
    title: "Aguardando retorno",
    items: ["Contato site — Orçamento — Média"],
  },
  {
    title: "Follow-up",
    items: ["Mariana Costa — Retomada em 24h"],
  },
];

const teamMembers = [
  { initials: "AN", name: "Ana", role: "Recepção", status: "Online", action: "Visualizando resumo" },
  { initials: "BR", name: "Bruno", role: "Comercial", status: "Em atendimento", action: "Preparando retorno" },
  { initials: "CA", name: "Carla", role: "Coordenação", status: "Revisando", action: "Validando prioridade" },
  { initials: "DI", name: "Diego", role: "Gestão", status: "Acompanhando", action: "Lendo indicadores" },
];

const handoffTags = ["Alerta enviado", "Tarefa criada", "Responsável definido", "Histórico disponível"];

const followRules = [
  "Se não responder em 24h → Retomada gentil",
  "Se responder com dúvida → Direcionar para atendimento humano",
  "Se demonstrar intenção de agendar → Criar tarefa para equipe",
  "Se não responder após segunda tentativa → Marcar como lead morno",
];

const followControl = [
  ["Follow-up 1", "Programado"],
  ["Follow-up 2", "Condicional"],
  ["Status", "Em acompanhamento"],
  ["Handoff", "Disponível a qualquer momento"],
];

function StatusBadge({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "emerald" | "violet" | "slate";
}) {
  const styles = {
    cyan: "border-cyan-200/20 bg-cyan-200/10 text-cyan-50",
    emerald: "border-emerald-200/20 bg-emerald-300/10 text-emerald-50",
    violet: "border-violet-200/20 bg-violet-300/10 text-violet-50",
    slate: "border-white/10 bg-white/[0.045] text-slate-300",
  };

  return (
    <span className={cn("inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold", styles[tone])}>
      {children}
    </span>
  );
}

function DemoCard({
  title,
  icon: Icon,
  children,
  className,
  subtitle,
}: {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
  subtitle?: string;
}) {
  return (
    <article className={cn("rounded-3xl border border-white/10 bg-[#07101D]/82 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.06)]", className)}>
      <div className="mb-5 flex items-start gap-3 border-b border-white/10 pb-4">
        {Icon && (
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-cyan-200/10 text-cyan-100 ring-1 ring-white/10">
            <Icon className="size-5" aria-hidden="true" />
          </span>
        )}
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          {subtitle && <p className="mt-1 text-xs leading-5 text-slate-500">{subtitle}</p>}
        </div>
      </div>
      {children}
    </article>
  );
}

function FieldList({ fields }: { fields: string[][] }) {
  return (
    <div className="grid gap-2">
      {fields.map(([label, value], index) => (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm"
          initial={{ opacity: 0, y: 8 }}
          key={label}
          transition={{ delay: index * 0.04, duration: 0.28 }}
        >
          <span className="text-slate-500">{label}</span>
          <span className="text-right font-semibold text-slate-100">{value}</span>
        </motion.div>
      ))}
    </div>
  );
}

function AnimatedTypingText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <p className="text-sm leading-7 text-slate-200">
      {words.map((word, index) => (
        <motion.span
          animate={{ opacity: 1, y: 0 }}
          className="inline-block"
          initial={{ opacity: 0, y: 5 }}
          key={`${word}-${index}`}
          transition={{ delay: index * 0.035, duration: 0.18 }}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        className="ml-1 inline-block text-cyan-100"
        transition={{ duration: 0.85, repeat: Infinity }}
      >
        |
      </motion.span>
    </p>
  );
}

function FlowConnector({
  activeTab,
  setActiveTab,
}: {
  activeTab: DemoTabId;
  setActiveTab: (tab: DemoTabId) => void;
}) {
  const activeIndex = tabOrder.indexOf(activeTab);

  return (
    <div className="overflow-x-auto pb-1">
      <div className="grid min-w-[680px] grid-cols-5 gap-2">
        {tabs.map(({ id, label, icon: Icon }, index) => {
          const isActive = id === activeTab;
          const isDone = index < activeIndex;

          return (
            <button
              aria-label={`Ir para etapa ${label}`}
              className={cn(
                "group relative flex items-center gap-2 rounded-2xl border px-3 py-3 text-left text-xs font-semibold transition",
                isActive
                  ? "border-cyan-200/45 bg-cyan-200/12 text-cyan-50 shadow-[0_0_34px_rgba(34,211,238,.12)]"
                  : isDone
                    ? "border-emerald-200/20 bg-emerald-300/[0.055] text-emerald-50/85"
                    : "border-white/10 bg-white/[0.035] text-slate-400 hover:border-cyan-200/25 hover:text-slate-100",
              )}
              key={id}
              onClick={() => setActiveTab(id)}
              type="button"
            >
              <span className={cn("grid size-8 shrink-0 place-items-center rounded-xl ring-1 ring-white/10", isActive ? "bg-cyan-200/15 text-cyan-50" : "bg-white/[0.04]")}>
                {isDone ? <CheckCircle2 className="size-4" aria-hidden="true" /> : <Icon className="size-4" aria-hidden="true" />}
              </span>
              <span>{label}</span>
              {index < tabs.length - 1 && (
                <ChevronRight className="absolute -right-3 top-1/2 hidden size-4 -translate-y-1/2 text-cyan-100/35 md:block" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DemoTabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: DemoTabId;
  setActiveTab: (tab: DemoTabId) => void;
}) {
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const currentIndex = tabOrder.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabOrder.length;
    const previousIndex = (currentIndex - 1 + tabOrder.length) % tabOrder.length;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveTab(tabOrder[nextIndex]);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveTab(tabOrder[previousIndex]);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setActiveTab(tabOrder[0]);
    }
    if (event.key === "End") {
      event.preventDefault();
      setActiveTab(tabOrder[tabOrder.length - 1]);
    }
  }

  return (
    <div className="overflow-x-auto pb-2" onKeyDown={handleKeyDown} role="tablist" aria-label="Etapas da demo conceitual">
      <div className="flex min-w-max gap-2">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;

          return (
            <button
              aria-controls={`demo-panel-${id}`}
              aria-selected={isActive}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200",
                isActive
                  ? "border-cyan-200/45 bg-cyan-200/12 text-white"
                  : "border-white/10 bg-white/[0.035] text-slate-400 hover:border-cyan-200/25 hover:text-slate-100",
              )}
              id={`demo-tab-${id}`}
              key={id}
              onClick={() => setActiveTab(id)}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function WhatsAppDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
      <DemoCard title="Mensagem recebida" subtitle="Canal: WhatsApp · tempo real" icon={MessageCircle}>
        <div className="rounded-2xl rounded-tl-md border border-emerald-200/20 bg-emerald-300/[0.08] p-4 text-sm leading-7 text-emerald-50/90 shadow-[0_0_35px_rgba(16,185,129,.08)]">
          {demoLead.message}
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-50">
          <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(16,185,129,.75)]" />
          Novo contato identificado
        </div>
        <div className="mt-5">
          <FieldList fields={whatsappMeta} />
        </div>
      </DemoCard>

      <div className="grid gap-4">
        <DemoCard title="Próximos passos" subtitle="Preparação do dado antes da IA" icon={Send}>
          <div className="grid gap-3">
            {captureSteps.map((step, index) => (
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-slate-200"
                initial={{ opacity: 0, x: 12 }}
                key={step}
                transition={{ delay: index * 0.06, duration: 0.3 }}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-cyan-200/10 text-cyan-100">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                </span>
                {step}
              </motion.div>
            ))}
          </div>
        </DemoCard>
        <p className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.06] p-4 text-sm leading-7 text-slate-300">
          Tudo começa no canal onde o cliente já fala com a empresa. A automação captura o contato, identifica a origem e prepara os dados para a próxima etapa.
        </p>
      </div>
    </div>
  );
}

function AIDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
      <DemoCard title="Leitura inteligente" subtitle="IA aplicada com contexto operacional" icon={BrainCircuit}>
        <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-300">
          {demoLead.message}
        </div>
        <FieldList fields={aiAnalysis} />
      </DemoCard>

      <div className="grid gap-4">
        <DemoCard title="Resposta sugerida pela IA" subtitle="Exemplo demonstrativo, com revisão humana" icon={Sparkles}>
          <AnimatedTypingText text="Olá, Mariana! Podemos te ajudar com a avaliação. Para te direcionar melhor, você prefere atendimento ainda essa semana ou gostaria de receber primeiro algumas informações sobre o procedimento?" />
          <div className="mt-5 flex flex-wrap gap-2">
            <StatusBadge tone="cyan">Aprovar resposta</StatusBadge>
            <StatusBadge tone="slate">
              <Edit3 className="size-3.5" aria-hidden="true" />
              Editar antes de enviar
            </StatusBadge>
            <StatusBadge tone="violet">Encaminhar para humano</StatusBadge>
          </div>
        </DemoCard>
        <DemoCard title="Resumo para equipe" icon={UserCheck}>
          <p className="text-sm leading-7 text-slate-300">
            Lead interessada em avaliação, pediu retorno rápido e deve ser direcionada para recepção/comercial com prioridade média/alta.
          </p>
          <div className="mt-4">
            <StatusBadge tone="emerald">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              IA com contexto, regras e supervisão humana.
            </StatusBadge>
          </div>
        </DemoCard>
      </div>
    </div>
  );
}

function CRMDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DemoCard title="Contato" subtitle="Cadastro criado a partir do lead" icon={TableProperties}>
        <FieldList fields={crmContact} />
      </DemoCard>
      <DemoCard title="Negócio / Oportunidade" subtitle="Próxima ação definida para a equipe" icon={MailCheck}>
        <FieldList fields={crmDeal} />
      </DemoCard>
      <DemoCard className="lg:col-span-2" title="CRM atualizado" subtitle="Linha do tempo da automação" icon={CheckCircle2}>
        <div className="grid gap-3 sm:grid-cols-5">
          {crmTimeline.map((step, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.055] p-4 text-center text-xs font-semibold text-cyan-50"
              initial={{ opacity: 0, y: 8 }}
              key={step}
              transition={{ delay: index * 0.07, duration: 0.28 }}
            >
              <CheckCircle2 className="mx-auto mb-3 size-5" aria-hidden="true" />
              {step}
            </motion.div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          O contato deixa de ficar perdido na conversa e passa a ter registro, origem, interesse, status, responsável e próxima ação definidos.
        </p>
      </DemoCard>
    </div>
  );
}

function TeamDemo() {
  return (
    <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
      <DemoCard title="Painel da equipe" subtitle="Oportunidade distribuída com contexto para a pessoa certa." icon={UsersRound}>
        <div className="grid gap-3 md:grid-cols-4">
          {kanbanColumns.map((column) => (
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-3" key={column.title}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/70">{column.title}</h4>
              <div className="grid gap-2">
                {column.items.map((item) => (
                  <div className="rounded-xl border border-white/10 bg-[#08111F] p-3 text-xs leading-5 text-slate-300" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DemoCard>

      <div className="grid gap-4">
        <DemoCard title="Equipe em operação" subtitle="Sessões e ações no fluxo" icon={UserCheck}>
          <div className="grid gap-3">
            {teamMembers.map((member) => (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3" key={member.name}>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-cyan-200/10 text-xs font-bold text-cyan-50 ring-1 ring-white/10">
                  {member.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                    <StatusBadge tone={member.status === "Online" ? "emerald" : "slate"}>{member.status}</StatusBadge>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    {member.role} · {member.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </DemoCard>
        <DemoCard title="Handoff para humano" icon={BellRing}>
          <p className="text-sm leading-7 text-slate-300">
            Lead enviado para recepção/comercial com resumo, contexto do interesse e próxima ação recomendada.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {handoffTags.map((tag) => (
              <StatusBadge tone="cyan" key={tag}>{tag}</StatusBadge>
            ))}
          </div>
        </DemoCard>
      </div>
    </div>
  );
}

function FollowUpDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
      <DemoCard title="Linha de acompanhamento" subtitle="Retomadas com contexto e timing" icon={CalendarClock}>
        <div className="relative grid gap-4 pl-5 before:absolute before:left-1 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-200/0 before:via-cyan-200/40 before:to-cyan-200/0">
          {[
            { label: "Mensagem inicial", text: demoLead.message, tone: "emerald" as const },
            {
              label: "Resposta sugerida/enviada",
              text: "Olá, Mariana! Podemos te ajudar com a avaliação. Você prefere agendar um horário ou receber algumas informações primeiro?",
              tone: "cyan" as const,
            },
            { label: "Status", text: "Sem resposta após 24h", tone: "slate" as const },
            {
              label: "Follow-up",
              text: "Oi, Mariana! Passando para saber se você ainda gostaria de seguir com a avaliação. Posso te ajudar a encontrar o melhor horário?",
              tone: "violet" as const,
            },
          ].map((item, index) => (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="relative"
              initial={{ opacity: 0, x: -10 }}
              key={item.label}
              transition={{ delay: index * 0.08, duration: 0.32 }}
            >
              <span className="absolute -left-[1.42rem] top-3 size-2.5 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(34,211,238,.8)]" />
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <StatusBadge tone={item.tone}>{item.label}</StatusBadge>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </DemoCard>

      <div className="grid gap-4">
        <DemoCard title="Regras de acompanhamento" subtitle="Fluxos condicionais e supervisionados" icon={Clock3}>
          <div className="grid gap-3">
            {followRules.map((rule) => (
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-300" key={rule}>
                {rule}
              </div>
            ))}
          </div>
        </DemoCard>
        <DemoCard title="Controle" icon={ShieldCheck}>
          <FieldList fields={followControl} />
        </DemoCard>
        <p className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.06] p-4 text-sm leading-7 text-slate-300">
          O follow-up mantém a oportunidade viva sem depender apenas da memória manual da equipe, respeitando contexto, timing e necessidade de atendimento humano.
        </p>
      </div>
    </div>
  );
}

function ActiveDemo({ activeTab }: { activeTab: DemoTabId }) {
  if (activeTab === "whatsapp") return <WhatsAppDemo />;
  if (activeTab === "ia") return <AIDemo />;
  if (activeTab === "crm") return <CRMDemo />;
  if (activeTab === "equipe") return <TeamDemo />;
  return <FollowUpDemo />;
}

export function ConceptDemo() {
  const [activeTab, setActiveTab] = useState<DemoTabId>("whatsapp");

  return (
    <Reveal>
      <div className="glass-card rounded-[1.7rem] p-4 sm:p-6 lg:p-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,.13),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,.12),transparent_34%)]" />
        <div className="relative">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <StatusBadge tone="cyan">Representação visual da operação</StatusBadge>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                Esta é uma representação visual. Os fluxos reais são desenhados conforme canais, equipe, ferramentas e regras de cada empresa.
              </p>
            </div>
            <StatusBadge tone="emerald">
              <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(16,185,129,.75)]" />
              Demo conceitual do fluxo
            </StatusBadge>
          </div>

          <DemoTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="my-5">
            <FlowConnector activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              aria-labelledby={`demo-tab-${activeTab}`}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              id={`demo-panel-${activeTab}`}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              key={activeTab}
              role="tabpanel"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <ActiveDemo activeTab={activeTab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}
