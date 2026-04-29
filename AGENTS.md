# AGENTS.md — GEROSYNC Website

## Identidad del proyecto

Este repositorio corresponde al sitio web profesional de GEROSYNC.

GEROSYNC desarrolla software, automatización e integración para empresas B2B. El sitio debe comunicar una propuesta seria, consultiva y preparada para crecer hacia futuras funcionalidades como blog, portal de clientes, dashboards, formularios integrados, administración, autenticación e IA aplicada a procesos internos.

## Principios de implementación

- Usar Next.js con App Router, TypeScript, React y Tailwind CSS.
- Mantener contenido visible en español.
- Centralizar datos repetidos en `src/data`.
- Priorizar una primera versión profesional, mantenible y sin sobreconstrucción.
- No inventar clientes, testimonios, métricas, certificaciones ni casos reales.
- No crear backend, base de datos, autenticación, pagos ni API keys salvo solicitud explícita.
- Usar el nombre `GEROSYNC` y el tagline `Software, automatización e integración para empresas B2B`.
- Configurar metadata SEO básica y Open Graph.
- Validar con `npm run lint` y `npm run build` cuando Node/npm estén disponibles.

## Estructura del proyecto

- Mantener páginas y layouts en `src/app`.
- Mantener componentes reutilizables en `src/components`.
- Mantener utilidades en `src/lib`.
- Mantener contenido repetido, listas de servicios, casos de uso y datos del sitio en `src/data`.
- Usar `public` solo para assets estáticos necesarios.
- No editar archivos generados como `.next`, `out`, `build`, `coverage` o `dist`.

## Buenas prácticas

- Preferir componentes pequeños, tipados y fáciles de leer.
- Evitar abstracciones prematuras; extraer helpers solo cuando reduzcan duplicación real.
- Mantener clases Tailwind consistentes con el diseño existente.
- No introducir dependencias nuevas sin una razón clara.
- No agregar lógica de backend, persistencia, autenticación, pagos, integraciones externas ni API keys sin solicitud explícita.
- Mantener el copy sobrio, consultivo y orientado a empresas B2B.

## SEO

- Mantener metadata básica en App Router: título, descripción, canonical cuando corresponda y Open Graph.
- Usar textos descriptivos y coherentes con el posicionamiento de GEROSYNC.
- Cuidar jerarquía semántica de encabezados: un `h1` principal por página y secciones ordenadas.
- No publicar afirmaciones no verificadas sobre clientes, resultados, certificaciones, premios o métricas.

## Accesibilidad

- Usar HTML semántico siempre que sea posible.
- Asegurar contraste suficiente entre texto y fondo.
- Mantener estados visibles para foco, hover y acciones interactivas.
- Usar textos alternativos útiles en imágenes informativas.
- Evitar que animaciones, layouts o tamaños de texto bloqueen la lectura en móvil.

## Validación

- Ejecutar `npm run lint` después de cambios en código o configuración.
- Ejecutar `npm run build` antes de considerar listo un cambio relevante.
- Si ESLint falla, distinguir entre errores de código fuente y archivos generados.
- La configuración de ESLint debe ignorar artefactos generados como `.next/**`, `node_modules/**`, `out/**`, `build/**`, `coverage/**` y `dist/**`.
- No usar `.eslintignore` como solución principal si el proyecto usa ESLint flat config.

## Futuras funcionalidades

- Preparar el código para crecer hacia blog, portal de clientes, dashboards, formularios integrados, administración, autenticación e IA aplicada.
- Mantener esas futuras capacidades como posibilidades de arquitectura, no como funcionalidades activas.
- No crear rutas, modelos, servicios, bases de datos ni integraciones para esas áreas sin una tarea explícita.

## Veracidad comercial

- No inventar clientes, logos, testimonios, casos reales, métricas, certificaciones ni alianzas.
- Si se necesita mostrar experiencia sin datos verificables, usar lenguaje general y transparente.
- Diferenciar claramente propuestas, servicios y capacidades de resultados ya obtenidos.

## Contacto provisional

- Email: contacto@gerosync.tech
- Web: gerosync.tech
- Ubicación: Perú / LATAM
