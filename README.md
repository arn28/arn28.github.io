# Portafolio personal con Astro

Este proyecto es un portafolio personal desarrollado con [Astro](https://astro.build) y [Tailwind CSS v4](https://tailwindcss.com) para mostrar información profesional, proyectos, experiencia y enlaces de contacto.

## Tecnologías

- **Astro 7** — Framework web todo-en-uno
- **Tailwind CSS 4** — CSS utility-first con configuración CSS-nativa
- **TypeScript 6** — Tipado estático
- **GitHub Pages** — Despliegue continuo

## Requisitos

- **Node.js 22.12** o superior
- **pnpm 9** o superior

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Abre http://localhost:4321 para ver el sitio en tu navegador.

## Construcción para producción

```bash
pnpm build
```

Ejecuta `astro check` (type checking) seguido de `astro build`.

Para previsualizar el resultado generado:

```bash
pnpm preview
```

## Estructura principal

```
src/
├── pages/          # Páginas del sitio
├── components/     # Componentes reutilizables (Astro)
├── layouts/        # Layout base con Header/Footer
├── styles/         # Estilos globales (Tailwind v4)
├── utils/          # Constantes y helpers
└── types/          # Declaraciones de tipos
```

## Personalización

Puedes actualizar el contenido principal editando los archivos en `src/utils/constants/` y los componentes en `src/components/`.

### Dark mode

El tema oscuro se controla mediante la clase `.dark` en `<html>`, toggled por `ThemeToggle.astro`. Definido via `@variant dark` en `src/styles/global.css`.

## Despliegue

El sitio se publica automáticamente en GitHub Pages mediante GitHub Actions al hacer push a `main`. Configuración en `.github/workflows/deploy.yml`.
