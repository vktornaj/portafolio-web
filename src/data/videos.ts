// =============================================================================
// CONFIGURACIÓN DE VIDEOS DE YOUTUBE (estática)
// =============================================================================
// Lista de videos a mostrar en la sección "YouTube" del portafolio.
// Para añadir un video nuevo basta con copiar su ID (la parte después de
// `watch?v=` en la URL de YouTube) y agregar una entrada aquí.
//
// La miniatura se obtiene automáticamente de YouTube a partir del `id`,
// así que no necesitas descargar ni alojar imágenes.
//
// `titulo` y `descripcion` son textos localizados: define la versión en
// español (es) e inglés (en). Ver src/i18n/utils.ts (`tr`).
// =============================================================================

import type { LocalizedText } from '../i18n/utils';

export interface VideoYoutube {
  /** ID del video de YouTube (lo que va después de `watch?v=`). */
  id: string;
  /** Título del video (es / en). */
  titulo: LocalizedText;
  /** Descripción corta opcional que se muestra bajo el título (es / en). */
  descripcion?: LocalizedText;
}

/** Handle del canal, usado para los enlaces "Ver canal". */
export const canalYoutube = {
  handle: '@vktornaj',
  url: 'https://www.youtube.com/@vktornaj',
};

export const videos: VideoYoutube[] = [
  {
    id: 'JjrygMLr4J8',
    titulo: {
      es: 'Aprende inglés con IA 🤖',
      en: 'Learn English with AI 🤖',
    },
    descripcion: {
      es: 'ChatWizard te ayuda a hablar mejor y más rápido con práctica guiada por IA.',
      en: 'ChatWizard helps you speak better and faster with AI-guided practice.',
    },
  },
  {
    id: 'Hkd2ZF-wtGE',
    titulo: {
      es: 'Primeros pasos con Rust',
      en: 'First steps with Rust',
    },
    descripcion: {
      es: 'Una introducción práctica al lenguaje Rust desde cero.',
      en: 'A practical introduction to the Rust language from scratch.',
    },
  },
];
