# AGENTS.md

## Project
Landing page para Vitamin Health usando React + Vite + TypeScript + Tailwind CSS.

## Package manager
Usar exclusivamente `pnpm`.

Comandos:
- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm lint`

No usar npm ni yarn.

## Stack
- React 19
- Vite 7
- TypeScript
- Tailwind CSS v4
- vite-plugin-pwa

## Objetivo visual
Crear una web con estética premium, clínica, minimalista y elegante, inspirada en una landing de alto rendimiento/conversión, pero adaptada a Vitamin Health.

La marca debe transmitir:
- Confianza
- Seguridad
- Excelencia
- Salud integral
- Medicina regenerativa
- Bienestar preventivo
- Estética profesional

## Dirección de diseño
Estilo visual:
- Minimalista
- Premium
- Limpio
- Editorial
- Clínico pero cálido
- Mucho espacio en blanco
- Composiciones ordenadas
- Líneas finas decorativas
- Fotografías grandes con apariencia editorial
- Bordes suaves o formas verticales tipo arco/óvalo para imágenes
- Diseño sobrio, no saturado

Evitar:
- Estética de gimnasio tradicional
- Colores estridentes
- Sombras fuertes
- Gradientes llamativos
- Exceso de iconos
- Animaciones exageradas
- Diseño genérico tipo plantilla SaaS

## Paleta de color
Usar estos colores como base:

```css
--vh-navy: #1C2A42;
--vh-blue-700: #2F4468;
--vh-blue-600: #4D5E84;
--vh-blue-500: #5D7397;
--vh-blue-300: #98A7C5;
--vh-lavender: #C8C7D7;
--vh-warm: #EAE5E0;
--vh-gray-100: #F5F3F0;
--vh-white: #F5F5F5;
--vh-soft-gray: #E3E3E5;
--vh-ink: #111111;
```

Regla:
- Fondo principal claro: `#F5F3F0` o `#F5F5F5`
- Secciones premium oscuras: `#1C2A42`
- CTAs primarios: `#1C2A42`
- CTAs secundarios: borde fino azul/gris
- Usar acentos azul-gris con moderación

## Tipografía
Usar una combinación equivalente a:
- Sans principal: Montserrat o similar
- Display editorial: serif elegante similar a Ogg Roman
- Acentos finos: fuente ligera/condensada si está disponible

Si no hay fuentes externas configuradas, usar:
```css
font-family: Inter, Montserrat, system-ui, sans-serif;
```

Para títulos grandes usar:
```css
font-family: Georgia, "Times New Roman", serif;
```

Reglas tipográficas:
- Títulos grandes, elegantes, con tracking negativo leve.
- Eyebrows en mayúsculas, tracking amplio.
- Textos cortos, claros y escaneables.
- No usar párrafos largos en la landing.

## Estructura de marketing
La landing debe seguir esta estructura:

### 1. Header sticky
Debe contener:
- Logo o texto “Vitamin Health”
- Links: Tratamientos, Método, Equipo, Testimonios, Contacto
- CTA visible: “Agendar evaluación”

Características:
- Header limpio
- Fondo semitransparente o sólido claro
- CTA en botón oscuro
- Mobile responsive con menú simple

### 2. Hero section
Objetivo: captar atención inmediatamente.

Debe incluir:
- Imagen grande o placeholder visual
- Headline potente
- Subheadline explicativo
- CTA primario
- CTA secundario
- Elementos de confianza

Copy sugerido:
Headline:
“Medicina regenerativa y salud integral con enfoque preventivo”

Subheadline:
“En Vitamin Health unimos medicina preventiva, epigenética, estética y salud emocional para ayudarte a verte, sentirte y vivir mejor.”

CTAs:
- “Agendar evaluación”
- “Conocer tratamientos”

Visual:
- Imagen grande editorial de rostro, piel, manos, tratamiento clínico o espacio minimalista.
- Si no hay imágenes reales, usar placeholders elegantes con bloques beige/gris y texto “Imagen editorial aquí”.

### 3. Sección problema / identificación
Objetivo: que el usuario sienta que la marca entiende su necesidad.

Contenido:
- Cansancio persistente
- Envejecimiento prematuro
- Falta de energía
- Desequilibrio hormonal o emocional
- Deseo de mejorar salud y estética desde la raíz

Formato:
- Layout editorial 2 columnas
- Texto corto
- Imagen secundaria o bloque visual

