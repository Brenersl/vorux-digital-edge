import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    num: "01",
    title: "Criação de sites",
    detail: "landing pages e institucionais focados em conversão",
    tags: ["Landing", "Institucional", "SEO"],
  },
  {
    num: "02",
    title: "Automação para Instagram",
    detail: "respostas automáticas e captação de leads",
    tags: ["DM bot", "Lead capture", "Funis"],
  },
  {
    num: "03",
    title: "Sistema para psicólogos",
    detail: "produto em desenvolvimento com acesso antecipado",
    tags: ["SaaS", "Em beta", "Early access"],
    soon: true,
  },
];

export const Services = () => {
  return (
    <section
      id="servicos"
      className="relative py-32 md:py-48 border-t border-border bg-[hsl(230_28%_3.5%)]"
    >
      <div className="container-fluid">
        <div className="grid grid-cols-12 gap-6 mb-20 md:mb-32">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">05 / O que faço</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Três <span className="italic text-gradient">frentes</span>.
              <br />
              Um foco.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <p className="text-foreground/75 text-lg md:text-xl leading-relaxed">
              Sem catálogo gigante. Sem promessa vazia. Cada serviço foi
              construído porque resolve um problema real que vejo todo dia.
            </p>
          </div>
        </div>

        <div>
          {services.map((s, i) => (
            <ServiceRow key={s.num} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceRow = ({ s, i }: { s: typeof services[number]; i: number }) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative border-t border-border last:border-b py-14 md:py-20 grid grid-cols-12 gap-6 items-baseline cursor-default overflow-hidden"
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      {/* hover sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.06) 40%, hsl(var(--violet) / 0.05) 60%, transparent)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700"
      />

      <div className="relative col-span-2 md:col-span-1">
        <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">{s.num}</span>
      </div>
      <div className="relative col-span-10 md:col-span-6">
        <h3 className="font-display text-4xl md:text-6xl leading-[0.95] transition-all duration-500 group-hover:translate-x-3 group-hover:text-gradient">
          {s.title}
          {s.soon && (
            <span className="ml-3 align-middle text-xs font-mono uppercase tracking-[0.2em] text-violet">
              em breve
            </span>
          )}
        </h3>
      </div>
      <div className="relative col-span-12 md:col-span-5 flex flex-col items-start md:items-end gap-4">
        <p className="text-foreground/70 text-base md:text-lg md:text-right max-w-sm">→ {s.detail}</p>
        <div className="flex flex-wrap gap-1.5 md:justify-end">
          {s.tags.map((t) => (
            <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1 transition-colors group-hover:border-primary/40 group-hover:text-foreground/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
