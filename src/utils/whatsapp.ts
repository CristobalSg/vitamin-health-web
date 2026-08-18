const whatsappBaseUrl = "https://wa.me/56993286932";

const whatsappMessage =
  "Hola, vi su página web y me gustaría agendar una evaluación en Vitamin Health. ¿Podrían orientarme sobre disponibilidad y el tratamiento más adecuado para mí? Quedo atento/a, gracias.";

export const whatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;

export function getServiceWhatsappUrl(serviceTitle: string) {
  const serviceMessage = `Hola, vi su página web y me interesa el servicio de ${serviceTitle}. ¿Podrían orientarme sobre disponibilidad, evaluación y próximos pasos? Quedo atento/a, gracias.`;

  return `${whatsappBaseUrl}?text=${encodeURIComponent(serviceMessage)}`;
}
