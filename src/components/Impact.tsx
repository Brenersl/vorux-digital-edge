import { useReveal } from "@/hooks/useReveal";

export const Impact = () => {
  const r1 = useReveal<HTMLParagraphElement>();
  const r2 = useReveal<HTMLParagraphElement>();
  const r3 = useReveal<HTMLParagraphElement>();

  return (
    <section className="relative py-36 md:py-52 border-t border-border bg-[hsl(230_30%_2.5%)]">
      <div className="container-fluid">
        <div className="flex items-center gap-4 mb-24 md:mb-32">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            02 / Diagnóstico
          </span>
          <span className="hairline flex-1" />
        </div>

        <div className="grid grid-cols-12 gap-y-20 md:gap-y-28 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
          <p
            ref={r1}
            className="reveal col-span-12 md:col-span-9 lg:col-span-8 text-foreground/95"
          >
            A maioria das empresas depende{" "}
            <span className="italic text-muted-foreground/60">só</span> do
            Instagram.
          </p>

          <p
            ref={r2}
            className="reveal col-span-12 md:col-span-9 md:col-start-4 lg:col-start-5 text-right md:text-left text-foreground/95"
            style={{ transitionDelay: "120ms" }}
          >
            Quando o cliente quer mais informação,
            <br />
            <span className="italic text-gradient">não encontra.</span>
          </p>

          <p
            ref={r3}
            className="reveal col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-2 text-foreground/95"
            style={{ transitionDelay: "240ms" }}
          >
            E vai{" "}
            <span className="relative inline-block">
              embora
              <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-gradient-brand" />
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
