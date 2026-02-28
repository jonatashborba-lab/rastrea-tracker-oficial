"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0a0f2b] border-b border-white/10">
      {/* =========================
          DESKTOP (md+)
          (NÃO ALTERAR)
         ========================= */}
      <div className="hidden md:flex w-full items-center justify-between h-[64px]">
        {/* LOGO (desktop -15%) */}
        <div className="pl-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Rastrea Tracker"
              width={340}
              height={90}
              priority
              className="object-contain w-[234px]"
            />
          </Link>
        </div>

        {/* MENU DESKTOP — ESPAÇAMENTO AJUSTADO */}
        <nav className="flex items-center gap-5 lg:gap-6 text-white font-semibold text-xs">
          <Link href="/" className="hover:text-yellow-400 transition">
            INÍCIO
          </Link>
          <Link href="/empresa" className="hover:text-yellow-400 transition">
            EMPRESA
          </Link>
          <Link href="/carro" className="hover:text-yellow-400 transition">
            CARRO
          </Link>
          <Link href="/moto" className="hover:text-yellow-400 transition">
            MOTO
          </Link>
          <Link
            href="/motorista-app"
            className="hover:text-yellow-400 transition"
          >
            MOTORISTA APP
          </Link>
          <Link href="/frota" className="hover:text-yellow-400 transition">
            FROTA
          </Link>
          <Link href="/planos/monitoramento-proprio">
            MONITORAMENTO PRÓPRIO
          </Link>
          <Link href="/planos" className="hover:text-yellow-400 transition">
            PLANOS
          </Link>
          <Link href="/planos/kit-rastreador">KIT RASTREADOR</Link>
        </nav>

        {/* BOTÃO LOG CLIENTE — NÃO ALTERADO */}
        <div className="pr-6">
          <a
            href="https://sp.tracker-net.app/authentication/create"
            target="_blank"
            rel="noreferrer"
            className="
              bg-yellow-500
              hover:bg-yellow-400
              text-black
              font-bold
              px-2
              py-[3px]
              text-[10px]
              rounded-md
              whitespace-nowrap
            "
          >
            LOG CLIENTE
          </a>
        </div>
      </div>

      {/* =========================
          MOBILE - ALTERAÇÕES SOMENTE AQUI
         ========================= */}
      <div className="md:hidden">
        {/* (1) Cabeçalho mobile um pouco menor: py[2px] -> py[1px] */}
        <div className="w-full flex items-center justify-between py-[1px] relative">
          <div className="pl-3">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Rastrea Tracker"
                width={340}
                height={90}
                priority
                className="object-contain w-[180px]"
              />
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2 pr-3">
            <a
              href="https://sp.tracker-net.app/authentication/create"
              target="_blank"
              rel="noreferrer"
              className="
                bg-yellow-500
                text-black
                font-bold
                px-3 py-1.5
                text-xs
                rounded-md
                whitespace-nowrap
              "
            >
              LOG CLIENTE
            </a>

            {/* (3) Sobe o ícone ~2px */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl relative -top-[2px]"
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="bg-[#0a0f2b] border-t border-white/10">
            {/* (2) Menu aberto mais compacto: py-2.5 -> py-2 */}
            <nav className="flex flex-col text-white text-sm font-semibold">
              <Link
                onClick={() => setMenuOpen(false)}
                href="/"
                className="px-4 py-2 border-b border-white/10"
              >
                INÍCIO
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                href="/empresa"
                className="px-4 py-2 border-b border-white/10"
              >
                EMPRESA
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                href="/carro"
                className="px-4 py-2 border-b border-white/10"
              >
                CARRO
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                href="/moto"
                className="px-4 py-2 border-b border-white/10"
              >
                MOTO
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                href="/motorista-app"
                className="px-4 py-2 border-b border-white/10"
              >
                MOTORISTA APP
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                href="/frota"
                className="px-4 py-2 border-b border-white/10"
              >
                FROTA
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                href="/planos/monitoramento-proprio"
                className="px-4 py-2"
              >
                MONITORAMENTO PRÓPRIO
              </Link>

              <Link
                onClick={() => setMenuOpen(false)}
                href="/planos"
                className="px-4 py-2 border-b border-white/10"
              >
                PLANOS
              </Link>
              <Link
                onClick={() => setMenuOpen(false)}
                href="/planos/kit-rastreador"
                className="px-4 py-2 border-b border-white/10"
              >
                KIT RASTREADOR
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
