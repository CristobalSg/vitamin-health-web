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
  return (
    <section id="valor" className="section-spacing">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Propuesta de valor</p>
          <h2 className="section-title mt-6">
            Una mirada completa para cuidar tu salud desde la raíz
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-0 md:gap-5 md:grid-cols-2 lg:grid-cols-6">
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
      </Container>
    </section>
  );
}
