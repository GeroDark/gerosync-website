import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad | GEROSYNC",
  description:
    "Política de privacidad básica de GEROSYNC para consultas comerciales recibidas desde el sitio web.",
  alternates: {
    canonical: siteConfig.routes.privacy
  },
  openGraph: {
    title: "Privacidad | GEROSYNC",
    description:
      "Información sobre el uso de datos enviados mediante el formulario de contacto de GEROSYNC.",
    url: `${siteConfig.siteUrl}${siteConfig.routes.privacy}`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.assets.ogImage,
        width: 1792,
        height: 1024,
        alt: "GEROSYNC"
      }
    ],
    locale: "es_PE",
    type: "website"
  }
};

export default function PrivacyPage() {
  return (
    <>
      <main className="section-shell min-h-screen py-16 md:py-24">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-white"
          href={siteConfig.routes.home}
        >
          <ArrowLeft aria-hidden className="size-4" />
          Volver al inicio
        </Link>

        <section className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
            Privacidad
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold text-white md:text-5xl">
            Política de privacidad
          </h1>
          <p className="mt-5 text-base leading-7 text-steel">
            Esta página resume cómo GEROSYNC trata la información enviada por
            los canales de contacto del sitio web.
          </p>
        </section>

        <section className="mt-10 grid gap-6 text-sm leading-7 text-slate-200">
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6">
            <h2 className="text-xl font-semibold text-white">
              Datos de contacto
            </h2>
            <p className="mt-3">
              El formulario puede recoger nombre, empresa, email y mensaje. Esa
              información se usa solo para responder consultas comerciales,
              coordinar una conversación inicial o dar seguimiento a una
              solicitud relacionada con los servicios de GEROSYNC.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6">
            <h2 className="text-xl font-semibold text-white">
              Uso de la información
            </h2>
            <p className="mt-3">
              GEROSYNC no vende los datos enviados desde el sitio. El formulario
              actual no conecta con backend, base de datos, CRM ni servicios
              externos.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6">
            <h2 className="text-xl font-semibold text-white">
              Corrección o eliminación
            </h2>
            <p className="mt-3">
              Puedes solicitar la corrección o eliminación de información
              enviada desde este sitio escribiendo a {siteConfig.contact.email}.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
