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
        <div className="grid grid-cols-4 gap-2 text-center sm:gap-6 lg:gap-12">
          {trustMetrics.map((metric, index) => (
            <Reveal key={`${metric.primary}-${metric.secondary}`} delay={index * 100}>
              <p className="font-serif text-[clamp(0.92rem,3.5vw,2.25rem)] font-medium leading-tight tracking-normal md:text-5xl">
                {metric.primary}
              </p>
              <p className="mt-3 text-[0.48rem] font-semibold uppercase leading-4 tracking-[0.12em] text-vh-white/60 sm:text-[0.65rem] sm:tracking-[0.18em] md:mt-4 md:text-xs md:tracking-[0.22em]">
                {metric.secondary}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
