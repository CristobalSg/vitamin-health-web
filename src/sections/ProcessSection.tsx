import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const methodImage = new URL("../../img/method-consultation.webp", import.meta.url).href;

const processSteps = [
  {
    number: "01",
    title: "Evaluación",
    description: "Escuchamos tus objetivos, síntomas y contexto de salud.",
    image: new URL("../../img/tratamientos/medicina-general.webp", import.meta.url).href,
    imageAlt: "Evaluación médica personalizada",
  },
  {
    number: "02",
    title: "Diagnóstico",
    description: "Identificamos prioridades con una mirada clínica integral.",
    image: new URL("../../img/tratamientos/sueroterapia.webp", import.meta.url).href,
    imageAlt: "Tratamiento clínico personalizado",
  },
  {
    number: "03",
    title: "Plan personalizado",
    description: "Diseñamos una ruta clara según tus necesidades reales.",
    image: new URL("../../img/tratamientos/acido-hialuronico.webp", import.meta.url).href,
    imageAlt: "Plan estético y preventivo",
  },
  {
    number: "04",
    title: "Seguimiento",
    description: "Ajustamos el proceso para sostener avances en el tiempo.",
    image: new URL("../../img/tratamientos/plasma-plaquetas.webp", import.meta.url).href,
    imageAlt: "Seguimiento clínico profesional",
  },
];

export default function ProcessSection() {
  return (
    <section id="metodo" className="section-spacing border-y border-black/10 bg-white">
      <Container>
        <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_0.88fr_0.4fr] lg:items-end">
          <div>
            <p className="eyebrow">Cómo funciona</p>
            <h2 className="section-title mt-6">
              Un proceso claro, humano y medible
            </h2>
          </div>
          <p className="section-copy max-w-2xl lg:ml-auto">
            Cuatro pasos simples para pasar de la inquietud inicial a un plan personalizado con seguimiento profesional.
          </p>
          <div className="hidden aspect-square overflow-hidden rounded-[2rem] border border-vh-lavender/70 bg-vh-beige p-3 lg:block">
            <img
              src={methodImage}
              alt="Consulta clínica personalizada"
              className="h-full w-full rounded-[1.5rem] object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-5 lg:grid-cols-4 lg:gap-0">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-vh-lavender/70 md:block lg:left-0 lg:top-10 lg:h-px lg:w-full" />

          {processSteps.map((step, index) => (
            <Reveal
              as="article"
              key={step.number}
              className="premium-card relative min-h-[285px] overflow-hidden bg-vh-gray lg:mx-2"
              delay={index * 100}
            >
              <div
                className="absolute -right-10 -top-12 h-40 w-40 overflow-hidden rounded-full border border-white/70 bg-vh-beige md:h-48 md:w-48"
                aria-hidden="true"
              >
                <img
                  src={step.image}
                  alt=""
                  className="h-full w-full scale-110 object-cover opacity-55 blur-[1.5px] saturate-[0.82]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-vh-gray/45" />
              </div>
              <div className="absolute right-10 top-20 hidden h-16 w-16 rounded-full border border-vh-lavender/60 bg-white/45 backdrop-blur-sm md:block" />

              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-vh-lavender bg-white font-serif text-3xl tracking-tight text-vh-navy shadow-[0_14px_40px_rgba(28,42,66,0.06)]">
                  {step.number}
                </div>
                <h3 className="font-serif text-2xl tracking-tight text-vh-navy">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-vh-blue">{step.description}</p>
              </div>
              <span className="sr-only">{step.imageAlt}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
