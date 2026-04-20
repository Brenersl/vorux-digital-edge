import { ArrowUpRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531992609659?text=Fala%20Brener,%20vim%20pelo%20site%20e%20quero%20um%20orçamento";

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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full px-8 py-5 text-base md:text-lg font-medium text-primary-foreground bg-gradient-brand animate-pulse-glow transition-transform hover:scale-[1.02]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" />
                <svg className="relative h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.3 8.834c-1.544 0-3.024-.426-4.303-1.198l-.308-.183-3.187 1.036.836-3.106-.196-.313c-.83-1.32-1.268-2.846-1.268-4.41 0-4.57 3.72-8.29 8.29-8.29 2.22 0 4.305.864 5.873 2.433 1.568 1.568 2.432 3.653 2.432 5.873 0 4.57-3.72 8.29-8.29 8.29m6.862-14.725c-1.86-1.86-4.33-2.883-6.96-2.883-5.43 0-9.85 4.42-9.85 9.85 0 1.73.45 3.42 1.305 4.91l-1.38 5.14 5.25-1.71c1.45.79 3.08 1.21 4.74 1.21 5.43 0 9.85-4.42 9.85-9.85 0-2.63-1.02-5.1-2.88-6.96"/>
                </svg>
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
