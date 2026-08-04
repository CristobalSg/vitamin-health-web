import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import BaseLayout from "@/layout/BaseLayout";
import ServiceProposalSection from "@/sections/ServiceProposalSection";
import TestimonialReferencesSection from "@/sections/TestimonialReferencesSection";

export default function Proposals() {
  return (
    <BaseLayout>
      <section className="bg-vh-gray pb-16 pt-36 md:pb-20 md:pt-44">
        <Container>
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Proposals</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-vh-navy text-balance md:text-7xl">
              Propuestas visuales para Vitamin Health
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-vh-blue md:text-lg md:leading-8">
              Esta ruta reúne propuestas exploratorias para revisar estilos antes de incorporarlos a la página principal.
              En la propuesta de servicios, cada cuadrado es clickeable y abre otra página con más información del
              tratamiento.
            </p>
          </Reveal>
        </Container>
      </section>

      <ServiceProposalSection />
      <TestimonialReferencesSection />
    </BaseLayout>
  );
}
