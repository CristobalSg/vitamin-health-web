export type LinkPageIcon = "catalog" | "whatsapp" | "instagram" | "website" | "tiktok";

export type LinkPageItem = {
  label: string;
  href: string;
  icon: LinkPageIcon;
  external: boolean;
  featured?: boolean;
};

export const linkPageItems: LinkPageItem[] = [
  {
    label: "Ver catálogo de tratamientos",
    href: "https://drive.google.com/file/d/1D3wB_GySdwKTnwB0kItO7I7QZHuEccex/view",
    icon: "catalog",
    external: true,
  },
  {
    label: "Reserva o consulta por WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=56988523393&text&type=phone_number&app_absent=0",
    icon: "whatsapp",
    external: true,
    featured: true,
  },
  {
    label: "Síguenos en Instagram",
    href: "https://www.instagram.com/vitaminhealth.cl",
    icon: "instagram",
    external: true,
  },
  {
    label: "Visita nuestro sitio web",
    href: "/",
    icon: "website",
    external: false,
  },
];

export const linkPageSocials: LinkPageItem[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/vitaminhealth.cl",
    icon: "instagram",
    external: true,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@vitaminhealth.cl",
    icon: "tiktok",
    external: true,
  },
];
