import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = path.join(projectRoot, "dist");
const seoData = JSON.parse(await readFile(path.join(projectRoot, "src/data/seo.json"), "utf8"));
const template = await readFile(path.join(distDirectory, "index.html"), "utf8");
const siteUrl = seoData.siteUrl.replace(/\/$/, "");
const imageUrl = `${siteUrl}${seoData.defaultImage}`;

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function canonicalUrl(routePath) {
  return routePath === "/" ? `${siteUrl}/` : `${siteUrl}${routePath}`;
}

function replaceMeta(html, attribute, key, value) {
  const expression = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`, "i");
  return html.replace(expression, `<meta ${attribute}="${key}" content="${escapeAttribute(value)}" />`);
}

function structuredDataFor(entry) {
  const url = canonicalUrl(entry.path);
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  if (entry.kind === "home") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalClinic",
          "@id": organizationId,
          name: seoData.siteName,
          url: `${siteUrl}/`,
          logo: `${siteUrl}/icons/icon-512x512.png`,
          image: imageUrl,
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
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: entry.title,
          description: entry.description,
          inLanguage: "es-CL",
          isPartOf: { "@id": websiteId },
          about: { "@id": organizationId },
        },
      ],
    };
  }

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/` },
    ...(entry.kind === "service"
      ? [
          { "@type": "ListItem", position: 2, name: "Nuestros servicios", item: `${siteUrl}/servicios` },
          { "@type": "ListItem", position: 3, name: entry.label, item: url },
        ]
      : [{ "@type": "ListItem", position: 2, name: entry.label, item: url }]),
  ];
  const graph = [
    {
      "@type": entry.schemaType,
      "@id": `${url}#webpage`,
      url,
      name: entry.title,
      description: entry.description,
      inLanguage: "es-CL",
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbItems,
    },
  ];

  if (entry.kind === "service") {
    graph.push({
      "@type": "Service",
      name: entry.label,
      description: entry.description,
      url,
      provider: { "@id": organizationId },
      areaServed: { "@type": "City", name: "Temuco" },
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function render(entry) {
  const url = canonicalUrl(entry.path);
  const robots = entry.index
    ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    : "noindex, nofollow";
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(entry.title)}</title>`);

  html = replaceMeta(html, "name", "description", entry.description);
  html = replaceMeta(html, "name", "robots", robots);
  html = replaceMeta(html, "name", "googlebot", robots);
  html = replaceMeta(html, "property", "og:title", entry.title);
  html = replaceMeta(html, "property", "og:description", entry.description);
  html = replaceMeta(html, "property", "og:url", url);
  html = replaceMeta(html, "name", "twitter:title", entry.title);
  html = replaceMeta(html, "name", "twitter:description", entry.description);
  html = html.replace(/<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${url}" />`);
  html = html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="structured-data" type="application/ld+json">${JSON.stringify(structuredDataFor(entry))}</script>`,
  );

  return html;
}

for (const entry of seoData.routes) {
  if (entry.path === "/") {
    continue;
  }

  const routeDirectory = path.join(distDirectory, entry.path.slice(1));
  await mkdir(routeDirectory, { recursive: true });
  const renderedHtml = render(entry);
  await writeFile(path.join(routeDirectory, "index.html"), renderedHtml);
  await writeFile(path.join(distDirectory, `${entry.path.slice(1)}.html`), renderedHtml);
}

const homeEntry = seoData.routes.find((entry) => entry.path === "/");
await writeFile(path.join(distDirectory, "index.html"), render(homeEntry));
