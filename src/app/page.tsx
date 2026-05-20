import {
  ArrowRight,
  BellRing,
  Boxes,
  BrainCircuit,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  DatabaseZap,
  FileCheck2,
  GraduationCap,
  Handshake,
  HeartPulse,
  History,
  Layers3,
  LineChart,
  LockKeyhole,
  Network,
  Radar,
  RefreshCcw,
  Route,
  Shield,
  ShieldCheck,
  Sparkles,
  Split,
  Stethoscope,
  Target,
  TimerReset,
  UserCheck,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";
import { AnimatedGradientBackground } from "@/components/AnimatedGradientBackground";
import { AutomationFlowVisual } from "@/components/AutomationFlowVisual";
import { ConceptDemo } from "@/components/ConceptDemo";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroAutomationPanel } from "@/components/HeroAutomationPanel";
import { IntegrationGrid } from "@/components/IntegrationGrid";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { FeatureCard, MetricCard, ProcessStep, SolutionCard, UseCaseCard } from "@/components/cards";
import { DIAGNOSTIC_URL } from "@/lib/contact";

const heroIndicators = [
  { label: "Triagem inteligente", detail: "intenção e prioridade" },
  { label: "CRM atualizado", detail: "histórico e tarefas" },
  { label: "Follow-up estruturado", detail: "retomadas e alertas" },
];

const journeySteps = [
  { icon: Split, title: "Captura", description: "canais digitais" },
  { icon: BrainCircuit, title: "Triagem", description: "IA com contexto" },
  { icon: DatabaseZap, title: "Registro", description: "CRM e histórico" },
  { icon: UsersRound, title: "Distribuição", description: "equipe certa" },
  { icon: RefreshCcw, title: "Follow-up", description: "rastreabilidade" },
];

const problemCards = [
  {
    icon: Network,
    title: "Canais dispersos",
    description: "WhatsApp, site, Instagram, formulários e anúncios sem visão única.",
  },
  {
    icon: TimerReset,
    title: "Atendimento sem prioridade",
    description: "Oportunidades urgentes competem com contatos frios no mesmo fluxo.",
  },
  {
    icon: History,
    title: "CRM incompleto",
    description: "Histórico, origem e próxima ação ficam dependentes de registro manual.",
  },
  {
    icon: BellRing,
    title: "Follow-up inconsistente",
    description: "Retomadas importantes acontecem tarde ou simplesmente não acontecem.",
  },
];

const ecosystem = [
  {
    icon: Boxes,
    title: "LeadOps IA",
    description:
      "Recebe contatos de múltiplos canais, organiza dados e transforma mensagens soltas em oportunidades estruturadas.",
    tags: ["WhatsApp", "Site", "LeadOps"],
    featured: true,
  },
  {
    icon: BrainCircuit,
    title: "Triagem Inteligente",
    description:
      "Classifica intenção, urgência, perfil, serviço de interesse e prioridade antes do atendimento humano.",
    tags: ["IA", "Prioridade", "Contexto"],
  },
  {
    icon: DatabaseZap,
    title: "CRM Sync",
    description:
      "Registra contatos, negócios, tarefas e histórico em CRM, planilhas ou sistemas já utilizados pela empresa.",
    tags: ["CRM", "Planilhas", "Histórico"],
  },
  {
    icon: RefreshCcw,
    title: "Follow-up Engine",
    description:
      "Cria lembretes e retomadas automáticas para leads que não responderam, oportunidades mornas e negociações em andamento.",
    tags: ["Follow-up", "Lembretes", "Cadência"],
  },
  {
    icon: UserCheck,
    title: "Handoff Hub",
    description:
      "Entrega para a equipe um resumo claro do atendimento, com contexto, próxima ação e informações importantes.",
    tags: ["Equipe", "Resumo", "Humano"],
  },
  {
    icon: BellRing,
    title: "Alertas Operacionais",
    description:
      "Notifica recepção, vendas, gestão ou responsáveis quando uma oportunidade relevante entra no fluxo.",
    tags: ["Alertas", "Gestão", "Vendas"],
  },
  {
    icon: UserCheck,
    title: "Atendimento Assistido",
    description:
      "Apoia a equipe com informações organizadas, respostas orientadas e histórico acessível.",
    tags: ["Equipe", "Contexto", "Histórico"],
  },
  {
    icon: LineChart,
    title: "Rastreabilidade Comercial",
    description:
      "Permite acompanhar origem, status, prioridade, evolução e pontos de perda no atendimento.",
    tags: ["Rastreabilidade", "Status", "Gestão"],
  },
];

