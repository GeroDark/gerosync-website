import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/[0.78] backdrop-blur-xl">
      <nav aria-label="Navegación principal" className="section-shell">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid size-9 place-items-center overflow-hidden rounded-md border border-cyan/[0.35] bg-ink/80">
              <Image
                alt="Logo de GEROSYNC"
                className="size-full object-contain"
                height={36}
                priority
                src="/images/gerosync-logo.png"
                width={36}
              />
            </span>
            <span className="text-base font-bold tracking-wide text-white">
              {siteConfig.name}
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                className="text-sm font-medium text-steel transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <Button className="hidden gap-2 sm:inline-flex" href="#contacto">
            <CalendarDays aria-hidden className="size-4" />
            Agendar diagnóstico
          </Button>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-3 lg:hidden">
          {siteConfig.nav.map((item) => (
            <a
              className="shrink-0 text-sm font-medium text-steel transition hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
