import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rastrea Tracker | Rastreamento Veicular em Caxias do Sul",
  description: "Rastreamento veicular em Caxias do Sul. Instalação rápida, monitoramento 24h, app completo e planos acessíveis. Proteja seu carro hoje.",

  verification: {
    google: "CtexWoTg3wVNMZQXmO9e1N6bWFvMOsN354bfL0c_pVc",
  },

  icons: {
    icon: "/favicon.ico",
  },

  metadataBase: new URL("https://www.rastreatracker.com.br"),

  openGraph: {
    title: "Rastrea Tracker",
    description: "Rastreamento veicular profissional",
    url: "https://www.rastreatracker.com.br",
    siteName: "Rastrea Tracker",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