const useCases = [
  {
    icon: HeartPulse,
    title: "Clínicas e saúde particular",
    pain:
      "Pacientes chegam com dúvidas, pedem avaliação, somem antes do agendamento e exigem atendimento cuidadoso.",
    action:
      "Estruturamos triagem por procedimento, resumo para recepção, encaminhamento por especialidade e follow-up de avaliação.",
    examples: ["procedimento", "agendamento", "recepção", "avaliação", "especialidade"],
  },
  {
    icon: Building2,
    title: "Imobiliárias e incorporadoras",
    pain:
      "Leads chegam de portais, WhatsApp, site e anúncios, misturando compradores, locatários, proprietários e investidores.",
    action:
      "Organizamos intenção, faixa de valor, bairro, tipo de imóvel, proprietário anunciante e follow-up por estágio.",
    examples: ["compra", "locação", "bairro", "faixa de valor", "proprietário"],
  },
  {
    icon: GraduationCap,
    title: "Educação e cursos",
    pain:
      "Interessados perguntam sobre preço, matrícula, turmas e bolsas, mas nem todos estão prontos para decidir.",
    action:
      "Desenhamos triagem de interesse, agendamento de visita, nutrição, lembretes de matrícula e distribuição comercial.",
    examples: ["matrícula", "turmas", "bolsas", "visita", "nutrição"],
  },
  {
    icon: Stethoscope,
    title: "Serviços consultivos B2B",
    pain: "Leads precisam ser qualificados antes da reunião e acompanhados até a proposta.",
    action:
      "Criamos briefing inicial, qualificação, priorização, CRM, alerta para comercial e acompanhamento até a decisão.",
    examples: ["briefing", "qualificação", "priorização", "CRM", "proposta"],
  },
];

const genericAutomation = [
  "Respostas prontas",
  "Fluxos engessados",
  "Sem contexto",
  "Pouca adaptação ao negócio",
  "Risco de atendimento mecânico",
];

const lrApproach = [
  "Diagnóstico do processo",
  "IA com contexto do negócio",
  "Fluxos sob medida",
  "Integração com canais e CRM",
  "Handoff humano com resumo",
  "Follow-up estruturado",
  "Limites claros para a IA",
];

const beforeItems = [
  "Leads espalhados",
  "Atendimento manual",
  "Pouco contexto",
  "Follow-up esquecido",
  "CRM desatualizado",
  "Equipe reagindo sem prioridade",
];

const afterItems = [
  "Entrada centralizada",
  "Triagem inteligente",
  "Resumo para equipe",
  "CRM atualizado",
  "Alertas por prioridade",
  "Follow-up estruturado",
];

const methodologyBlocks = [
  {
    icon: Network,
    title: "Mapa de canais",
    description: "Identificação das entradas, origens, formulários, campanhas e pontos de contato.",
  },
  {
    icon: BrainCircuit,
    title: "Matriz de intenção",
    description: "Classificação do que cada contato quer, do que precisa e do caminho adequado.",
  },
  {
    icon: Target,
    title: "Critérios de prioridade",
    description: "Regras para diferenciar oportunidades urgentes, estratégicas, mornas e frias.",
  },
  {
    icon: UserCheck,
    title: "Regras de handoff",
    description: "Definição de quando a IA organiza e quando a equipe humana precisa assumir.",
  },
  {
    icon: FileCheck2,
    title: "Documentação do fluxo",
    description: "Registro de mensagens, campos, integrações, exceções e próximos passos.",
  },
  {
    icon: ClipboardCheck,
    title: "Testes com cenários reais",
    description: "Validação com situações do atendimento antes da ativação da operação.",
  },
];

