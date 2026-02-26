import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export default function KitRastreadorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <SiteHeader />

      {/* HERO padrão igual outras páginas */}
      <section
        className="relative h-[420px] md:h-[520px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.40), rgba(0,0,0,.40)), url('/cidade-noite.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6">
          {/* TÍTULO */}
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Kit Rastreador Veicular
          </h1>

          {/* SUBTÍTULO */}
          <p className="mt-4 text-white/90 text-lg drop-shadow max-w-2xl mx-auto">
            Compre seu próprio rastreador e tenha controle total do seu veículo
            com nossa plataforma.
          </p>

          {/* BOTÃO */}
          <Link
            href="/contato"
            className="inline-block mt-8 bg-red-600 hover:bg-red-500 transition px-8 py-4 rounded-xl font-bold shadow-xl"
          >
            Solicitar informações
          </Link>
        </div>
      </section>
    </main>
  );
}
