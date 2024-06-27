import {
  NextJS,
  TypeScript,
  JavaScript,
  Tailwind,
  HTML,
  CSS,
  REACT,
  VITE,
  Firebase,
  Figma,
} from '@/components/icons'

import EnanitosVerdesPreview from '@/assests/projects/enanitos-verdes.webp'
import AdviceGeneratorPreview from '@/assests/projects/advice-generator.webp'
import ColonDreamsPreview from '@/assests/projects/colon-dreams.webp'
import EstudioFloresPreview from '@/assests/projects/estudio-flores.webp'
import SwapiFrontendPreview from '@/assests/projects/swapi-frontend.webp'
import TodoAppPreview from '@/assests/projects/todo-app.webp'

export const TAGS = {
  NEXT: {
    name: 'Next.js',
    class: 'bg-[#1f1f1f] text-white',
    icon: NextJS,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#182546] text-white',
    icon: Tailwind,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'bg-[#093061] text-white',
    icon: TypeScript,
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    class: 'bg-[#323e3a] text-white',
    icon: JavaScript,
  },
  HTML: {
    name: 'HTML',
    class: 'bg-[#3c3e49] text-white',
    icon: HTML,
  },
  CSS: {
    name: 'CSS',
    class: 'bg-[#3c3e49] text-white',
    icon: CSS,
  },
  REACT: {
    name: 'React.js',
    class: 'bg-[#003159] text-white',
    icon: REACT,
  },
  VITE: {
    name: 'Vite',
    class: 'bg-[#242424] text-white',
    icon: VITE,
  },
  FIREBASE: {
    name: 'Firabase',
    class: 'bg-[#242424] text-white',
    icon: Firebase,
  },
  FIGMA: {
    name: 'Figma',
    class: 'bg-[#242424] text-white',
    icon: Figma,
  },
}

export const PROJECTS = [
  {
    title: 'Colón Dreams',
    description:
      'Web de reserva y publicación de alojamientos para vacaciones o escapadas de fin de semana al departamento de Colon, Entre Ríos, Argentina.',
    link: 'https://colondreams.vercel.app//',
    // github: 'https://github.com/pheralb/svgl',
    image: ColonDreamsPreview,
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.FIREBASE, TAGS.FIGMA],
  },
  {
    title: 'Local TO-DOs',
    description:
      'Aplicación React para creación de tareas pendientes con persistencia de datos local. Permite visualizar, crear, editar y eliminar pendientes con estado.',
    link: 'https://todo-list-arn28.vercel.app/',
    github: 'https://github.com/arn28/todo-list',
    image: TodoAppPreview,
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.VITE],
  },
  {
    title: 'Star Wars Personajes',
    description:
      'Es una app glosario con información de personajes de StarWars. Implementada con React, Vite   y TypeScript. haciendo uso de la API pública SWAPI.',
    link: 'https://arn28.github.io/swapi-frontend/',
    github: 'https://github.com/arn28/swapi-frontend',
    image: SwapiFrontendPreview,
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.VITE],
  },
  {
    title: 'Generador de Consejos (Inglés)',
    description:
      'Una aplicación generadora de consejos al hacer clic en el icono del dado. Desarrollada con TypeScript y una open API para obtener algunos consejos aleatorios y mostrárselos al usuario.',
    link: 'https://arn28.github.io/advice-generator/',
    github: 'https://github.com/arn28/advice-generator',
    image: AdviceGeneratorPreview,
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.VITE],
  },
  {
    title: 'Estudio Jurídico Landing Page',
    description:
      'Landing Page responsiva e interactiva diseñada y desarrollada desde cero que muestra información y datos de contacto para un estudio jurídico.',
    link: 'https://proyecto-estudio-flores.vercel.app/',
    github: 'https://github.com/arn28/Proyecto-Estudio-Flores',
    image: EstudioFloresPreview,
    tags: [TAGS.JAVASCRIPT, TAGS.CSS, TAGS.HTML, TAGS.FIGMA],
  },
  {
    title: 'Los Enanitos Verdes',
    description:
      'Web page tributo, responsiva e interactiva diseñada y desarrollada para mostrar la trayectoria, música y noticias sobre la banda argentina Los Enanitos Verdes.',
    link: 'https://proyecto-enanitos-verdes.vercel.app/',
    github: 'https://github.com/arn28/proyecto-enanitos-verdes',
    image: EnanitosVerdesPreview,
    tags: [TAGS.JAVASCRIPT, TAGS.CSS, TAGS.HTML, TAGS.FIGMA],
  },
]
