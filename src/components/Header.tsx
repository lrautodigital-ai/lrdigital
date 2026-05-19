"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-[#05070D]/78 shadow-2xl backdrop-blur-2xl" : "bg-transparent",
      )}
    >
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#solucoes" variant="ghost" size="sm">
            Ver soluções
          </Button>
          <Button href={WHATSAPP_URL} size="sm" target="_blank" rel="noreferrer">
            Agendar conversa
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-x-0 top-[80px] z-[60] min-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-[#05070D] px-4 pb-6 shadow-2xl lg:hidden">
          <nav aria-label="Navegação mobile" className="mx-auto flex max-w-xl flex-col gap-1 pt-5">
            {navItems.map((item) => (
              <a
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button href="#solucoes" variant="secondary" onClick={() => setIsOpen(false)}>
                Ver soluções
              </Button>
              <Button href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Agendar conversa
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
