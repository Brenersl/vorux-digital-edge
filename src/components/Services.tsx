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
    <section id="servicos" className="relative py-28 md:py-40 border-t border-border">
      <div className="container-fluid">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">05 / O que faço</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Três <span className="italic text-gradient">frentes</span>.
              <br />
              Um foco.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sem catálogo gigante. Sem promessa vazia. Cada serviço foi
              construído porque resolve um problema real que vejo todo dia.
            </p>
          </div>
        </div>

        <div>
          {services.map((s, i) => {
            const ref = useReveal<HTMLDivElement>();
            return (
              <div
                key={s.num}
                ref={ref}
                className="reveal group border-t border-border last:border-b py-10 md:py-14 grid grid-cols-12 gap-6 items-baseline cursor-default transition-colors hover:bg-surface-1/40"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">{s.num}</span>
                </div>
                <div className="col-span-10 md:col-span-6">
                  <h3 className="font-display text-3xl md:text-5xl leading-none transition-transform duration-500 group-hover:translate-x-2">
                    {s.title}
                    {s.soon && (
                      <span className="ml-3 align-middle text-xs font-mono uppercase tracking-[0.2em] text-violet">
                        em breve
                      </span>
                    )}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5 flex flex-col items-start md:items-end gap-3">
                  <p className="text-muted-foreground text-base md:text-right max-w-xs">→ {s.detail}</p>
                  <div className="flex flex-wrap gap-1.5 md:justify-end">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70 border border-border rounded-full px-2.5 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
