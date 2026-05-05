const stack = [
  "React 19",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "PWA lista para ajustar",
];

const nextSteps = [
  "Reemplaza el nombre del proyecto y la propuesta de valor.",
  "Crea tus secciones dentro de src/components si vuelves a modularizar la UI.",
  "Actualiza el manifest, íconos y metadatos antes de publicar.",
];

export default function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8ed_0%,_#f6efe5_45%,_#efe4d5_100%)] text-stone-900">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-sm font-medium tracking-wide text-stone-700 backdrop-blur">
            Base limpia reutilizable
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Proyecto base con React, TypeScript, Vite y Tailwind.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-stone-700 sm:text-lg">
            Esta plantilla deja una estructura minima para empezar otro proyecto sin arrastrar componentes,
            contenido ni assets de la app anterior.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-stone-300/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(120,53,15,0.10)] backdrop-blur">
            <h2 className="text-lg font-semibold text-stone-900">Stack incluido</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-700">
              {stack.map((item) => (
                <li key={item} className="rounded-2xl bg-stone-100 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-stone-300/80 bg-stone-900 p-6 text-stone-100 shadow-[0_20px_60px_rgba(28,25,23,0.22)]">
            <h2 className="text-lg font-semibold">Siguientes pasos</h2>
            <ol className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-300 font-semibold text-stone-900">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>
    </main>
  );
}
