# GEROSYNC Website

Sitio web profesional de GEROSYNC, una propuesta de software, automatización e integración para empresas B2B. La landing presenta servicios, casos de uso, metodología y canales de contacto para iniciar conversaciones comerciales.

## Stack

- Next.js 15 con App Router
- React 19
- TypeScript
- Tailwind CSS
- ESLint con configuración para Next.js

## Requisitos

- Node.js compatible con Next.js 15
- npm

## Instalación

```bash
npm install
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

- `npm run dev`: inicia el servidor local de desarrollo.
- `npm run lint`: revisa el código fuente con ESLint.
- `npm run build`: genera una compilación de producción.

## Estructura del proyecto

```text
src/
  app/          Rutas, layout, metadata, sitemap, robots y páginas del sitio
  components/   Componentes de layout, secciones y UI
  data/         Configuración centralizada y contenido reutilizable
  lib/          Utilidades e integración futura del formulario
public/         Assets estáticos del sitio
```

## Estado actual

- Landing profesional en español.
- Metadata SEO, Open Graph y Twitter card básicos.
- Sitemap y robots listos para despliegue.
- Página 404 personalizada.
- Página de privacidad básica.
- Formulario de contacto preparado para integración futura, sin backend real.

## Futuras mejoras

- Integrar el formulario con email, CRM o una API propia cuando exista alcance definido.
- Agregar blog o recursos técnicos.
- Preparar portal de clientes, dashboards o administración.
- Incorporar analítica y monitoreo respetando privacidad y consentimiento aplicable.
- Revisar textos legales finales antes de producción pública.

## Notas de repositorio

No se deben subir `node_modules`, `.next` ni archivos `.env`. También deben mantenerse fuera del repositorio artefactos como `out`, `build`, `coverage` y `dist`.
