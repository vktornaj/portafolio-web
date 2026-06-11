// =============================================================================
// CONFIGURACIÓN DE VIDEOS DE YOUTUBE (estática)
// =============================================================================
// Lista de videos a mostrar en la sección "YouTube" del portafolio.
// Para añadir un video nuevo basta con copiar su ID (la parte después de
// `watch?v=` en la URL de YouTube) y agregar una entrada aquí.
//
// La miniatura se obtiene automáticamente de YouTube a partir del `id`,
// así que no necesitas descargar ni alojar imágenes.
// =============================================================================

export interface VideoYoutube {
  /** ID del video de YouTube (lo que va después de `watch?v=`). */
  id: string;
  /** Título del video. */
  titulo: string;
  /** Descripción corta opcional que se muestra bajo el título. */
  descripcion?: string;
}

/** Handle del canal, usado para los enlaces "Ver canal". */
export const canalYoutube = {
  handle: '@vktornaj',
  url: 'https://www.youtube.com/@vktornaj',
};

export const videos: VideoYoutube[] = [
  {
    id: 'JjrygMLr4J8',
    titulo: 'Aprende inglés con IA 🤖',
    descripcion: 'ChatWizard te ayuda a hablar mejor y más rápido con práctica guiada por IA.',
  },
  {
    id: 'Hkd2ZF-wtGE',
    titulo: 'Primeros pasos con Rust',
    descripcion: 'Una introducción práctica al lenguaje Rust desde cero.',
  },
];
