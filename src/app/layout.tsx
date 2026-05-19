import type { Metadata } from "next";
import { assetPath, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "LR Digital | Automação e IA para Empresas",
  description:
    "Automação comercial e IA aplicada para organizar atendimento, leads, CRM, WhatsApp, triagem e follow-up em empresas.",
  keywords: [
    "automação empresarial",
    "automação comercial",
    "IA para empresas",
    "automação WhatsApp",
    "CRM",
    "follow-up",
    "inteligência artificial para atendimento",
    "automação para clínicas",
    "automação para imobiliárias",
  ],
  openGraph: {
    title: "LR Digital | Automação e IA para Empresas",
    description:
      "Automação comercial e IA aplicada para organizar atendimento, leads, CRM, WhatsApp, triagem e follow-up em empresas.",
    url: SITE_URL,
    siteName: "LR Digital",
    images: [
      {
        url: assetPath("/brand/lr-v2-symbol-reverse-2048.png"),
        width: 1200,
        height: 1200,
        alt: "Símbolo LR Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LR Digital | Automação e IA para Empresas",
    description:
      "Automação comercial e IA aplicada para organizar atendimento, leads, CRM, WhatsApp, triagem e follow-up em empresas.",
    images: [assetPath("/brand/lr-v2-symbol-reverse-2048.png")],
  },
  icons: {
    icon: [{ url: assetPath("/favicon.svg"), type: "image/svg+xml" }],
    shortcut: assetPath("/favicon.svg"),
    apple: assetPath("/brand/lr-v2-symbol-reverse-2048.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
