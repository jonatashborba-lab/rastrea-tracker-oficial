import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

const WHATSAPP =
  "https://wa.me/5551999999999?text=Ol%C3%A1!%20Quero%20uma%20cota%C3%A7%C3%A3o%20de%20rastreamento%20veicular.";

export default function EmpresaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* HERO (igual carro/moto/frota) */}
      <section
        className="relative h-[420px] md:h-[520px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/cidade-noite.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6">
          {/* título menor */}
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
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a0f2b]">
              Conheça a empresa Rastrea Tracker
            </h2>

            <p className="mt-4 text-black/70 leading-relaxed">
              Somos uma empresa de soluções em rastreamento e monitoramento
              veicular, com foco em segurança, praticidade e controle no dia a
              dia. Trabalhamos para entregar tecnologia confiável, atendimento
              transparente e uma experiência simples para você acompanhar tudo
              pelo app e pela plataforma web.
            </p>

            <p className="mt-4 text-black/70 leading-relaxed">
              Ao longo dos anos, evoluímos nosso atendimento e nossas soluções
              pensando em quem usa: consumidores, empresas e gestores de frota.
              Nosso objetivo é ajudar você a proteger e organizar seus veículos
              com eficiência, rapidez e confiança.
            </p>

            <p className="mt-4 text-black/70 leading-relaxed">
              Com nosso portal e aplicativo mobile, você acessa rotas, alertas,
              relatórios e histórico — e conta com suporte quando precisar.
            </p>

            <p className="mt-6 text-black/70">
              Um abraço de nossa equipe <b>Rastrea Tracker</b>!
            </p>
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
                  <p className="mt-2 text-black/70 leading-relaxed">
                    Entregar a melhor solução em rastreamento veicular que o
                    cliente necessita com qualidade e competência, prezando por
                    um atendimento mais humanizado e transparente.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-extrabold text-[#0a0f2b]">Visão</p>
                  <p className="mt-2 text-black/70 leading-relaxed">
                    Crescer cada vez mais no ramo de rastreamento veicular,
                    tornando-se uma empresa referência em soluções de
                    rastreamento no mercado brasileiro.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-extrabold text-[#0a0f2b]">
                    Valores
                  </p>
                  <ul className="mt-3 space-y-2 text-black/70 leading-relaxed list-disc pl-5">
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

                {/* somente Facebook e Instagram */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <IconBoxFacebook label="Facebook" />
                  <IconBoxInstagram label="Instagram" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO FINAL AZUL (igual seu print) */}
      <section className="bg-[#0a0f2b] text-white">
        <div className="w-full px-6 py-16">
          <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-2xl font-extrabold">Sobre a Rastrea Tracker</p>

              <div className="mt-4 space-y-2 text-white/80 text-sm leading-relaxed">
                <p>
                  <b>CNPJ:</b> 00.000.000/0000-00
                </p>
                <p>
                  <b>Rastrea Tracker</b> é uma empresa de rastreamento veicular
                  e monitoramento.
                </p>
                <p>
                  <b>Confie em quem entende de tecnologia!</b>
                </p>
                <p>
                  <b>Sede:</b> (sua cidade/UF)
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
                  <b>WhatsApp:</b> (00) 00000-0000
                </p>
                <p>
                  <b>Fixo:</b> (00) 0000-0000
                </p>
                <p>
                  <b>E-mail:</b> rastreiaserra@outlook.com
                </p>
              </div>
            </div>

            <div>
              <p className="text-2xl font-extrabold">Redes sociais</p>

              {/* somente Facebook e Instagram */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <IconBoxFacebookDark label="Facebook" />
                <IconBoxInstagramDark label="Instagram" />
              </div>

              <p className="mt-4 text-white/70 text-sm">
                (Depois colocamos os links oficiais das redes sociais.)
              </p>
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
    <div className="grid place-items-center rounded-2xl border border-black/10 bg-[#1877F2] p-4 shadow-sm">
      <span className="text-xs font-extrabold text-white">{label}</span>
    </div>
  );
}

function IconBoxInstagram({ label }: { label: string }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-black/10 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-4 shadow-sm">
      <span className="text-xs font-extrabold text-white">{label}</span>
    </div>
  );
}

/* ---------- ÍCONES (ESCURAS) ---------- */

function IconBoxFacebookDark({ label }: { label: string }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-white/10 bg-[#1877F2] p-4">
      <span className="text-xs font-extrabold text-white">{label}</span>
    </div>
  );
}

function IconBoxInstagramDark({ label }: { label: string }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-white/10 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-4">
      <span className="text-xs font-extrabold text-white">{label}</span>
    </div>
  );
}
