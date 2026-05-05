import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const trustMetrics = [
  {
    primary: "Desde 2022",
    secondary: "acompañando tu bienestar",
  },
  {
    primary: "Equipo profesional",
    secondary: "especializado",
  },
  {
    primary: "Cientos de pacientes",
    secondary: "atendidos",
  },
  {
    primary: "Atención centrada",
    secondary: "en la persona",
  },
];

export default function TrustMetricsSection() {
  return (
    <section className="border-b border-white/10 bg-vh-navy py-20 text-vh-white md:py-24">
      <Container>
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {trustMetrics.map((metric, index) => (
            <Reveal key={`${metric.primary}-${metric.secondary}`} delay={index * 100}>
              <p className="font-serif text-4xl font-medium leading-tight tracking-normal md:text-5xl">
                {metric.primary}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-vh-white/60">
                {metric.secondary}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