const processSteps = [
  {
    icon: Target,
    title: "Diagnóstico",
    status: "Diagnóstico",
    description:
      "Mapeamos canais, equipe, ferramentas, gargalos, volume de contatos e pontos de perda.",
  },
  {
    icon: Workflow,
    title: "Arquitetura do fluxo",
    status: "Arquitetura",
    description:
      "Desenhamos entradas, regras, classificações, mensagens, CRM, alertas, exceções, documentação do fluxo e handoff.",
  },
  {
    icon: Layers3,
    title: "Implementação",
    status: "Configuração",
    description:
      "Configuramos integrações, automações, IA, CRM, formulários, notificações e rotinas de follow-up.",
  },
  {
    icon: FileCheck2,
    title: "Testes e validação",
    status: "Validação",
    description:
      "Simulamos cenários reais, ajustamos linguagem, prioridades, exceções e limites da IA.",
  },
  {
    icon: CalendarCheck,
    title: "Ativação e acompanhamento",
    status: "Ativação",
    description:
      "Publicamos o fluxo, monitoramos funcionamento e evoluímos a estrutura conforme a operação cresce.",
  },
];

const resultCards = [
  {
    title: "Tempo de resposta",
    description: "Ajuda a dar clareza sobre quem precisa de retorno e qual ação vem primeiro.",
  },
  {
    title: "Controle dos leads",
    description: "Origem, status, histórico e prioridade deixam de depender de memória individual.",
  },
  {
    title: "Produtividade da equipe",
    description: "Atendentes e vendedores recebem contexto para agir com menos retrabalho.",
  },
  {
    title: "Qualidade da triagem",
    description: "Oportunidades chegam mais organizadas e com sinais de intenção mais claros.",
  },
  {
    title: "Acompanhamento comercial",
    description: "Follow-ups ganham cadência e ficam visíveis para gestão e equipe.",
  },
  {
    title: "Experiência do cliente",
    description: "O atendimento tende a ficar mais rápido, consistente e contextualizado.",
  },
  {
    title: "Oportunidades esquecidas",
    description: "Lembretes e registros ajudam a reduzir falhas manuais no retorno.",
  },
  {
    title: "Clareza para gestores",
    description: "A operação passa a ter mais rastreabilidade para decisões comerciais.",
  },
];

const plans = [
  {
    title: "Essencial",
    description: "Para empresas que precisam organizar a entrada principal de contatos.",
    items: [
      "1 canal principal de captação",
      "validação e organização básica",
      "registro em CRM/planilha",
      "alerta interno",
      "resposta inicial simples",
      "fluxo de follow-up básico",
    ],
  },
  {
    title: "Premium",
    description:
      "Para operações que recebem contatos de vários canais e precisam de triagem mais inteligente.",
    items: [
      "múltiplos canais",
      "classificação com IA",
      "CRM estruturado",
      "alertas por prioridade",
      "handoff com resumo",
      "follow-up automatizado",
      "regras por tipo de lead",
    ],
    highlighted: true,
  },
  {
    title: "Max",
    description:
      "Para empresas com operação mais robusta e necessidade de automação avançada.",
    items: [
      "fluxos personalizados por setor",
      "integrações avançadas",
      "IA com contexto mais profundo",
      "múltiplas equipes/canais",
      "relatórios e rastreabilidade",
      "otimizações contínuas",
      "arquitetura escalável",
    ],
  },
];

