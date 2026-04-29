import {
  BarChart3,
  Bot,
  Braces,
  Cable,
  FileCog,
  Workflow
} from "lucide-react";

export const problems = [
  "Procesos manuales que dependen de varias personas y pasos repetidos.",
  "Uso excesivo de Excel para operaciones que ya requieren control y trazabilidad.",
  "Información dispersa entre WhatsApp, correos, hojas de cálculo y sistemas aislados.",
  "Reportes lentos que retrasan decisiones comerciales, operativas o gerenciales.",
  "Tareas repetitivas que consumen tiempo del equipo y aumentan el margen de error.",
  "Sistemas desconectados que obligan a copiar datos entre plataformas.",
  "Falta de visibilidad para gerencia sobre indicadores, solicitudes y avance operativo."
] as const;

export const services = [
  {
    title: "Sistemas internos a medida",
    description:
      "Aplicaciones internas para centralizar operaciones, solicitudes, registros y flujos críticos del negocio.",
    icon: FileCog
  },
  {
    title: "Automatización de procesos",
    description:
      "Flujos digitales que reducen trabajo manual, ordenan aprobaciones y conectan tareas repetitivas.",
    icon: Workflow
  },
  {
    title: "Integraciones y APIs",
    description:
      "Conexión entre formularios, bases de datos, correos, CRMs, ERPs y herramientas existentes.",
    icon: Cable
  },
  {
    title: "Portales web empresariales",
    description:
      "Portales para clientes, proveedores o equipos internos con acceso claro a información y operaciones.",
    icon: Braces
  },
  {
    title: "Dashboards y reportes",
    description:
      "Paneles con indicadores útiles para seguimiento operativo, control gerencial y decisiones oportunas.",
    icon: BarChart3
  },
  {
    title: "IA aplicada a procesos internos",
    description:
      "Asistentes y automatizaciones con IA para clasificar información, apoyar análisis y acelerar tareas internas.",
    icon: Bot
  }
] as const;

export const whyUs = [
  "Enfoque en procesos de negocio, no solo en pantallas.",
  "Soluciones a medida según la operación real de cada empresa.",
  "Arquitectura preparada para crecer con nuevas áreas, datos e integraciones.",
  "Implementación práctica, priorizando avances útiles desde la primera versión.",
  "Comunicación clara para equipos técnicos, comerciales y gerenciales.",
  "Base tecnológica lista para evolucionar hacia portales, dashboards e IA."
] as const;
