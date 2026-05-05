import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const problemImage = new URL("../../img/problem-introspection.webp", import.meta.url).href;

export default function BalanceSection() {
  return (
    <section className="section-spacing border-y border-black/10 bg-white">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="surface-soft aspect-[4/5] w-full overflow-hidden bg-vh-beige p-5 md:aspect-[5/4] lg:aspect-[4/5]">
          <img
            src={problemImage}
            alt="Persona en un momento de introspección y bienestar"
            className="h-full w-full rounded-[2rem] object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left" delay={100}>
          <p className="eyebrow">Bienestar desde la raíz</p>
          <h2 className="section-title mt-6">
            No se trata solo de síntomas, sino de equilibrio
          </h2>
          <p className="section-copy mt-7">
            Cuando el cansancio se vuelve parte de la rutina, la energía baja y el envejecimiento se siente antes de
            tiempo, el cuerpo suele estar pidiendo una mirada más profunda.
          </p>
          <p className="section-copy mt-5">
            En Vitamin Health abordamos la salud física, estética y emocional como un sistema conectado, con planes
            pensados para recuperar claridad, vitalidad y bienestar sostenible.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
