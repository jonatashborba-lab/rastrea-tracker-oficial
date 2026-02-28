import Image from "next/image";
import SiteHeader from "../components/SiteHeader";

const WHATSAPP =
  "https://wa.me/555436421367?text=Olá! Quero uma cotação de rastreador para motorista de aplicativo.";

export default function MotoristaAppPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header padrão */}
      <SiteHeader />

      {/* HERO */}
      <section
        className="relative h-[420px] md:h-[280px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.28)), url('/motorista-app-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-4xl font-extrabold drop-shadow-lg">
            Rastreamento para motorista de aplicativo
          </h1>

          <p className="mt-4 text-white/90 text-lg drop-shadow">
            Adquira o Rastreamento para motorista de aplicativo sem necessidade
            de comprar o equipamento
          </p>

          {/* REMOVIDO: botão "Quero cotação no WhatsApp" no HERO */}
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* ESQUERDA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0b0b0b]">
                O melhor rastreador para motorista de aplicativo com bloqueio e
                preço justo!
              </h2>

              <p className="mt-6 text-black/80 leading-relaxed text-lg">
                Esse plano é ideal para você que é motorista de aplicativo
                (uber, 99, cabify, uber eats, easy taxi, ifood etc.) e não tem
                uma segurança em seu veículo ou deseja ainda mais, tenha um
                desconto a mais na adesão, queremos valorizar você que utiliza
                do veículo para trabalhar!
              </p>

              <div className="mt-10">
                <Image
                  src="/motorista-app.png"
                  alt="Apps: Uber, 99, Cabify, Easy Taxi"
                  width={820}
                  height={520}
                  className="w-full h-auto"
                />
              </div>

              <p className="mt-8 text-black/80 leading-relaxed text-lg">
                Somente na Rastrea Tracker você tem o rastreamento veicular e
                sistema de bloqueio (opcional) com suporte e cobertura para te
                auxiliar no dia a dia.
              </p>
            </div>

            {/* DIREITA (PLANO ALTERADO) */}
            <aside className="rounded-2xl border border-black/10 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
              {/* NOME DO PLANO */}
              <div className="bg-[#0a0f2b] text-white px-6 py-5 text-center font-extrabold">
                PLANO RASTREAMENTO COMPLETO
              </div>

              {/* PREÇO */}
              <div className="bg-[#0a0f2b] text-white px-6 py-10 text-center">
                <div className="text-white/80 text-sm">A partir de:</div>

                <div className="mt-2 text-6xl font-extrabold">R$ 49,90</div>

                <div className="text-white/80 text-sm mt-2">
                  + taxa de instalação
                </div>
              </div>

              {/* LISTA */}
              <div className="bg-white">
                <ul className="divide-y divide-black/10">
                  {[
                    "Cobertura nacional",
                    "Central 24 horas",
                    "Bloqueio",
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

                {/* BOTÃO */}
                <div className="p-6">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full rounded-xl bg-yellow-400 px-6 py-4 text-center font-extrabold text-black hover:bg-yellow-300 transition shadow"
                  >
                    Adquirir agora
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* TEXTO FINAL (NÃO ALTERADO) */}
          <div className="mt-16">
            <h3 className="text-3xl font-extrabold text-[#0a0f2b]">
              Saiba como o rastreamento veicular Rastrea Tracker pode te ajudar
            </h3>

            <p className="mt-4 text-black/80 leading-relaxed text-lg">
              Chega de medo na hora de andar com seu veículo no aplicativo. Nós
              vamos te proporcionar o melhor serviço de rastreamento do mercado,
              utilizamos rastreadores homologados e chips de operadoras com os
              melhores sinais. Temos clientes que possuem seguro e colocam nosso
              rastreador e clientes que até mesmo utilizam dois rastreadores
              devido a precisão e segurança de nosso rastreamento. Conte com um
              sistema de alta qualidade para localizar seu veículo, gerar
              relatórios, verificar percursos, alertas, bloqueio, aplicativo e
              muito mais. Dessa forma, você terá um aumento na chance de
              recuperar seu veículo e também realizar um monitoramento veicular
              completo.
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
