import {
  Bot,
  CalendarDays,
  ClipboardList,
  Camera,
  FileText,
  FormInput,
  Globe2,
  Mail,
  MessageCircle,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

const integrations = [
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Instagram", icon: Camera },
  { label: "Site", icon: Globe2 },
  { label: "Formulários", icon: FormInput },
  { label: "CRM", icon: ClipboardList },
  { label: "Google Sheets", icon: FileText },
  { label: "E-mail", icon: Mail },
  { label: "Calendário", icon: CalendarDays },
  { label: "Equipe comercial", icon: Users },
  { label: "IA", icon: Bot },
];

export function IntegrationGrid() {
  return (
    <Reveal>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {integrations.map(({ label, icon: Icon }, index) => (
          <div
            className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-center transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.06]"
            key={label}
            style={{ transitionDelay: `${index * 18}ms` }}
          >
            <div className="mx-auto mb-3 grid size-10 place-items-center rounded-xl bg-white/[0.05] text-cyan-100 ring-1 ring-white/10">
              <Icon className="size-5" aria-hidden="true" />
            </div>
            <p className="text-sm font-medium text-slate-200">{label}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
