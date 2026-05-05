import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

const mapEmbedUrl = "https://www.google.com/maps?q=Antonio+Varas+687+Temuco&output=embed";
const mapLinkUrl = "https://www.google.com/maps/search/?api=1&query=Antonio+Varas+687+Temuco";

export default function LocationSection() {
  return (
    <section className="section-spacing border-y border-black/10 bg-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Ubicación</p>
          <h2 className="section-title mt-6">Encuéntranos en Temuco</h2>
          <p className="section-copy mx-auto mt-6 max-w-xl">Antonio Varas #687, oficina 404, Temuco</p>
        </Reveal>

        <Reveal
          className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-[#1C2A42]/10"
          delay={100}
        >
          <iframe
            src={mapEmbedUrl}
            title="Ubicación Vitamin Health en Temuco"
            loading="lazy"
            className="h-[320px] w-full border-0 md:h-[420px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(245,243,240,0.34)_0%,rgba(245,243,240,0)_18%,rgba(245,243,240,0)_82%,rgba(245,243,240,0.34)_100%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(245,243,240,0.26)_0%,rgba(245,243,240,0)_16%,rgba(245,243,240,0)_84%,rgba(245,243,240,0.26)_100%)]"
            aria-hidden="true"
          />
        </Reveal>

        <Reveal className="mt-8 text-center" delay={200}>
          <a
            href={mapLinkUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-vh-navy/20 px-7 py-4 text-sm font-semibold text-vh-navy transition-colors hover:border-vh-navy hover:bg-vh-navy hover:text-vh-white focus:outline-none focus:ring-2 focus:ring-vh-navy focus:ring-offset-2 focus:ring-offset-white"
          >
            Ver en Google Maps
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
