import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

export function CTASection() {
  return (
    <Reveal>
      <section id="contato" className="container pb-20 pt-8">
        <div className="glass-card overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,.16),rgba(34,211,238,.08),rgba(139,92,246,.14))]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/75">
                Próximo passo
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Pronto para transformar contatos dispersos em uma operação comercial organizada?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                Vamos analisar seus canais de entrada, entender seus gargalos e mostrar como automação e IA podem apoiar sua equipe com mais velocidade, contexto e previsibilidade.
              </p>
              <p className="mt-4 text-sm text-cyan-100/70">
                Conversa inicial objetiva para entender cenário, canais e oportunidades de automação.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={WHATSAPP_URL} size="lg" target="_blank" rel="noreferrer">
                Agendar conversa
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href={WHATSAPP_URL} variant="secondary" size="lg" target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" />
                Falar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
