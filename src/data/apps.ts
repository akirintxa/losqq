export const GITHUB_URL = "https://github.com/akirintxa";

export type AppStatus = "live" | "building" | "personal" | "prototype";

export const STATUS_LABELS: Record<AppStatus, string> = {
  live: "Activa",
  building: "En construcción",
  personal: "Uso personal",
  prototype: "Prototipo",
};

export type Tournament = {
  name: string;
  dates: string;
  state: string;
  description: string;
};

export type App = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  /** Color de acento de la app en tarjetas y ficha. */
  accent: string;
  stack: string[];
  highlights: string[];
  /** URL pública de la app, si está desplegada. */
  url?: string;
  repo?: string;
  tournaments?: Tournament[];
};

// Para agregar una app nueva basta con sumar una entrada a esta lista.
export const APPS: App[] = [
  {
    slug: "q26",
    name: "Q26 La Quiniela",
    tagline: "Quinielas de fútbol con ligas privadas, invitación por QR y ranking en vivo.",
    description:
      "Pronostica resultados, arma ligas privadas con tus amigos y compite en un ranking en vivo. Nació para el Mundial 2026 y crece hacia varios torneos.",
    status: "live",
    accent: "#ce2626",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    highlights: [
      "Ligas privadas con invitación por código y QR.",
      "Pronósticos que se cierran 30 minutos antes de cada partido.",
      "Marcadores sincronizados y ranking actualizado en tiempo real.",
    ],
    url: "https://quiniela.losqq.com",
    repo: "https://github.com/akirintxa/app-quiniela",
    tournaments: [
      {
        name: "Mundial 2026",
        dates: "Junio a julio 2026",
        state: "Finalizado",
        description: "104 partidos entre fase de grupos y eliminatorias.",
      },
    ],
  },
  {
    slug: "mercadata",
    name: "Mercadata",
    tagline: "Comparador de precios de supermercados y farmacias en Venezuela.",
    description:
      "Encuentra qué establecimiento tiene el precio más bajo para cualquier producto, con precios con IVA incluido y conversión entre dólares y bolívares a tasa BCV.",
    status: "live",
    accent: "#219ebc",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Compara 7 cadenas de supermercados y farmacias.",
      "Búsqueda que detecta marca y presentación.",
      "Precios en USD y Bs. con la tasa oficial del día.",
    ],
    url: "https://mercadata.losqq.com",
    repo: "https://github.com/akirintxa/mercadata",
  },
  {
    slug: "ib-tracker",
    name: "IB Tracker",
    tagline: "Dashboard de un portafolio de inversión en Interactive Brokers.",
    description:
      "Lee los reportes de transacciones de Interactive Brokers y muestra posiciones, costo promedio con comisiones, dividendos, histórico mensual y la comparación contra el S&P 500.",
    status: "personal",
    accent: "#e5d283",
    stack: ["Python", "Flask", "Chart.js"],
    highlights: [
      "Costo promedio que incluye comisiones.",
      "Dividendos por ticker y por trimestre, con retenciones.",
      "Rentabilidad mensual comparada contra VOO.",
    ],
    repo: "https://github.com/akirintxa/ib-tracker",
  },
  {
    slug: "calculo-ftp",
    name: "Calculadora FTP",
    tagline: "Zonas de potencia para ciclismo a partir de tu FTP.",
    description: "Ingresa tu FTP y obtén tus zonas de entrenamiento en watts.",
    status: "prototype",
    accent: "#fb8500",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Calcula las zonas al instante, sin registro."],
    repo: "https://github.com/akirintxa/calculo-ftp",
  },
];

export function getApp(slug: string): App | undefined {
  return APPS.find((app) => app.slug === slug);
}
