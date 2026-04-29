import { Check } from "lucide-react";
import { whyUs } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyUsSection() {
  return (
    <section className="bg-white/[0.03] py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Por qué GEROSYNC"
          title="Una base tecnológica pensada para empresas que necesitan operar con más orden y visibilidad."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => (
            <div
              className="flex min-h-28 gap-4 rounded-lg border border-white/10 bg-ink/[0.72] p-5"
              key={item}
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-violet/20 text-violet">
                <Check aria-hidden className="size-4" />
              </span>
              <p className="text-sm leading-6 text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
