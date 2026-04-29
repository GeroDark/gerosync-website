import { methodology } from "@/data/methodology";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MethodSection() {
  return (
    <section className="py-20" id="metodo">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Método"
          title="Un proceso de trabajo claro para convertir necesidades operativas en soluciones utilizables."
          description="La metodología prioriza entendimiento, alcance concreto, validación temprana y una evolución ordenada de la solución."
        />
        <div className="grid gap-5 lg:grid-cols-5">
          {methodology.map((item) => (
            <article
              className="rounded-lg border border-white/10 bg-white/[0.055] p-5"
              key={item.step}
            >
              <span className="text-sm font-bold text-cyan">{item.step}</span>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