### 4. Propuesta de valor
Objetivo: explicar por qué Vitamin Health es diferente.

Bloques:
- Medicina preventiva
- Epigenética
- Medicina estética
- Salud emocional
- Bienestar integral

Cada bloque debe tener:
- Título corto
- Descripción de 1–2 líneas
- Diseño limpio, con borde fino

### 5. Método / cómo funciona
Objetivo: reducir fricción y explicar el proceso.

Pasos:
1. Evaluación inicial
2. Diagnóstico personalizado
3. Plan integral
4. Seguimiento y optimización

Diseño:
- Timeline horizontal en desktop
- Cards verticales en mobile
- Numeración elegante: 01, 02, 03, 04

### 6. Sección autoridad / confianza
Objetivo: transmitir seguridad y excelencia.

Debe incluir:
- “Confianza”
- “Seguridad”
- “Excelencia”
- Mención a profesionales
- Mención a atención personalizada

Diseño:
- Fondo azul navy
- Texto claro
- Composición sobria
- Puede incluir imagen en arco o placeholder

### 7. Tratamientos / servicios
Objetivo: mostrar oferta sin sobrecargar.

Cards sugeridas:
- Medicina regenerativa
- Salud integral
- Medicina estética
- Epigenética
- Salud emocional
- Evaluación preventiva

Cada card:
- Título
- Descripción breve
- Link/CTA pequeño: “Ver más”

### 8. Estilo fotográfico / experiencia
Objetivo: reforzar la percepción premium.

Crear una sección con 3 bloques:
- Estética
- Profesional
- Minimalismo

Cada bloque debe tener imagen placeholder en forma vertical/arco y texto corto.

### 9. Testimonios o prueba social
Si no hay testimonios reales, usar placeholders claramente marcados:
- “Testimonio paciente”
- “Resultado / experiencia”

No inventar resultados médicos específicos.

### 10. CTA final
Objetivo: conversión.

Copy sugerido:
“Comienza con una evaluación personalizada”

Subcopy:
“Agenda una primera conversación y descubre qué necesita tu cuerpo para recuperar equilibrio, energía y bienestar.”

Botón:
“Agendar evaluación”

### 11. Footer
Debe incluir:
- Vitamin Health
- Descripción breve
- Links
- Contacto
- Redes sociales
- Legal básico

## Componentes sugeridos
Crear componentes reutilizables:

```txt
src/
  components/
    Header.tsx
    Hero.tsx
    SectionEyebrow.tsx
    Button.tsx
    ImagePlaceholder.tsx
    ValueCard.tsx
    ProcessStep.tsx
    ServiceCard.tsx
    TestimonialCard.tsx
    Footer.tsx
  pages/
    Home.tsx
  styles/
    theme.css
```

## Reglas de implementación
- Usar TypeScript estricto.
- Componentes pequeños y claros.
- No instalar librerías innecesarias.
- No usar UI libraries externas.
- Usar solo Tailwind CSS.
- Mobile first.
- Accesibilidad básica:
  - botones con estados focus
  - textos con buen contraste
  - imágenes con alt
  - landmarks semánticos

## Tailwind
Usar clases Tailwind directamente en JSX.

Preferir:
- `max-w-7xl mx-auto px-6`
- `py-20 md:py-28`
- `grid md:grid-cols-2`
- `rounded-[2rem]`
- `border border-black/10`
- `tracking-[0.2em]`
- `uppercase`
- `text-balance`

## Imágenes
No depender de imágenes reales.
Crear placeholders elegantes cuando falten assets.

Ejemplo de placeholder:
- Fondo `#EAE5E0`
- Borde fino
- Texto pequeño uppercase: “Imagen editorial”
- Forma vertical o arco superior redondeado

## Copywriting
Tono:
- Profesional
- Sereno
- Premium
- Cercano
- Claro

Evitar:
- Promesas médicas absolutas
- “Resultados garantizados”
- Lenguaje agresivo de ventas
- Exceso de emojis
- Frases tipo gimnasio

## Conversión
La web debe tener CTAs repetidos:
- Header
- Hero
- Después del método
- CTA final

CTA principal:
“Agendar evaluación”

CTA secundario:
“Conocer tratamientos”

## Resultado esperado
Construir una landing completa, responsive, visualmente pulida, lista para producción y coherente con el brandbook de Vitamin Health.
