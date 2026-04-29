import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";

const pillars = [
  "Mapeamos el proceso real antes de proponer tecnología.",
  "Construimos herramientas alineadas a los flujos del negocio.",
  "Integramos datos y sistemas para reducir trabajo duplicado.",
  "Diseñamos una base que pueda sumar módulos, usuarios e integraciones."
] as const;

export function SolutionSection() {
  return (
    <section className="bg-white/[0.03] py-20">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
            Solución
          </p>
          <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
            Tecnología diseñada alrededor del proceso, no al revés.
          </h2>
        </div>
        <div className="rounded-lg border border-white/10 bg-ink/[0.72] p-6 shadow-glow">
          <p className="text-lg leading-8 text-slate-200">
            {siteConfig.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div className="flex gap-3" key={pillar}>
                <CheckCircle2
                  aria-hidden
                  className="mt-1 size-5 shrink-0 text-cyan"
                />
                <p className="text-sm leading-6 text-steel">{pillar}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
