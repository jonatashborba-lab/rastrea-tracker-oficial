"use client";

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const WHATSAPP =
  "https://wa.me/555436421367?text=Olá! Quero comprar o Kit Rastreador.";

export default function KitRastreadorPage() {
  return (
    <main className="bg-white text-black">
      <SiteHeader />

      {/* TOPO (sem hero) */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* TEXTO */}
          <div>
            <p className="text-sm text-black/55">
              Kit Rastreador • Compra do equipamento
            </p>

            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-[#0a0f2b]">
              Kit Rastreamento Veicular
            </h1>

            <div className="w-20 h-1 bg-yellow-400 mt-4 mb-6 rounded-full" />

            <p className="text-lg leading-relaxed text-black/70">
              Tenha segurança, controle e tranquilidade no dia a dia. Acompanhe
              o veículo em tempo real, veja histórico de trajetos, receba
              alertas e gerencie tudo pelo celular ou computador.
            </p>

            {/* PLANO SEM FIDELIDADE + BOTÕES */}
            <div className="mt-10 p-6 rounded-2xl border border-black/10 bg-white shadow-sm relative overflow-hidden">
              {/* brilho discreto */}
              <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-yellow-200/40 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-red-200/30 blur-2xl" />

              <h2 className="text-xl font-extrabold text-[#0a0f2b]">
                Planos sem fidelidade
              </h2>

              <p className="mt-3 text-black/70">
                Aqui você tem liberdade: cancele quando quiser, sem pegadinhas,
                sem multa e sem taxas ocultas.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/planos"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-extrabold bg-[#0a0f2b] text-white hover:opacity-90 transition shadow-sm"
                >
                  Escolher meu plano agora
                </Link>

                {/* BOTÃO MAIS DESTACADO (sem mudar texto) */}
                <Link
                  href="/planos/monitoramento-proprio"
                  className="group inline-flex items-center justify-center rounded-xl px-5 py-3 font-extrabold text-[#0a0f2b]
                             bg-yellow-400 hover:bg-yellow-300 transition shadow-sm
                             ring-1 ring-black/10"
                >
                  <span className="relative">
                    Saiba como funciona
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-[#0a0f2b]/70 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>

            {/* OFERTA / PREÇO */}
            <div className="mt-10 rounded-2xl border border-black/10 bg-white shadow-sm p-6">
              <p className="text-sm text-black/55">Oferta do kit</p>

              <div className="mt-2 flex items-end gap-3 flex-wrap">
                <div className="text-4xl font-extrabold text-[#0a0f2b]">
                  R$ 350,00
                </div>
                <div className="text-green-700 font-semibold">
                  instalação grátis*
                </div>
              </div>

              <p className="mt-2 text-lg text-black/70">
                Em até <span className="font-bold text-black">6x</span> no
                cartão
              </p>

              {/* MÉTODOS — MAIS DESTACADOS (negrito e “chips” melhores) */}
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <PayPill>Visa</PayPill>
                <PayPill>Master</PayPill>
                <PayPill>Elo</PayPill>
                <PayPill>Hipercard</PayPill>
                <PayPill>Pix</PayPill>
                <PayPill>Boleto</PayPill>
              </div>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center mt-6 w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-extrabold shadow-md transition"
              >
                Comprar no WhatsApp
              </a>

              <p className="mt-4 text-xs text-black/55">
                *Condições podem variar conforme veículo/região.
              </p>
            </div>

            {/* MENSALIDADE APÓS 30 DIAS */}
            <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
              <h3 className="font-extrabold text-[#0a0f2b]">
                Importante: após os 30 dias
              </h3>

              <p className="mt-2 text-black/70">
                O kit inclui{" "}
                <span className="font-bold">30 dias de rastreamento</span>. Após
                esse período, você paga somente a mensalidade do aluguel da
                plataforma e do chip de dados:
              </p>

              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <div className="px-4 py-2 rounded-xl bg-white border border-black/10 font-extrabold text-[#0a0f2b]">
                  R$ 39,90 / mês
                </div>

                {/* “sem fidelidade” em negrito */}
                <span className="text-sm font-extrabold text-[#0a0f2b]">
                  sem fidelidade
                </span>
              </div>
            </div>
          </div>

          {/* IMAGEM DO KIT */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-2xl border border-black/10 bg-white shadow-sm p-6">
              <div className="text-sm text-black/55 mb-3">Imagem do Kit</div>

              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="/kit-rastreador.png"
                  alt="Kit Rastreador"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <MiniPill title="Rastreador" subtitle="GPS" />
                <MiniPill title="Chip" subtitle="M2M" />
                <MiniPill title="Acesso" subtitle="App + Web" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-[#0a0f2b] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold text-center">
            Por que instalar um rastreador veicular?
          </h2>

          <p className="mt-4 text-center text-white/70 max-w-3xl mx-auto">
            Segurança, controle e informação em tempo real para proteger seu
            veículo e otimizar seu dia a dia.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              title="Localização em tempo real"
              desc="Acompanhe o veículo ao vivo pelo celular ou computador, quando quiser."
            />
            <FeatureCard
              title="Mais chances de recuperação"
              desc="Rastreamento ajuda a agir mais rápido em situações de roubo ou furto."
            />
            <FeatureCard
              title="Alertas inteligentes"
              desc="Receba notificações e avisos importantes direto no app."
            />
            <FeatureCard
              title="Controle e autonomia"
              desc="Você decide como acompanhar e quando consultar informações."
            />
            <FeatureCard
              title="Histórico e relatórios"
              desc="Consulte rotas, paradas, tempos e relatórios para controle completo."
            />
            <FeatureCard
              title="Custo-benefício premium"
              desc="Tecnologia profissional com investimento acessível e sem pegadinhas."
            />
          </div>
        </div>
      </section>

      {/* FAQ (abre/fecha) */}
      <section className="bg-white text-black border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-extrabold text-[#0a0f2b]">
            Dúvidas frequentes
          </h2>

          <p className="mt-3 text-black/70">
            Clique em uma pergunta para ver a resposta.
          </p>

          <div className="mt-10 space-y-4">
            <FaqItem
              q="Tem fidelidade?"
              a="Não. Você pode cancelar quando quiser, sem multa e sem taxas ocultas."
            />
            <FaqItem
              q="A instalação é obrigatória com vocês?"
              a="Não. Você pode instalar conosco (conforme combinado) ou com um técnico qualificado."
            />
            <FaqItem
              q="Funciona em todo o Brasil?"
              a="Sim, com cobertura nacional (a disponibilidade pode variar conforme sinal na região)."
            />
            <FaqItem
              q="Esse kit inclui monitoramento 24h?"
              a="O kit inclui 30 dias de rastreamento. Após 30 dias, você paga somente a mensalidade (plataforma + chip)."
            />
            <FaqItem
              q="Depois de 30 dias, quanto pago?"
              a="Após os 30 dias iniciais, você paga apenas a mensalidade de R$ 39,90 referente ao aluguel da plataforma e do chip de dados."
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white text-black border-t border-black/5">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-[#0a0f2b]">
            Garanta já o seu Kit Rastreador
          </h2>

          <p className="mt-4 text-black/70">
            Proteção e controle em tempo real com tecnologia profissional.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-xl font-extrabold shadow-md transition"
            >
              Comprar agora no WhatsApp
            </a>

            {/* “Ver planos” com cor (sem mudar texto) */}
            <Link
              href="/planos"
              className="inline-flex items-center justify-center bg-[#0a0f2b] text-white hover:opacity-90 px-10 py-4 rounded-xl font-extrabold transition shadow-sm"
            >
              Ver planos
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white border-t border-white/10">
        <div className="px-6 py-10 text-center text-white/60">
          © {new Date().getFullYear()} Rastrea Tracker
        </div>
      </footer>
    </main>
  );
}

/* ---------- COMPONENTES ---------- */

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="text-green-400 text-2xl font-extrabold">✓</div>
      <h3 className="mt-3 font-extrabold text-lg">{title}</h3>
      <p className="mt-2 text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function MiniPill({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white px-3 py-3">
      <div className="text-xs text-black/55">{title}</div>
      <div className="font-extrabold text-[#0a0f2b]">{subtitle}</div>
    </div>
  );
}

function PayPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 rounded-full border border-black/15 bg-white font-bold text-[#0a0f2b] shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      {children}
    </span>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
        <span className="font-extrabold text-[#0a0f2b]">{q}</span>
        <span className="text-black/50 group-open:rotate-180 transition">
          ▾
        </span>
      </summary>
      <div className="mt-3 text-black/70 leading-relaxed">{a}</div>
    </details>
  );
}
