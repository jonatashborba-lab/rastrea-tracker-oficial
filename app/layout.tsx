import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rastrea Tracker | Rastreamento Veicular em Caxias do Sul",
  description:
    "Rastreamento veicular em Caxias do Sul. Instalação rápida, monitoramento 24h, app completo e planos acessíveis. Proteja seu carro hoje.",
  keywords: [
    "rastreamento veicular caxias do sul",
    "rastreador veicular caxias do sul",
    "rastreador para carros",
    "rastreamento gps caxias",
    "rastrea tracker",
  ],

  verification: {
    google: "CtexWoTg3wVNMZQXmO9e1N6bWFvMOsN354bfL0c_pVc",
  },

  icons: {
    icon: "/favicon.ico",
  },

  metadataBase: new URL("https://www.rastreatracker.com.br"),

  openGraph: {
    title: "Rastrea Tracker | Rastreamento Veicular em Caxias do Sul",
    description:
      "Proteja seu veículo com rastreamento 24h, aplicativo completo e instalação rápida em Caxias do Sul.",
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
