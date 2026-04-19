export const Differential = () => {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* stronger gradient — contrast moment */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(230 30% 2.5%) 0%, hsl(245 35% 9%) 45%, hsl(260 30% 8%) 60%, hsl(230 30% 2.5%) 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 75% 40%, hsl(var(--violet) / 0.22), transparent 55%), radial-gradient(ellipse at 15% 80%, hsl(var(--primary) / 0.16), transparent 55%)",
        }}
      />

      <div className="container-fluid">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              04 / Princípio
            </p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.08]">
              A maioria dos sites é{" "}
              <span className="text-muted-foreground/60">confusa</span>,{" "}
              <span className="text-muted-foreground/60">exagerada</span> ou{" "}
              <span className="text-muted-foreground/60">não leva a lugar nenhum.</span>
            </p>
            <p className="mt-12 md:mt-20 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.08]">
              Aqui, cada parte tem um objetivo:
              <br />
              <span className="italic text-gradient glow-text">fazer o visitante entrar em contato.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
