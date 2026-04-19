import { Check } from "lucide-react";

export const Offer = () => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-section" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 30% 50%, hsl(var(--primary) / 0.15), transparent 60%), radial-gradient(ellipse at 80% 50%, hsl(var(--violet) / 0.13), transparent 60%)"
        }} />
      </div>

      <div className="container-fluid">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="relative rounded-2xl md:rounded-3xl glass overflow-hidden">
              {/* glow border */}
              <div className="absolute -inset-px rounded-2xl md:rounded-3xl opacity-50" style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.4), transparent 40%, hsl(var(--violet) / 0.4))",
                mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                maskComposite: "exclude",
                padding: "1px",
              }} />

              <div className="relative grid lg:grid-cols-12 gap-y-10">
                <div className="lg:col-span-7 p-10 md:p-14 lg:p-16 lg:border-r border-border">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">06 / Oferta atual</p>
                  <h2 className="font-display text-4xl md:text-6xl leading-[1] mb-8">
                    Criação de site
                    <br />
                    <span className="italic text-gradient">profissional</span>
                  </h2>

                  <ul className="space-y-3 text-muted-foreground">
                    {[
                      "Design exclusivo, sem template",
                      "Foco em conversão e clareza",
                      "Otimizado para mobile e SEO",
                      "Integração com WhatsApp",
                      "Hospedagem e domínio orientados",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5 p-10 md:p-14 lg:p-16 flex flex-col justify-between gap-10">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">A partir de</p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-2xl text-muted-foreground">R$</span>
                      <span className="font-display text-7xl md:text-8xl leading-none text-gradient">650</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Pagamento à vista ou parcelado.
                      <br />
                      Escopo definido em conjunto.
                    </p>
                  </div>

                  <a
                    href="#contato"
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium text-primary-foreground bg-gradient-brand transition-transform hover:scale-[1.02]"
                  >
                    <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
                    <span className="relative">Quero começar agora →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
