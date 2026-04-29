import Image from "next/image";
import { ArrowRight, Building2, Network, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

const proofPoints = [
  { label: "Procesos ordenados", icon: Building2 },
  { label: "Sistemas conectados", icon: Network },
  { label: "Base escalable", icon: ShieldCheck }
] as const;

export function HeroSection() {
  return (
    <section
      className="relative isolate min-h-screen overflow-hidden pb-20 pt-28"
      id="inicio"
    >
      <Image
        alt="Infraestructura digital con bloques de datos conectados"
        className="absolute inset-0 -z-20 size-full object-cover object-center opacity-55"
        fill
        priority
        src="/images/gerosync-hero.png"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,17,31,0.98)_0%,rgba(6,17,31,0.86)_44%,rgba(6,17,31,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-ink to-transparent" />

      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[0.95fr_0.7fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan">
            {siteConfig.tagline}
          </p>
          <h1 className="text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-xl leading-8 text-slate-200 md:text-2xl">
            Ordenamos, automatizamos e integramos procesos B2B con software a
            medida, portales internos, dashboards e integraciones preparadas
            para crecer.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button className="gap-2" href="#contacto">
              Agendar diagnóstico
              <ArrowRight aria-hidden className="size-4" />
            </Button>
            <Button href="#servicios" variant="secondary">
              Ver servicios
            </Button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur"
                  key={item.label}
                >
                  <Icon aria-hidden className="size-5 text-cyan" />
                  <span className="text-sm font-medium text-slate-100">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-lg border border-white/[0.12] bg-ink/[0.64] p-5 shadow-glow backdrop-blur-xl">
            <div className="grid gap-3">
              {["Datos dispersos", "Flujos manuales", "Sistemas conectados"].map(
                (item, index) => (
                  <div
                    className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.07] p-4"
                    key={item}
                  >
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                    <span className="text-sm font-semibold text-cyan">
                      0{index + 1}
                    </span>
                  </div>
                )
              )}
            </div>
            <div className="mt-5 rounded-md border border-cyan/20 bg-cyan/10 p-4">
              <p className="text-sm font-semibold text-white">
                Soluciones digitales enfocadas en operación, visibilidad y
                continuidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
