import { MessageCircle, ArrowUpRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section id="contato" className="relative py-32 md:py-48 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{
        background: "radial-gradient(ellipse 50% 60% at 50% 100%, hsl(var(--primary) / 0.25), transparent 70%), radial-gradient(ellipse 40% 50% at 50% 0%, hsl(var(--violet) / 0.18), transparent 70%)"
      }} />

      <div className="container-fluid">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">09 / Última parada</p>
            <h2 className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] tracking-tight max-w-5xl">
              Se o seu negócio não tem um site que vende,
              <br />
              <span className="italic text-gradient glow-text">você está perdendo clientes</span>
              <br />
              todos os dias.
            </h2>

            <div className="mt-14 md:mt-20 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="https://wa.me/5500000000000?text=Quero%20um%20site%20que%20gera%20clientes"
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full px-8 py-5 text-base md:text-lg font-medium text-primary-foreground bg-gradient-brand animate-pulse-glow transition-transform hover:scale-[1.02]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />
                <MessageCircle className="relative h-5 w-5" />
                <span className="relative">Falar no WhatsApp</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <p className="text-sm text-muted-foreground font-mono">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mr-2 animate-pulse" />
                resposta normalmente em até 2h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
