import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { whatsappUrl } from "@/utils/whatsapp";

export default function FinalCtaSection() {
  return (
    <section className="section-spacing">
      <Container>
        <Reveal className="mx-auto max-w-5xl rounded-[3rem] border border-vh-lavender/70 bg-white/60 px-6 py-18 text-center shadow-[0_24px_80px_rgba(28,42,66,0.06)] md:px-12 md:py-24">
          <p className="eyebrow">Primer paso</p>
          <h2 className="section-title mx-auto mt-6 max-w-3xl">
            Comienza con una evaluación personalizada
          </h2>
          <p className="section-copy mx-auto mt-7 max-w-xl">
            Descubre qué necesita tu cuerpo para recuperar equilibrio y bienestar
          </p>
          <div className="mt-10">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar evaluación
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
