import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "GEROSYNC | Software, automatización e integración para empresas B2B",
  description:
    "GEROSYNC desarrolla software a medida, automatizaciones, integraciones y portales empresariales para optimizar procesos B2B.",
  alternates: {
    canonical: siteConfig.routes.home
  },
  icons: {
    icon: siteConfig.assets.icon,
    apple: siteConfig.assets.appleIcon
  },
  openGraph: {
    title: "GEROSYNC | Software, automatización e integración para empresas B2B",
    description:
      "Software a medida, automatizaciones, integraciones y portales empresariales para procesos B2B.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1792,
        height: 1024,
        alt: "GEROSYNC: software, automatización e integración para empresas B2B"
      }
    ],
    locale: "es_PE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "GEROSYNC | Software, automatización e integración para empresas B2B",
    description:
      "Software a medida, automatizaciones, integraciones y portales empresariales para procesos B2B.",
    images: [siteConfig.assets.ogImage]
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
