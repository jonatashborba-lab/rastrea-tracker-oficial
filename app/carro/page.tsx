import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import Script from "next/script";
import type { Metadata } from "next";

const SITE_NAME = "Rastrea Tracker";
const SITE_URL = "https://www.rastreatracker.com.br";
const PAGE_URL = `${SITE_URL}/carro`;

const WHATSAPP_PHONE = "555436421367";
const WHATSAPP_MESSAGE = "Olá! Quero uma cotação de rastreador para carro.";
const WHATSAPP = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const metadata: Metadata = {
  title: "Rastreamento para Carro em Caxias do Sul | Rastrea Tracker",
  description:
    "Rastreamento veicular para carro com app, portal web, alertas e suporte. Instalação rápida em Caxias do Sul e região (Serra Gaúcha). Planos a partir de R$ 49,90.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Rastreamento para Carro em Caxias do Sul | Rastrea Tracker",
    description:
      "Rastreamento para carro com app e web, alertas, relatórios e suporte. Atendimento em Caxias do Sul e Serra Gaúcha.",
    url: PAGE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/carro-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Rastreamento para carro - Rastrea Tracker",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CarroPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Rastreamento para Carro",
    description:
      "Serviço de rastreamento veicular para carro com aplicativo, portal web, alertas, relatórios e suporte.",
    areaServed: [
      "Caxias do Sul - RS",
      "Serra Gaúcha - RS",
      "Carlos Barbosa - RS",
      "Garibaldi - RS",
      "Feliz - RS",
      "Nova Petrópolis - RS",
      "Bom Princípio - RS",
      "Vacaria - RS",
      "São Marcos - RS",
      "Veranópolis - RS",
      "Antônio Prado - RS",
      "Bento Gonçalves - RS",
      "Farroupilha - RS",
    ],
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: "+55 54 3642-1367",
      areaServed: "Rio Grande do Sul",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Caxias do Sul",
        addressRegion: "RS",
        addressCountry: "BR",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: "49.90",
      availability: "https://schema.org/InStock",
      url: PAGE_URL,
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* SEO: JSON-LD (não muda layout) */}
      <Script
        id="jsonld-carro"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative h-[420px] md:h-[280px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url('/carro-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-4xl font-extrabold drop-shadow-lg">
            Rastreamento para carro
          </h1>

          <p className="mt-4 text-white/90 text-lg drop-shadow">
            Adquira seu rastreador para carro sem necessidade de comprar o
            equipamento
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* ESQUERDA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0b0b0b]">
                O melhor rastreador para carro com bloqueio no melhor preço para
                você!
              </h2>

              <p className="mt-6 text-black/80 leading-relaxed text-lg">
                Esse plano é ideal para você que possui um ou mais carros e
                ainda não instalou um rastreador ou até mesmo não está
                satisfeito com o seu atual.
              </p>

              {/* Intenção local (SEO) — sem mexer no layout, só texto */}
              <p className="mt-4 text-black/80 leading-relaxed text-lg">
                Atendimento e instalação com foco em <b>Caxias do Sul</b> e
                região da <b>Serra Gaúcha</b>, incluindo Carlos Barbosa,
                Garibaldi, Feliz, Nova Petrópolis, Bom Princípio, Vacaria, São
                Marcos, Veranópolis e Antônio Prado.
              </p>

              <div className="mt-10">
                <Image
                  src="/carros.png"
                  alt="Rastreamento para carro - imagem de carros"
                  width={820}
                  height={520}
                  sizes="(max-width: 1024px) 100vw, 820px"
                  className="w-full h-auto"
                  priority={false}
                />
              </div>

              <p className="mt-8 text-black/80 leading-relaxed text-lg">
                Somente na {SITE_NAME} você tem rastreamento veicular com os
                melhores equipamentos, cobertura nacional e suporte completo
                para operação e segurança.
              </p>
            </div>

            {/* DIREITA */}
            <aside className="rounded-2xl border border-black/10 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
              <div className="bg-[#0a0f2b] text-white px-6 py-5 text-center font-extrabold">
                Plano Rastreamento Completo
              </div>

              <div className="bg-[#0a0f2b] text-white px-6 py-10 text-center">
                <div className="text-white/80 text-sm">A partir de:</div>
                <div className="mt-2 text-6xl font-extrabold">R$ 59,90</div>
                <div className="mt-2 text-white/80 text-sm">
                  + taxa de instalação
                </div>
              </div>

              <div className="bg-white">
                <ul className="divide-y divide-black/10">
                  {[
                    "Cobertura nacional",
                    "Central 24 horas",
                    "Bloqueio (opcional)",
                    "Instalação em domicílio",
                    "Portal Web",
                    "Histórico de posições",
                    "Aplicativo para smartphones",
                    "Relatórios",
                    "Alertas",
                  ].map((t) => (
                    <li key={t} className="px-6 py-4 flex items-center gap-3">
                      <span className="text-green-600 text-lg font-bold">
                        ✓
                      </span>
                      <span className="text-black/80">{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-6">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full rounded-xl bg-yellow-400 px-6 py-4 text-center font-extrabold text-black hover:bg-yellow-300 transition shadow"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* BLOCO FINAL */}
          <div className="mt-16">
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a0f2b]">
              Saiba como o rastreamento veicular da {SITE_NAME} pode te ajudar
            </h3>

            <p className="mt-6 text-black/80 leading-relaxed text-lg">
              Chega de medo na hora de andar com seu veículo no aplicativo...
            </p>

            <div className="mt-8">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-red-600 px-7 py-4 font-extrabold text-white hover:bg-red-500 transition-colors shadow-lg"
              >
                Fale conosco no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="px-6 py-10 text-sm text-white/60 text-center">
          © {new Date().getFullYear()} {SITE_NAME} • Todos os direitos
          reservados.
        </div>
      </footer>
    </main>
  );
}
