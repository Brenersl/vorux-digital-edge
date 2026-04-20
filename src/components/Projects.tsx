import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import projectIdamir from "@/assets/project-idamir.png";
import projectGhc from "@/assets/project-ghc.png";
import projectAjs from "@/assets/project-ajs.png";

type Variant = "psychology" | "engineering" | "construction";

interface ScreenProps {
  variant: Variant;
  screenshot?: string;
  alt?: string;
}

/* Pure-CSS abstract site previews — no AI text artifacts. */
const Screen = ({ variant, screenshot, alt }: ScreenProps) => {
  if (screenshot) {
    return (
      <div className="absolute inset-0 bg-surface-2 overflow-hidden">
        <img
          src={screenshot}
          alt={alt ?? "Screenshot do projeto"}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    );
  }
  if (variant === "psychology") {
    return (
      <div className="absolute inset-0 bg-[hsl(220_30%_8%)] text-foreground">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 80% 20%, hsl(280 60% 30% / 0.5), transparent 50%)"
        }} />
        <div className="relative h-full p-5 md:p-7 flex flex-col">
          <div className="flex items-center justify-between text-[7px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/60">
            <span>idamir · clínica</span>
            <span className="hidden md:inline">acolher · cuidar · escutar</span>
          </div>
          <div className="mt-auto">
            <p className="font-display text-2xl md:text-5xl leading-tight">
              Um espaço para
              <br />
              <span className="italic" style={{ color: "hsl(280 70% 80%)" }}>
                te ouvir.
              </span>
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full px-3 py-1.5 text-[8px] md:text-[10px]" style={{ background: "hsl(280 70% 60%)", color: "hsl(220 30% 8%)" }}>
                Agendar consulta
              </span>
              <span className="text-[8px] md:text-[10px] text-foreground/60">→ ver abordagem</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "engineering") {
    return (
      <div className="absolute inset-0 bg-[hsl(215_35%_10%)] text-foreground">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "linear-gradient(hsl(200 80% 60% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(200 80% 60% / 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />
        <div className="relative h-full p-5 md:p-7 flex flex-col">
          <div className="flex items-center gap-2 text-[7px] md:text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/70">
            <div className="h-2 w-2 rounded-sm" style={{ background: "hsl(200 90% 60%)" }} />
            GHC · engenharia
          </div>
          <p className="mt-6 md:mt-8 font-display text-2xl md:text-4xl leading-tight max-w-[80%]">
            Projetos que
            <br />
            <span className="italic" style={{ color: "hsl(200 90% 70%)" }}>sustentam</span> ideias.
          </p>
          <div className="mt-auto grid grid-cols-3 gap-2">
            {["Estrutural", "Hidráulico", "Elétrico"].map((s) => (
              <div key={s} className="rounded border border-foreground/10 p-2">
                <div className="text-[7px] md:text-[9px] uppercase tracking-wider text-foreground/60">{s}</div>
                <div className="mt-1 h-1 w-full rounded-full" style={{ background: "hsl(215 30% 18%)" }}>
                  <div className="h-full rounded-full" style={{ width: "70%", background: "hsl(200 90% 60%)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  // construction
  return (
    <div className="absolute inset-0 bg-[hsl(30_15%_10%)] text-foreground">
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, hsl(25 80% 55% / 0.2), transparent 60%)"
      }} />
      <div className="relative h-full p-5 md:p-7 flex flex-col">
        <div className="flex items-center justify-between text-[7px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-foreground/60">
          <span>AJS · construções</span>
          <span>est. 2014</span>
        </div>
        <div className="mt-auto">
          <p className="font-display text-2xl md:text-5xl leading-[0.95]">
            Construímos
            <br />
            <span style={{ color: "hsl(25 90% 60%)" }}>do</span> chão.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex -space-x-1">
              {[0,1,2,3].map(i => (
                <div key={i} className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-[hsl(30_15%_10%)]" style={{ background: `hsl(${20+i*8} 60% ${40+i*8}%)` }} />
              ))}
            </div>
            <span className="text-[8px] md:text-[10px] text-foreground/60">+120 obras entregues</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BrowserMock = ({ variant, label, screenshot, alt }: { variant: Variant; label: string; screenshot?: string; alt?: string }) => (
  <div className="browser-frame group/mock relative aspect-[16/10] w-full transition-all duration-700 hover:shadow-glow-blue">
    <div className="absolute top-0 inset-x-0 h-7 md:h-9 bg-surface-3 border-b border-border flex items-center px-3 gap-2 z-10">
      <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-foreground/20" />
      <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-foreground/20" />
      <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-foreground/20" />
      <span className="ml-3 hidden sm:inline font-mono text-[10px] text-muted-foreground">{label}</span>
    </div>
    <div className="absolute inset-0 top-7 md:top-9 overflow-hidden">
      <Screen variant={variant} screenshot={screenshot} alt={alt} />
    </div>
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/mock:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 50% 100%, hsl(var(--primary) / 0.25), transparent 60%)" }} />
  </div>
);

const PhoneMock = ({ variant, screenshot, alt }: { variant: Variant; screenshot?: string; alt?: string }) => (
  <div className="relative mx-auto w-[180px] md:w-[220px] aspect-[9/19] rounded-[2.2rem] border border-border bg-surface-3 p-2 shadow-elevated">
    <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-b-2xl bg-background z-10" />
    <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
      <Screen variant={variant} screenshot={screenshot} alt={alt} />
    </div>
  </div>
);

interface Project {
  num: string;
  client: string;
  problem: string;
  solution: string;
  url: string;
  variant: Variant;
  domain: string;
  screenshot?: string;
}

const projects: Project[] = [
  {
    num: "01",
    client: "Idamir Duarte",
    problem: "Psicóloga sem presença online clara — pacientes não conseguiam saber valores, abordagem ou horários.",
    solution: "Site institucional acolhedor com agendamento direto via WhatsApp e seções estratégicas para gerar confiança.",
    url: "https://idamirduarte.com.br/",
    variant: "psychology",
    domain: "idamirduarte.com.br",
    screenshot: projectIdamir,
  },
  {
    num: "02",
    client: "GHC Engenharia",
    problem: "Empresa de engenharia perdendo orçamentos por não ter portfólio público dos projetos executados.",
    solution: "Portal técnico com catálogo de serviços, formulário de orçamento e identidade visual sólida.",
    url: "https://ghcengenharia.netlify.app/",
    variant: "engineering",
    domain: "ghcengenharia.netlify.app",
    screenshot: projectGhc,
  },
  {
    num: "03",
    client: "AJS Construções",
    problem: "Construtora com 10 anos de mercado dependendo apenas de indicação — zero presença digital.",
    solution: "Site institucional com galeria de obras, prova social e canal direto de cotação.",
    url: "http://ajsconstrucoes.com.br/",
    variant: "construction",
    domain: "ajsconstrucoes.com.br",
    screenshot: projectAjs,
  },
];

const ProjectRow = ({ project, index }: { project: Project; index: number }) => {
  const ref = useReveal<HTMLDivElement>();
  const isFeatured = index === 0;
  const alignRight = index % 2 === 1;

  if (isFeatured) {
    return (
      <div ref={ref} className="reveal grid grid-cols-12 gap-x-6 gap-y-10 items-center">
        <div className="col-span-12 lg:col-span-12 relative">
          <div className="absolute -top-12 left-0 lg:left-4 font-mono text-xs text-muted-foreground z-10">
            <span className="text-primary">★</span> destaque · {project.num}
          </div>
          {/* Floating mockup with deep glow */}
          <div className="relative group/feat">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 opacity-50 blur-3xl transition-opacity duration-1000 group-hover/feat:opacity-80"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 50%, hsl(var(--primary) / 0.45), transparent 60%), radial-gradient(ellipse at 80% 50%, hsl(var(--violet) / 0.35), transparent 60%)",
              }}
            />
            <div className="transition-transform duration-700 group-hover/feat:scale-[1.015]">
              <BrowserMock variant={project.variant} label={project.domain} screenshot={project.screenshot} alt={`Site de ${project.client}`} />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-11 lg:col-start-2 grid md:grid-cols-3 gap-8 md:gap-14 mt-10">
          <h3 className="font-display text-4xl md:text-5xl leading-tight">{project.client}</h3>
          <p className="text-foreground/70"><span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50 block mb-2">Problema</span>{project.problem}</p>
          <div>
            <p className="text-foreground/70"><span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50 block mb-2">Solução</span>{project.solution}</p>
            <a href={project.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group/link">
              Ver site <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Break perfection: offset secondary projects slightly
  const offsetClass = alignRight ? "lg:translate-y-8" : "lg:-translate-y-4";

  return (
    <div ref={ref} className={`reveal grid grid-cols-12 gap-x-6 gap-y-8 items-center ${offsetClass}`}>
      <div className={`col-span-12 lg:col-span-7 ${alignRight ? "lg:col-start-6 lg:order-2" : "lg:col-start-1"}`}>
        <div className="relative group/mockwrap">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 opacity-0 group-hover/mockwrap:opacity-60 blur-3xl transition-opacity duration-700"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.35), transparent 65%)",
            }}
          />
          <div className="transition-transform duration-700 group-hover/mockwrap:scale-[1.02]">
            <BrowserMock variant={project.variant} label={project.domain} screenshot={project.screenshot} alt={`Site de ${project.client}`} />
          </div>
        </div>
      </div>
      <div className={`col-span-12 lg:col-span-4 ${alignRight ? "lg:col-start-1 lg:order-1 lg:pr-6" : "lg:col-start-9 lg:pl-6"} flex flex-col gap-5`}>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-primary">{project.num}</span>
          <span className="hairline flex-1" />
        </div>
        <h3 className="font-display text-3xl md:text-4xl leading-tight">{project.client}</h3>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-2">Problema</p>
          <p className="text-foreground/70 text-sm leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-2">Solução</p>
          <p className="text-foreground/70 text-sm leading-relaxed">{project.solution}</p>
        </div>
        <a href={project.url} target="_blank" rel="noreferrer" className="self-start inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-primary/60 hover:bg-primary/5 transition-all group/link">
          Ver site <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projetos" className="relative py-32 md:py-48 border-t border-border overflow-hidden">
      {/* premium ambient */}
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(var(--primary) / 0.08), transparent 60%)",
        }}
      />
      <div className="container-fluid">
        <div className="flex items-end justify-between gap-8 mb-24 md:mb-36">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">03 / Trabalhos selecionados</p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.92]">
              Não é portfólio.
              <br />
              <span className="italic text-gradient">São resultados.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right text-sm text-muted-foreground max-w-xs">
            <span className="font-mono text-foreground">{projects.length}</span> de <span className="font-mono text-foreground">+12</span> projetos publicados nos últimos 18 meses.
          </div>
        </div>

        <div className="space-y-40 md:space-y-56">
          {projects.map((p, i) => (
            <ProjectRow key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { PhoneMock };
