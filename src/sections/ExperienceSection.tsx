import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const experienceItems = [
  {
    title: "Estética",
    description: "Una mirada refinada que busca armonía, naturalidad y cuidado profesional.",
    image: new URL("../../img/style-aesthetic.webp", import.meta.url).href,
    alt: "Experiencia estética premium",
  },
  {
    title: "Profesional",
    description: "Atención clara, responsable y acompañada por criterio clínico en cada etapa.",
    image: new URL("../../img/style-professional.webp", import.meta.url).href,
    alt: "Atención profesional en clínica",
  },
  {
    title: "Minimalismo",
    description: "Espacios, procesos y decisiones simples para una experiencia serena y precisa.",
    image: new URL("../../img/style-minimal.webp", import.meta.url).href,
    alt: "Espacio minimalista de bienestar",
  },
];

export default function ExperienceSection() {
  return (
    <section className="section-spacing border-y border-black/10 bg-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Experiencia Vitamin Health</p>
          <h2 className="section-title mt-6">
            Una clínica pensada para sentirse tan bien como se ve
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {experienceItems.map((item, index) => (
            <Reveal as="article" key={item.title} className="text-center" delay={index * 100}>
              <div className="mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-t-full border border-vh-lavender/70 bg-vh-beige p-4 shadow-[0_20px_70px_rgba(28,42,66,0.05)]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full rounded-t-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-7 font-serif text-3xl tracking-tight text-vh-navy">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-vh-blue">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
