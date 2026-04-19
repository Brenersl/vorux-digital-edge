export const Differential = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60" style={{
        background: "radial-gradient(ellipse at 70% 50%, hsl(var(--violet) / 0.1), transparent 60%)"
      }} />
      <div className="container-fluid">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">04 / Princípio</p>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15]">
              A maioria dos sites é{" "}
              <span className="text-muted-foreground/70">confusa</span>,{" "}
              <span className="text-muted-foreground/70">exagerada</span> ou{" "}
              <span className="text-muted-foreground/70">não leva a lugar nenhum.</span>
            </p>
            <p className="mt-10 md:mt-14 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15]">
              Aqui, cada parte tem um objetivo:
              <br />
              <span className="italic text-gradient">fazer o visitante entrar em contato.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
