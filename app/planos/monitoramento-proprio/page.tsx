import SiteHeader from "../../components/SiteHeader";

const WHATSAPP =
  "https://wa.me/555436421367?text=Olá! Quero saber mais sobre Monitoramento Próprio.";

export default function MonitoramentoProprioPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* HERO */}
      <section
        className="relative h-[420px] md:h-[520px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('/automonitoramento-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Faça você mesmo o seu monitoramento
          </h1>

          <p className="mt-4 text-lg">Tenha controle total do seu veículo</p>

          {/* Alteração pedida: trocar o botão */}
          <a
            href="/planos/kit-rastreador"
            className="inline-block mt-8 bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-xl font-bold shadow-xl"
          >
            Adquira já o seu kit rastreador e faça o seu auto monitoramento
          </a>
        </div>
      </section>

      {/* COMO FUNCIONA (EDITADO - PROFISSIONAL E CLARO) */}
      <section className="bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0f2b]">
            Como funciona o Auto-Monitoramento
          </h2>

          <p className="mt-4 text-lg text-black/70 max-w-3xl">
            O plano de <strong>Auto-Monitoramento</strong> é ideal para quem
            busca economia e autonomia. Nesta modalidade, o{" "}
            <strong>próprio cliente</strong> realiza o acompanhamento do veículo
            usando nossa plataforma (app e web).
          </p>

          {/* Destaque importante */}
          <div className="mt-10 border-l-4 border-red-600 bg-red-50 p-6 rounded-r-xl">
            <p className="text-lg font-bold text-red-700">
              Este plano NÃO possui central de monitoramento 24 horas.
            </p>
            <p className="mt-2 text-lg text-black/80">
              O monitoramento é feito diretamente pelo cliente. Em caso de
              roubo/furto, o cliente deve acionar as autoridades.
            </p>
          </div>

          {/* Etapas */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl text-[#0a0f2b]">
                1. Aquisição do Kit Rastreador
              </h3>
              <p className="mt-3 text-lg text-black/80">
                O cliente compra o rastreador e se torna{" "}
                <strong>proprietário do equipamento</strong>.
              </p>
              <p className="mt-3 text-lg text-black/80">
                A instalação pode ser realizada por nossa equipe (com taxa) ou
                por um técnico qualificado de confiança.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl text-[#0a0f2b]">
                2. Plataforma + Chip de Dados
              </h3>
              <p className="mt-3 text-lg text-black/80">
                O cliente contrata o <strong>aluguel da plataforma</strong>{" "}
                (aplicativo e portal web) e o{" "}
                <strong>aluguel do chip M2M</strong> para conectividade do
                rastreador.
              </p>
              <ul className="mt-3 text-lg text-black/80 space-y-2">
                <li>• App para iOS e Android</li>
                <li>• Portal Web profissional</li>
                <li>• Alertas, relatórios e histórico</li>
              </ul>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl text-[#0a0f2b]">
                3. Modelo Pré-pago (sem fidelidade)
              </h3>
              <p className="mt-3 text-lg text-black/80">
                O serviço funciona em formato <strong>pré-pago</strong>: ao
                pagar, o cliente tem direito a <strong>30 dias</strong> de
                acesso à plataforma.
              </p>
              <p className="mt-3 text-lg text-black/80">
                Se não houver recarga, o acesso pode ser bloqueado. Após{" "}
                <strong>30 dias sem pagamento</strong>, o serviço pode ser
                cancelado.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl text-[#0a0f2b]">
                4. Monitoramento é responsabilidade do cliente
              </h3>
              <p className="mt-3 text-lg text-black/80">
                O cliente acompanha o veículo em tempo real, consulta histórico,
                recebe alertas e controla as informações diretamente no sistema.
              </p>
              <p className="mt-3 text-lg font-semibold text-red-600">
                Não realizamos monitoramento ativo do veículo e não oferecemos
                seguro.
              </p>
            </div>
          </div>

          {/* Suporte */}
          <div className="mt-14 bg-[#0a0f2b] text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">Suporte técnico</h3>
            <p className="mt-4 text-lg text-white/90">
              Oferecemos suporte em <strong>horário comercial</strong> para
              orientar no uso da plataforma, aplicativo e configurações do
              equipamento.
            </p>
            <p className="mt-4 text-lg font-bold text-yellow-400">
              O suporte não realiza monitoramento do veículo.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="/planos/kit-rastreador"
              className="inline-block bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg transition"
            >
              Adquirir Kit Rastreador
            </a>

            {/* ALTERAÇÃO: cor WhatsApp verde */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 mt-4 md:mt-0 md:ml-4 bg-[#25D366] hover:bg-[#1fb75a] text-white px-10 py-5 rounded-xl font-bold text-lg transition shadow-lg"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M19.11 17.43c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.33-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.55.12-.12.27-.31.41-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.48-.84-2.03-.22-.52-.45-.45-.61-.46l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.82.13.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.24.18 1.7.11.52-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31z" />
                  <path d="M16.03 2.67c-7.1 0-12.87 5.77-12.87 12.87 0 2.27.6 4.49 1.74 6.44L3 29.33l7.55-1.97a12.8 12.8 0 0 0 5.48 1.23h.01c7.1 0 12.87-5.77 12.87-12.87S23.13 2.67 16.03 2.67zm0 23.06h-.01c-1.73 0-3.42-.46-4.91-1.34l-.35-.2-4.48 1.17 1.2-4.37-.23-.36a10.64 10.64 0 0 1-1.62-5.67c0-5.9 4.8-10.7 10.7-10.7 5.9 0 10.7 4.8 10.7 10.7 0 5.9-4.8 10.7-10.7 10.7z" />
                </svg>
              </span>
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* VANTAGENS (ATUALIZADO: mais premium e organizado) */}
      <section className="bg-white text-black border-t">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-[#0a0f2b]">
                Vantagens do Automonitoramento
              </h2>
              <p className="mt-3 text-lg text-black/70">
                Ideal para quem quer economia e controle total.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm font-extrabold text-black/70">
              <span className="h-2 w-2 rounded-full bg-[#0a0f2b]" />
              Economia • Autonomia • Controle
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              "Custo muito menor que monitoramento tradicional",
              "Sem fidelidade",
              "Controle total do veículo",
              "Acesso pelo celular",
              "Acesso pelo computador",
              "Suporte técnico",
            ].map((text) => (
              <div
                key={text}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-green-600 text-white font-extrabold">
                    ✓
                  </span>
                  <p className="text-base font-semibold text-black/80">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUSO (ATUALIZADO: mais premium e organizado) */}
      <section className="bg-white text-black border-t">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold text-[#0a0f2b]">
            O que você terá acesso
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              "Aplicativo completo",
              "Plataforma Web",
              "Localização em tempo real",
              "Histórico completo",
              "Alertas",
              "Relatórios",
              "Chip de dados",
              "Suporte técnico",
            ].map((text) => (
              <div
                key={text}
                className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-black/[0.03] p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-[#0a0f2b] text-white font-extrabold">
                    ✓
                  </span>
                  <p className="text-base font-semibold text-black/80">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-500 transition"
          >
            Falar com especialista
          </a>
        </div>
      </section>

      {/* IMPORTANTE (ATUALIZADO: destacar pontos essenciais) */}
      <section className="bg-[#0a0f2b] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold">Importante</h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg">
                A <strong>Rastrea Tracker</strong> não trabalha com{" "}
                <strong>seguro</strong>.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg">
                <strong>Não realizamos monitoramento</strong> do veículo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-lg">
                O <strong>cliente é responsável</strong> pelo monitoramento e
                por <strong>acionar as autoridades</strong> em caso de
                roubo/furto.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
            <p className="text-lg font-extrabold text-yellow-300">Atenção:</p>
            <p className="mt-2 text-lg text-white/90">
              Em caso de roubo/furto, utilize as informações do sistema para
              apoiar a ocorrência, mas o acionamento das autoridades é sempre do{" "}
              <strong>cliente</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="px-6 py-10 text-center text-white/60">
          © 2026 Rastrea Tracker
        </div>
      </footer>
    </main>
  );
}
