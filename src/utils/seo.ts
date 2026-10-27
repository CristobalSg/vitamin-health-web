import seoData from "@/data/seo.json";

export type SeoEntry = {
  path: string;
  title: string;
  description: string;
  label: string;
  schemaType: string;
  kind: "home" | "page" | "service" | "internal";
  index: boolean;
};

const entries = seoData.routes as SeoEntry[];

export function normalizePath(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "") || "/";
}

export function getSeoEntry(pathname: string) {
  return entries.find((entry) => entry.path === normalizePath(pathname));
}
