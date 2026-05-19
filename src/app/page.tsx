import {
  ArrowRight,
  BellRing,
  BrainCircuit,
  Building2,
  CalendarCheck,
  CalendarX2,
  CheckCircle2,
  ClipboardCheck,
  DatabaseZap,
  FileCheck2,
  GraduationCap,
  HeartPulse,
  History,
  Layers3,
  LineChart,
  LockKeyhole,
  MessageCircle,
  Network,
  RefreshCcw,
  Route,
  ShieldCheck,
  Sparkles,
  Split,
  Stethoscope,
  Target,
  TimerReset,
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
import { WHATSAPP_URL } from "@/lib/contact";

const heroBadges = [
  "IA aplicada ao processo",
  "CRM + WhatsApp + Follow-up",
  "Atendimento humano com mais contexto",
  "Automação sob medida",
];

const problemCards = [
  {
    icon: Network,
    title: "Leads espalhados em vários canais",
    description:
      "Contatos chegam por WhatsApp, site, Instagram e formulários sem uma visão única da operação.",
  },
  {
    icon: TimerReset,
    title: "Respostas demoradas ou inconsistentes",
    description:
      "A equipe alterna entre conversas manuais, perde padrão e deixa oportunidades esperando.",
  },
  {
    icon: History,
    title: "Falta de histórico e prioridade",
    description:
      "Sem registro limpo, fica difícil saber quem é urgente, quem já foi atendido e qual é o próximo passo.",
  },
  {
    icon: CalendarX2,
    title: "Follow-up esquecido ou tardio",
    description:
      "Leads mornos deixam de ser retomados no momento certo e oportunidades importantes perdem força.",
  },
];

const solutions = [
  {
    icon: Split,
    title: "Captação e centralização de leads",
    description:
      "Unifique contatos vindos de WhatsApp, site, formulários, landing pages, Instagram, anúncios e portais.",
  },
  {
    icon: BrainCircuit,
    title: "Triagem inteligente com IA",
    description:
      "Classifique intenção, urgência, perfil, prioridade e etapa do atendimento antes da equipe assumir.",
  },
  {
    icon: DatabaseZap,
    title: "CRM e organização comercial",
    description:
      "Registre contatos, negócios, tarefas e histórico para que a equipe tenha controle do processo.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp e resposta inicial",
    description:
      "Envie respostas iniciais, colete informações e direcione o lead sem tornar o atendimento mecânico.",
  },
  {
    icon: RefreshCcw,
    title: "Follow-up automático",
    description:
      "Retome contatos que não responderam, leads mornos e oportunidades que precisam de acompanhamento.",
  },
  {
    icon: UsersRound,
    title: "Handoff para equipe humana",
    description:
      "Entregue para o atendente ou vendedor um resumo claro do contato, com contexto e próxima ação recomendada.",
  },
  {
    icon: BellRing,
    title: "Alertas internos",
    description:
      "Notifique equipe comercial, recepção ou gestores quando um lead importante entrar.",
  },
  {
    icon: LineChart,
    title: "Relatórios e rastreabilidade",
    description:
      "Acompanhe origem, status, prioridade, tempo de resposta e evolução dos contatos.",
  },
];

const useCases = [
  {
    icon: HeartPulse,
    title: "Clínicas e saúde particular",
    description:
      "Triagem de pacientes, agendamento, dúvidas sobre procedimentos, encaminhamento por especialidade e follow-up de interessados.",
    examples: [
      "avaliação",
      "procedimento",
      "agendamento",
      "retorno",
      "resumo para recepção",
    ],
  },
  {
    icon: Building2,
    title: "Imobiliárias e incorporadoras",
    description:
      "Organização de leads de compra, locação, venda, lançamentos, proprietários e investidores.",
    examples: ["faixa de valor", "proprietário", "investidor", "portal", "follow-up"],
  },
  {
    icon: GraduationCap,
    title: "Educação e cursos",
    description:
      "Captação de interessados, dúvidas sobre matrícula, turmas, valores, bolsas, agendamento de visita e nutrição de leads.",
    examples: ["matrícula", "turmas", "valores", "bolsas", "visita"],
  },
  {
    icon: Stethoscope,
    title: "Serviços consultivos B2B",
    description:
      "Qualificação de oportunidades, coleta de informações, priorização comercial, CRM e acompanhamento até a reunião.",
    examples: ["qualificação", "briefing", "priorização", "reunião", "proposta"],
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

const processSteps = [
  {
    icon: Target,
    title: "Diagnóstico",
    status: "Planejamento",
    description:
      "Entendemos canais, equipe, fluxo atual, gargalos e oportunidades de automação.",
  },
  {
    icon: Workflow,
    title: "Desenho do fluxo",
    status: "Arquitetura",
    description:
      "Mapeamos entradas, classificações, caminhos, mensagens, CRM, alertas e follow-ups.",
  },
  {
    icon: Layers3,
    title: "Implementação",
    status: "Configuração",
    description:
      "Conectamos ferramentas, configuramos automações, IA, formulários, CRM e notificações.",
  },
  {
    icon: FileCheck2,
    title: "Testes e ajustes",
    status: "Validação",
    description:
      "Validamos cenários reais, corrigimos exceções e refinamos linguagem, regras e prioridades.",
  },
  {
    icon: CalendarCheck,
    title: "Acompanhamento",
    status: "Ativação",
    description:
      "Monitoramos funcionamento, ajustamos fluxos e evoluímos a estrutura conforme a operação cresce.",
  },
];

const resultCards = [
  {
    title: "Tempo de resposta",
    description: "Mais clareza sobre quem precisa de retorno e qual ação vem primeiro.",
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
    description: "O atendimento fica mais rápido, consistente e contextualizado.",
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
    description: "A IA não substitui decisões sensíveis e pode encaminhar para a equipe quando necessário.",
  },
  {
    icon: LockKeyhole,
    title: "Regras e limites",
    description: "Fluxos são definidos com permissões, exceções e caminhos claros para cada cenário.",
  },
  {
    icon: Route,
    title: "Privacidade por desenho",
    description: "Dados e mensagens seguem uma lógica de cuidado, rastreabilidade e uso necessário.",
  },
  {
    icon: ClipboardCheck,
    title: "LGPD-ready",
    description: "A estrutura pode ser preparada para boas práticas de LGPD, sem prometer certificações inexistentes.",
  },
];

export default function Home() {
  return (
    <>
      <AnimatedGradientBackground />
      <Header />
      <main id="inicio">
        <section className="container grid min-h-screen items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:pt-36">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-200/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                <Sparkles className="size-4 shrink-0" aria-hidden="true" />
                Implementação de automação e IA sob medida
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
                Automação e IA para empresas que precisam atender melhor, vender com mais organização e perder menos oportunidades.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                A LR Digital implementa fluxos inteligentes para organizar contatos, qualificar leads, registrar informações, acionar equipes e manter follow-ups sem perder o controle humano do atendimento.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={WHATSAPP_URL} size="lg" target="_blank" rel="noreferrer">
                  Agendar conversa
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

            <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-medium text-slate-200"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </Reveal>
          </div>
          <HeroAutomationPanel />
        </section>

        <section className="container py-20">
          <SectionHeader
            eyebrow="Problema"
            title="Empresas perdem oportunidades não por falta de leads, mas por falta de processo."
            description="Muitos contatos chegam pelo WhatsApp, site, Instagram, formulários e anúncios. Sem triagem, registro e acompanhamento, a equipe responde de forma manual, perde contexto e deixa oportunidades importantes sem retorno."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((card, index) => (
              <FeatureCard
                {...card}
                delay={index * 0.04}
                key={card.title}
              />
            ))}
          </div>
        </section>

        <section id="como-funciona" className="container py-20">
          <SectionHeader
            eyebrow="Solução central"
            title="Uma camada inteligente entre seus canais de entrada e sua equipe."
            description="A LR Digital estrutura automações que recebem, organizam, classificam e encaminham contatos para a equipe certa, com dados limpos, contexto e próximos passos claros."
          />
          <AutomationFlowVisual />
          <div className="mt-10">
            <IntegrationGrid />
          </div>
        </section>

        <section id="solucoes" className="container py-20">
          <SectionHeader
            eyebrow="Soluções"
            title="Soluções que podem ser combinadas conforme sua operação."
            description="Cada módulo é desenhado para funcionar como parte de uma estrutura comercial integrada, não como uma automação solta."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((solution, index) => (
              <SolutionCard
                {...solution}
                index={`0${index + 1}`}
                delay={index * 0.035}
                key={solution.title}
              />
            ))}
          </div>
        </section>

        <section id="aplicacoes" className="container py-20">
          <SectionHeader
            eyebrow="Aplicações por nicho"
            title="Projetos adaptados ao tipo de operação."
            description="O desenho do fluxo muda conforme canal, linguagem, prioridade, rotina da equipe e decisão comercial de cada segmento."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <UseCaseCard
                {...useCase}
                delay={index * 0.04}
                key={useCase.title}
              />
            ))}
          </div>
        </section>

        <section className="container py-20">
          <SectionHeader
            eyebrow="Diferencial"
            title="Não implementamos automação solta. Estruturamos processos inteligentes."
            description="A IA não fica solta. Ela atua com regras, contexto e limites definidos."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal>
              <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6">
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
              <article className="glass-card rounded-[1.7rem] p-6 ring-1 ring-cyan-200/10">
                <h3 className="mb-5 text-2xl font-semibold text-white">LR Digital</h3>
                <div className="grid gap-3">
                  {lrApproach.map((item) => (
                    <div className="flex items-center gap-3 rounded-2xl bg-cyan-200/[0.055] p-3 text-sm text-slate-200" key={item}>
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-100">
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

        <section id="processo" className="container py-20">
          <SectionHeader
            eyebrow="Projeto"
            title="Da análise à implementação."
            description="A estrutura é pensada antes da ferramenta: primeiro entendemos o processo, depois conectamos automação, IA, CRM e equipe."
          />
          <div className="grid gap-5 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <ProcessStep
                {...step}
                index={`0${index + 1}`}
                delay={index * 0.04}
                key={step.title}
              />
            ))}
          </div>
        </section>

        <section className="container py-20">
          <SectionHeader
            eyebrow="Demo conceitual"
            title="Veja como um lead deixa de ser apenas uma mensagem e vira uma oportunidade organizada."
            description="O painel abaixo é uma representação visual do tipo de estrutura operacional que a LR Digital implementa."
          />
          <ConceptDemo />
        </section>

        <section className="container py-20">
          <SectionHeader
            eyebrow="Resultados esperados"
            title="O que uma operação mais organizada tende a melhorar."
            description="Os resultados dependem do cenário, volume de contatos e maturidade da operação, mas a estrutura permite que a empresa acompanhe melhor cada oportunidade e reduza falhas manuais."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resultCards.map((result, index) => (
              <MetricCard
                {...result}
                delay={index * 0.03}
                key={result.title}
              />
            ))}
          </div>
        </section>

        <section className="container py-20">
          <SectionHeader
            eyebrow="Formatos"
            title="Formatos de implementação."
            description="Sem preço público nesta etapa: o escopo é definido por canais, integrações, volume, maturidade do processo e profundidade da IA."
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
                      Mais completo para operações multicanal
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
                  <Button href={WHATSAPP_URL} variant={plan.highlighted ? "primary" : "secondary"} className="mt-7" target="_blank" rel="noreferrer">
                    Solicitar diagnóstico
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container py-20">
          <SectionHeader
            eyebrow="Segurança e controle"
            title="IA com contexto, limites e supervisão humana."
            description="A tecnologia apoia o atendimento, organiza dados, resume conversas e encaminha tarefas. O humano continua no centro da decisão."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {securityItems.map((item, index) => (
              <FeatureCard
                {...item}
                delay={index * 0.04}
                key={item.title}
              />
            ))}
          </div>
        </section>

        <section id="faq" className="container py-20">
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
