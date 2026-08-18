import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { services, type Service } from "@/data/services";
import BaseLayout from "@/layout/BaseLayout";
import { getServiceWhatsappUrl } from "@/utils/whatsapp";

type ServiceDetailProps = {
  service: Service;
};

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <BaseLayout>
      <section className="bg-vh-gray pt-24 md:pt-28">
        <div className="relative h-[42vh] min-h-[340px] overflow-hidden bg-vh-navy md:h-[54vh] md:min-h-[460px]">
          <img
            src={service.image}
            alt={service.title}
            className={`h-full w-full object-cover ${service.imagePosition ?? "object-center"}`}
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,42,66,0.05)_0%,rgba(28,42,66,0.16)_46%,rgba(28,42,66,0.62)_100%)]"
            aria-hidden="true"
          />
        </div>

        <Container>
          <Reveal className="relative -mt-24 rounded-[2.5rem] border border-vh-lavender/55 bg-vh-gray/90 px-5 py-8 shadow-[0_24px_70px_rgba(28,42,66,0.12)] backdrop-blur sm:px-8 md:-mt-28 md:rounded-[3rem] md:px-10 md:py-10 lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <p className="eyebrow">Servicio</p>
                <h1 className="mt-5 max-w-5xl font-serif text-4xl leading-[1.02] tracking-tight text-vh-navy text-balance md:text-6xl">
                  {service.heroTitle}
                </h1>
              </div>
              <div>
                <p className="text-base leading-7 text-vh-blue md:text-lg md:leading-8">{service.subtitle}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={getServiceWhatsappUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {service.ctaLabel}
                  </a>
                  <a href="#detalle-servicio" className="btn-secondary">
                    Ver detalles
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="detalle-servicio" className="bg-vh-gray py-12 md:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal className="rounded-[2rem] border border-vh-lavender/55 bg-vh-white/70 p-6 backdrop-blur md:rounded-[2.5rem] md:p-8">
              <p className="eyebrow">Problema y solución</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-vh-navy md:text-4xl">
                {service.problem.question}
              </h2>
              <p className="mt-5 text-base leading-7 text-vh-blue">{service.problem.answer}</p>
            </Reveal>

            <Reveal className="rounded-[2rem] border border-vh-lavender/55 bg-vh-white/70 p-6 backdrop-blur md:rounded-[2.5rem] md:p-8" delay={80}>
              <p className="eyebrow">Ficha técnica express</p>
              <div className="mt-6 divide-y divide-vh-lavender/50">
                {service.facts.map((fact) => (
                  <div key={fact.label} className="grid gap-2 py-3 sm:grid-cols-[12rem_1fr] sm:gap-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vh-blue">{fact.label}</p>
                    <p className="font-medium leading-6 text-vh-navy">{fact.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-vh-white py-12 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <Reveal>
                <p className="eyebrow">Beneficios clave</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-vh-navy md:text-4xl">
                  Un enfoque pensado para ti
                </h2>
              </Reveal>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {service.benefits.map((benefit, index) => (
                  <Reveal
                    as="article"
                    key={benefit}
                    className="rounded-[1.75rem] border border-vh-lavender/50 bg-vh-gray/55 p-5 backdrop-blur"
                    delay={index * 80}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-vh-blue">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-vh-blue">{benefit}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <p className="eyebrow">Cómo funciona</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-vh-navy md:text-4xl">
                  Paso a paso
                </h2>
              </Reveal>

              <div className="mt-7 grid gap-3">
                {service.steps.map((step, index) => (
                  <Reveal
                    as="article"
                    key={step.title}
                    className="grid gap-4 rounded-[1.75rem] border border-vh-lavender/50 bg-vh-gray/55 p-5 backdrop-blur sm:grid-cols-[3.5rem_1fr]"
                    delay={index * 80}
                  >
                    <p className="font-serif text-2xl tracking-tight text-vh-navy">{String(index + 1).padStart(2, "0")}</p>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-vh-navy">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-vh-blue">{step.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-vh-navy py-12 text-vh-white md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-vh-lavender">
                Tecnología y seguridad
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-vh-white md:text-4xl">
                Atención responsable
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="max-w-4xl text-base leading-7 text-vh-white/75">{service.safety}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-vh-gray py-12 md:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
            <Reveal>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-vh-navy md:text-4xl">
                Dudas habituales
              </h2>
            </Reveal>

            <div className="grid gap-3">
              {service.faqs.map((faq, index) => (
                <Reveal
                  as="details"
                  key={faq.question}
                  className="group rounded-[1.75rem] border border-vh-lavender/50 bg-vh-white/70 p-5 backdrop-blur open:bg-vh-white/85"
                  delay={index * 60}
                >
                  <summary className="cursor-pointer list-none pr-8 font-serif text-xl leading-tight tracking-tight text-vh-navy marker:hidden">
                    {faq.question}
                    <span className="float-right text-base font-sans text-vh-blue transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-vh-blue">{faq.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-vh-white py-12 md:py-16">
        <Container>
          <Reveal className="grid gap-7 rounded-[2.5rem] border border-vh-lavender/55 bg-vh-gray/70 p-6 backdrop-blur md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <p className="eyebrow">Cierre</p>
              <h2 className="mt-4 max-w-4xl font-serif text-3xl leading-tight tracking-tight text-vh-navy text-balance md:text-5xl">
                {service.closing.phrase}
              </h2>
            </div>
            <a
              href={getServiceWhatsappUrl(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {service.closing.ctaLabel}
            </a>
          </Reveal>
        </Container>
      </section>

      <section className="bg-vh-white pb-16 pt-4 md:pb-20">
        <Container>
          <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">También puedes revisar</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-vh-navy md:text-4xl">
                Otros servicios
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {relatedServices.map((item, index) => (
              <Reveal
                as="article"
                key={item.slug}
                className="rounded-[1.75rem] border border-vh-lavender/50 bg-vh-gray/55 p-5 backdrop-blur"
                delay={index * 80}
              >
                <h3 className="font-serif text-xl leading-tight tracking-tight text-vh-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-vh-blue">{item.description}</p>
                <a
                  href={`/servicios/${item.slug}`}
                  className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-vh-navy transition-colors hover:text-vh-blue"
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
