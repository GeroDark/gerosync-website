import { AlertCircle } from "lucide-react";
import { problems } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProblemSection() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Problemas frecuentes"
          title="Cuando los procesos crecen, las herramientas improvisadas empiezan a limitar la operación."
          description="Muchas empresas B2B operan con información distribuida, reportes manuales y sistemas que no conversan entre sí. El resultado suele ser menos visibilidad y más carga para el equipo."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <Card className="flex gap-4" key={problem}>
              <AlertCircle
                aria-hidden
                className="mt-1 size-5 shrink-0 text-violet"
              />
              <p className="text-sm leading-6 text-slate-200">{problem}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
