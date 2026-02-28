"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";
import Image from "next/image";

const WHATSAPP =
  "https://wa.me/555436421367?text=Ol%C3%A1!%20Quero%20uma%20cota%C3%A7%C3%A3o%20de%20rastreamento%20veicular.";

// coloque sua imagem em /public com esse nome:
const GANHOS_IMAGE = "/ganhos.png";
const HERO_IMAGE = "/hero-bg.jpg";

/** ✅ Ajustes DESKTOP (md+) — preencha como quiser */
const SOCIAL_PROOF = {
  vehicles: "+ de 1.000 veículos rastreados",
  rating: "Atendimento rápido",
  coverage: "Cobertura nacional",
};

// ✅ Ajustes DESKTOP (md+) — footer completo (sem mexer no mobile)
const CONTACT = {
  phone: "(54) 3642-1367",
  whatsapp: "(54) 3642-1367",
  email: "rastreatracker@outlook.com",
  city: "Caxias do Sul • RS",
};

export default function Page() {
  return (
    <main id="topo" className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* BOTÃO FLUTUANTE WHATSAPP — SOMENTE MOBILE */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="md:hidden fixed bottom-4 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-3 font-extrabold text-white shadow-[0_14px_28px_rgba(0,0,0,0.35)] hover:bg-red-500 transition"
        aria-label="Falar no WhatsApp"
      >
        <span className="text-base">WhatsApp</span>
        <span className="text-xl leading-none">→</span>
      </a>

      {/* HERO (MAPA) — FUNDO APARECE NA HORA / CONTEÚDO ENTRA 2s DEPOIS (DESKTOP) */}
      <section className="relative overflow-hidden">
        {/* CSS puro (sem styled-jsx) */}
        <style>{`
          /* Mobile: nada de animação (conteúdo aparece normal) */
          .hero-enter-left,
          .hero-enter-right {
            opacity: 1;
            transform: none;
          }

          /* Desktop: começa invisível e entra depois */
          @media (min-width: 768px) {
            .hero-enter-left {
              opacity: 0;
              transform: translateX(-48px);
              animation: heroEnterLeft 1100ms ease-out forwards;
              animation-delay: var(--delay, 2s);
              will-change: transform, opacity;
            }

            .hero-enter-right {
              opacity: 0;
              transform: translateX(48px);
              animation: heroEnterRight 1100ms ease-out forwards;
              animation-delay: var(--delay, 2s);
              will-change: transform, opacity;
            }

            @keyframes heroEnterLeft {
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes heroEnterRight {
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-enter-left,
            .hero-enter-right {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>

        {/* FUNDO COM IMAGEM (MAPA) — APARECE IMEDIATO */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Mapa com veículos rastreados"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10">
          <div className="w-full px-6 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              {/* ESQUERDA — NO DESKTOP: SOME E ENTRA DEPOIS DE 2s */}
              <div
                className="hero-enter-left"
                style={{ "--delay": "2s" } as React.CSSProperties}
              >
                <p className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                  Monitoramento 24h • App • Alertas
                </p>

                <h1 className="mt-5 text-5xl font-extrabold tracking-tight md:text-6xl">
                  RASTREAMENTO
                  <br />
                  VEICULAR
                </h1>

                <p className="mt-4 max-w-xl text-white/80">
                  Proteja seu veículo com localização em tempo real, alertas
                  inteligentes e suporte. Planos acessíveis e instalação rápida.
                </p>

                {/* BENEFÍCIOS CURTOS — SOMENTE MOBILE (mantido) */}
                <div className="md:hidden mt-5 rounded-2xl border border-white/15 bg-black/35 p-4">
                  <div className="grid gap-2 text-sm text-white/90">
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-2 w-2 rounded-full bg-yellow-400" />
                      <span>Rastreio em tempo real + histórico</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-2 w-2 rounded-full bg-yellow-400" />
                      <span>Alertas: ignição, movimento e cerca</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-2 w-2 rounded-full bg-yellow-400" />
                      <span>Suporte 24h e instalação rápida</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 inline-flex flex-col rounded-2xl bg-red-600 px-10 py-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  <span className="text-sm text-white/90">A partir de</span>
                  <span className="text-6xl font-extrabold tracking-tight">
                    R$ 39,90
                  </span>
                  <span className="text-sm text-white/90">mensais</span>
                </div>

                {/* CHECKLIST CURTO — SOMENTE DESKTOP */}
                <div className="hidden md:block mt-5 max-w-xl">
                  <div className="grid gap-2 text-sm text-white/85">
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-2 w-2 rounded-full bg-yellow-400" />
                      <span>Localização em tempo real + histórico</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-2 w-2 rounded-full bg-yellow-400" />
                      <span>
                        Alertas: ignição, movimento, velocidade e cerca
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-[3px] h-2 w-2 rounded-full bg-yellow-400" />
                      <span>Instalação rápida + suporte para orientar</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-red-600 px-6 py-3 font-extrabold text-white hover:bg-red-500 transition-colors shadow-[0_14px_28px_rgba(0,0,0,0.25)]"
                  >
                    Chamar no WhatsApp
                  </a>

                  <Link
                    href="/planos"
                    className="rounded-xl bg-yellow-400 px-6 py-3 font-extrabold text-black hover:brightness-95 transition-colors shadow-[0_14px_28px_rgba(0,0,0,0.18)]"
                  >
                    Ver planos
                  </Link>
                </div>

                {/* PROVA SOCIAL — SOMENTE DESKTOP */}
                <div className="hidden md:flex mt-6 flex-wrap items-center gap-2 text-xs text-white/80">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    {SOCIAL_PROOF.vehicles}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    {SOCIAL_PROOF.rating}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-blue-300" />
                    {SOCIAL_PROOF.coverage}
                  </span>
                </div>

                <ul className="mt-8 space-y-2 text-sm text-white/80">
                  <li>• Localização em tempo real e histórico de rotas</li>
                  <li>• Alertas: ignição, movimento, velocidade e cerca</li>
                  <li>• Ideal para carro, moto, caminhão e frota</li>
                </ul>
              </div>

              {/* DIREITA — NO DESKTOP: SOME E ENTRA DEPOIS DE 2s */}
              <div
                className="rounded-2xl bg-yellow-400 p-7 shadow-2xl hero-enter-right"
                style={
                  { color: "#111", "--delay": "2s" } as React.CSSProperties
                }
              >
                <p className="text-center text-base font-extrabold">
                  Preencha para fazer uma cotação grátis
                </p>

                <form className="mt-6 space-y-4">
                  <Field label="Nome" name="name" placeholder="Seu nome" />
                  <Field
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="rastreatracker@outlook.com"
                  />
                  <Field
                    label="Telefone/WhatsApp"
                    name="phone"
                    placeholder="(54) 3642-1367"
                  />

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full rounded-xl bg-white px-4 py-3 text-center font-extrabold text-black hover:opacity-90"
                  >
                    ENVIAR
                  </a>

                  <p className="text-xs text-black/70">
                    Atendimento rápido e integração com CRM quando necessário.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESTANTE DO SITE (mantido igual ao teu) */}
      <section className="bg-white text-black">
        <div className="w-full px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-extrabold">
                  <span className="h-2 w-2 rounded-full bg-red-600" />
                  Sobre a Rastrea Tracker
                </div>

                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
                  Tecnologia + suporte humano para você ter{" "}
                  <span className="text-red-600">controle real</span>.
                </h2>

                <p className="mt-4 text-black/70 leading-relaxed">
                  A Rastrea Tracker atua com soluções de rastreamento e
                  monitoramento veicular, focada em segurança, praticidade e
                  gestão. Você acompanha tudo em tempo real pelo aplicativo e
                  portal web, com relatórios e alertas inteligentes — e conta
                  com atendimento para orientar quando precisar.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <StatCard
                    title="Monitoramento"
                    value="24h"
                    desc="com suporte"
                  />
                  <StatCard
                    title="App + Web"
                    value="Sim"
                    desc="acesso completo"
                  />
                  <StatCard
                    title="Cobertura"
                    value="Brasil"
                    desc="uso em viagens"
                  />
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-yellow-400 px-6 py-3 font-extrabold text-black hover:brightness-95 transition-colors"
                  >
                    Falar com um especialista
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-black/5 p-7 shadow-sm">
                <p className="text-sm font-extrabold text-black/80">
                  O que você ganha na prática
                </p>

                <ul className="mt-4 space-y-3 text-sm text-black/70">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Visualização de rotas e histórico com precisão
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Alertas de ignição, movimento, velocidade e cerca virtual
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Relatórios para gestão (uso pessoal ou frota)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Opções com identificador de motorista (RFID) e mais
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white">
                  <img
                    src={GANHOS_IMAGE}
                    alt="Plataforma no computador e no celular"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... segue o resto exatamente como já está no teu arquivo ... */}

      <footer className="border-t border-white/10">
        <div className="md:hidden w-full px-6 py-10 text-sm text-white/60">
          © {new Date().getFullYear()} Rastrea Tracker • Todos os direitos
          reservados.
        </div>

        <div className="hidden md:block">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <p className="text-sm font-extrabold text-white">
                  Rastrea Tracker
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Rastreamento veicular com app/web, alertas e suporte.
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/75">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                    {SOCIAL_PROOF.vehicles}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                    {SOCIAL_PROOF.coverage}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm font-extrabold text-white">Contato</p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>
                    <span className="text-white/50">WhatsApp:</span>{" "}
                    <a
                      className="hover:text-white"
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {CONTACT.whatsapp}
                    </a>
                  </li>
                  <li>
                    <span className="text-white/50">Telefone:</span>{" "}
                    <span className="text-white/70">{CONTACT.phone}</span>
                  </li>
                  <li>
                    <span className="text-white/50">E-mail:</span>{" "}
                    <span className="text-white/70">{CONTACT.email}</span>
                  </li>
                  <li>
                    <span className="text-white/50">Região:</span>{" "}
                    <span className="text-white/70">{CONTACT.city}</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-extrabold text-white">
                  Ações rápidas
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-red-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-red-500 transition"
                  >
                    Falar no WhatsApp
                  </a>
                  <Link
                    href="/planos"
                    className="rounded-xl bg-yellow-400 px-5 py-3 text-sm font-extrabold text-black hover:brightness-95 transition"
                  >
                    Ver planos
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
              © {new Date().getFullYear()} Rastrea Tracker • Todos os direitos
              reservados.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ----------------------- COMPONENTES AUXILIARES ----------------------- */

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-extrabold">{label} *</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-black/20 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/20"
      />
    </div>
  );
}

function StatCard({
  title,
  value,
  desc,
}: {
  title: string;
  value: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <p className="text-xs font-extrabold text-black/60">{title}</p>
      <p className="mt-2 text-2xl font-extrabold text-[#0a0f2b]">{value}</p>
      <p className="mt-1 text-sm text-black/60">{desc}</p>
    </div>
  );
}
