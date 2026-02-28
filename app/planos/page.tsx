import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export default function PlanosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

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
            Planos Automonitoramento sem Central 24hs, aplicativo e suporte.
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

          {/* DIVISOR */}

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

        <p className="text-5xl font-extrabold tracking-tight">R$ 49,90</p>

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
