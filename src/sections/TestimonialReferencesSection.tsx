import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Paciente Google",
    text: "Referencia de Google pendiente de reemplazo por reseña real del perfil de Vitamin Health.",
  },
  {
    name: "Paciente Google",
    text: "Experiencia destacada desde Google. Este texto funciona como placeholder para la propuesta visual.",
  },
  {
    name: "Paciente Google",
    text: "Reseña de Google por incorporar. Mantener textos breves para conservar una lectura limpia.",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 text-[1rem] leading-none text-vh-navy ${className}`} aria-label="5 estrellas">
      <span aria-hidden="true">★★★★★</span>
    </div>
  );
}

export default function TestimonialReferencesSection() {
  return (
    <section className="section-spacing bg-vh-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Referencias Google</p>
          <h2 className="section-title mt-6">Tres estilos para mostrar testimonios</h2>
        </Reveal>

        <div className="mt-14 space-y-16 md:mt-18 md:space-y-20">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-vh-blue">Propuesta 01</p>
                <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-vh-navy md:text-5xl">
                  Cards editoriales premium
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-vh-blue">
                Una opción limpia para mostrar reseñas individuales con una lectura calmada y elegante.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <article key={`${testimonial.name}-${index}`} className="premium-card p-6">
                  <Stars />
                  <p className="mt-6 text-base leading-7 text-vh-blue">"{testimonial.text}"</p>
                  <div className="mt-8 border-t border-vh-lavender/70 pt-5">
                    <p className="font-semibold text-vh-navy">{testimonial.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-vh-blue/70">
                      Reseña de Google
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-vh-blue">Propuesta 02</p>
                <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-vh-navy md:text-5xl">
                  Carrusel horizontal sobrio
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-vh-blue">
                Ideal para mobile: permite revisar varias referencias sin sumar demasiada altura a la página.
              </p>
            </div>

            <div className="mt-8 overflow-x-auto overflow-y-hidden pb-4 [scrollbar-color:#C8C7D7_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-vh-lavender/70 [&::-webkit-scrollbar-track]:bg-transparent">
              <div className="flex w-max gap-4">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <article
                    key={`${testimonial.text}-${index}`}
                    className="flex min-h-[250px] w-[280px] shrink-0 flex-col justify-between rounded-[1.5rem] border border-vh-lavender/70 bg-vh-gray/72 p-6 sm:w-[340px]"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <Stars />
                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-vh-blue/70">
                          Google
                        </span>
                      </div>
                      <p className="mt-6 text-base leading-7 text-vh-blue">"{testimonial.text}"</p>
                    </div>
                    <p className="mt-8 font-semibold text-vh-navy">{testimonial.name}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-vh-navy text-vh-white">
              <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
                <div className="flex min-h-[360px] flex-col justify-center border-b border-vh-white/12 p-8 text-center lg:border-b-0 lg:border-r lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vh-lavender">Propuesta 03</p>
                  <p className="mt-8 font-serif text-7xl leading-none tracking-tight md:text-8xl">5.0</p>
                  <Stars className="mt-6 justify-center text-vh-lavender" />
                  <p className="mx-auto mt-7 max-w-xs text-sm font-semibold uppercase leading-6 tracking-[0.18em] text-vh-white/68">
                    Reseñas de Google para conectar confianza inmediata
                  </p>
                </div>

                <div className="grid divide-y divide-vh-white/12">
                  {testimonials.map((testimonial, index) => (
                    <article key={`${testimonial.name}-rating-${index}`} className="p-7 md:p-9">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="font-serif text-2xl tracking-tight text-vh-white">{testimonial.name}</p>
                        <Stars className="text-vh-lavender" />
                      </div>
                      <p className="mt-5 max-w-2xl text-sm leading-6 text-vh-white/72">"{testimonial.text}"</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
