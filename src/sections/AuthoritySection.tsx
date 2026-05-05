import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const authorityImage = new URL("../../img/equipo/doctora-camila.webp", import.meta.url).href;

export default function AuthoritySection() {
  return (
    <section id="equipo" className="section-spacing bg-vh-navy text-vh-white">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vh-lavender">Equipo profesional</p>
          <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.04] tracking-tight text-balance md:text-6xl">
            Atención clínica con criterio, precisión y mirada integral
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-vh-white/75 md:text-lg md:leading-8">
            En Vitamin Health trabajamos con un equipo profesional altamente calificado, enfocado en brindar una
            atención integral, cercana y de excelencia.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-vh-white/75 md:text-lg md:leading-8">
            Nuestro enfoque se basa en el respeto, el acompañamiento y una comprensión profunda de las necesidades de
            cada persona.
          </p>
          <div className="mt-8 max-w-2xl rounded-[2rem] border border-vh-white/15 bg-vh-white/8 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-vh-lavender">Dirección médica</p>
            <p className="mt-3 font-serif text-3xl leading-tight tracking-tight text-vh-white md:text-4xl">
              Camila Silva
            </p>
            <p className="mt-2 text-base font-medium leading-7 text-vh-white/80 md:text-lg">
              Médico Cirujano y especialista en Medicina Antiage.
            </p>
          </div>
        </Reveal>

        <Reveal className="mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full border border-vh-white/15 bg-vh-white/10 p-5" delay={100}>
          <img
            src={authorityImage}
            alt="Doctora Camila Silva, directora médica de Vitamin Health"
            className="h-full w-full rounded-t-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </Container>
    </section>
  );
}
