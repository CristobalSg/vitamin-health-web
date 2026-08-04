import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { services, type Service } from "@/data/services";
import BaseLayout from "@/layout/BaseLayout";
import { whatsappUrl } from "@/utils/whatsapp";

type ServiceDetailProps = {
  service: Service;
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <BaseLayout>
      <section className="bg-vh-gray pb-20 pt-36 md:pb-28 md:pt-44">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <Reveal>
              <a
                href="/#servicios-propuesta"
                className="inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-vh-blue transition-colors hover:text-vh-navy"
              >
                Volver a servicios
              </a>
              <p className="eyebrow mt-10">Servicio</p>
              <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-vh-navy text-balance md:text-7xl">
                {service.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-vh-blue">{service.detailIntro}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Agendar evaluación
                </a>
                <a href="/#servicios" className="btn-secondary">
                  Ver todos los tratamientos
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-vh-lavender/70 bg-vh-beige">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`h-full w-full object-cover ${service.imagePosition ?? "object-center"}`}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-vh-white py-20 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-start">
            <Reveal>
              <p className="eyebrow">Enfoque</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-vh-navy md:text-5xl">
                Atención clara, profesional y personalizada
              </h2>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {service.detailPoints.map((point, index) => (
                <Reveal
                  as="article"
                  key={point}
                  className="rounded-[1.25rem] border border-vh-lavender/65 bg-vh-gray/70 p-6"
                  delay={index * 80}
                >
                  <p className="font-serif text-3xl tracking-tight text-vh-navy">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-vh-blue">{point}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-vh-gray py-20 md:py-24">
        <Container>
          <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">También puedes revisar</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-vh-navy md:text-5xl">
                Otros servicios
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {relatedServices.map((item, index) => (
              <Reveal as="article" key={item.slug} className="premium-card p-6" delay={index * 80}>
                <h3 className="font-serif text-2xl leading-tight tracking-tight text-vh-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-vh-blue">{item.description}</p>
                <a
                  href={`/servicios/${item.slug}`}
                  className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-vh-navy transition-colors hover:text-vh-blue"
                >
                  Ver servicio
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </BaseLayout>
  );
}
