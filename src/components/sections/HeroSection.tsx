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
      className="relative isolate min-h-screen overflow-hidden pb-20 pt-28 lg:pb-24"
      id="inicio"
    >
      <Image
        alt=""
        aria-hidden
        className="absolute inset-0 -z-30 size-full object-cover object-[62%_center] md:object-center"
        fill
        priority
        sizes="100vw"
        src="/images/gerosync-hero-bg.png"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(6,17,31,0.9)_0%,rgba(6,17,31,0.7)_48%,rgba(6,17,31,0.36)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(6,17,31,0.66)_0%,rgba(6,17,31,0.22)_42%,rgba(6,17,31,0.88)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_24%,rgba(34,211,238,0.16),transparent_30rem),radial-gradient(circle_at_84%_18%,rgba(139,92,246,0.1),transparent_34rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-ink to-transparent" />

      <div className="section-shell flex min-h-[calc(100vh-7rem)] items-center">
        <div className="relative max-w-3xl pt-4 before:absolute before:-inset-x-5 before:-inset-y-6 before:-z-10 before:rounded-lg before:bg-ink/45 before:blur-2xl md:before:-inset-x-8">
          <p className="mb-5 inline-flex rounded-full border border-cyan/35 bg-ink/50 px-4 py-2 text-sm font-semibold text-cyan backdrop-blur">
            {siteConfig.tagline}
          </p>
          <h1 className="text-balance text-5xl font-bold leading-tight text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)] md:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-xl leading-8 text-slate-100 drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)] md:text-2xl">
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
                  className="flex items-center gap-3 rounded-lg border border-white/15 bg-ink/45 px-4 py-3 shadow-glow backdrop-blur-md"
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

      </div>
    </section>
  );
}
