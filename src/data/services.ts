export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  featured?: boolean;
  imagePosition?: string;
  heroTitle: string;
  subtitle: string;
  ctaLabel: string;
  problem: {
    question: string;
    answer: string;
  };
  facts: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  steps: {
    title: string;
    description: string;
  }[];
  safety: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  closing: {
    phrase: string;
    ctaLabel: string;
  };
};

export const services: Service[] = [
  {
    title: "Vitaminas endovenosas (Sueroterapia)",
    slug: "sueroterapia",
    description:
      "Administramos sueros con vitaminas, aminoácidos y minerales formulados según las necesidades de cada paciente.",
    image: new URL("../../img/tratamientos/sueroterapia.webp", import.meta.url).href,
    featured: true,
    imagePosition: "object-[center_42%]",
    heroTitle: "Sueroterapia personalizada: nutrientes seleccionados para tu bienestar",
    subtitle: "Un protocolo de vitaminas y otros nutrientes definido según tus antecedentes, necesidades y objetivos de salud.",
    ctaLabel: "Agendar evaluación",
    problem: {
      question: "¿Sientes cansancio frecuente, falta de vitalidad o buscas complementar activamente el cuidado de tu salud?",
      answer:
        "En Vitamin Health, la sueroterapia comienza con una evaluación profesional. A partir de tus antecedentes y objetivos se determina si este tratamiento es adecuado para ti y qué protocolo podría utilizarse. No se ofrece como una solución genérica, sino como parte de un enfoque preventivo y personalizado.",
    },
    facts: [
      { label: "Duración", value: "-" },
      { label: "Anestesia", value: "No requiere" },
      { label: "Recuperación", value: "Generalmente inmediata" },
      { label: "Frecuencia", value: "Depende del protocolo indicado" },
      { label: "Resultados percibidos", value: "Variables según la persona y la formulación" },
      { label: "Evaluación previa", value: "Obligatoria" },
      { label: "Marcas o componentes", value: "-" },
    ],
    benefits: [
      "Protocolo adaptado a tus necesidades.",
      "Administración controlada por profesionales.",
      "Acompañamiento dentro de un entorno clínico.",
      "Complemento para un plan integral de bienestar.",
      "Sesiones planificadas según tus antecedentes y objetivos.",
    ],
    steps: [
      {
        title: "Evaluación",
        description: "Revisamos tus antecedentes, síntomas, objetivos y posibles contraindicaciones.",
      },
      {
        title: "Selección del protocolo",
        description: "El profesional determina los componentes y la frecuencia más adecuada para tu caso.",
      },
      {
        title: "Administración",
        description: "Los nutrientes se administran por vía intravenosa bajo supervisión profesional.",
      },
      {
        title: "Seguimiento",
        description: "Evaluamos tu evolución y la necesidad de ajustar o continuar el protocolo.",
      },
    ],
    safety:
      "La sueroterapia debe realizarse con insumos autorizados, medidas de asepsia y supervisión de profesionales habilitados. Marcas utilizadas, registros sanitarios y credenciales específicas del equipo: -.",
    faqs: [
      {
        question: "¿Todas las personas pueden recibir sueroterapia?",
        answer: "No. Primero debe realizarse una evaluación para identificar indicaciones, antecedentes y posibles contraindicaciones.",
      },
      {
        question: "¿Todos los sueros tienen los mismos componentes?",
        answer: "No. La formulación puede variar según la evaluación y los objetivos de cada paciente.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer: "Depende del protocolo definido por el profesional y de la evolución individual.",
      },
      {
        question: "¿Puedo volver a mis actividades después?",
        answer: "Habitualmente sí, aunque algunas personas pueden presentar molestias temporales en el lugar de la punción.",
      },
    ],
    closing: {
      phrase: "Tu bienestar comienza con una evaluación responsable y un protocolo pensado para ti.",
      ctaLabel: "Evaluar mi caso",
    },
  },
  {
    title: "Medicina General",
    slug: "medicina-general",
    description: "Atención médica, certificados, licencias médicas, evaluación de exámenes y apoyo en salud mental.",
    image: new URL("../../img/tratamientos/medicina-general.webp", import.meta.url).href,
    heroTitle: "Medicina general: comprende y cuida tu salud de manera integral",
    subtitle: "Una consulta cercana y personalizada para evaluar síntomas, prevenir enfermedades y orientar tus próximos pasos.",
    ctaLabel: "Agendar consulta médica",
    problem: {
      question: "¿Tienes síntomas que persisten, resultados de exámenes que no comprendes o simplemente quieres conocer mejor tu estado de salud?",
      answer:
        "La consulta de medicina general permite revisar tu situación de forma integral. En Vitamin Health se consideran tus antecedentes, síntomas, hábitos y objetivos para entregarte una orientación clara, definir un plan de manejo o realizar una derivación cuando corresponda.",
    },
    facts: [
      { label: "Duración", value: "-" },
      { label: "Anestesia", value: "No aplica" },
      { label: "Preparación", value: "Llevar exámenes y antecedentes disponibles" },
      { label: "Resultados", value: "Orientación inicial durante la consulta" },
      { label: "Seguimiento", value: "Según diagnóstico y plan indicado" },
      { label: "Modalidad", value: "-" },
      { label: "Registro profesional", value: "-" },
    ],
    benefits: [
      "Comprender mejor tu estado de salud.",
      "Detectar oportunamente factores de riesgo.",
      "Resolver dudas sobre síntomas y exámenes.",
      "Recibir indicaciones claras y personalizadas.",
      "Coordinar tratamientos, controles o derivaciones.",
    ],
    steps: [
      {
        title: "Entrevista clínica",
        description: "Conversamos sobre tus síntomas, antecedentes, medicamentos y hábitos.",
      },
      {
        title: "Evaluación",
        description: "Se realiza el examen clínico necesario y se revisan tus resultados anteriores.",
      },
      {
        title: "Plan de manejo",
        description: "Recibes orientación, indicaciones, solicitud de exámenes o derivación, según corresponda.",
      },
      {
        title: "Seguimiento",
        description: "Se controla tu evolución y se ajusta el plan cuando sea necesario.",
      },
    ],
    safety:
      "La atención debe ser realizada por profesionales con título habilitante y registro vigente en la Superintendencia de Salud. Registro o enlace público del profesional: -.",
    faqs: [
      {
        question: "¿Necesito estar enfermo para consultar?",
        answer: "No. También puedes asistir para controles preventivos, revisión de exámenes y orientación sobre tu salud.",
      },
      {
        question: "¿Debo llevar exámenes anteriores?",
        answer: "Sí, cuando estén disponibles. También es útil presentar una lista de medicamentos y antecedentes relevantes.",
      },
      {
        question: "¿Pueden solicitarme nuevos exámenes?",
        answer: "Sí, si el profesional considera que son necesarios para estudiar tu situación.",
      },
      {
        question: "¿La consulta reemplaza una atención de urgencia?",
        answer: "No. Los síntomas graves o de aparición repentina requieren atención de urgencia.",
      },
    ],
    closing: {
      phrase: "Conocer tu estado de salud hoy permite tomar mejores decisiones para el futuro.",
      ctaLabel: "Reservar mi consulta",
    },
  },
  {
    title: "Atención Psicológica",
    slug: "psicologia",
    description: "Terapia enfocada en tratar trastornos, conductas y emociones que afectan tu bienestar.",
    image: new URL("../../img/tratamientos/psicologia.webp", import.meta.url).href,
    heroTitle: "Atención psicológica: un espacio seguro para cuidar tu bienestar emocional",
    subtitle:
      "Acompañamiento profesional, cercano y confidencial para comprender lo que estás viviendo y desarrollar herramientas para afrontarlo.",
    ctaLabel: "Agendar primera sesión",
    problem: {
      question: "¿Sientes que el estrés, la ansiedad, los cambios personales o tus emociones están comenzando a afectar tu vida cotidiana?",
      answer:
        "No tienes que esperar a sentirte sobrepasado para pedir ayuda. La atención psicológica ofrece un espacio de escucha y trabajo profesional para comprender tus emociones, reconocer patrones y desarrollar herramientas que contribuyan a tu bienestar.",
    },
    facts: [
      { label: "Duración", value: "-" },
      { label: "Anestesia", value: "No aplica" },
      { label: "Preparación", value: "No requiere" },
      { label: "Frecuencia", value: "Se define de manera personalizada" },
      { label: "Confidencialidad", value: "Atención profesional y reservada" },
      { label: "Resultados", value: "Progresivos y variables según cada proceso" },
      { label: "Registro profesional", value: "-" },
    ],
    benefits: [
      "Comprender mejor tus emociones.",
      "Desarrollar herramientas para afrontar dificultades.",
      "Manejar de mejor manera el estrés y la ansiedad.",
      "Fortalecer la autoestima y el autocuidado.",
      "Mejorar la comunicación y las relaciones.",
      "Contar con acompañamiento durante procesos de cambio.",
    ],
    steps: [
      {
        title: "Primera entrevista",
        description: "Conversamos sobre el motivo de consulta, tus antecedentes y lo que esperas conseguir.",
      },
      {
        title: "Plan de trabajo",
        description: "Se establecen objetivos terapéuticos y una frecuencia apropiada.",
      },
      {
        title: "Acompañamiento",
        description: "Trabajamos progresivamente en la comprensión y manejo de las dificultades identificadas.",
      },
      {
        title: "Evaluación de avances",
        description: "Revisamos los cambios alcanzados y ajustamos los objetivos cuando sea necesario.",
      },
    ],
    safety:
      "La atención debe ser realizada por un profesional habilitado, respetando la confidencialidad y los principios éticos de la práctica psicológica. Nombre, especialidad y registro profesional: -.",
    faqs: [
      {
        question: "¿Necesito tener un diagnóstico para consultar?",
        answer: "No. Puedes asistir si estás atravesando una dificultad o si deseas trabajar preventivamente en tu bienestar.",
      },
      {
        question: "¿Todo lo que converse es confidencial?",
        answer: "Sí, salvo las excepciones contempladas por la normativa y los protocolos de protección del paciente.",
      },
      {
        question: "¿Cuántas sesiones necesitaré?",
        answer: "Depende del motivo de consulta, los objetivos y la evolución del proceso.",
      },
      {
        question: "¿La primera sesión ya es terapia?",
        answer: "Es principalmente una instancia de evaluación y conocimiento mutuo, aunque también puede entregar una primera orientación.",
      },
    ],
    closing: {
      phrase: "Cuidar tu salud emocional también es una forma de prevenir y mejorar tu calidad de vida.",
      ctaLabel: "Comenzar mi proceso",
    },
  },
  {
    title: "Ácido hialurónico",
    slug: "acido-hialuronico",
    description: "Biomodelación facial para restaurar volumen y mejorar la armonía del rostro con resultados naturales.",
    image: new URL("../../img/tratamientos/acido-hialuronico.webp", import.meta.url).href,
    imagePosition: "object-[center_36%]",
    heroTitle: "Ácido hialurónico: armoniza tus rasgos conservando tu naturalidad",
    subtitle: "Un tratamiento personalizado para recuperar volumen, definir contornos o mejorar la hidratación de determinadas zonas.",
    ctaLabel: "Agendar evaluación estética",
    problem: {
      question: "¿Has notado pérdida de volumen, contornos menos definidos o cambios en las proporciones de tu rostro?",
      answer:
        "El ácido hialurónico permite trabajar áreas específicas de acuerdo con la anatomía y los objetivos de cada persona. En Vitamin Health, el tratamiento comienza con una evaluación facial para diseñar un resultado armónico, equilibrado y coherente con tus rasgos.",
    },
    facts: [
      { label: "Duración", value: "-" },
      { label: "Anestesia", value: "Tópica o local, según el área" },
      { label: "Recuperación", value: "Habitualmente rápida" },
      { label: "Resultados visibles", value: "Generalmente inmediatos, con evolución posterior" },
      { label: "Duración del efecto", value: "Variable según producto, zona y metabolismo" },
      { label: "Control", value: "Según indicación profesional" },
      { label: "Marca utilizada", value: "-" },
    ],
    benefits: [
      "Recuperación de volumen en zonas seleccionadas.",
      "Definición y equilibrio de los contornos faciales.",
      "Mejora visual de determinados surcos.",
      "Hidratación y apariencia más saludable.",
      "Resultados diseñados para respetar tu expresión.",
      "Tratamiento adaptado a tus proporciones faciales.",
    ],
    steps: [
      {
        title: "Diagnóstico facial",
        description: "Evaluamos proporciones, simetría, calidad de la piel y objetivos.",
      },
      {
        title: "Plan personalizado",
        description: "Definimos las zonas, cantidad de producto y resultado esperado.",
      },
      {
        title: "Aplicación",
        description: "El producto se administra utilizando una técnica adecuada para la zona tratada.",
      },
      {
        title: "Control",
        description: "Revisamos la evolución y determinamos si es necesario realizar ajustes.",
      },
    ],
    safety:
      "La página debe mostrar solamente las marcas efectivamente utilizadas por Vitamin Health, junto con su correspondiente autorización sanitaria. Marca, autorización sanitaria y registro profesional: -.",
    faqs: [
      {
        question: "¿El resultado se verá artificial?",
        answer: "El objetivo es respetar tus proporciones y conservar la naturalidad. El resultado depende de la planificación, la técnica y la cantidad aplicada.",
      },
      {
        question: "¿Cuánto dura?",
        answer: "Es temporal. Su duración varía según la zona, el producto utilizado y las características del paciente.",
      },
      {
        question: "¿Puede aparecer inflamación?",
        answer: "Sí. Puede presentarse inflamación, sensibilidad o hematomas temporales.",
      },
      {
        question: "¿Puedo tomar sol después?",
        answer:
          "Generalmente se recomienda evitar calor intenso, exposición solar directa y ejercicio exigente durante el periodo indicado por el profesional.",
      },
    ],
    closing: {
      phrase: "No se trata de cambiar tu rostro, sino de armonizarlo respetando aquello que te hace único.",
      ctaLabel: "Diseñar mi tratamiento",
    },
  },
  {
    title: "Toxina botulínica",
    slug: "toxina-botulinica",
    description: "Suaviza líneas de expresión y arrugas mediante la relajación controlada de los músculos faciales.",
    image: new URL("../../img/tratamientos/toxina-botulinica.webp", import.meta.url).href,
    imagePosition: "object-[center_40%]",
    heroTitle: "Toxina botulínica: suaviza las líneas de expresión sin perder naturalidad",
    subtitle: "Un tratamiento preventivo y personalizado para conseguir una apariencia más descansada, respetando tu expresión.",
    ctaLabel: "Agendar evaluación",
    problem: {
      question: "¿Notas líneas marcadas en la frente, el entrecejo o alrededor de los ojos cuando gesticulas?",
      answer:
        "La contracción repetida de los músculos faciales puede hacer que estas líneas se vuelvan más visibles. La toxina botulínica permite disminuir temporalmente esa contracción, suavizando su apariencia y ayudando a prevenir que se profundicen.",
    },
    facts: [
      { label: "Duración", value: "-" },
      { label: "Anestesia", value: "Generalmente no requiere" },
      { label: "Recuperación", value: "Retorno habitual a las actividades el mismo día" },
      { label: "Inicio del efecto", value: "Progresivo durante los primeros días" },
      { label: "Resultado final", value: "Habitualmente alrededor de 10 a 14 días" },
      { label: "Duración del efecto", value: "Aproximadamente 3 a 6 meses, según cada paciente" },
      { label: "Marca utilizada", value: "-" },
    ],
    benefits: [
      "Suaviza líneas dinámicas de expresión.",
      "Ayuda a prevenir su profundización.",
      "Entrega una apariencia más fresca y descansada.",
      "Mantiene la naturalidad mediante una aplicación personalizada.",
      "Procedimiento rápido y con recuperación habitualmente breve.",
      "Planificación según anatomía y movimiento muscular.",
    ],
    steps: [
      {
        title: "Evaluación de gesticulación",
        description: "Analizamos el movimiento de los músculos faciales y las zonas que requieren tratamiento.",
      },
      {
        title: "Aplicación personalizada",
        description: "Se administran pequeñas cantidades en puntos definidos según tu anatomía.",
      },
      {
        title: "Control",
        description: "Se revisa el resultado aproximadamente a los 10 o 14 días, conforme al protocolo de la clínica.",
      },
    ],
    safety:
      "La aplicación requiere evaluación médica, producto trazable, conservación adecuada y profesionales habilitados. Marca utilizada, registro sanitario y procedencia: -.",
    faqs: [
      {
        question: "¿A partir de qué edad se recomienda?",
        answer: "No existe una edad universal. Su indicación depende de la gesticulación, las líneas presentes y los objetivos de cada paciente.",
      },
      {
        question: "¿Perderé la expresión del rostro?",
        answer: "Una planificación conservadora busca suavizar ciertas contracciones sin inmovilizar innecesariamente el rostro.",
      },
      {
        question: "¿Tiene efectos secundarios?",
        answer:
          "Puede producir molestias, pequeños hematomas, dolor de cabeza o efectos no deseados. El profesional debe explicar riesgos y contraindicaciones antes del procedimiento.",
      },
      {
        question: "¿Cuáles son los cuidados posteriores?",
        answer: "Deben seguirse las indicaciones entregadas por el profesional, especialmente durante las primeras horas posteriores a la aplicación.",
      },
    ],
    closing: {
      phrase: "Prevenir también significa cuidar tu expresión antes de que las líneas se vuelvan permanentes.",
      ctaLabel: "Reservar mi evaluación",
    },
  },
  {
    title: "Mesoterapia",
    slug: "mesoterapia",
    description: "Tratamiento con vitaminas y sustancias que rejuvenecen la piel, aportan brillo y mejoran su calidad.",
    image: new URL("../../img/tratamientos/mesoterapia.webp", import.meta.url).href,
    heroTitle: "Mesoterapia: activos seleccionados directamente donde tu piel o cabello los necesita",
    subtitle: "Protocolos faciales o capilares adaptados a las necesidades identificadas durante tu evaluación.",
    ctaLabel: "Evaluar mi tratamiento",
    problem: {
      question: "¿Notas tu piel deshidratada y apagada o buscas complementar el cuidado de tu cuero cabelludo?",
      answer:
        "La mesoterapia permite aplicar pequeñas cantidades de activos en la zona tratada. En Vitamin Health puede incorporarse a protocolos faciales o capilares, seleccionando la formulación y frecuencia según la evaluación profesional.",
    },
    facts: [
      { label: "Duración", value: "-" },
      { label: "Anestesia", value: "Tópica, dependiendo del protocolo" },
      { label: "Recuperación", value: "Habitualmente breve" },
      { label: "Resultados", value: "Progresivos y variables" },
      { label: "Número de sesiones", value: "Según indicación profesional" },
      { label: "Mantención", value: "Depende del objetivo y respuesta individual" },
      { label: "Productos utilizados", value: "-" },
    ],
    benefits: [
      "Mejora la hidratación y apariencia de la piel.",
      "Favorece una apariencia más luminosa.",
      "Permite tratar zonas específicas.",
      "Complementa protocolos para el cuidado capilar.",
      "Se adapta a las necesidades de cada paciente.",
      "Puede combinarse con otros tratamientos cuando esté indicado.",
    ],
    steps: [
      {
        title: "Evaluación",
        description: "Analizamos la piel o el cuero cabelludo y definimos el objetivo del tratamiento.",
      },
      {
        title: "Selección del protocolo",
        description: "Elegimos los activos, frecuencia y número estimado de sesiones.",
      },
      {
        title: "Aplicación",
        description: "Se administran pequeñas cantidades en la zona seleccionada.",
      },
      {
        title: "Seguimiento",
        description: "Revisamos la respuesta y ajustamos el plan si es necesario.",
      },
    ],
    safety:
      "La clínica debe informar qué productos utiliza, sus componentes y su autorización sanitaria. Productos, componentes y registros sanitarios: -.",
    faqs: [
      {
        question: "¿La mesoterapia es facial o capilar?",
        answer: "Puede utilizarse en ambas áreas, pero la formulación y los objetivos son diferentes.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer: "Depende de la evaluación, el protocolo y la respuesta individual.",
      },
      {
        question: "¿Es dolorosa?",
        answer: "Puede producir pequeñas molestias. Cuando corresponde, se utiliza anestesia tópica.",
      },
      {
        question: "¿Qué cuidados requiere?",
        answer: "Puede recomendarse evitar maquillaje, calor, ejercicio intenso o exposición solar durante el periodo indicado.",
      },
    ],
    closing: {
      phrase: "Un buen resultado comienza con un protocolo diseñado para las necesidades reales de tu piel o cabello.",
      ctaLabel: "Agendar diagnóstico",
    },
  },
  {
    title: "Plasma rico en plaquetas",
    slug: "plasma-rico-en-plaquetas",
    description: "Tratamiento que utiliza tu propio plasma para estimular regeneración y fortalecer el crecimiento capilar.",
    image: new URL("../../img/tratamientos/plasma-plaquetas.webp", import.meta.url).href,
    heroTitle: "Plasma rico en plaquetas: estimulación autóloga para tu piel o cabello",
    subtitle: "Un procedimiento realizado a partir de tu propia sangre para complementar protocolos de regeneración facial o cuidado capilar.",
    ctaLabel: "Agendar evaluación",
    problem: {
      question: "¿Has notado cambios en la calidad de tu piel o signos de debilitamiento y caída capilar?",
      answer:
        "El plasma rico en plaquetas utiliza una muestra de sangre del propio paciente, que se procesa para concentrar las plaquetas. Posteriormente, el plasma obtenido se aplica en la zona seleccionada como parte de un protocolo personalizado.",
    },
    facts: [
      { label: "Duración", value: "-" },
      { label: "Anestesia", value: "Tópica, según la zona" },
      { label: "Recuperación", value: "Habitualmente rápida" },
      { label: "Resultados", value: "Progresivos y variables" },
      { label: "Número de sesiones", value: "Se define después de la evaluación" },
      { label: "Procedencia", value: "Material autólogo obtenido del propio paciente" },
      { label: "Sistema de procesamiento", value: "-" },
    ],
    benefits: [
      "Utiliza material obtenido del propio paciente.",
      "Complementa el cuidado de la calidad de la piel.",
      "Puede incorporarse a protocolos capilares.",
      "Favorece procesos naturales asociados con la reparación de tejidos.",
      "Permite trabajar zonas específicas.",
      "Se planifica según diagnóstico y evolución individual.",
    ],
    steps: [
      {
        title: "Evaluación",
        description: "Determinamos si el procedimiento es apropiado para tus necesidades y antecedentes.",
      },
      {
        title: "Obtención y procesamiento",
        description: "Se extrae una pequeña muestra de sangre y se procesa mediante centrifugación.",
      },
      {
        title: "Aplicación",
        description: "El plasma obtenido se administra en la zona facial o capilar seleccionada.",
      },
      {
        title: "Seguimiento",
        description: "Se evalúa la evolución y se determina la continuidad del protocolo.",
      },
    ],
    safety:
      "Debe utilizarse material estéril y un sistema de procesamiento apropiado. Equipo de centrifugación, protocolos de bioseguridad y credenciales del profesional: -.",
    faqs: [
      {
        question: "¿Por qué se llama tratamiento autólogo?",
        answer: "Porque el material utilizado se obtiene de la sangre del propio paciente.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer: "La cantidad y frecuencia dependen del diagnóstico, la zona y la evolución individual.",
      },
      {
        question: "¿Produce molestias?",
        answer: "La extracción es similar a un examen de sangre y la aplicación puede generar molestias leves.",
      },
      {
        question: "¿Tiene efectos secundarios?",
        answer:
          "Puede producir enrojecimiento, sensibilidad, inflamación o pequeños hematomas temporales. La evaluación previa permite identificar contraindicaciones.",
      },
      {
        question: "¿Reemplaza otros tratamientos contra la caída del cabello?",
        answer: "No necesariamente. Puede formar parte de un protocolo combinado después de identificar la causa de la caída.",
      },
    ],
    closing: {
      phrase: "Aprovecha los recursos de tu propio organismo dentro de un protocolo profesional y personalizado.",
      ctaLabel: "Evaluar mi caso",
    },
  },
];

export function getServiceByPath(pathname: string) {
  const slug = pathname.replace(/^\/servicios\/?/, "").replace(/\/$/, "");

  return services.find((service) => service.slug === slug);
}
