# Portafolio personal con Astro

Este proyecto es un portafolio personal desarrollado con Astro y Tailwind CSS para mostrar información profesional, proyectos, experiencia y enlaces de contacto.

## Tecnologías

- Astro
- Tailwind CSS
- TypeScript
- GitHub Pages

## Requisitos

- Node.js 18.17 o superior
- pnpm 9 o superior

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

Para previsualizar el resultado generado:

```bash
pnpm preview
```

## Estructura principal

- src/pages/: páginas del sitio
- src/components/: componentes reutilizables
- src/utils/constants/: datos de proyectos, contacto y experiencia
- public/: archivos estáticos como imágenes y favicons

## Personalización

Puedes actualizar el contenido principal editando los archivos de la carpeta src/utils/constants y los componentes en src/components.

## Despliegue

El sitio está configurado para publicarse en GitHub Pages mediante la opción site en astro.config.mjs.
