import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { whatsappUrl } from "@/utils/whatsapp";

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-spacing">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Servicios</p>
          <h2 className="section-title mt-6">Tratamientos pensados para una salud más completa</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:mt-16 md:gap-6 lg:flex lg:snap-x lg:gap-6 lg:overflow-x-auto lg:overflow-y-hidden lg:pb-6 lg:[scrollbar-color:#C8C7D7_transparent] lg:[scrollbar-width:thin] lg:[&::-webkit-scrollbar]:h-1.5 lg:[&::-webkit-scrollbar-thumb]:rounded-full lg:[&::-webkit-scrollbar-thumb]:bg-vh-lavender/70 lg:[&::-webkit-scrollbar-track]:bg-transparent">
          {services.map((treatment, index) => (
            <Reveal
              as="article"
              key={treatment.title}
              className="group relative flex min-h-[260px] overflow-hidden rounded-[1.35rem] bg-vh-navy sm:min-h-[330px] md:min-h-[620px] md:rounded-[2rem] lg:min-h-[560px] lg:w-[calc((100%-4.5rem)/4)] lg:min-w-[calc((100%-4.5rem)/4)] lg:snap-start"
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
              <div className="relative z-10 mt-auto max-w-xl p-4 text-vh-white sm:p-5 md:p-10">
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-vh-white/60 sm:text-[0.65rem] md:text-xs md:tracking-[0.25em]">
                  Tratamiento
                </p>
                <h3
                  className={`mt-2 font-serif leading-tight tracking-tight text-vh-white sm:mt-3 md:mt-4 ${
                    treatment.featured ? "text-xl sm:text-2xl md:text-5xl" : "text-lg sm:text-xl md:text-3xl"
                  }`}
                >
                  {treatment.title}
                </h3>
                <p className="mt-3 hidden max-w-md text-xs leading-5 text-vh-white/80 sm:text-sm sm:leading-6 md:mt-4 md:block md:text-base md:leading-7">
                  {treatment.description}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-9 items-center justify-center rounded-full border border-vh-white/45 px-3.5 py-2 text-[0.68rem] font-semibold text-vh-white transition-colors hover:border-vh-white/75 hover:bg-vh-white/10 hover:text-vh-white sm:px-4 sm:text-xs md:mt-7 md:min-h-10 md:px-5 md:text-sm"
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