const securityItems = [
  {
    icon: ShieldCheck,
    title: "Supervisão humana",
    description: "Decisões sensíveis podem ser encaminhadas para pessoas com contexto preservado.",
  },
  {
    icon: LockKeyhole,
    title: "Regras e limites",
    description: "Fluxos operam com critérios definidos, exceções claras e caminhos seguros.",
  },
  {
    icon: Route,
    title: "Privacidade por desenho",
    description: "Dados e mensagens seguem lógica de cuidado, necessidade e rastreabilidade.",
  },
  {
    icon: Shield,
    title: "Boas práticas de LGPD",
    description: "A estrutura pode seguir boas práticas de LGPD, sem prometer certificações inexistentes.",
  },
  {
    icon: Handshake,
    title: "Handoff seguro",
    description: "A equipe recebe resumo, origem, interesse e próxima ação antes de assumir.",
  },
  {
    icon: ClipboardCheck,
    title: "Registro e rastreabilidade",
    description: "Cada contato pode ganhar status, histórico e acompanhamento visível.",
  },
];

function LeadJourneyStrip() {
  return (
    <section className="container py-8">
      <Reveal>
        <div className="glass-card rounded-[1.6rem] p-4 sm:p-5">
          <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
                Da entrada do lead à ação da equipe.
              </p>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Captura, triagem e ação em um fluxo rastreável.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              Um fluxo bem desenhado reduz perda de contexto, organiza prioridades e entrega para a equipe humana o que ela precisa para agir com velocidade.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-5">
            {journeySteps.map(({ icon: Icon, title, description }, index) => (
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-4" key={title}>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-cyan-200/10 text-cyan-100">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-slate-500">0{index + 1}</span>
                </div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <AnimatedGradientBackground />
      <Header />
      <main id="inicio">
        <section className="container grid min-h-[calc(100vh-1rem)] items-center gap-10 pb-14 pt-28 lg:grid-cols-[0.96fr_1.04fr] lg:pt-32">
          <div>
            <Reveal>
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-200/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                <Sparkles className="size-4 shrink-0" aria-hidden="true" />
                Implementação de automação e IA sob medida
              </div>
              <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-[4.05rem] xl:text-[4.25rem]">
                Transforme contatos dispersos em uma operação comercial inteligente.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                A LR Digital implementa automação e IA para captar, classificar, registrar, direcionar e acompanhar leads com mais velocidade, contexto e controle humano.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={DIAGNOSTIC_URL} size="lg">
                  Solicitar diagnóstico
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button href="#como-funciona" variant="secondary" size="lg">
                  Ver como funciona
                </Button>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                Projetos sob medida para clínicas, imobiliárias, educação, serviços consultivos e empresas com alto volume de atendimento.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroIndicators.map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4" key={item.label}>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.detail}</p>
                </div>
              ))}
            </Reveal>
          </div>
          <HeroAutomationPanel />
        </section>

        <LeadJourneyStrip />

        <section className="container py-16">
          <SectionHeader
            eyebrow="Problema"
            title="Empresas não perdem oportunidades apenas por falta de leads. Perdem por falta de processo."
            description="Muitos contatos chegam pelo WhatsApp, site, Instagram, formulários e anúncios. Sem triagem, registro e acompanhamento, a equipe responde de forma manual, perde contexto e deixa oportunidades importantes sem retorno."
          />
          <div className="grid gap-4 lg:grid-cols-[1.1fr_1.4fr]">
            <Reveal>
              <article className="glass-card h-full rounded-[1.7rem] p-7">
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/10 text-cyan-100">
                  <Radar className="size-6" aria-hidden="true" />
                </div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
                  O gargalo invisível
                </p>
                <h3 className="text-2xl font-semibold leading-tight text-white">
                  O lead chega, mas o processo não acompanha.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  O lead chega, mas o processo não acompanha: mensagens ficam espalhadas, o contexto se perde, a prioridade não fica clara e o follow-up depende de memória manual.
                </p>
              </article>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {problemCards.map((card, index) => (
                <FeatureCard {...card} delay={index * 0.04} key={card.title} />
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="container py-16">
          <SectionHeader
            eyebrow="Solução central"
            title="Uma camada inteligente entre seus canais de entrada e sua equipe."
            description="A LR Digital estrutura automações que recebem, organizam, classificam e encaminham contatos para a equipe certa, com dados limpos, contexto e próximos passos claros."
          />
          <AutomationFlowVisual />
          <div className="mt-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
              Canais e sistemas que podem compor a arquitetura
            </p>
            <IntegrationGrid />
          </div>
        </section>

        <section className="container py-16">
          <SectionHeader
            eyebrow="Antes e depois"
            title="Antes: atendimento disperso. Depois: operação organizada."
            description="A diferença não está em automatizar tudo. Está em criar um processo claro para captar, priorizar, registrar e encaminhar cada oportunidade."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[1.7rem] border border-rose-200/10 bg-rose-300/[0.035] p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">Antes</h3>
                  <span className="rounded-full border border-rose-200/15 bg-rose-300/10 px-3 py-1 text-xs font-semibold text-rose-100">
                    Disperso
                  </span>
                </div>
                <div className="grid gap-3">
                  {beforeItems.map((item) => (
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm text-slate-300" key={item}>
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-rose-300/10 text-rose-200">
                        <X className="size-4" aria-hidden="true" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="glass-card h-full rounded-[1.7rem] p-6 ring-1 ring-cyan-200/10">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">Depois</h3>
                  <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                    Rastreável
                  </span>
                </div>
                <div className="grid gap-3">
                  {afterItems.map((item) => (
                    <div className="flex items-center gap-3 rounded-2xl border border-cyan-200/10 bg-cyan-200/[0.065] p-3 text-sm text-slate-100" key={item}>
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-cyan-300/15 text-cyan-100">
                        <CheckCircle2 className="size-4" aria-hidden="true" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section id="solucoes" className="container py-16">
          <SectionHeader
            eyebrow="Ecossistema LR Digital"
            title="Um ecossistema de automação e IA para sua operação comercial."
            description="Cada módulo pode ser implementado de forma independente ou combinado em uma estrutura completa, conforme canais, equipe, volume de contatos e maturidade comercial. São componentes de implementação, não um SaaS genérico pronto."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ecosystem.map((solution, index) => (
              <SolutionCard
                {...solution}
                index={`0${index + 1}`}
                delay={index * 0.035}
                key={solution.title}
              />
            ))}
          </div>
        </section>

        <section id="aplicacoes" className="container py-16">
          <SectionHeader
            eyebrow="Aplicações por nicho"
            title="Projetos adaptados ao tipo de operação."
            description="Cada segmento tem uma rotina comercial própria. O fluxo muda conforme canal, linguagem, prioridade, equipe e decisão de compra."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <UseCaseCard {...useCase} delay={index * 0.04} key={useCase.title} />
            ))}
          </div>
        </section>

        <section className="container py-16">
          <SectionHeader
            eyebrow="Diferencial"
            title="Não implementamos automação solta. Estruturamos processos inteligentes."
            description="Antes de automatizar, desenhamos o processo. Antes de usar IA, definimos contexto, limites e critérios de encaminhamento."
          />
          <div className="mb-5 flex justify-center">
            <div className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-50">
              IA com contexto, regras e supervisão humana.
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-5 text-2xl font-semibold text-white">Automação genérica</h3>
                <div className="grid gap-3">
                  {genericAutomation.map((item) => (
                    <div className="flex items-center gap-3 rounded-2xl bg-white/[0.035] p-3 text-sm text-slate-300" key={item}>
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-rose-300/10 text-rose-200">
                        <X className="size-4" aria-hidden="true" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="glass-card h-full rounded-[1.7rem] p-6 ring-1 ring-cyan-200/10">
                <h3 className="mb-5 text-2xl font-semibold text-white">LR Digital</h3>
                <div className="grid gap-3">
                  {lrApproach.map((item) => (
                    <div className="flex items-center gap-3 rounded-2xl border border-cyan-200/10 bg-cyan-200/[0.065] p-3 text-sm text-slate-100" key={item}>
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-cyan-300/15 text-cyan-100">
                        <CheckCircle2 className="size-4" aria-hidden="true" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="container py-16">
          <SectionHeader
            eyebrow="Metodologia de implementação"
            title="Antes da automação, vem a arquitetura do processo."
            description="A LR Digital estrutura o fluxo antes de conectar ferramentas. Isso reduz automações soltas, respostas mecânicas e falhas operacionais."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {methodologyBlocks.map((block, index) => (
              <FeatureCard {...block} delay={index * 0.035} key={block.title} />
            ))}
          </div>
        </section>

        <section id="processo" className="container py-16">
          <SectionHeader
            eyebrow="Processo"
            title="Da análise à implementação."
            description="A estrutura é pensada antes da ferramenta: primeiro entendemos o processo, depois conectamos automação, IA, CRM e equipe."
          />
          <div className="grid gap-4 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <ProcessStep {...step} index={`0${index + 1}`} delay={index * 0.04} key={step.title} />
            ))}
          </div>
        </section>

        <section className="container py-16">
          <SectionHeader
            eyebrow="Demo conceitual"
            title="Veja como um lead deixa de ser apenas uma mensagem e vira uma oportunidade organizada."
            description="Cada etapa abaixo representa uma parte do fluxo que pode ser implementado: entrada do contato, leitura com IA, CRM atualizado, equipe acionada e follow-up estruturado."
          />
          <ConceptDemo />
        </section>

        <section className="container py-16">
          <SectionHeader
            eyebrow="Resultados esperados"
            title="O que uma operação mais organizada tende a melhorar."
            description="Os resultados dependem do cenário, volume de contatos e maturidade da operação. A estrutura permite acompanhar melhor cada oportunidade e reduzir falhas manuais."
          />
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.4fr]">
            <Reveal>
              <article className="glass-card h-full rounded-[1.7rem] p-7">
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-200/10 text-cyan-100">
                  <LineChart className="size-6" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold leading-tight text-white">
                  O ganho não vem apenas da automação.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Ele vem da previsibilidade do processo: saber o que entrou, quem precisa agir, qual prioridade e qual próximo passo.
                </p>
              </article>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {resultCards.map((result, index) => (
                <MetricCard {...result} delay={index * 0.025} key={result.title} />
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16">
          <SectionHeader
            eyebrow="Formatos"
            title="Formatos de implementação."
            description="Projetos sob medida, sem preço público nesta etapa. O escopo é definido após análise de canais, volume, ferramentas, equipe e nível de inteligência desejado."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal delay={index * 0.05} className="h-full" key={plan.title}>
                <article
                  className={`flex h-full flex-col rounded-[1.7rem] border p-6 ${
                    plan.highlighted
                      ? "border-cyan-200/35 bg-cyan-200/[0.07] shadow-glow"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="mb-4 w-fit rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                      Recomendado para operações multicanal
                    </span>
                  )}
                  <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{plan.description}</p>
                  <ul className="mt-6 grid gap-3">
                    {plan.items.map((item) => (
                      <li className="flex items-start gap-3 text-sm leading-6 text-slate-300" key={item}>
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-cyan-100" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button href={DIAGNOSTIC_URL} variant={plan.highlighted ? "primary" : "secondary"} className="mt-7">
                    Solicitar diagnóstico
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container py-16">
          <SectionHeader
            eyebrow="Segurança e controle"
            title="IA com contexto, limites e supervisão humana."
            description="A IA atua dentro de limites definidos. Decisões sensíveis podem ser encaminhadas para a equipe humana, preservando contexto, controle e qualidade do atendimento."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {securityItems.map((item, index) => (
              <FeatureCard {...item} delay={index * 0.035} key={item.title} />
            ))}
          </div>
        </section>

        <section id="faq" className="container py-16">
          <SectionHeader
            eyebrow="FAQ"
            title="Perguntas frequentes."
            description="Respostas diretas para entender escopo, limites da IA e forma de implementação."
          />
          <FAQ />
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
