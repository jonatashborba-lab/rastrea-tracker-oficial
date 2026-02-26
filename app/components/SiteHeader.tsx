"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-[#0a0f2b] border-b border-white/10">
      {/* container ocupa 100% */}
      <div className="w-full flex items-center justify-between py-4">
        {/* LOGO — EXTREMO ESQUERDO */}
        <div className="pl-2 md:pl-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Rastrea Tracker"
              width={340}
              height={90}
              priority
              className="object-contain cursor-pointer hover:scale-[1.03] transition"
            />
          </Link>
        </div>

        {/* MENU CENTRAL */}
        <nav className="hidden md:flex items-center gap-8 text-white font-semibold text-sm">
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

          <Link href="/frota" className="hover:text-yellow-400 transition">
            FROTA
          </Link>

          <Link href="/planos" className="hover:text-yellow-400 transition">
            PLANOS
          </Link>

          <Link
            href="/planos/monitoramento-proprio"
            className="hover:text-yellow-400 transition"
          >
            MONITORAMENTO PRÓPRIO
          </Link>

          <Link
            href="/planos/kit-rastreador"
            className="hover:text-yellow-400 transition"
          >
            KIT RASTREADOR
          </Link>
        </nav>

        {/* BOTÃO LOG CLIENTE — MENOR E COM RESPIRO DIREITA */}
        <div className="pr-3 md:pr-6">
          <a
            href="https://sp.tracker-net.app/authentication/create"
            target="_blank"
            rel="noreferrer"
            className="
              bg-yellow-500 hover:bg-yellow-400
              text-black font-extrabold
              px-3 py-1.5
              rounded-md
              text-xs
              shadow-md
              transition
              whitespace-nowrap
            "
          >
            LOG CLIENTE
          </a>
        </div>
      </div>
    </header>
  );
}
