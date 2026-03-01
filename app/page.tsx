"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";
import Image from "next/image";

const WHATSAPP =
  "https://wa.me/555436421367?text=Ol%C3%A1!%20Quero%20uma%20cota%C3%A7%C3%A3o%20de%20rastreamento%20veicular.";

const GANHOS_IMAGE = "/ganhos.png";
const HERO_IMAGE = "/hero-bg.jpg";

/** Ajustes */
const SOCIAL_PROOF = {
  vehicles: "+ de 1.000 veículos rastreados",
  rating: "Atendimento rápido",
  coverage: "Cobertura nacional",
};

const CONTACT = {
  phone: "(54) 3642-1367",
  whatsapp: "(54) 3642-1367",
  email: "rastreatracker@outlook.com",
  city: "Caxias do Sul • RS",
};

const CIDADES_SERRA_GAUCHA = [
  "Caxias do Sul",
  "Bento Gonçalves",
  "Farroupilha",
  "Flores da Cunha",
  "Gramado",
  "Canela",
  "Nova Petrópolis",
  "Carlos Barbosa",
  "Garibaldi",
  "Feliz",
  "São Vendelino",
  "Bom Princípio",
  "Vacaria",
  "São Marcos",
  "Veranópolis",
  "Antônio Prado",
];

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
        {/* CSS puro */}
        <style>{`
          /* Mobile: conteúdo aparece normal */
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
                  inteligentes e suporte. Planos acessíveis e instalação rápida
                  em Caxias do Sul e Serra Gaúcha.
                </p>

                {/* BENEFÍCIOS CURTOS — SOMENTE MOBILE */}
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
                      <span>Suporte e instalação rápida</span>
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
                  Cotação grátis Caxias do Sul e Serra Gaúcha
                </p>

                <form className="mt-6 space-y-4">
                  <Field label="Nome" name="name" placeholder="Seu nome" />
                  <Field
                    label="Telefone/WhatsApp"
                    name="phone"
                    placeholder="(54) 3642-1367"
                  />
                  <Field
                    label="Cidade"
                    name="city"
                    placeholder="Ex: Caxias do Sul, Farroupilha..."
                  />

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full rounded-xl bg-white px-4 py-3 text-center font-extrabold text-black hover:opacity-90"
                  >
                    ENVIAR NO WHATSAPP
                  </a>

                  <p className="text-xs text-black/70">
                    Atendemos {CIDADES_SERRA_GAUCHA.slice(0, 6).join(", ")} e
                    região.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SEO LOCAL — APÓS O HERO (mapa) */}
      <section className="bg-white text-black">
        <div className="w-full px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-extrabold">
                  <span className="h-2 w-2 rounded-full bg-red-600" />
                  Rastreamento veicular na Serra Gaúcha
                </div>

                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
                  Rastreamento veicular em{" "}
                  <span className="text-red-600">Caxias do Sul</span> e cidades
                  próximas
                </h2>

                <p className="mt-4 text-black/70 leading-relaxed">
                  A Rastrea Tracker atende Caxias do Sul e toda a Serra Gaúcha
                  com rastreamento veicular, app/web, alertas inteligentes e
                  histórico completo. É ideal para carro, moto, caminhão e frota
                  com instalação rápida e suporte para orientar.
                </p>

                <p className="mt-4 text-black/70 leading-relaxed">
                  Atendemos:{" "}
                  <span className="font-semibold">
                    {CIDADES_SERRA_GAUCHA.join(", ")}.
                  </span>
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/planos"
                    className="rounded-xl bg-yellow-400 px-6 py-3 font-extrabold text-black hover:brightness-95 transition"
                  >
                    Ver planos na região
                  </Link>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-red-600 px-6 py-3 font-extrabold text-white hover:bg-red-500 transition"
                  >
                    Cotação por WhatsApp
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
                <p className="text-sm font-extrabold text-black/80">
                  Por que as pessoas escolhem a Rastrea Tracker?
                </p>

                <ul className="mt-4 space-y-3 text-sm text-black/70">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Rastreio em tempo real + histórico
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Alertas de ignição, movimento, velocidade e cerca
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Ideal para uso pessoal e gestão de frota
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE A EMPRESA */}
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
                  portal web, com relatórios e alertas inteligentes e conta com
                  suporte 24h quando precisar.
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

              {/* Card visual (com imagem) */}
              <div className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-black/5 p-7 shadow-sm">
                <p className="text-sm font-extrabold text-black/80">
                  O que você ganha na prática
                </p>

                <ul className="mt-4 space-y-3 text-sm text-black/70">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Visualização de rotas e histórico com precisão, controle de
                    combustivel, indentificador de motorista
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Alertas de ignição, movimento, velocidade e cerca virtual
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Relatórios para gestão (uso pessoal ideal para motoristas de
                    aplicativos ou frota)
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                    Opções com identificador de motorista (RFID) e mais
                  </li>
                </ul>

                {/* ✅ trocado img por Image */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white">
                  <Image
                    src={GANHOS_IMAGE}
                    alt="Plataforma no computador e no celular"
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="bg-black text-white">
        <div className="w-full px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-extrabold text-white/90">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  Soluções que oferecemos
                </div>

                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
                  Rastreamento para{" "}
                  <span className="text-yellow-400">cada tipo de veículo</span>—
                  com funções avançadas.
                </h2>

                <p className="mt-3 max-w-3xl text-white/75 leading-relaxed">
                  Atendemos carro, moto, caminhão maquinas agricolas e frotas.
                  Você escolhe o plano ideal e ativa recursos como cerca
                  eletrônica, ancoragem, alertas inteligentes, relatórios,
                  histórico completo e opções com identificador de motorista.
                </p>
              </div>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-red-600 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-red-500 transition-colors md:mt-0 md:w-auto"
              >
                Pedir cotação agora
              </a>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <SolutionCard
                title="Carro"
                desc="Proteção e alertas em tempo real."
              >
                <IconCar />
              </SolutionCard>
              <SolutionCard title="Moto" desc="Rastreamento leve e eficiente.">
                <IconMoto />
              </SolutionCard>
              <SolutionCard
                title="Caminhão"
                desc="Controle de rotas e operação."
              >
                <IconTruck />
              </SolutionCard>
              <SolutionCard title="Frota" desc="Gestão completa e relatórios.">
                <IconChart />
              </SolutionCard>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <p className="text-sm font-extrabold text-white/90">
                  Funções do equipamento (exemplos)
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-white/75">
                  <Feature>• Cerca eletrônica (geofence)</Feature>
                  <Feature>• Ancoragem (alerta de movimento)</Feature>
                  <Feature>• Ignição / motor ligado</Feature>
                  <Feature>• Alerta de velocidade</Feature>
                  <Feature>• Histórico de rotas</Feature>
                  <Feature>• Relatórios de paradas</Feature>
                  <Feature>• Controle de Combustivel</Feature>
                  <Feature>• Controle de Manutençao do Veiculo</Feature>
                  <Feature>• Identificador de motorista (RFID)</Feature>
                  <Feature>• Gestão por grupos / veículos</Feature>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-7">
                <p className="text-sm font-extrabold text-white/90">
                  Como funciona na prática
                </p>

                <ol className="mt-4 space-y-3 text-sm text-white/75">
                  <li className="flex gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-black font-extrabold">
                      1
                    </span>
                    Você escolhe o tipo de veículo e o plano ideal.
                  </li>
                  <li className="flex gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-black font-extrabold">
                      2
                    </span>
                    Instalamos e configuramos alertas e preferências.
                  </li>
                  <li className="flex gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-yellow-400 text-black font-extrabold">
                      3
                    </span>
                    Você acompanha no app/web e recebe notificações.
                  </li>
                </ol>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/planos"
                    className="rounded-xl bg-white px-6 py-3 font-extrabold text-black hover:opacity-90 transition"
                  >
                    Ver planos
                  </Link>
                  <Link
                    href="/frota"
                    className="rounded-xl border border-white/20 px-6 py-3 font-extrabold text-white hover:bg-white/10 transition"
                  >
                    Solução para frota
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="bg-white text-black">
        <div className="w-full px-6 py-14">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Vantagens do rastreamento veicular para Frotas
          </h2>
          <p className="mt-2 text-center text-black/70">
            Conheça as vantagens que o rastreamento da Rastrea Tracker te
            proporciona
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <Benefit
              title="Mais segurança"
              desc="Mais controle e proteção no dia a dia, redução de custos operacionais."
            >
              <IconShield />
            </Benefit>
            <Benefit
              title="Central 24h"
              desc="Prontidão para auxiliar em casos de furto ou roubo."
            >
              <IconClock />
            </Benefit>
            <Benefit
              title="App na sua mão"
              desc="Acompanhe pelo smartphone e portal web."
            >
              <IconPhone />
            </Benefit>
            <Benefit
              title="Alertas inteligentes"
              desc="Ignição, movimento, velocidade e cerca."
            >
              <IconBell />
            </Benefit>
            <Benefit
              title="Cobertura nacional"
              desc="Acompanhe onde estiver no território nacional."
            >
              <IconPin />
            </Benefit>
            <Benefit
              title="Relatórios"
              desc="Percursos, paradas, histórico para gestão e bloqueio a distancia."
            >
              <IconDoc />
            </Benefit>
            <Benefit
              title="Ideal para frotas"
              desc="Organize rotas e reduza custos operacionais."
            >
              <IconTruck />
            </Benefit>
            <Benefit
              title="Gestão e controle"
              desc="Indicadores e visão completa para decidir melhor."
            >
              <IconChart />
            </Benefit>
          </div>
        </div>
      </section>

      {/* SAIBA COMO */}
      <section className="bg-white text-black">
        <div className="w-full px-6 pb-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a0f2b]">
              Saiba como o rastreamento veicular da Rastrea Tracker pode te
              ajudar
            </h2>

            <p className="mt-4 text-black/70 leading-relaxed">
              Chega de medo na hora de andar com seu veículo. Nós usamos
              rastreadores homologados na anatel e chips M2M das melhores
              operadoras com bons sinais. Com um sistema de alta qualidade,
              Rastreadores 4G e você consegue localizar, gerar relatórios,
              verificar percursos, receber alertas e ter muito mais controle no
              dia a dia. Dessa forma, você aumenta as chances de recuperação em
              caso de roubo ou furto e melhora a gestão do seu veículo ou frota.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-red-600 px-6 py-3 font-extrabold text-white hover:bg-red-500 transition"
              >
                Fale conosco no WhatsApp
              </a>

              <Link
                href="/planos"
                className="rounded-xl bg-yellow-400 px-6 py-3 font-extrabold text-black hover:brightness-95 transition"
              >
                Ver planos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

function Benefit({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-black/10 bg-white shadow-sm">
        {children}
      </div>
      <p className="mt-4 text-lg font-extrabold">{title}</p>
      <p className="mt-2 text-sm text-black/70">{desc}</p>
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

function SolutionCard({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-400 text-black">
          {children}
        </div>
        <div>
          <p className="text-lg font-extrabold">{title}</p>
          <p className="text-sm text-white/75">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Feature({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      {children}
    </div>
  );
}

/* ---------------------------- ÍCONES SVG ---------------------------- */

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function IconShield() {
  return (
    <Svg>
      <path d="M12 2l7 4v6c0 5-3 9-7 10C8 21 5 17 5 12V6l7-4z" />
      <path d="M9 12l2 2 4-5" />
    </Svg>
  );
}
function IconClock() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </Svg>
  );
}
function IconPhone() {
  return (
    <Svg>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 19h2" />
    </Svg>
  );
}
function IconBell() {
  return (
    <Svg>
      <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M9.5 19a2.5 2.5 0 005 0" />
    </Svg>
  );
}
function IconPin() {
  return (
    <Svg>
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  );
}
function IconDoc() {
  return (
    <Svg>
      <path d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8l-5-6z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </Svg>
  );
}
function IconTruck() {
  return (
    <Svg>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </Svg>
  );
}
function IconChart() {
  return (
    <Svg>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16v-5" />
      <path d="M12 19v-9" />
      <path d="M16 19v-7" />
    </Svg>
  );
}

function IconCar() {
  return (
    <Svg>
      <path d="M3 15l1-5a3 3 0 013-2h10a3 3 0 013 2l1 5" />
      <path d="M5 15v3" />
      <path d="M19 15v3" />
      <circle cx="7" cy="18" r="1" />
      <circle cx="17" cy="18" r="1" />
    </Svg>
  );
}
function IconMoto() {
  return (
    <Svg>
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="17" r="3" />
      <path d="M10 17l2-6h3l2 3" />
      <path d="M12 11h-2l-2 3" />
    </Svg>
  );
}
