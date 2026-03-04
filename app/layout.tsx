import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const SITE_NAME = "Rastrea Tracker";
const SITE_URL = "https://www.rastreatracker.com.br";

// Ajuste se quiser (pode deixar assim por enquanto)
const PHONE = "+55 54 3229-0814";
const CITY = "Caxias do Sul";
const REGION = "RS";
const COUNTRY = "BR";

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

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Rastrea Tracker | Rastreamento Veicular em Caxias do Sul",
    description:
      "Proteja seu veículo com rastreamento 24h, aplicativo completo e instalação rápida em Caxias do Sul.",
    url: "https://www.rastreatracker.com.br",
    siteName: "Rastrea Tracker",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Rastreamento Veicular`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rastrea Tracker | Rastreamento Veicular em Caxias do Sul",
    description:
      "Rastreamento veicular com app, alertas, histórico de rotas e suporte. Planos para carro, moto, caminhão e frota em Caxias do Sul e região.",
    images: ["/og.jpg"],
  },
};

// ✅ ADIÇÃO: JSON-LD (Schema.org)
function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: PHONE,
    areaServed: [
      { "@type": "City", name: "Caxias do Sul" },
      { "@type": "City", name: "Bento Gonçalves" },
      { "@type": "City", name: "Farroupilha" },
      { "@type": "City", name: "Flores da Cunha" },
      { "@type": "City", name: "Gramado" },
      { "@type": "City", name: "Canela" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressRegion: REGION,
      addressCountry: COUNTRY,
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white antialiased">
        {/* ✅ Google tag (gtag.js) - Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17775456591"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17775456591');
          `}
        </Script>

        <JsonLd />
        {children}
      </body>
    </html>
  );
}
