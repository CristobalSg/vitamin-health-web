import Container from "@/components/Container";
import { whatsappUrl } from "@/utils/whatsapp";

const heroBackground = new URL("../../img/hero-bg-treatment.webp", import.meta.url).href;

const trustItems = ["Medicina preventiva", "Epigenética", "Estética profesional"];

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.34)_42%,rgba(0,0,0,0.12)_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex min-h-screen items-center py-32 md:py-36">
        <div className="mx-auto max-w-2xl text-center text-vh-white lg:mx-0 lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vh-white/80">Vitamin Health</p>
          <h1 className="mt-7 font-serif text-5xl leading-[0.98] tracking-tight text-balance md:text-7xl">
            Medicina regenerativa y salud integral con enfoque preventivo
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-vh-white/85 md:text-xl md:leading-8 lg:mx-0">
            Unimos medicina preventiva, epigenética y estética para mejorar tu calidad de vida
          </p>

          <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar evaluación
            </a>
            <a
              href="#servicios"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-vh-white/70 bg-vh-white/10 px-7 py-4 text-sm font-semibold text-vh-white backdrop-blur transition-colors hover:bg-vh-white/20 focus:outline-none focus:ring-2 focus:ring-vh-white/80 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Conocer tratamientos
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl gap-4 border-t border-vh-white/30 pt-7 text-xs font-semibold uppercase tracking-[0.16em] text-vh-white/80 sm:grid-cols-3 lg:mx-0">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
