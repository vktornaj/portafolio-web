// =============================================================================
// CONFIGURACIÓN DE PROYECTOS (estática)
// =============================================================================
// Aquí defines los 2-5 proyectos del portafolio. Todo es manual: no se lee
// ninguna información de GitHub.
//
// Enlaces (cada uno es opcional, el botón solo aparece si pones la URL):
//   - `codigo`: link al repositorio. Ponlo SOLO si el repo es PÚBLICO.
//   - `demo`:   link a la demo en vivo.
// =============================================================================

export interface IconoTec {
  /** Clase de Font Awesome v5, ej: 'fab fa-rust'. */
  icon: string;
  /** Texto del tooltip, ej: 'Rust'. */
  title: string;
}

export interface Proyecto {
  /** Clase de gradiente de fondo: 'proyecto-1' … 'proyecto-5'. */
  clase: string;
  /** Etiqueta de categoría que se muestra arriba de la tarjeta. */
  tag: string;
  /** Título de la tarjeta. */
  titulo: string;
  /** Descripción de la tarjeta. */
  descripcion: string;
  /** URL del repositorio. Ponla SOLO si el repo es público (muestra botón "Código"). */
  codigo?: string;
  /** URL de la demo en vivo (muestra botón "Demo"). */
  demo?: string;
  /** Ruta de la imagen de preview en /public, ej: '/assets/chatwizard.png'. */
  screenshot?: string;
  /** Iconos de tecnologías (Font Awesome). */
  iconos: IconoTec[];
}

// Mostrar entre 2 y 5 proyectos.
export const proyectos: Proyecto[] = [
  {
    clase: 'proyecto-1',
    tag: 'Flutter · EdTech',
    titulo: 'ChatWizard',
    descripcion: 'App móvil para aprender inglés conversando con un bot impulsado por IA.',
    // Repo privado: sin botón "Código".
    demo: 'https://cw.geduardo.com/en',
    screenshot: '/assets/chatwizard.png',
    iconos: [
      { icon: 'fas fa-mobile-alt', title: 'Flutter' },
      { icon: 'fas fa-robot', title: 'IA / Chatbot' },
      { icon: 'fas fa-language', title: 'Aprender inglés' },
    ],
  },
  {
    clase: 'proyecto-2',
    tag: 'Machine Learning',
    titulo: 'Clasificador de Datos',
    descripcion: 'API REST para clasificación inteligente y análisis de sentimientos.',
    // codigo: 'https://github.com/vktornaj/...',  // si el repo es público
    // demo: 'https://...',
    // screenshot: '/assets/clasificador.png',
    iconos: [
      { icon: 'fab fa-python', title: 'Python' },
      { icon: 'fas fa-brain', title: 'Machine Learning' },
      { icon: 'fas fa-database', title: 'SQL' },
    ],
  },
  {
    clase: 'proyecto-3',
    tag: 'Rust Backend',
    titulo: 'Procesador de Pagos',
    descripcion: 'Microservicio concurrente para transacciones seguras de alta velocidad.',
    // codigo: 'https://github.com/vktornaj/...',
    // demo: 'https://...',
    // screenshot: '/assets/procesador.png',
    iconos: [
      { icon: 'fab fa-rust', title: 'Rust' },
      { icon: 'fas fa-server', title: 'Backend' },
      { icon: 'fas fa-shield-alt', title: 'Seguridad' },
    ],
  },
  {
    clase: 'proyecto-4',
    tag: 'Java OOP',
    titulo: 'Optimizador de Rutas',
    descripcion: 'Visualizador interactivo de algoritmos de grafos complejos.',
    // codigo: 'https://github.com/vktornaj/...',
    // demo: 'https://...',
    // screenshot: '/assets/optimizador.png',
    iconos: [
      { icon: 'fab fa-java', title: 'Java' },
      { icon: 'fas fa-project-diagram', title: 'Algoritmia' },
      { icon: 'fas fa-database', title: 'PostgreSQL' },
    ],
  },
  {
    clase: 'proyecto-5',
    tag: 'Data Integration',
    titulo: 'Dashboard Analytics',
    descripcion: 'Panel de control para bases de datos en tiempo real.',
    // codigo: 'https://github.com/vktornaj/...',
    // demo: 'https://...',
    // screenshot: '/assets/dashboard.png',
    iconos: [
      { icon: 'fab fa-js-square', title: 'JavaScript' },
      { icon: 'fas fa-chart-line', title: 'Charts' },
      { icon: 'fas fa-database', title: 'SQL' },
    ],
  },
];
