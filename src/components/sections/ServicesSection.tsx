import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ServicesSection() {
  return (
    <section className="py-20" id="servicios">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Servicios"
          title="Soluciones digitales para ordenar operación, datos y decisiones."
          description="Cada servicio puede implementarse como una solución puntual o como parte de una arquitectura más amplia para procesos B2B."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                className="group min-h-64 transition hover:-translate-y-1 hover:border-cyan/[0.35]"
                key={service.title}
              >
                <div className="grid size-12 place-items-center rounded-md border border-cyan/25 bg-cyan/[0.12] text-cyan">
                  <Icon aria-hidden className="size-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-steel">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
