import { useEffect, useState } from "react";
import logo from "@/assets/vorux-logo.png";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-fluid">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-700 ${
            scrolled
              ? "border border-border/60 bg-background/30 backdrop-blur-2xl backdrop-saturate-150 shadow-elevated"
              : "border border-transparent bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="Vorux Studio"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="font-display text-xl tracking-tight">
              Vorux<span className="text-muted-foreground"> studio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground/[0.04] hover:bg-foreground/[0.08] border border-border px-4 py-2 text-sm transition-all"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Disponível
          </a>

          <a
            href="#contato"
            className="md:hidden text-sm px-4 py-2 rounded-full bg-foreground/[0.06] border border-border"
          >
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};
