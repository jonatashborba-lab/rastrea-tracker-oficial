import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const WHATSAPP =
  "https://wa.me/555436421367?text=Ol%C3%A1!%20Quero%20uma%20cota%C3%A7%C3%A3o%20de%20rastreamento%20veicular.";

export default function EmpresaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* HERO (mobile igual / desktop 280px e mais claro) */}
      <section
        className="relative h-[420px] md:h-[280px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/cidade-noite.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay: mobile mantém escuro, desktop mais claro */}
        <div className="absolute inset-0 bg-black/55 md:bg-black/30" />

        <div className="relative px-6">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            EMPRESA
          </h1>

          <p className="mt-4 text-lg text-white/90">
            Conheça a Rastrea Tracker e nossos valores
          </p>
        </div>
      </section>

      {/* CONHEÇA A EMPRESA */}
      <section className="bg-white text-black">
        <div className="w-full px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="md:flex md:items-start md:justify-between md:gap-10">
              <div className="md:max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a0f2b]">
                  Conheça a empresa Rastrea Tracker
                </h2>

                <p className="mt-4 text-black/70 leading-relaxed md:text-[15.5px] md:leading-7">
                  Somos uma empresa de soluções em rastreamento e monitoramento
                  veicular, com foco em segurança, praticidade e controle no dia
                  a dia. Trabalhamos para entregar tecnologia confiável,
                  atendimento transparente e uma experiência simples para você
                  acompanhar tudo pelo app e pela plataforma web.
                </p>

                <p className="mt-4 text-black/70 leading-relaxed md:text-[15.5px] md:leading-7">
                  Ao longo dos anos, evoluímos nosso atendimento e nossas
                  soluções pensando em quem usa: consumidores, empresas e
                  gestores de frota. Nosso objetivo é ajudar você a proteger e
                  organizar seus veículos com eficiência, rapidez e confiança.
                </p>

                <p className="mt-4 text-black/70 leading-relaxed md:text-[15.5px] md:leading-7">
                  Com nosso portal e aplicativo mobile, você acessa rotas,
                  alertas, relatórios e histórico — e conta com suporte quando
                  precisar.
                </p>
              </div>

              {/* SOMENTE DESKTOP (md+) */}
              <aside className="hidden md:block md:w-[320px]">
                <div className="rounded-2xl border border-black/10 bg-black/5 p-6">
                  <p className="text-sm font-extrabold text-[#0a0f2b]">
                    Quer falar com a gente agora?
                  </p>
                  <p className="mt-2 text-sm text-black/70 leading-relaxed">
                    Tire dúvidas sobre planos, instalação e funções do
                    rastreador.
                  </p>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-5 py-3 font-extrabold text-white hover:bg-red-500 transition"
                  >
                    Falar no WhatsApp
                  </a>

                  <Link
                    href="/planos"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 font-extrabold text-black hover:brightness-95 transition"
                  >
                    Ver planos
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEITOS (Missão / Visão / Valores) */}
      <section className="bg-white text-black">
        <div className="w-full px-6 pb-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a0f2b]">
              Conheça os conceitos da nossa empresa
            </h2>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* ESQUERDA */}
              <div className="space-y-10">
                <div>
                  <p className="text-xl font-extrabold text-[#0a0f2b]">
                    Missão
                  </p>
                  <p className="mt-2 text-black/70 leading-relaxed md:text-[15.5px] md:leading-7">
                    Entregar a melhor solução em rastreamento veicular que o
                    cliente necessita com qualidade e competência, prezando por
                    um atendimento mais humanizado e transparente.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-extrabold text-[#0a0f2b]">Visão</p>
                  <p className="mt-2 text-black/70 leading-relaxed md:text-[15.5px] md:leading-7">
                    Crescer cada vez mais no ramo de rastreamento veicular,
                    tornando-se uma empresa referência em soluções de
                    rastreamento no mercado brasileiro.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-extrabold text-[#0a0f2b]">
                    Valores
                  </p>
                  <ul className="mt-3 space-y-2 text-black/70 leading-relaxed list-disc pl-5 md:text-[15.5px] md:leading-7">
                    <li>Entregar soluções e resultados rapidamente</li>
                    <li>Sempre inovar com novas tecnologias</li>
                    <li>Relacionamento com o cliente pautado na ética</li>
                    <li>Transparência na forma de atuar</li>
                    <li>Valorização dos colaboradores e clientes</li>
                    <li>Compromisso com os objetivos</li>
                    <li>Agir com profissionalismo, compromisso e ética</li>
                    <li>Ampliar sempre a excelência em todas as operações</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-black/10 bg-black/5 p-5">
                  <p className="text-sm text-black/70 leading-relaxed">
                    <b>Atenção:</b> Não somos seguradora ou proteção veicular.
                    Não oferecemos seguro e não realizamos indenizações em
                    nenhuma circunstância.
                  </p>
                </div>

                {/* Serviços com links */}
                <div>
                  <p className="text-lg font-extrabold text-[#0a0f2b]">
                    Confira os serviços que oferecemos:
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-black/70">
                    <ServiceLink href="/carro">
                      rastreamento para carro
                    </ServiceLink>
                    <span>•</span>
                    <ServiceLink href="/moto">
                      rastreamento para moto
                    </ServiceLink>
                    <span>•</span>
                    <ServiceLink href="/caminhao">
                      rastreamento para caminhão
                    </ServiceLink>
                    <span>•</span>
                    <ServiceLink href="/frota">
                      rastreamento para frota
                    </ServiceLink>
                    <span>•</span>
                    <ServiceLink href="/motorista-app">
                      rastreamento para motorista de aplicativo
                    </ServiceLink>
                  </div>
                </div>
              </div>

              {/* DIREITA (imagem + redes sociais) */}
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-black/10 bg-gradient-to-b from-white to-black/5 p-6 shadow-sm">
                  <div className="rounded-2xl overflow-hidden border border-black/10 bg-white">
                    <img
                      src="/mascote-empresa.png"
                      alt="Rastrea Tracker - Atendimento e suporte"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <p className="mt-6 text-xl font-extrabold text-[#0a0f2b]">
                    Redes sociais e canais de contato
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <IconBoxFacebook label="Facebook" />
                    <IconBoxInstagram label="Instagram" />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block mt-14 border-t border-black/10" />
          </div>
        </div>
      </section>

      {/* BLOCO FINAL AZUL */}
      <section className="bg-[#0a0f2b] text-white">
        <div className="w-full px-6 py-16">
          <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-3 lg:gap-14">
            <div>
              <p className="text-2xl font-extrabold">Sobre a Rastrea Tracker</p>

              <div className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed">
                <p>
                  <b>CNPJ:</b> 21.704.608/0001-77
                </p>
                <p>
                  <b>Rastrea Tracker</b> é uma empresa de rastreamento veicular
                  e monitoramento.
                </p>
                <p>
                  <b>Confie em quem entende de tecnologia!</b>
                </p>
                <p>
                  <b>Sede:</b> Caxias do Sul/RS
                </p>
                <p>
                  <b>Não somos seguradora ou proteção veicular.</b>
                </p>
              </div>
            </div>

            <div>
              <p className="text-2xl font-extrabold">
                Central de vendas e atendimento
              </p>

              <div className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed">
                <p>
                  <b>WhatsApp:</b> (54) 3642-1367
                </p>
                <p>
                  <b>Fixo:</b> (54) 3642-1367
                </p>
                <p>
                  <b>E-mail:</b> rastreatracker@outlook.com
                </p>
              </div>
            </div>

            <div>
              <p className="text-2xl font-extrabold">Redes sociais</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <IconBoxFacebookDark label="Facebook" />
                <IconBoxInstagramDark label="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="w-full px-6 py-10 text-sm text-white/60">
          © {new Date().getFullYear()} Rastrea Tracker • Todos os direitos
          reservados.
        </div>
      </footer>
    </main>
  );
}

function ServiceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-blue-700 hover:underline font-semibold">
      {children}
    </Link>
  );
}

/* ---------- ÍCONES (CLAROS) ---------- */
function IconBoxFacebook({ label }: { label: string }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-black/10 bg-[#1877F2] p-4 md:p-3 shadow-sm">
      <span className="text-xs font-extrabold text-white">{label}</span>
    </div>
  );
}

function IconBoxInstagram({ label }: { label: string }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-black/10 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-4 md:p-3 shadow-sm">
      <span className="text-xs font-extrabold text-white">{label}</span>
    </div>
  );
}

/* ---------- ÍCONES (ESCURAS) ---------- */
function IconBoxFacebookDark({ label }: { label: string }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-white/10 bg-[#1877F2] p-4 md:p-3">
      <span className="text-xs font-extrabold text-white">{label}</span>
    </div>
  );
}

function IconBoxInstagramDark({ label }: { label: string }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-white/10 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-4 md:p-3">
      <span className="text-xs font-extrabold text-white">{label}</span>
    </div>
  );
}
