import { useEffect, useState, type SVGProps } from "react";

import { linkPageItems, linkPageSocials, type LinkPageIcon } from "@/data/linkPage";

const logoUrl = "/logo-vh.webp";
const canonicalUrl = "https://www.vitaminhealth.cl/links";

type IconProps = SVGProps<SVGSVGElement> & {
  name: LinkPageIcon | "share" | "arrow";
};

function Icon({ name, ...props }: IconProps) {
  if (name === "catalog") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
        <path d="M7 3.75h7.3L18 7.45v12.8H7z" />
        <path d="M14 3.75v4h4M9.75 12h5.5M9.75 15.25h4.25" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
        <path d="M5.2 19.1 6.1 16A8.2 8.2 0 1 1 9 18.4l-3.8.7Z" />
        <path d="M9.2 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.1 1.3 1.5.6.5 1.2.8 1.7 1 .3.1.4.1.6-.1l.6-.7c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .7-.3 1.5-.8 1.8-.5.3-1.7.4-3.8-.6-2.8-1.3-4.7-3.7-5.3-5.4-.5-1.3-.2-2 .1-2.1Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M15.1 3.5c.4 2.2 1.7 3.6 3.9 3.8v3.2c-1.3 0-2.5-.4-3.8-1.2v5.6c0 3.2-2.1 5.5-5.3 5.5-2.9 0-5-2-5-4.8 0-3 2.3-5 5.5-4.8v3.4c-1.3-.2-2.2.3-2.2 1.4 0 .9.7 1.5 1.7 1.5 1.2 0 1.9-.8 1.9-2.3V3.5h3.3Z" />
      </svg>
    );
  }

  if (name === "website") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.75 12h16.5M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5S14.1 18.2 12 20.5C9.9 18.2 8.8 15.4 8.8 12S9.9 5.8 12 3.5Z" />
      </svg>
    );
  }

  if (name === "share") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
        <circle cx="18" cy="5" r="2.25" />
        <circle cx="6" cy="12" r="2.25" />
        <circle cx="18" cy="19" r="2.25" />
        <path d="m8 10.9 7.9-4.6M8 13.1l7.9 4.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M5 12h13M13.5 7.5 18 12l-4.5 4.5" />
    </svg>
  );
}

export default function Links() {
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator.share === "function");
  }, []);

  const sharePage = async () => {
    try {
      await navigator.share({
        title: "Vitamin Health Temuco",
        text: "Conoce Vitamin Health Temuco y nuestros canales de contacto.",
        url: canonicalUrl,
      });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-vh-navy px-5 py-8 text-vh-white sm:px-6 sm:py-12">
      <div
        className="pointer-events-none absolute -left-36 -top-32 h-80 w-80 rounded-full border border-vh-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-44 -right-40 h-96 w-96 rounded-full border border-vh-lavender/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-xl flex-col justify-center sm:min-h-[calc(100vh-6rem)]">
        {canShare && (
          <div className="absolute right-0 top-0">
            <button
              type="button"
              onClick={sharePage}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-vh-white/15 bg-vh-white/5 text-vh-white/80 transition-colors hover:border-vh-white/35 hover:bg-vh-white/10 hover:text-vh-white focus:outline-none focus:ring-2 focus:ring-vh-white/80 focus:ring-offset-2 focus:ring-offset-vh-navy"
              aria-label="Compartir página"
            >
              <Icon name="share" className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}

        <header className="px-4 text-center">
          <a
            href="/"
            className="mx-auto inline-flex rounded-xl focus:outline-none focus:ring-2 focus:ring-vh-white/80 focus:ring-offset-4 focus:ring-offset-vh-navy"
            aria-label="Ir al sitio web de Vitamin Health"
          >
            <img src={logoUrl} alt="Vitamin Health" className="h-auto w-52 sm:w-60" />
          </a>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-vh-lavender">Temuco, Chile</p>
          <h1 className="mt-4 font-serif text-4xl leading-none tracking-tight text-balance sm:text-5xl">
            Vitamin Health Temuco
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-vh-white/72 sm:text-base sm:leading-7">
            Clínica especialista en Longevidad, Medicina Estética y Sueroterapia en Temuco.
          </p>

          <nav className="mt-6 flex items-center justify-center gap-3" aria-label="Redes sociales">
            {linkPageSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-vh-white/15 bg-vh-white/5 text-vh-white/75 transition-colors hover:border-vh-white/35 hover:bg-vh-white/10 hover:text-vh-white focus:outline-none focus:ring-2 focus:ring-vh-white/80 focus:ring-offset-2 focus:ring-offset-vh-navy"
                aria-label={social.label}
              >
                <Icon name={social.icon} className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </header>

        <nav className="mt-10 grid gap-3" aria-label="Enlaces de Vitamin Health">
          {linkPageItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`group flex min-h-[4.75rem] w-full items-center gap-4 rounded-[1.4rem] border px-4 py-3 text-left text-sm font-semibold transition-all duration-200 active:scale-[0.99] sm:px-5 sm:text-base ${
                item.featured
                  ? "border-vh-beige bg-vh-beige !text-vh-navy shadow-[0_18px_45px_rgba(0,0,0,0.18)] hover:bg-vh-white"
                  : "border-vh-white/15 bg-vh-white/7 text-vh-white backdrop-blur-sm hover:border-vh-white/35 hover:bg-vh-white/12"
              } focus:outline-none focus:ring-2 focus:ring-vh-white/80 focus:ring-offset-2 focus:ring-offset-vh-navy`}
            >
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                  item.featured ? "bg-vh-navy text-vh-white" : "bg-vh-white/10 text-vh-white"
                }`}
              >
                <Icon name={item.icon} className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-1">{item.label}</span>
              <Icon
                name="arrow"
                className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 ${
                  item.featured ? "text-vh-blue" : "text-vh-white/55"
                }`}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <footer className="mt-9 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-vh-white/45">
          Medicina de longevidad · Temuco
        </footer>
      </div>
    </main>
  );
}
