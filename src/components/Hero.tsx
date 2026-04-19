import { ArrowUpRight, MoveRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 md:pt-48 pb-28 md:pb-44 overflow-hidden">
      {/* Ambient glow — softer, more spread */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial" />
      <div
        className="absolute -top-60 -left-40 h-[680px] w-[680px] rounded-full opacity-40 blur-[160px] -z-10"
        style={{ background: "hsl(var(--primary) / 0.55)" }}
      />
      <div
        className="absolute top-10 -right-20 h-[600px] w-[600px] rounded-full opacity-35 blur-[160px] -z-10"
        style={{ background: "hsl(var(--violet) / 0.5)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full opacity-25 blur-[140px] -z-10"
        style={{ background: "hsl(var(--cyan) / 0.35)" }}
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

          {/* Title — bolder hierarchy */}
          <div className="col-span-12 lg:col-span-11">
            <h1 className="font-display text-[clamp(3rem,10vw,10.5rem)] leading-[0.88] tracking-tight">
              <span className="block text-foreground/95">Seu site não está</span>
              <span className="block">
                <span className="italic text-gradient glow-text">te trazendo clientes.</span>
              </span>
              <span
                className="block mt-6 md:mt-10 font-display text-[clamp(1.75rem,5.5vw,5.5rem)] leading-[0.95] text-muted-foreground"
              >
                E não é só
                <span className="text-foreground"> o design</span>
                <span className="text-primary">.</span>
              </span>
            </h1>

            <div className="mt-14 md:mt-20 grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-7 md:col-start-3">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary/90 mb-4">
                  ↳ O problema é estrutural.
                </p>
                <p className="text-lg md:text-2xl text-foreground/75 max-w-2xl leading-relaxed">
                  Eu crio páginas e sistemas simples que ajudam empresas a
                  receber contatos{" "}
                  <span className="text-foreground italic font-display text-2xl md:text-3xl">todos os dias</span>.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-14 md:mt-20 flex flex-wrap items-center gap-5">
              <a
                href="#contato"
                className="group relative inline-flex items-center gap-3 rounded-full px-8 py-5 text-base font-medium text-primary-foreground bg-gradient-brand transition-all duration-500 hover:px-10 hover:scale-[1.03]"
              >
                <span
                  className="absolute -inset-3 rounded-full bg-gradient-brand opacity-30 group-hover:opacity-60 blur-2xl transition-all duration-700"
                  aria-hidden
                />
                <span
                  className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                  aria-hidden
                />
                <span className="relative">Quero um site que gera clientes</span>
                <MoveRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>

              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 px-5 py-5 text-base text-foreground/80 hover:text-foreground transition-colors"
              >
                <span className="relative">
                  Ver projetos reais
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom marker */}
        <div className="mt-28 md:mt-40 flex items-end justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="block mb-2 opacity-60">[ scroll ]</span>
            <div className="h-12 w-px bg-gradient-to-b from-primary/70 to-transparent" />
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
