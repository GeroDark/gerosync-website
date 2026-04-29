export const siteConfig = {
  name: "GEROSYNC",
  tagline: "Software, automatización e integración para empresas B2B",
  description:
    "GEROSYNC ayuda a empresas B2B a ordenar, automatizar e integrar sus procesos mediante software a medida, portales internos, dashboards e integraciones.",
  siteUrl: "https://gerosync.tech",
  assets: {
    ogImage: "/og-image.png",
    icon: "/icon.png",
    appleIcon: "/apple-icon.png"
  },
  contact: {
    email: "contacto@gerosync.tech",
    emailHref: "mailto:contacto@gerosync.tech",
    website: "gerosync.tech",
    location: "Perú / LATAM",
    whatsappPlaceholder: "WhatsApp por definir",
    whatsappUrl: ""
  },
  routes: {
    home: "/",
    privacy: "/privacidad"
  },
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Casos de uso", href: "#casos-de-uso" },
    { label: "Método", href: "#metodo" },
    { label: "Contacto", href: "#contacto" }
  ]
} as const;
