import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink/90 py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-steel">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 text-sm text-steel">
            © {new Date().getFullYear()} GEROSYNC. Todos los derechos reservados.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Servicios
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-steel">
            <li>Software a medida</li>
            <li>Automatizaciones</li>
            <li>Integraciones y dashboards</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-steel">
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.website}</li>
            <li>{siteConfig.contact.location}</li>
            <li>
              <Link
                className="transition hover:text-white"
                href={siteConfig.routes.privacy}
              >
                Privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
