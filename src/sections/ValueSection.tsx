import { useState } from "react";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const valueItems = [
  {
    title: "Medicina preventiva",
    description: "Evaluamos señales tempranas para cuidar tu salud antes de que el desgaste avance.",
  },
  {
    title: "Epigenética",
    description: "Observamos hábitos, contexto y biología para construir decisiones más personalizadas.",
  },
  {
    title: "Medicina estética",
    description: "Tratamientos profesionales orientados a una estética natural, segura y armónica.",
  },
  {
    title: "Salud emocional",
    description: "Integramos el bienestar mental como parte esencial de tu energía y equilibrio.",
  },
  {
    title: "Bienestar integral",
    description: "Conectamos prevención, vitalidad y seguimiento para sostener cambios reales.",
  },
];

const stackLevels = ["z-[1]", "z-[2]", "z-[3]", "z-[4]", "z-[5]"];
const mobileOffsets = ["-translate-x-1.5", "translate-x-1.5", "-translate-x-1.5", "translate-x-1.5", "-translate-x-1.5"];

export default function ValueSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="valor" className="py-6 md:py-8">
      <Container>
        <Reveal className="mx-auto max-w-4xl">
          <button
            type="button"
            className="group flex w-full items-center justify-between gap-6 border-y border-vh-lavender/70 py-8 text-left transition-colors hover:border-vh-navy/40 focus:outline-none focus:ring-2 focus:ring-vh-navy focus:ring-offset-4 focus:ring-offset-vh-gray"
            aria-expanded={isOpen}
            aria-controls="value-content"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span>
              <span className="eyebrow">Propuesta de valor</span>
              <span className="section-title mt-5 block">
                Una mirada completa para cuidar tu salud desde la raíz
              </span>
            </span>
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-vh-lavender bg-white/50 font-serif text-3xl leading-none text-vh-navy transition-colors group-hover:border-vh-navy group-hover:bg-white"
              aria-hidden="true"
            >
              {isOpen ? "-" : "+"}
            </span>
          </button>
        </Reveal>

        <div
          id="value-content"
          className={`overflow-hidden transition-[max-height,opacity,margin-top] duration-500 ease-in-out ${
            isOpen ? "mt-16 max-h-[1600px] opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-0 md:gap-5 md:grid-cols-2 lg:grid-cols-6">
            {valueItems.map((item, index) => (
              <Reveal
                as="article"
                key={item.title}
                className={`premium-card relative min-h-52 shadow-[0_18px_46px_rgba(28,42,66,0.06)] md:shadow-none lg:col-span-2 ${
                  index > 0 ? "-mt-7 md:mt-0" : ""
                } ${mobileOffsets[index]} md:translate-x-0 ${stackLevels[index]} ${index === 3 ? "lg:col-start-2" : ""}`}
                delay={index * 100}
              >
                <h3 className="font-serif text-[1.7rem] leading-tight tracking-tight text-vh-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-vh-blue">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
