import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "GEROSYNC | Software, automatización e integración para empresas B2B",
  description:
    "GEROSYNC desarrolla software a medida, automatizaciones, integraciones y portales empresariales para optimizar procesos B2B.",
  metadataBase: new URL(`https://${siteConfig.contact.web}`),
  openGraph: {
    title: "GEROSYNC | Software, automatización e integración para empresas B2B",
    description:
      "Software a medida, automatizaciones, integraciones y portales empresariales para procesos B2B.",
    url: `https://${siteConfig.contact.web}`,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/gerosync-hero.png",
        width: 1792,
        height: 1024,
        alt: "Visual tecnológico de GEROSYNC"
      }
    ],
    locale: "es_PE",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
