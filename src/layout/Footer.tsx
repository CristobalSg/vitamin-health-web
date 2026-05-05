import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { whatsappUrl } from "@/utils/whatsapp";

const footerLinks = [
  { label: "Tratamientos", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/vitaminhealth.cl/", icon: "instagram" },
  { label: "WhatsApp", href: whatsappUrl, icon: "whatsapp" },
  { label: "TikTok", href: "https://www.tiktok.com/@vitaminhealth.cl", icon: "tiktok" },
];

type SocialIconProps = {
  icon: string;
};

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

  if (icon === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5.2 19.1 6.1 16A8.2 8.2 0 1 1 9 18.4l-3.8.7Z" />
        <path d="M9.2 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.4.5c-.1.2-.2.3 0 .6.3.5.8 1.1 1.3 1.5.6.5 1.2.8 1.7 1 .3.1.4.1.6-.1l.6-.7c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.5 0 .7-.3 1.5-.8 1.8-.5.3-1.7.4-3.8-.6-2.8-1.3-4.7-3.7-5.3-5.4-.5-1.3-.2-2 .1-2.1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M15.1 3.5c.4 2.2 1.7 3.6 3.9 3.8v3.2c-1.3 0-2.5-.4-3.8-1.2v5.6c0 3.2-2.1 5.5-5.3 5.5-2.9 0-5-2-5-4.8 0-3 2.3-5 5.5-4.8v3.4c-1.3-.2-2.2.3-2.2 1.4 0 .9.7 1.5 1.7 1.5 1.2 0 1.9-.8 1.9-2.3V3.5h3.3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-black/10 bg-vh-gray py-14 text-vh-navy">
      <Container>
        <Reveal className="grid gap-10 md:grid-cols-[1.25fr_0.75fr_0.8fr_0.7fr]">
          <div>
            <p className="font-serif text-2xl tracking-tight">Vitamin Health</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-vh-blue">
              Medicina preventiva, regenerativa y bienestar integral con una experiencia clínica serena y personalizada.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Links</p>
            <ul className="mt-4 space-y-3 text-sm text-vh-blue">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-vh-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Contacto</p>
            <div className="mt-4 space-y-3 text-sm text-vh-blue">
              <a href="mailto:hola@vitaminhealth.cl" className="block transition-colors hover:text-vh-ink">
                hola@vitaminhealth.cl
              </a>
              <p>Agenda tu evaluación personalizada.</p>
            </div>
          </div>

          <nav aria-label="Redes sociales">
            <p className="eyebrow">Redes</p>
            <ul className="mt-4 flex items-center gap-3 text-vh-blue">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-vh-navy/10 bg-white/50 transition-colors hover:border-vh-navy/30 hover:bg-white hover:text-vh-ink"
                    aria-label={link.label}
                  >
                    <SocialIcon icon={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        <Reveal className="mt-12 border-t border-black/10 pt-7 text-xs text-vh-blue" delay={100}>
          <p>© 2026 Vitamin Health. Todos los derechos reservados.</p>
        </Reveal>
      </Container>
    </footer>
  );
}
