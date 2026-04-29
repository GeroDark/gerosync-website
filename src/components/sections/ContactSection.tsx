"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/data/site";
import {
  initialContactFormState,
  submitContactForm,
  type ContactFormState
} from "@/lib/contact";

type FieldName = keyof ContactFormState;

const fields: Array<{
  label: string;
  name: FieldName;
  placeholder: string;
  type?: string;
}> = [
  {
    label: "Nombre",
    name: "name",
    placeholder: "Tu nombre"
  },
  {
    label: "Empresa",
    name: "company",
    placeholder: "Nombre de la empresa"
  },
  {
    label: "Email",
    name: "email",
    placeholder: "correo@empresa.com",
    type: "email"
  }
];

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(initialContactFormState);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const updateField = (name: FieldName, value: string) => {
    setForm((current) => ({ ...current, [name]: value }));
    setStatus("idle");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await submitContactForm(form);
    setStatus("success");
    setForm(initialContactFormState);
  };

  return (
    <section className="pb-24 pt-8" id="contacto">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contacto"
          title="Agenda un diagnóstico para evaluar una primera solución."
          description="Cuéntanos qué proceso necesitas ordenar, automatizar o integrar. Esta primera versión deja el formulario preparado para una integración futura con email o CRM."
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg border border-white/10 bg-white/[0.055] p-6">
            <h3 className="text-xl font-semibold text-white">GEROSYNC</h3>
            <p className="mt-3 text-sm leading-6 text-steel">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-3 text-sm text-slate-200">
                <Mail aria-hidden className="size-5 text-cyan" />
                {siteConfig.contact.email}
              </p>
              <p className="flex items-center gap-3 text-sm text-slate-200">
                <MapPin aria-hidden className="size-5 text-cyan" />
                {siteConfig.contact.location}
              </p>
            </div>
          </aside>

          <form
            className="rounded-lg border border-white/10 bg-ink/[0.82] p-6 shadow-glow"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              {fields.map((field) => (
                <label className="grid gap-2" key={field.name}>
                  <span className="text-sm font-medium text-white">
                    {field.label}
                  </span>
                  <input
                    className="min-h-12 rounded-md border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/60"
                    name={field.name}
                    onChange={(event) =>
                      updateField(field.name, event.target.value)
                    }
                    placeholder={field.placeholder}
                    required
                    type={field.type ?? "text"}
                    value={form[field.name]}
                  />
                </label>
              ))}
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-medium text-white">
                  Mensaje
                </span>
                <textarea
                  className="min-h-36 resize-y rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan/60"
                  name="message"
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder="Describe el proceso, área o integración que quieres evaluar."
                  required
                  value={form.message}
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button className="gap-2" type="submit">
                <Send aria-hidden className="size-4" />
                Enviar solicitud
              </Button>
              {status === "success" ? (
                <p className="text-sm text-cyan">
                  Solicitud registrada en la interfaz. Lista para conexión
                  futura.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
