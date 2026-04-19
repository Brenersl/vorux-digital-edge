import logo from "@/assets/vorux-logo.png";

export const About = () => {
  return (
    <section id="sobre" className="relative py-28 md:py-40 border-t border-border">
      <div className="container-fluid">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-start">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">10 / Quem está por trás</p>
            <div className="relative inline-block">
              <img src={logo} alt="Vorux Studio" width={140} height={140} loading="lazy" className="h-32 w-32 md:h-36 md:w-36 rounded-2xl object-cover" />
              <div className="absolute -inset-4 -z-10 rounded-3xl blur-2xl opacity-50" style={{ background: "var(--gradient-brand)" }} />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="font-display text-4xl md:text-6xl leading-[1.05] mb-8">
              Meu nome é <span className="italic text-gradient">Brener</span>.
            </p>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Crio sites e soluções digitais com foco em{" "}
                <span className="text-foreground">clareza</span> e{" "}
                <span className="text-foreground">resultado</span>.
              </p>
              <p>Sem complicação. Sem enrolação.</p>
              <p className="text-base">
                Vorux Studio nasceu da ideia de que site bom não é o mais bonito —
                é o que faz o telefone tocar.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "+12", l: "projetos" },
                { v: "100%", l: "no prazo" },
                { v: "7d", l: "média de entrega" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl md:text-4xl text-gradient">{s.v}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
