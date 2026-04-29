import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="section-shell overflow-hidden rounded-lg border border-cyan/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(139,92,246,0.16),rgba(255,255,255,0.05))] p-8 shadow-glow md:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
            Próximo paso
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-white md:text-4xl">
            Conversemos sobre el proceso que tu empresa necesita ordenar,
            automatizar o integrar.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-200">
            Un diagnóstico permite identificar prioridades, alcance inicial y
            una ruta realista para construir una solución útil desde la primera
            versión.
          </p>
          <Button className="mt-8 gap-2" href="#contacto">
            Agendar diagnóstico
            <ArrowRight aria-hidden className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
