const steps = [
  { n: "01", t: "Você envia as informações", d: "Briefing rápido por WhatsApp ou call. Sem formulário gigante." },
  { n: "02", t: "Eu desenvolvo", d: "Design + código no mesmo lugar. Atualizações diárias." },
  { n: "03", t: "Ajustamos juntos", d: "Refinamento sem limite de pequenas alterações até ficar certo." },
  { n: "04", t: "Publicamos", d: "Domínio, hospedagem e tudo no ar. Em até 7 dias úteis." },
];

export const Process = () => {
  return (
    <section id="processo" className="relative py-28 md:py-40 border-t border-border">
      <div className="container-fluid">
        <div className="mb-16 md:mb-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">07 / Como funciona</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Quatro passos.
            <br />
            <span className="italic text-gradient">Sem mistério.</span>
          </h2>
        </div>

        <div className="relative">
          {/* horizontal line */}
          <div className="hidden md:block absolute left-0 right-0 top-[42px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative group">
                {/* dot */}
                <div className="hidden md:flex absolute top-[34px] left-0 h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-background border border-primary/60 group-hover:bg-primary group-hover:shadow-glow-soft transition-all" />
                </div>

                <div className="md:pl-8">
                  <span className="font-mono text-xs text-muted-foreground">/ {s.n}</span>
                  <div className="mt-12 md:mt-16">
                    <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3">{s.t}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
