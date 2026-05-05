import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { whatsappUrl } from "@/utils/whatsapp";

type Treatment = {
  title: string;
  description: string;
  image: string;
  featured?: boolean;
  imagePosition?: string;
};

const treatments: Treatment[] = [
  {
    title: "Sueroterapia",
    description:
      "Administramos sueros con vitaminas, aminoácidos y minerales formulados según las necesidades de cada paciente.",
    image: new URL("../../img/tratamientos/sueroterapia.webp", import.meta.url).href,
    featured: true,
    imagePosition: "object-[center_42%]",
  },
  {
    title: "Vacuna anti envejecimiento",
    description:
      "Reduce la inflamación celular, mejora el sistema inmunológico, acelera el metabolismo y mejora la calidad del sueño.",
    image: new URL("../../img/tratamientos/vacuna-anti-edad.webp", import.meta.url).href,
    imagePosition: "object-[center_38%]",
  },
  {
    title: "Medicina General",
    description: "Atención médica, certificados, licencias médicas, evaluación de exámenes y apoyo en salud mental.",
    image: new URL("../../img/tratamientos/medicina-general.webp", import.meta.url).href,
  },
  {
    title: "Atención Psicológica",
    description: "Terapia enfocada en tratar trastornos, conductas y emociones que afectan tu bienestar.",
    image: new URL("../../img/tratamientos/psicologia.webp", import.meta.url).href,
  },
  {
    title: "Ácido hialurónico",
    description: "Biomodelación facial para restaurar volumen y mejorar la armonía del rostro con resultados naturales.",
    image: new URL("../../img/tratamientos/acido-hialuronico.webp", import.meta.url).href,
    imagePosition: "object-[center_36%]",
  },
  {
    title: "Toxina botulínica",
    description: "Suaviza líneas de expresión y arrugas mediante la relajación controlada de los músculos faciales.",
    image: new URL("../../img/tratamientos/toxina-botulinica.webp", import.meta.url).href,
    imagePosition: "object-[center_40%]",
  },
  {
    title: "Mesoterapia",
    description: "Tratamiento con vitaminas y sustancias que rejuvenecen la piel, aportan brillo y mejoran su calidad.",
    image: new URL("../../img/tratamientos/mesoterapia.webp", import.meta.url).href,
  },
  {
    title: "Plasma rico en plaquetas",
    description: "Tratamiento que utiliza tu propio plasma para estimular regeneración y fortalecer el crecimiento capilar.",
    image: new URL("../../img/tratamientos/plasma-plaquetas.webp", import.meta.url).href,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-spacing">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Servicios</p>
          <h2 className="section-title mt-6">Tratamientos pensados para una salud más completa</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:flex lg:snap-x lg:gap-6 lg:overflow-x-auto lg:overflow-y-hidden lg:pb-6 lg:[scrollbar-color:#C8C7D7_transparent] lg:[scrollbar-width:thin] lg:[&::-webkit-scrollbar]:h-1.5 lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-vh-lavender/70 lg:[&::-webkit-scrollbar-track]:bg-transparent">
          {treatments.map((treatment, index) => (
            <Reveal
              as="article"
              key={treatment.title}
              className="group relative flex min-h-[520px] overflow-hidden rounded-[2rem] bg-vh-navy transition-transform duration-500 md:min-h-[620px] lg:min-h-[560px] lg:w-[calc((100%-4.5rem)/4)] lg:min-w-[calc((100%-4.5rem)/4)] lg:snap-start"
              delay={(index % 4) * 100}
              aria-label={treatment.title}
            >
              <img
                src={treatment.image}
                alt={treatment.title}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${treatment.imagePosition ?? "object-center"}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.28)_45%,rgba(0,0,0,0.72)_100%)] transition-colors duration-500 group-hover:bg-black/20"
                aria-hidden="true"
              />
              <div className="relative z-10 mt-auto max-w-xl p-8 text-vh-white md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-vh-white/60">Tratamiento</p>
                <h3
                  className={`mt-4 font-serif leading-tight tracking-tight text-vh-white ${
                    treatment.featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  {treatment.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-vh-white/80 md:text-base md:leading-7">
                  {treatment.description}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex text-sm font-semibold text-vh-white underline decoration-vh-white/60 underline-offset-8 transition-colors hover:text-vh-white/80"
                >
                  Conocer tratamiento
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
