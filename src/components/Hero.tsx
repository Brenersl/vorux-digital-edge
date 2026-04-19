import { ArrowUpRight, MoveRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 md:pb-40 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial" />
      <div
        className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full opacity-50 blur-[120px] -z-10"
        style={{ background: "hsl(var(--primary) / 0.5)" }}
      />
      <div
        className="absolute top-20 right-0 h-[420px] w-[420px] rounded-full opacity-40 blur-[120px] -z-10"
        style={{ background: "hsl(var(--violet) / 0.45)" }}
      />

      <div className="container-fluid">
        {/* meta row */}
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-16 md:mb-24">
          <span className="flex items-center gap-3">
            <span className="h-px w-10 bg-border" />
            VS — 001
          </span>
          <span className="hidden md:inline">Estúdio digital · Brasil</span>
          <span>{new Date().getFullYear()} ©</span>
        </div>

        <div className="grid grid-cols-12 gap-x-6">
          {/* Vertical label */}
          <div className="hidden lg:flex col-span-1 items-start justify-center">
            <div className="vert-hairline h-32" />
          </div>

          {/* Title */}
          <div className="col-span-12 lg:col-span-10">
            <h1 className="font-display text-[clamp(2.75rem,8.5vw,8.5rem)] leading-[0.92] tracking-tight">
              <span className="block">Seu site não está</span>
              <span className="block">
                <span className="italic text-gradient">te trazendo </span>
                <span className="italic text-gradient">clientes.</span>
              </span>
            </h1>

            <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-7 md:col-start-3">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary/80 mb-4">
                  ↳ E o problema não é só o design.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  Eu crio páginas e sistemas simples que ajudam empresas a
                  receber contatos{" "}
                  <span className="text-foreground">todos os dias</span>.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="group relative inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-medium text-primary-foreground bg-gradient-brand animate-pulse-glow transition-transform hover:scale-[1.02]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                <span className="relative">Quero um site que gera clientes</span>
                <MoveRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 px-5 py-4 text-base text-foreground/80 hover:text-foreground transition-colors"
              >
                Ver projetos reais
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Side stat */}
          <div className="hidden lg:block col-span-1" />
        </div>

        {/* Bottom marker */}
        <div className="mt-24 md:mt-32 flex items-end justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="block mb-2 opacity-60">[ scroll ]</span>
            <div className="h-10 w-px bg-gradient-to-b from-primary/60 to-transparent" />
          </div>

          <div className="hidden md:block text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Currently
            </p>
            <p className="font-display text-2xl">
              Atendendo <span className="italic text-gradient">3 vagas</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
