import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

const WHATSAPP =
  "https://wa.me/555436421367?text=Olá! Quero uma cotação de rastreamento para frota.";

export default function FrotaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* HERO */}
      <section
        className="relative h-[420px] md:h-[280px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url('/frota-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-4xl font-extrabold drop-shadow-lg">
            Rastreamento para frotas
          </h1>

          <p className="mt-4 text-white/90 text-lg drop-shadow">
            Gestão completa, segurança e controle total da sua frota com
            controle de combustivel e indentificador de motorista
          </p>

          {/* BOTÃO REMOVIDO CONFORME SOLICITADO */}
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* ESQUERDA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0b0b0b]">
                O melhor rastreamento para gestão de frotas com segurança total
              </h2>

              <p className="mt-6 text-black/80 leading-relaxed text-lg">
                Ideal para empresas que desejam controle completo dos veículos,
                redução de custos operacionais e aumento da produtividade.
              </p>

              <div className="mt-10">
                <Image
                  src="/frota.png"
                  alt="Frota"
                  width={820}
                  height={520}
                  className="w-full h-auto"
                />
              </div>

              <p className="mt-8 text-black/80 leading-relaxed text-lg">
                Monitore sua frota em tempo real, receba alertas, gere
                relatórios completos e tenha total controle da operação.
              </p>
            </div>

            {/* BOX PLANO */}
            <aside className="rounded-2xl border border-black/10 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
              <div className="bg-[#0a0f2b] text-white px-6 py-5 text-center font-extrabold">
                Plano Rastreamento Completo
              </div>

              <div className="bg-[#0a0f2b] text-white px-6 py-10 text-center">
                <div className="text-white/80 text-sm">A partir de:</div>

                <div className="mt-2 text-6xl font-extrabold">R$ 49,90</div>

                <div className="mt-2 text-white/80 text-sm">
                  + taxa de instalação
                </div>
              </div>

              <div className="bg-white">
                <ul className="divide-y divide-black/10">
                  {[
                    "Monitoramento em tempo real",
                    "Controle completo da frota",
                    "Central 24 horas",
                    "Relatórios gerenciais",
                    "Alertas inteligentes",
                    "Histórico de rotas",
                    "Aplicativo e Portal Web",
                    "Redução de custos",
                    "Suporte técnico especializado",
                  ].map((item) => (
                    <li
                      key={item}
                      className="px-6 py-4 flex items-center gap-3"
                    >
                      <span className="text-green-600 text-lg font-bold">
                        ✓
                      </span>

                      <span className="text-black/80">{item}</span>
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
              Saiba como o rastreamento veicular da Rastrea Tracker pode te
              ajudar
            </h3>

            <p className="mt-6 text-black/80 leading-relaxed text-lg">
              Chega de medo na hora de monitorar todos os veículos da sua
              empresa. Nós vamos te proporcionar o melhor serviço de
              rastreamento e monitoramento de frota do mercado, utilizamos
              rastreadores homologados e chips de operadoras com os melhores
              sinais. Temos clientes que possuem seguro e colocam nosso
              rastreador e clientes que até mesmo utilizam dois rastreadores
              devido a precisão e segurança de nosso rastreamento. Conte com um
              sistema de alta qualidade para localizar seus veículos, gerar
              relatórios, monitorar plataforma/rampa, verificar percursos,
              alertas, bloqueio, aplicativo e muito mais. Dessa forma, você terá
              um aumento na chance de recuperar seus veículos e também realizar
              um monitoramento veicular completo. Com valores abaixo de R$2,00
              por dia, você já garante todos esses e muitos outros benefícios.
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
          © {new Date().getFullYear()} Rastrea Tracker • Todos os direitos
          reservados.
        </div>
      </footer>
    </main>
  );
}
