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

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {valueItems.map((item, index) => (
            <Reveal
              as="article"
              key={item.title}
              className={`premium-card min-h-52 lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
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
