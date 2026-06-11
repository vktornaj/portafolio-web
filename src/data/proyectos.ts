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

/** Contenido del modal "Detalles". Todos los campos son opcionales. */
export interface DetalleProyecto {
  /** Párrafo descriptivo largo. */
  resumen: string;
  /** Descripción de la arquitectura (opcional). */
  arquitectura?: string;
  /** Lista de puntos destacados (opcional). */
  destacados?: string[];
  /** Chips del stack tecnológico (opcional). */
  stack?: string[];
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
  /** Capturas de la app que se muestran solapadas (abanico) sobre el screenshot. */
  galeria?: string[];
  /** Iconos de tecnologías (Font Awesome). */
  iconos: IconoTec[];
  /** Si está presente, muestra el botón "Detalles" que abre un modal. */
  detalles?: DetalleProyecto;
}

// Proyectos visibles. Con uno solo se muestra un layout "destacado"; con 2 o más,
// un carrusel. Abajo hay 4 plantillas comentadas listas para reactivar.
export const proyectos: Proyecto[] = [
  {
    clase: 'proyecto-1',
    tag: 'Flutter · EdTech',
    titulo: 'ChatWizard',
    descripcion: 'App móvil para aprender inglés conversando con un bot impulsado por IA.',
    // Repo privado: sin botón "Código".
    demo: 'https://cw.geduardo.com/en',
    screenshot: '/assets/chatwizard.png',
    galeria: ['/assets/cw-progress.jpg', '/assets/cw-context.jpg', '/assets/cw-pronunciation.jpg'],
    iconos: [
      { icon: 'fas fa-mobile-alt', title: 'Flutter' },
      { icon: 'fas fa-robot', title: 'IA / Chatbot' },
      { icon: 'fas fa-language', title: 'Aprender inglés' },
    ],
    detalles: {
      resumen:
        'ChatWizard es una app móvil (Flutter) para practicar inglés conversando con un tutor ' +
        'de IA. El backend está escrito en Go y expone una API gRPC junto con entradas REST ' +
        '(api_entry) y WebSocket (ws_entry) para sostener el chat en tiempo real con el cliente.',
      arquitectura:
        'El backend se organiza en microservicios independientes —cada servicio es su propio ' +
        'módulo y paquete— siguiendo principios de Clean Architecture / Arquitectura Hexagonal. ' +
        'Se divide en capas Domain (entidades, lógica y errores de negocio), Application (casos ' +
        'de uso e interfaces) y Adapter (gRPC, REST y WebSocket), con pruebas en cada capa.',
      destacados: [
        'Chat en tiempo real mediante WebSocket',
        'API gRPC + REST para el cliente Flutter',
        'Microservicios con Clean / Hexagonal Architecture',
        'Capas Domain · Application · Adapter, con tests en cada una',
        'Contenedorizado con Docker (devcontainer + Docker Compose para QA)',
      ],
      stack: ['Flutter', 'Go', 'gRPC', 'WebSocket', 'REST', 'Docker', 'Clean Architecture'],
    },
  },

  // ---------------------------------------------------------------------------
  // PLANTILLAS (descomenta y completa cuando agregues más proyectos reales).
  // ---------------------------------------------------------------------------
  /*
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
  */
];
