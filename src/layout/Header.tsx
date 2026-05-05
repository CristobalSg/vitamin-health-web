import { useEffect, useState } from "react";

import Container from "@/components/Container";
import { whatsappUrl } from "@/utils/whatsapp";

const logoUrl = "/logo-vh.webp";

const navigationItems = [
  { label: "Tratamientos", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 40);
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

  const headerTone = isScrolled ? "bg-vh-gray/92 text-vh-navy backdrop-blur-xl border-black/10" : "border-transparent bg-transparent text-vh-white";
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

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ease-in-out ${headerTone}`}>
      <Container>
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${isScrolled ? "btn-primary" : ctaClassName} mt-3 w-full`}
              onClick={closeMenu}
            >
              Agendar evaluación
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
