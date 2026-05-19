import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { DIAGNOSTIC_URL, WHATSAPP_URL, hasWhatsApp } from "@/lib/contact";

export function CTASection() {
  return (
    <Reveal>
      <section id="contato" className="container pb-20 pt-4">
        <div className="glass-card overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.18),transparent_36%),linear-gradient(120deg,rgba(59,130,246,.15),rgba(34,211,238,.07),rgba(139,92,246,.12))]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/75">
                Próximo passo
              </p>
              <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Transforme atendimento disperso em uma operação comercial mais inteligente.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                Vamos analisar seus canais de entrada, entender gargalos e desenhar um fluxo de automação e IA adequado à rotina da sua equipe.
              </p>
              <p className="mt-4 text-sm text-cyan-100/70">
                Conversa inicial objetiva para entender cenário, canais e oportunidades de automação.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href={DIAGNOSTIC_URL} size="lg">
                Solicitar diagnóstico
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              {hasWhatsApp ? (
                <Button href={WHATSAPP_URL} variant="secondary" size="lg" target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Falar pelo WhatsApp
                </Button>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
                  <div className="mb-2 flex items-center gap-2 font-semibold text-white">
                    <MessageCircle className="size-4 text-cyan-100" aria-hidden="true" />
                    Canal direto a confirmar
                  </div>
                  O botão de WhatsApp será ativado quando o número oficial for definido.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
