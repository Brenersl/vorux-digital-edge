import { Instagram } from "lucide-react";
import logo from "@/assets/vorux-logo.png";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12 md:py-16">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vorux Agency" width={32} height={32} loading="lazy" className="h-8 w-8 rounded-md" />
            <div>
              <p className="font-display text-lg leading-none">Vorux <span className="text-muted-foreground">agency</span></p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">est. {new Date().getFullYear()} · Brasil</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm text-muted-foreground">
            <a href="#projetos" className="hover:text-foreground transition-colors">Projetos</a>
            <a href="#servicos" className="hover:text-foreground transition-colors">Serviços</a>
            <a href="#processo" className="hover:text-foreground transition-colors">Processo</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <a
              href="https://www.instagram.com/voruxagency/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Vorux Agency"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Instagram className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>@voruxagency</span>
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              © {new Date().getFullYear()} — Todos os direitos reservados
            </p>
          </div>
        </div>

        <div className="mt-12 hairline" />

        <div className="mt-6 overflow-hidden">
          <p className="font-display text-[18vw] md:text-[14vw] leading-none text-foreground/[0.06] tracking-tighter">
            vorux<span className="text-primary/30">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
