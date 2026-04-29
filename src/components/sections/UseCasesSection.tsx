import { ArrowUpRight } from "lucide-react";
import { useCases } from "@/data/useCases";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function UseCasesSection() {
  return (
    <section className="bg-white/[0.03] py-20" id="casos-de-uso">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Casos de uso"
          title="Ejemplos de soluciones que GEROSYNC puede implementar."
          description="Estos casos son posibilidades de implementación según el contexto de cada empresa, no proyectos presentados como casos reales."
        />
        <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article className="bg-ink/[0.86] p-6" key={useCase.title}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                  {useCase.title}
                </h3>
                <ArrowUpRight
                  aria-hidden
                  className="size-5 shrink-0 text-cyan"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-steel">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
