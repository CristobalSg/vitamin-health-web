import { useEffect, useId, useRef, useState } from "react";

const guideUrl = "https://drive.google.com/file/d/1D3wB_GySdwKTnwB0kItO7I7QZHuEccex/view";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/vitaminhealth.cl/",
    label: "@vitaminhealth.cl",
    icon: "instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@vitaminhealth.cl",
    label: "@vitaminhealth.cl",
    icon: "tiktok",
  },
];

type SocialIconProps = {
  icon: string;
};

type NotificationLevel = 0 | 1 | 2;

function isDarkColor(color: string) {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([.\d]+))?\)/);

  if (!match) {
    return false;
  }

  const alpha = match[4] ? Number(match[4]) : 1;

  if (alpha < 0.45) {
    return false;
  }

  const red = Number(match[1]);
  const green = Number(match[2]);
  const blue = Number(match[3]);
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;

  return luminance < 95;
}

function isElementOnDarkSurface(element: Element | null) {
  let currentElement: Element | null = element;

  while (currentElement && currentElement !== document.body) {
    const backgroundColor = window.getComputedStyle(currentElement).backgroundColor;

    if (isDarkColor(backgroundColor)) {
      return true;
    }

    currentElement = currentElement.parentElement;
  }

  return false;
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5.5 16.5v3l3.2-2.1a8.8 8.8 0 0 0 3.3.6c4.7 0 8.5-3 8.5-6.8S16.7 4.5 12 4.5 3.5 7.5 3.5 11.2c0 2.1 1.1 4 2.9 5.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.6 11.4h.01M12 11.4h.01M15.4 11.4h.01" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" strokeLinecap="round" />
    </svg>
  );
}

function SocialIcon({ icon }: SocialIconProps) {
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M15.1 3.5c.4 2.2 1.7 3.6 3.9 3.8v3.2c-1.3 0-2.5-.4-3.8-1.2v5.6c0 3.2-2.1 5.5-5.3 5.5-2.9 0-5-2-5-4.8 0-3 2.3-5 5.5-4.8v3.4c-1.3-.2-2.2.3-2.2 1.4 0 .9.7 1.5 1.7 1.5 1.2 0 1.9-.8 1.9-2.3V3.5h3.3Z" />
    </svg>
  );
}

export default function FloatingChat() {
  const [notificationLevel, setNotificationLevel] = useState<NotificationLevel>(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOnDarkSurface, setIsOnDarkSurface] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();
  const hasEducationalContent = notificationLevel === 2;

  useEffect(() => {
    const updateSurfaceTone = () => {
      const x = window.innerWidth - 52;
      const y = window.innerHeight - 52;
      const surfaceElement = document
        .elementsFromPoint(x, y)
        .find((element) => !wrapperRef.current?.contains(element));

      setIsOnDarkSurface(isElementOnDarkSurface(surfaceElement ?? null));
    };

    const updateNotificationLevel = () => {
      const teamSection = document.getElementById("equipo");
      const servicesSection = document.getElementById("servicios");

      if (servicesSection && servicesSection.getBoundingClientRect().top < window.innerHeight * 0.75) {
        setNotificationLevel(2);
        return;
      }

      if (teamSection && teamSection.getBoundingClientRect().top < window.innerHeight * 0.75) {
        setNotificationLevel((current) => (current < 1 ? 1 : current));
      }

      updateSurfaceTone();
    };

    updateNotificationLevel();
    updateSurfaceTone();
    window.addEventListener("scroll", updateNotificationLevel, { passive: true });
    window.addEventListener("resize", updateNotificationLevel);

    return () => {
      window.removeEventListener("scroll", updateNotificationLevel);
      window.removeEventListener("resize", updateNotificationLevel);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isOpen]);

  if (notificationLevel === 0) {
    return null;
  }

  const buttonTone = isOnDarkSurface
    ? "border border-vh-white/50 bg-vh-white text-vh-navy shadow-[0_18px_44px_rgba(0,0,0,0.24)] hover:bg-white"
    : "bg-vh-navy text-vh-white shadow-[0_18px_44px_rgba(28,42,66,0.28)] hover:bg-vh-blue";
  const badgeTone = isOnDarkSurface
    ? "border-vh-navy bg-vh-navy text-vh-white"
    : "border-vh-gray bg-vh-lavender text-vh-navy";

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-5 right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-sm animate-[floating-chat-in_420ms_ease-out] flex-col items-end md:bottom-8 md:right-8"
    >
      {isOpen ? (
        <section
          aria-labelledby={titleId}
          className="w-full origin-bottom-right overflow-hidden rounded-[2rem] border border-vh-lavender/70 bg-vh-white shadow-[0_24px_80px_rgba(28,42,66,0.22)] motion-safe:animate-[floating-chat-expand_360ms_cubic-bezier(0.2,0.8,0.2,1)]"
        >
          <div className="bg-vh-navy px-5 py-5 text-vh-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-vh-lavender">Vitamin Health</p>
                <h2 id={titleId} className="mt-2 font-serif text-2xl leading-tight tracking-tight">
                  {hasEducationalContent ? "Contenido y redes" : "Redes sociales"}
                </h2>
              </div>
              <button
                type="button"
                aria-label="Cerrar chat"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-vh-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-vh-lavender"
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <div className="space-y-3 p-4">
            {hasEducationalContent ? (
              <article className="rounded-[1.5rem] border border-[#1C2A42]/10 bg-white p-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-vh-blue">Contenido educativo</p>
                <h3 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-vh-navy">Guía de tratamientos</h3>
                <p className="mt-3 text-sm leading-6 text-vh-blue">
                  Revisa información clara sobre tratamientos, beneficios y enfoque médico de Vitamin Health.
                </p>
                <a
                  href={guideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-vh-navy px-5 py-3 text-sm font-semibold !text-vh-white transition-colors hover:bg-vh-blue focus:outline-none focus:ring-2 focus:ring-vh-navy focus:ring-offset-2 focus:ring-offset-white"
                >
                  Ver guía completa
                </a>
              </article>
            ) : null}

            <article className="rounded-[1.5rem] border border-[#1C2A42]/10 bg-white p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-vh-blue">Redes sociales</p>
              <div className="mt-4 grid gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center justify-between gap-4 rounded-full border border-vh-lavender/70 px-4 py-3 text-left transition-colors hover:border-vh-navy hover:bg-vh-gray focus:outline-none focus:ring-2 focus:ring-vh-lavender"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vh-navy text-vh-white">
                        <SocialIcon icon={social.icon} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-vh-navy">{social.name}</span>
                        <span className="block truncate text-xs text-vh-blue">{social.label}</span>
                      </span>
                    </span>
                    <span aria-hidden="true" className="text-lg leading-none text-vh-blue">
                      +
                    </span>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>
      ) : (
        <button
          type="button"
          aria-label="Abrir chat de contenido y redes sociales"
          aria-expanded={isOpen}
          className={`relative flex h-16 w-16 origin-bottom-right items-center justify-center rounded-full transition-[background-color,color,border-color,transform,box-shadow] duration-500 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-vh-navy focus:ring-offset-4 focus:ring-offset-vh-gray motion-safe:animate-[floating-chat-breathe_4.5s_ease-in-out_infinite] ${buttonTone}`}
          onClick={() => setIsOpen(true)}
        >
          <ChatIcon />
          <span className={`absolute -right-1 -top-1 flex h-7 min-w-7 items-center justify-center rounded-full border-2 px-2 text-xs font-bold transition-[background-color,color,border-color] duration-500 ease-out ${badgeTone}`}>
            {notificationLevel}
          </span>
        </button>
      )}
    </div>
  );
}
