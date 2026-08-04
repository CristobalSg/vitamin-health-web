export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  featured?: boolean;
  imagePosition?: string;
  detailIntro: string;
  detailPoints: string[];
};

export const services: Service[] = [
  {
    title: "vitaminas endovenosas (Sueroterapia)",
    slug: "sueroterapia",
    description:
      "Administramos sueros con vitaminas, aminoácidos y minerales formulados según las necesidades de cada paciente.",
    image: new URL("../../img/tratamientos/sueroterapia.webp", import.meta.url).href,
    featured: true,
    imagePosition: "object-[center_42%]",
    detailIntro:
      "Una evaluación personalizada orienta la selección de nutrientes, minerales y aminoácidos para apoyar energía, hidratación y bienestar general.",
    detailPoints: ["Evaluación previa", "Formulación personalizada", "Aplicación supervisada", "Seguimiento según objetivos"],
  },
  {
    title: "Medicina General",
    slug: "medicina-general",
    description: "Atención médica, certificados, licencias médicas, evaluación de exámenes y apoyo en salud mental.",
    image: new URL("../../img/tratamientos/medicina-general.webp", import.meta.url).href,
    detailIntro:
      "Atención clínica cercana para revisar síntomas, antecedentes y exámenes, con orientación clara para tomar decisiones de salud con más tranquilidad.",
    detailPoints: ["Consulta médica", "Evaluación de exámenes", "Certificados y licencias", "Derivación si corresponde"],
  },
  {
    title: "Atención Psicológica",
    slug: "psicologia",
    description: "Terapia enfocada en tratar trastornos, conductas y emociones que afectan tu bienestar.",
    image: new URL("../../img/tratamientos/psicologia.webp", import.meta.url).href,
    detailIntro:
      "Un espacio terapéutico profesional para abordar emociones, hábitos y procesos personales desde una mirada respetuosa y centrada en la persona.",
    detailPoints: ["Entrevista inicial", "Objetivos terapéuticos", "Acompañamiento emocional", "Proceso personalizado"],
  },
  {
    title: "Ácido hialurónico",
    slug: "acido-hialuronico",
    description: "Biomodelación facial para restaurar volumen y mejorar la armonía del rostro con resultados naturales.",
    image: new URL("../../img/tratamientos/acido-hialuronico.webp", import.meta.url).href,
    imagePosition: "object-[center_36%]",
    detailIntro:
      "Tratamiento estético enfocado en armonizar rasgos, recuperar volumen y favorecer una apariencia natural mediante una planificación responsable.",
    detailPoints: ["Evaluación facial", "Plan por zonas", "Técnica profesional", "Resultados armónicos"],
  },
  {
    title: "Toxina botulínica",
    slug: "toxina-botulinica",
    description: "Suaviza líneas de expresión y arrugas mediante la relajación controlada de los músculos faciales.",
    image: new URL("../../img/tratamientos/toxina-botulinica.webp", import.meta.url).href,
    imagePosition: "object-[center_40%]",
    detailIntro:
      "Procedimiento médico-estético para suavizar líneas de expresión con una aplicación cuidadosa, buscando frescura y naturalidad.",
    detailPoints: ["Análisis muscular", "Aplicación localizada", "Enfoque natural", "Control posterior"],
  },
  {
    title: "Mesoterapia",
    slug: "mesoterapia",
    description: "Tratamiento con vitaminas y sustancias que rejuvenecen la piel, aportan brillo y mejoran su calidad.",
    image: new URL("../../img/tratamientos/mesoterapia.webp", import.meta.url).href,
    detailIntro:
      "Técnica orientada a mejorar la calidad de la piel mediante activos seleccionados según las necesidades y objetivos de cada paciente.",
    detailPoints: ["Diagnóstico de piel", "Activos seleccionados", "Aplicación profesional", "Plan progresivo"],
  },
  {
    title: "Plasma rico en plaquetas",
    slug: "plasma-rico-en-plaquetas",
    description: "Tratamiento que utiliza tu propio plasma para estimular regeneración y fortalecer el crecimiento capilar.",
    image: new URL("../../img/tratamientos/plasma-plaquetas.webp", import.meta.url).href,
    detailIntro:
      "Procedimiento regenerativo que utiliza componentes propios del paciente para apoyar procesos de reparación y vitalidad cutánea o capilar.",
    detailPoints: ["Obtención de muestra", "Preparación del plasma", "Aplicación focalizada", "Seguimiento evolutivo"],
  },
];

export function getServiceByPath(pathname: string) {
  const slug = pathname.replace(/^\/servicios\/?/, "").replace(/\/$/, "");

  return services.find((service) => service.slug === slug);
}
