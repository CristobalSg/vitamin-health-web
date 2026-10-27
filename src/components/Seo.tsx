import { useEffect } from "react";

import seoData from "@/data/seo.json";
import type { SeoEntry } from "@/utils/seo";
const siteUrl = seoData.siteUrl.replace(/\/$/, "");
const defaultImageUrl = `${siteUrl}${seoData.defaultImage}`;

function absoluteUrl(path: string) {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function getStructuredData(entry: SeoEntry) {
  const canonicalUrl = absoluteUrl(entry.path);
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const pageId = `${canonicalUrl}#webpage`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": entry.schemaType,
      "@id": pageId,
      url: canonicalUrl,
      name: entry.title,
      description: entry.description,
      inLanguage: "es-CL",
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      breadcrumb: entry.path === "/" ? undefined : { "@id": `${canonicalUrl}#breadcrumb` },
    },
  ];

  if (entry.path === "/") {
    graph.unshift(
      {
        "@type": "MedicalClinic",
        "@id": organizationId,
        name: seoData.siteName,
        url: `${siteUrl}/`,
        logo: `${siteUrl}/icons/icon-512x512.png`,
        image: defaultImageUrl,
        email: "hola@vitaminhealth.cl",
        telephone: "+56993286932",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Antonio Varas 687, oficina 404",
          addressLocality: "Temuco",
          addressCountry: "CL",
        },
        sameAs: ["https://www.instagram.com/vitaminhealth.cl/", "https://www.tiktok.com/@vitaminhealth.cl"],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${siteUrl}/`,
        name: seoData.siteName,
        alternateName: "Vitamin Health Temuco",
        inLanguage: "es-CL",
        publisher: { "@id": organizationId },
      },
    );
  } else {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: `${siteUrl}/`,
        },
        ...(entry.kind === "service"
          ? [
              {
                "@type": "ListItem",
                position: 2,
                name: "Nuestros servicios",
                item: `${siteUrl}/servicios`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: entry.label,
                item: canonicalUrl,
              },
            ]
          : [
              {
                "@type": "ListItem",
                position: 2,
                name: entry.label,
                item: canonicalUrl,
              },
            ]),
      ],
    });
  }

  if (entry.kind === "service") {
    graph.push({
      "@type": "Service",
      name: entry.label,
      description: entry.description,
      url: canonicalUrl,
      provider: { "@id": organizationId },
      areaServed: { "@type": "City", name: "Temuco" },
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

type SeoProps = {
  entry?: SeoEntry;
};

export default function Seo({ entry }: SeoProps) {
  useEffect(() => {
    const fallbackEntry: SeoEntry = {
      path: window.location.pathname,
      title: "Página no encontrada | Vitamin Health",
      description: "La página solicitada no está disponible.",
      label: "Página no encontrada",
      schemaType: "WebPage",
      kind: "internal",
      index: false,
    };
    const activeEntry = entry ?? fallbackEntry;
    const canonicalUrl = absoluteUrl(activeEntry.path);
    const robots = activeEntry.index
      ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      : "noindex, nofollow";

    document.title = activeEntry.title;
    document.documentElement.lang = "es-CL";

    upsertMeta("name", "description", activeEntry.description);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "googlebot", robots);
    upsertMeta("property", "og:title", activeEntry.title);
    upsertMeta("property", "og:description", activeEntry.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", defaultImageUrl);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", "Vitamin Health, clínica de medicina de longevidad en Temuco");
    upsertMeta("property", "og:site_name", seoData.siteName);
    upsertMeta("property", "og:locale", "es_CL");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", activeEntry.title);
    upsertMeta("name", "twitter:description", activeEntry.description);
    upsertMeta("name", "twitter:image", defaultImageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let structuredData = document.head.querySelector<HTMLScriptElement>("#structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(getStructuredData(activeEntry));
  }, [entry]);

  return null;
}
