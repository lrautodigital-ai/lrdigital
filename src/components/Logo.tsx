import Image from "next/image";
import { assetPath } from "@/lib/site";
import { COMPANY_NAME, COMPANY_TAGLINE } from "@/lib/contact";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <a
      href="#inicio"
      aria-label={`Ir para o início da ${COMPANY_NAME}`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,.12)]">
        <Image
          src={assetPath("/brand/lr-v2-symbol-reverse.svg")}
          alt={`Símbolo ${COMPANY_NAME}`}
          width={24}
          height={24}
          className="size-6 object-contain"
          priority
        />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-bold tracking-[0.18em] text-white">{COMPANY_NAME.toUpperCase()}</span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-100/55">
            {COMPANY_TAGLINE}
          </span>
        </span>
      )}
    </a>
  );
}
