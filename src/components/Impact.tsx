import { useReveal } from "@/hooks/useReveal";

export const Impact = () => {
  const r1 = useReveal<HTMLParagraphElement>();
  const r2 = useReveal<HTMLParagraphElement>();
  const r3 = useReveal<HTMLParagraphElement>();

  return (
    <section className="relative py-32 md:py-44 border-t border-border">
      <div className="container-fluid">
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            02 / Diagnóstico
          </span>
          <span className="hairline flex-1" />
        </div>

        <div className="grid grid-cols-12 gap-y-16 md:gap-y-24 font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
          <p
            ref={r1}
            className="reveal col-span-12 md:col-span-9 lg:col-span-8"
          >
            A maioria das empresas depende{" "}
            <span className="italic text-muted-foreground">só</span> do
            Instagram.
          </p>

          <p
            ref={r2}
            className="reveal col-span-12 md:col-span-9 md:col-start-4 lg:col-start-5 text-right md:text-left"
            style={{ transitionDelay: "120ms" }}
          >
            Quando o cliente quer mais informação,
            <br />
            <span className="italic text-gradient">não encontra.</span>
          </p>

          <p
            ref={r3}
            className="reveal col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-2"
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
