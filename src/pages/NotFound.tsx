import Container from "@/components/Container";
import BaseLayout from "@/layout/BaseLayout";

export default function NotFound() {
  return (
    <BaseLayout>
      <section className="bg-vh-gray pb-20 pt-40 md:pb-28 md:pt-48">
        <Container className="text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="section-title mx-auto mt-6 max-w-3xl">Esta página no está disponible</h1>
          <p className="section-copy mx-auto mt-7 max-w-xl">
            Puedes volver al inicio o revisar los servicios de Vitamin Health.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/" className="btn-primary">
              Volver al inicio
            </a>
            <a href="/servicios" className="btn-secondary">
              Ver servicios
            </a>
          </div>
        </Container>
      </section>
    </BaseLayout>
  );
}
