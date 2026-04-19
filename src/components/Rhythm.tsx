/* Quebra de ritmo — full-bleed editorial moment */
export const Rhythm = () => {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{
        background: "linear-gradient(180deg, hsl(230 25% 4%) 0%, hsl(232 35% 9%) 40%, hsl(245 30% 11%) 60%, hsl(230 25% 4%) 100%)"
      }} />
      <div className="absolute inset-0 -z-10" style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 50%, hsl(var(--violet) / 0.18), transparent 70%)"
      }} />

      {/* huge background word */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[28vw] leading-none text-foreground/[0.03] whitespace-nowrap">
          vorux.
        </span>
      </div>

      <div className="container-fluid relative">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-7 md:col-start-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/80 mb-8">
              ◆ ◆ ◆
            </p>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15]">
              Site não é arte.
              <br />
              <span className="italic text-gradient">É ferramenta de venda.</span>
            </p>
            <p className="mt-10 text-muted-foreground max-w-md mx-auto">
              Tudo que você vê aqui — cada linha, cada espaço, cada cor —
              foi pensado para que o visitante chegue em um lugar:{" "}
              <span className="text-foreground">o seu WhatsApp</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
