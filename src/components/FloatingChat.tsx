import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import avatar from "@/assets/brener-avatar.jpg";

const STORAGE_KEY = "vorux-chat-dismissed";
const WHATSAPP_URL =
  "https://wa.me/5531992609659?text=Fala%20Brener,%20vim%20pelo%20site%20e%20quero%20um%20orçamento";

export const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [msg2, setMsg2] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    let opened = false;
    const openChat = () => {
      if (opened) return;
      opened = true;
      setMounted(true);
      requestAnimationFrame(() => setOpen(true));
      // staggered second message
      setTimeout(() => setMsg2(true), 900);
      window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      if (window.scrollY > 200) openChat();
    };

    const t = window.setTimeout(openChat, 4000);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
    // unmount after transition
    setTimeout(() => setMounted(false), 350);
  };

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-label="Chat com Brener — Vorux Studio"
      className={`fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60] w-[min(360px,calc(100vw-2.5rem))] origin-bottom-right transition-all duration-500 ease-out ${
        open
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-95 pointer-events-none"
      }`}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] blur-2xl opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 90%, hsl(var(--primary) / 0.35), transparent 70%), radial-gradient(60% 60% at 20% 10%, hsl(var(--violet) / 0.28), transparent 70%)",
        }}
      />

      <div className="relative overflow-hidden rounded-3xl border border-border/80 glass shadow-[0_30px_60px_-20px_hsl(230_50%_2%/0.7)]">
        {/* Header */}
        <div
          className="relative px-5 py-4 flex items-center gap-3"
          style={{ background: "var(--gradient-brand-soft)" }}
        >
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="relative">
            <img
              src={avatar}
              alt="Brener — Vorux Studio"
              width={44}
              height={44}
              loading="lazy"
              className="h-11 w-11 rounded-full object-cover border border-border/60"
            />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[hsl(150_80%_55%)] ring-2 ring-background">
              <span className="absolute inset-0 rounded-full bg-[hsl(150_80%_55%)] animate-ping opacity-60" />
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground leading-tight truncate">
              Brener <span className="text-muted-foreground">— Vorux Studio</span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(150_80%_55%)] mr-1.5 align-middle" />
              online agora
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Fechar chat"
            className="h-8 w-8 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-6 space-y-3 bg-[hsl(var(--surface-1)/0.6)]">
          <Bubble delay={150}>Fala, tudo certo? 👋</Bubble>

          <div
            className={`transition-all duration-500 ease-out ${
              msg2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <Bubble delay={0}>
              Quer um site que realmente traga clientes pro seu negócio?
            </Bubble>
          </div>

          {/* typing indicator briefly before button */}
          <div
            className={`transition-opacity duration-300 ${
              msg2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                try {
                  sessionStorage.setItem(STORAGE_KEY, "1");
                } catch {
                  /* noop */
                }
              }}
              className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-primary-foreground bg-gradient-brand transition-transform hover:scale-[1.02]"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-70 blur-xl transition-opacity" />
              <span className="relative">Quero falar sobre meu projeto</span>
              <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Você será direcionado direto pro meu WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Bubble = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const [show, setShow] = useState(delay === 0);
  useEffect(() => {
    if (delay === 0) return;
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`max-w-[85%] rounded-2xl rounded-tl-sm bg-surface-2/80 border border-border/60 px-4 py-2.5 text-sm text-foreground/90 leading-relaxed transition-all duration-400 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
    >
      {children}
    </div>
  );
};
