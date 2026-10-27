import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { whatsappUrl } from "@/utils/whatsapp";

type InfoPageProps = {
  kind: "booking" | "contact";
};

const content = {
  booking: {
    eyebrow: "Reserva de horas",
    title: "Comienza con una evaluación personalizada",
    description:
      "Consulta la disponibilidad de atención y cuéntanos qué necesitas. Nuestro canal actual de reserva funciona a través de WhatsApp.",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Conversemos sobre tu bienestar",
    description:
      "Escríbenos para resolver tus dudas, consultar disponibilidad o solicitar una evaluación personalizada en Vitamin Health.",
  },
} as const;

export default function InfoPage({ kind }: InfoPageProps) {
  const pageContent = content[kind];

  return (
    <section className="bg-vh-gray pb-20 pt-36 md:pb-28 md:pt-44">
      <Container>
        <Reveal className="mx-auto max-w-5xl rounded-[3rem] border border-vh-lavender/70 bg-white/60 px-6 py-16 text-center shadow-[0_24px_80px_rgba(28,42,66,0.06)] md:px-12 md:py-24">
          <p className="eyebrow">{pageContent.eyebrow}</p>
          <h1 className="section-title mx-auto mt-6 max-w-3xl">{pageContent.title}</h1>
          <p className="section-copy mx-auto mt-7 max-w-2xl">{pageContent.description}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {kind === "booking" ? "Solicitar una hora" : "Contactar por WhatsApp"}
            </a>
            {kind === "contact" && (
              <a href="mailto:hola@vitaminhealth.cl" className="btn-secondary">
                hola@vitaminhealth.cl
              </a>
            )}
          </div>

          {kind === "contact" && (
            <p className="mt-8 text-sm leading-6 text-vh-blue">Antonio Varas #687, oficina 404, Temuco</p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
