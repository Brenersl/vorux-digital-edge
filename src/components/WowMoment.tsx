import { useReveal } from "@/hooks/useReveal";

/* The "wow" moment — pure black, gigantic typography, vast space. */
export const WowMoment = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-44 md:py-64 bg-[hsl(230_30%_2%)] overflow-hidden">
      {/* subtle vignette only */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 50%, hsl(var(--primary) / 0.08), transparent 70%)",
        }}
      />

      {/* corner markers — break perfection */}
      <div className="absolute top-10 left-6 md:left-16 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50">
        — momento
      </div>
      <div className="absolute bottom-10 right-6 md:right-16 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50">
        manifesto / vs
      </div>

      <div className="container-fluid">
        <div ref={ref} className="reveal text-center">
          <p className="font-display leading-[0.92] tracking-tight text-[clamp(2.75rem,11vw,11rem)]">
            <span className="block text-foreground">Não é sobre ter</span>
            <span className="block text-muted-foreground/70 italic">um site.</span>
            <span className="block mt-6 md:mt-10 text-gradient italic glow-text">
              É sobre ter um sistema
            </span>
            <span className="block text-foreground">
              que <span className="italic">vende</span>
              <span className="text-primary">.</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
