type HeroProps = {
  title: string;
  subtitle?: string;
  image: string; // ex: "/frota-hero.jpg"
  heightClassName?: string;
};

export default function Hero({
  title,
  subtitle,
  image,
  heightClassName = "min-h-[360px] md:min-h-[420px]",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: url(${image}),
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10">
        <div
          className={[
            "mx-auto max-w-6xl px-6 py-16 md:py-24 flex items-center justify-center",
            heightClassName,
          ].join(" ")}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)]">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_10px_26px_rgba(0,0,0,0.55)]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}