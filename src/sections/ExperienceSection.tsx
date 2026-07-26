import { useState } from "react";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const experienceItems = [
  {
    title: "Estética",
    description: "Una mirada refinada que busca armonía, naturalidad y cuidado profesional.",
    image: new URL("../../img/style-aesthetic.webp", import.meta.url).href,
    alt: "Experiencia estética premium",
  },
  {
    title: "Profesional",
    description: "Atención clara, responsable y acompañada por criterio clínico en cada etapa.",
    image: new URL("../../img/style-professional.webp", import.meta.url).href,
    alt: "Atención profesional en clínica",
  },
  {
    title: "Minimalismo",
    description: "Espacios, procesos y decisiones simples para una experiencia serena y precisa.",
    image: new URL("../../img/style-minimal.webp", import.meta.url).href,
    alt: "Espacio minimalista de bienestar",
  },
];

export default function ExperienceSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-y border-black/10 bg-white py-6 md:py-8">
      <Container>
        <Reveal className="mx-auto max-w-4xl">
          <button
            type="button"
            className="group flex w-full items-center justify-between gap-6 border-y border-vh-lavender/70 py-8 text-left transition-colors hover:border-vh-navy/40 focus:outline-none focus:ring-2 focus:ring-vh-navy focus:ring-offset-4 focus:ring-offset-white"
            aria-expanded={isOpen}
            aria-controls="experience-content"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span>
              <span className="eyebrow">Experiencia Vitamin Health</span>
              <span className="section-title mt-5 block">
                Una clínica pensada para sentirse tan bien como se ve
              </span>
            </span>
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-vh-lavender bg-vh-gray/70 font-serif text-3xl leading-none text-vh-navy transition-colors group-hover:border-vh-navy group-hover:bg-vh-gray"
              aria-hidden="true"
            >
              {isOpen ? "-" : "+"}
            </span>
          </button>
        </Reveal>

        <div
          id="experience-content"
          className={`overflow-hidden transition-[max-height,opacity,margin-top] duration-500 ease-in-out ${
            isOpen ? "mt-16 max-h-[1800px] opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-10 md:grid-cols-3">
            {experienceItems.map((item, index) => (
              <Reveal as="article" key={item.title} className="text-center" delay={index * 100}>
                <div className="mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-t-full border border-vh-lavender/70 bg-vh-beige p-4 shadow-[0_20px_70px_rgba(28,42,66,0.05)]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full rounded-t-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-7 font-serif text-3xl tracking-tight text-vh-navy">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-vh-blue">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
