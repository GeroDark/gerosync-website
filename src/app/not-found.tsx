import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-20">
      <section className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
          Página no encontrada
        </p>
        <h1 className="mt-5 text-balance text-4xl font-semibold text-white md:text-6xl">
          Esta ruta no está disponible.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-steel">
          Puedes volver al inicio para revisar los servicios de {siteConfig.name} y contactar al equipo.
        </p>
        <Button className="mt-8 gap-2" href={siteConfig.routes.home}>
          <ArrowLeft aria-hidden className="size-4" />
          Volver al inicio
        </Button>
      </section>
    </main>
  );
}
