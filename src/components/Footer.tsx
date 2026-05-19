import { Mail, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import {
  CONTACT_EMAIL,
  COMPANY_NAME,
  COMPANY_TAGLINE,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  WHATSAPP_URL,
  hasEmail,
  hasInstagram,
  hasLinkedIn,
  hasWhatsApp,
} from "@/lib/contact";

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const hasAnyContact = hasWhatsApp || hasEmail || hasInstagram || hasLinkedIn;

  return (
    <footer className="border-t border-white/10 bg-[#05070D] py-12">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            Automação comercial e IA aplicada para empresas que precisam organizar atendimento, leads, CRM e follow-up.
          </p>
          <p className="mt-4 text-sm font-semibold text-cyan-100/75">{COMPANY_TAGLINE}</p>
        </div>
        <nav aria-label="Links do rodapé">
          <p className="mb-4 text-sm font-semibold text-white">Navegação</p>
          <div className="grid gap-3">
            {links.map((link) => (
              <a className="text-sm text-slate-400 transition hover:text-white" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
        <div>
          <p className="mb-4 text-sm font-semibold text-white">Contato</p>
          {hasAnyContact ? (
            <div className="grid gap-3">
              {hasWhatsApp && (
                <a className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
              )}
              {hasEmail && (
                <a className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail className="size-4" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              )}
              {hasInstagram && (
                <a className="text-sm text-slate-400 transition hover:text-white" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              )}
              {hasLinkedIn && (
                <a className="text-sm text-slate-400 transition hover:text-white" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
            </div>
          ) : (
            <a className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white" href="#contato">
              Solicitar diagnóstico
            </a>
          )}
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 {COMPANY_NAME}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
