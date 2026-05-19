import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    question: "A automação substitui minha equipe?",
    answer:
      "Não. A proposta é apoiar a equipe, organizando contatos, dados, triagem e follow-up para que o atendimento humano seja mais rápido e contextualizado.",
  },
  {
    question: "A IA responde qualquer coisa sozinha?",
    answer:
      "Não. A IA deve operar com contexto, regras e limites definidos. Em situações sensíveis ou comerciais importantes, o fluxo pode encaminhar para uma pessoa.",
  },
  {
    question: "Vocês trabalham com as ferramentas que minha empresa já usa?",
    answer:
      "Sim. O projeto é construído a partir do processo atual da empresa e pode se adaptar a WhatsApp, CRM, planilhas, formulários, canais digitais e ferramentas já adotadas.",
  },
  {
    question: "Preciso trocar minhas ferramentas atuais?",
    answer:
      "Não necessariamente. O projeto pode ser adaptado às ferramentas já utilizadas, como WhatsApp, CRM, planilhas, formulários e canais atuais.",
  },
  {
    question: "Funciona para clínicas e imobiliárias?",
    answer:
      "Sim. A estrutura é especialmente útil para empresas com muitos contatos, necessidade de triagem e acompanhamento comercial.",
  },
  {
    question: "O projeto é personalizado?",
    answer:
      "Sim. Cada fluxo é desenhado de acordo com canais, equipe, tipo de atendimento, linguagem e objetivos da empresa.",
  },
  {
    question: "É possível começar com um fluxo menor?",
    answer:
      "Sim. O projeto pode começar de forma enxuta, evoluindo conforme os testes, volume de contatos e necessidades comerciais da operação.",
  },
];

export function FAQ() {
  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {faqs.map((item, index) => (
        <Reveal delay={index * 0.035} key={item.question}>
          <details className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition open:border-cyan-200/25 open:bg-white/[0.055]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
              {item.question}
              <ChevronDown className="size-5 shrink-0 text-cyan-100 transition group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.answer}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
