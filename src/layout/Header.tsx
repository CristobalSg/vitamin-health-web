import { useEffect, useRef, useState } from "react";

import Container from "@/components/Container";
import { whatsappUrl } from "@/utils/whatsapp";

const logoUrl = "/logo-vh.webp";

const navigationItems = [
  { label: "Tratamientos", href: "/#servicios" },
  { label: "Método", href: "/#metodo" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 40 || window.location.pathname !== "/");
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current?.contains(event.target as Node)) {
        return;
      }

      closeMenu();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const headerTextTone = isScrolled ? "text-vh-navy" : "text-vh-white";
  const headerSurfaceTone = isScrolled
    ? "border-black/10 bg-vh-gray/92 backdrop-blur-xl"
    : "border-transparent bg-transparent";
  const linkTone = isScrolled ? "text-vh-blue hover:text-vh-ink" : "text-vh-white/90 hover:text-vh-white";
  const ctaClassName = isScrolled
    ? "btn-primary min-h-11 px-5 py-3"
    : "inline-flex min-h-11 items-center justify-center rounded-full border border-vh-white/70 bg-vh-white/10 px-5 py-3 text-sm font-semibold text-vh-white backdrop-blur transition-colors hover:bg-vh-white/20 focus:outline-none focus:ring-2 focus:ring-vh-white/80";
  const menuButtonTone = isScrolled
    ? "border-black/10 bg-white/35 text-vh-navy hover:bg-white/75 focus:ring-vh-navy focus:ring-offset-vh-gray"
    : "border-vh-white/45 bg-vh-white/10 text-vh-white hover:bg-vh-white/20 focus:ring-vh-white/80 focus:ring-offset-transparent";
  const mobilePanelTone = isScrolled
    ? "border-black/10 bg-vh-gray/95 text-vh-blue backdrop-blur-xl"
    : "border-vh-white/20 bg-black/35 text-vh-white/90 backdrop-blur-xl";
  const mobileLinkTone = isScrolled ? "hover:bg-white/55 hover:text-vh-ink" : "hover:bg-vh-white/10 hover:text-vh-white";
  const mobileCtaTone = isScrolled
    ? "border border-vh-navy/15 bg-vh-beige/75 !text-vh-navy shadow-[0_16px_32px_rgba(28,42,66,0.1)] hover:bg-vh-soft-gray focus:ring-vh-navy focus:ring-offset-vh-gray"
    : "bg-vh-white !text-vh-navy shadow-[0_18px_42px_rgba(0,0,0,0.2)] hover:bg-white focus:ring-vh-white/85 focus:ring-offset-vh-navy";
  const mobileCtaDividerTone = isScrolled ? "border-vh-lavender/50" : "border-vh-white/15";

  return (
    <header ref={headerRef} className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ease-in-out ${headerTextTone}`}>
      <div className={`absolute inset-x-0 top-0 h-24 border-b transition-all duration-300 ease-in-out ${headerSurfaceTone}`} aria-hidden="true" />
      <Container className="relative">
        <div className="flex min-h-24 items-center justify-between gap-6">
          <a href="/" className="inline-flex items-center" onClick={closeMenu} aria-label="Vitamin Health">
            <img
              src={logoUrl}
              alt="Vitamin Health"
              className={`h-12 w-auto transition duration-300 ${isScrolled ? "brightness-0" : ""}`}
            />
          </a>

          <nav className={`hidden items-center gap-10 text-sm font-medium transition-colors duration-300 lg:flex ${linkTone}`} aria-label="Principal">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
              Agendar evaluación
            </a>
          </div>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 lg:hidden ${menuButtonTone}`}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="sr-only">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`h-px w-full bg-current transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`h-px w-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <span
                className={`h-px w-full bg-current transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden rounded-b-[2rem] border transition-[max-height,opacity,background-color,border-color,color] duration-300 ease-in-out lg:hidden ${mobilePanelTone} ${
            isMenuOpen ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 py-5 text-sm font-medium" aria-label="Mobile principal">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 transition-colors ${mobileLinkTone}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className={`mt-3 border-t px-4 pt-5 ${mobileCtaDividerTone}`}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${mobileCtaTone}`}
                onClick={closeMenu}
              >
                Agendar evaluación
              </a>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
