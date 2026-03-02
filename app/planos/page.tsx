import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import Script from "next/script";
import type { Metadata } from "next";

const SITE_NAME = "Rastrea Tracker";
const SITE_URL = "https://www.rastreatracker.com.br";
const PAGE_PATH = "/planos";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

// Áreas atendidas (intenção local)
const AREA_SERVED = [
  "Caxias do Sul - RS",
  "Serra Gaúcha - RS",
  "Bento Gonçalves - RS",
  "Farroupilha - RS",
  "Flores da Cunha - RS",
  "Gramado - RS",
  "Canela - RS",
  "Carlos Barbosa - RS",
  "Garibaldi - RS",
  "Feliz - RS",
  "Nova Petrópolis - RS",
  "Vacaria - RS",
  "São Marcos - RS",
  "Veranópolis - RS",
  "Antônio Prado - RS",
  "Bom Princípio - RS",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Planos de Rastreamento Veicular em Caxias do Sul e Serra Gaúcha",
  description:
    "Planos de rastreamento veicular com Central 24h e Planos Auto Monitoramento. Opções para carro, moto, frota e motorista de app. Atendimento em Caxias do Sul e Serra Gaúcha.",

  alternates: {
    canonical: PAGE_URL,
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
    type: "website",
    locale: "pt_BR",
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: "Planos de Rastreamento Veicular | Rastrea Tracker",
    description:
      "Escolha o plano ideal: Central 24h ou plano Auto Monitoramento. Carro, moto, frota e motorista de app em Caxias do Sul e Serra Gaúcha.",
    images: [
      {
        url: "/og.jpg", // deixe seu /public/og.jpg
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Planos de Rastreamento`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Planos de Rastreamento Veicular | Rastrea Tracker",
    description:
      "Planos com Central 24h e Planos Auto Monitoramento para carro, moto, frota e motorista de app em Caxias do Sul e Serra Gaúcha.",
    images: ["/og.jpg"],
  },
};

export default function PlanosPage() {
  // JSON-LD (invisível) para SEO local + catálogo de ofertas
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Planos de Rastreamento Veicular",
    url: PAGE_URL,
    description:
      "Planos de rastreamento veicular com Central 24h e Planos Auto Monitoramento para carro, moto, frota e motorista de app.",
    about: {
      "@type": "Service",
      name: "Rastreamento veicular",
      provider: {
        "@type": "LocalBusiness",
        name: SITE_NAME,
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Caxias do Sul",
          addressRegion: "RS",
          addressCountry: "BR",
        },
        areaServed: AREA_SERVED,
      },
      areaServed: AREA_SERVED,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Planos de Rastreamento",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Planos com Central 24h",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Plano Moto",
                url: `${SITE_URL}/moto`,
              },
              {
                "@type": "Offer",
                name: "Plano Carro",
                url: `${SITE_URL}/carro`,
              },
              {
                "@type": "Offer",
                name: "Plano Frota",
                url: `${SITE_URL}/frota`,
              },
              {
                "@type": "Offer",
                name: "Plano Motorista de App",
                url: `${SITE_URL}/motorista-app`,
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Planos Auto Monitoramento",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Auto-monitoramento (Detalhes)",
                url: `${SITE_URL}/planos/monitoramento-proprio`,
              },
              {
                "@type": "Offer",
                name: "Kit Rastreador (Detalhes)",
                url: `${SITE_URL}/planos/kit-rastreador`,
              },
            ],
          },
        ],
      },
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* SEO: JSON-LD invisível */}
      <Script
        id="jsonld-planos"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative h-[420px] md:h-[280px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url('/cidade-noite.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-4xl font-extrabold drop-shadow-lg">
            Rastreamento com Monitoramento
            <br />
            Central 24 horas
          </h1>

          <p className="mt-4 text-white/90 text-lg drop-shadow">
            Planos Automonitoramento sem Central de Monitoramento, aplicativo e
            suporte.
          </p>

          {/* REMOVIDO: Botão "Solicitar cotação" no HERO (somente ajuste solicitado) */}
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* CENTRAL 24H */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0f2b] text-center">
            Planos com Monitoramento Central 24h
          </h2>

          <p className="text-center text-black/70 mt-3 text-lg">
            Escolha o plano ideal para o seu veículo com segurança total.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <PlanoCentralCard title="Moto" href="/moto" />
            <PlanoCentralCard title="Carro" href="/carro" />
            <PlanoCentralCard title="Frota" href="/frota" />
            <PlanoCentralCard title="Motorista de App" href="/motorista-app" />
          </div>

          <p className="mt-10 text-center text-sm text-black/60">
            * Valores a partir de R$ 49,90 + taxa de instalação.
          </p>

          <div className="mt-16 h-px w-full bg-black/10" />

          {/* AUTO MONITORAMENTO */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0f2b] text-center">
              Planos Auto Monitoramento
            </h2>

            <p className="text-center text-black/70 mt-3 text-lg max-w-3xl mx-auto">
              Valor reduzido para quem quer autonomia: você compra o kit de
              rastreamento e paga apenas o acesso à plataforma + chip de dados.
              Veja as vantagens e como funciona.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <PlanoAutoCard
                title="Auto-monitoramento Básico"
                href="/planos/monitoramento-proprio"
              />

              <PlanoAutoCard
                title="Auto-monitoramento Profissional"
                href="/planos/monitoramento-proprio"
              />

              <PlanoAutoCard
                title="Gestão de Frotas (Auto)"
                href="/planos/monitoramento-proprio"
              />

              <PlanoAutoCard
                title="Motorista de App (Auto)"
                href="/planos/monitoramento-proprio"
              />
            </div>

            <p className="mt-10 text-center text-sm text-black/60">
              * A partir de R$ 39,90 + taxa de instalação (se contratado).
              Consulte valores do kit de rastreamento.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="px-6 py-10 text-sm text-white/60 text-center">
          © {new Date().getFullYear()} Rastrea Tracker
        </div>
      </footer>
    </main>
  );
}

/* CARD CENTRAL */
function PlanoCentralCard({ title, href }: { title: string; href: string }) {
  const items = [
    "Rastreador por comodato",
    "Bloqueio a distância",
    "Cobertura nacional",
    "Instalação em domicílio",
    "Portal Web e App",
    "Sem fidelidade",
    "Cercas eletrônicas",
    "Notificações Web e App",
    "Histórico de posições",
    "Relatórios completos",
    "Controle de combustível",
    "Identificador de motorista",
  ];

  return (
    <div className="group rounded-2xl border border-black/10 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]">
      <div
        className="px-7 py-7 text-white"
        style={{
          background:
            "linear-gradient(135deg, #0a0f2b 0%, #1a237e 50%, #0a0f2b 100%)",
        }}
      >
        <p className="text-xs tracking-widest font-extrabold text-white/70">
          PLANO
        </p>

        <p className="text-xl font-extrabold mt-1">{title}</p>

        <p className="mt-5 text-white/70 text-sm">A partir de</p>

        <p className="text-5xl font-extrabold tracking-tight">R$ 59,90</p>

        <p className="text-white/60 text-sm mt-1">+ taxa de instalação</p>
      </div>

      <div className="px-7 py-6">
        <ul className="space-y-3 text-sm text-black/75">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-green-600 font-extrabold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-7 block text-center bg-red-600 hover:bg-red-500 text-white font-extrabold py-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
}

/* CARD AUTO */
function PlanoAutoCard({ title, href }: { title: string; href: string }) {
  const items = [
    "Compra do kit rastreamento",
    "Plataforma Web + App",
    "Aluguel do chip M2M",
    "Alertas e notificações",
    "Histórico e relatórios",
    "Suporte (horário comercial)",
    "Sem fidelidade (pré-pago)",
    "Sem monitoramento (cliente)",
  ];

  return (
    <div className="group rounded-2xl border border-black/10 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]">
      <div
        className="px-7 py-7 text-white"
        style={{
          background:
            "linear-gradient(135deg, #111111 0%, #b71c1c 50%, #111111 100%)",
        }}
      >
        <p className="text-xs tracking-widest font-extrabold text-white/70">
          AUTO MONITORAMENTO
        </p>

        <p className="text-xl font-extrabold mt-1">{title}</p>

        <p className="mt-5 text-white/70 text-sm">A partir de</p>

        <p className="text-5xl font-extrabold tracking-tight">R$ 39,90</p>

        <p className="text-white/60 text-sm mt-1">mensal</p>
      </div>

      <div className="px-7 py-6">
        <ul className="space-y-3 text-sm text-black/75">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-green-600 font-extrabold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-7 block text-center bg-red-600 hover:bg-red-500 text-white font-extrabold py-4 rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
