import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";

export default function ServiceProposalSection() {
  return (
    <section id="servicios-propuesta" className="border-b border-white/10 bg-vh-navy pb-8 pt-8 text-vh-white md:pb-10 md:pt-10">
      <Container>
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vh-lavender">Propuesta de servicios</p>
          </div>
        </Reveal>

        <Reveal className="mt-8 overflow-x-auto overflow-y-hidden pb-4 md:mt-10 lg:[scrollbar-color:#C8C7D7_transparent] lg:[scrollbar-width:thin] lg:[&::-webkit-scrollbar]:h-1.5 lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-vh-lavender/70 lg:[&::-webkit-scrollbar-track]:bg-transparent" delay={100}>
          <div className="flex w-max animate-service-carousel-hint gap-3 sm:gap-4">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group relative flex aspect-square w-[148px] shrink-0 overflow-hidden rounded-[1.35rem] border border-vh-white/12 bg-vh-blue focus:outline-none focus:ring-2 focus:ring-vh-white/80 focus:ring-offset-2 focus:ring-offset-vh-navy sm:w-[180px] md:w-[220px] md:rounded-[1.65rem] lg:w-[260px]"
                aria-label={`Ver detalle de ${service.title}`}
              >
                <img
                  src={service.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover opacity-72 transition duration-500 group-hover:scale-105 group-hover:opacity-88 ${service.imagePosition ?? "object-center"}`}
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,42,66,0.05)_0%,rgba(28,42,66,0.36)_48%,rgba(28,42,66,0.86)_100%)]" />
                <span className="relative z-10 mt-auto flex min-h-24 w-full flex-col justify-end p-4 text-left sm:p-5">
                  <span className="font-serif text-[clamp(1.02rem,4vw,1.55rem)] leading-[1.05] tracking-tight text-vh-white">
                    {service.title}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
