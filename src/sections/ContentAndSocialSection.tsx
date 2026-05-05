import { useState } from "react";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const guideUrl = "https://drive.google.com/file/d/1D3wB_GySdwKTnwB0kItO7I7QZHuEccex/view";

const socialItems = [
  {
    name: "Instagram",
    description: "Contenido visual sobre tratamientos, bienestar y novedades de Vitamin Health.",
    href: "https://www.instagram.com/vitaminhealth.cl/",
    icon: "instagram",
  },
  {
    name: "TikTok",
    description: "Videos breves con información práctica, experiencias y educación en salud.",
    href: "https://www.tiktok.com/@vitaminhealth.cl",
    icon: "tiktok",
  },
];

type ActivePanel = "guide" | "social";

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

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M15.1 3.5c.4 2.2 1.7 3.6 3.9 3.8v3.2c-1.3 0-2.5-.4-3.8-1.2v5.6c0 3.2-2.1 5.5-5.3 5.5-2.9 0-5-2-5-4.8 0-3 2.3-5 5.5-4.8v3.4c-1.3-.2-2.2.3-2.2 1.4 0 .9.7 1.5 1.7 1.5 1.2 0 1.9-.8 1.9-2.3V3.5h3.3Z" />
    </svg>
  );
}

export default function ContentAndSocialSection() {
  const [activePanel, setActivePanel] = useState<ActivePanel>("guide");

  return (
    <section className="py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-[#1C2A42]/10 bg-white/60 p-1">
            <button
              type="button"
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                activePanel === "guide" ? "bg-vh-navy text-vh-white" : "text-vh-navy hover:bg-white"
              }`}
              onClick={() => setActivePanel("guide")}
            >
              Contenido educativo
            </button>
            <button
              type="button"
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                activePanel === "social" ? "bg-vh-navy text-vh-white" : "text-vh-navy hover:bg-white"
              }`}
              onClick={() => setActivePanel("social")}
            >
              Redes sociales
            </button>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl">
          {activePanel === "guide" ? (
            <Reveal key="guide" className="rounded-[2.5rem] border border-[#1C2A42]/10 bg-white/60 p-8 text-center md:p-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-vh-lavender/70 bg-vh-gray font-serif text-3xl text-vh-navy">
                G
              </div>
              <p className="eyebrow mt-8">Contenido educativo</p>
              <h2 className="section-title mt-6">Guía de tratamientos</h2>
              <p className="section-copy mx-auto mt-6 max-w-2xl">
                Conoce en detalle nuestros tratamientos, beneficios y enfoque médico. Hemos preparado una guía completa
                para ayudarte a entender cuál es el tratamiento más adecuado para ti.
              </p>
              <div className="mt-10">
                <a href={guideUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Ver guía completa
                </a>
              </div>
            </Reveal>
          ) : (
            <Reveal key="social" className="rounded-[2.5rem] border border-[#1C2A42]/10 bg-white/60 p-8 text-center md:p-10">
              <p className="eyebrow">Redes sociales</p>
              <h2 className="section-title mt-6">Conoce más de nuestro trabajo</h2>
              <p className="section-copy mx-auto mt-6 max-w-2xl">
                Compartimos contenido sobre tratamientos, bienestar y resultados reales de nuestros pacientes.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {socialItems.map((item, index) => (
                  <Reveal
                    as="article"
                    key={item.name}
                    className="rounded-[2rem] border border-[#1C2A42]/10 bg-vh-gray/70 p-6 text-left transition-colors hover:bg-white"
                    delay={index * 100}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-vh-lavender/70 bg-white text-vh-navy">
                      <SocialIcon icon={item.icon} />
                    </div>
                    <h3 className="mt-6 font-serif text-3xl tracking-tight text-vh-navy">{item.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-vh-blue">{item.description}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full border border-vh-navy/20 px-5 py-3 text-sm font-semibold text-vh-navy transition-colors hover:border-vh-navy hover:bg-vh-navy hover:text-vh-white"
                    >
                      Ver perfil
                    </a>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
