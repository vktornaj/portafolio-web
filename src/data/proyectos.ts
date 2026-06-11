// =============================================================================
// CONFIGURACIÓN MANUAL DE PROYECTOS
// =============================================================================
// Aquí eliges QUÉ repos se muestran y AÑADES la información que GitHub no tiene
// (demo en vivo, screenshot, descripción/título personalizados, iconos).
//
// Los datos de GitHub (descripción, lenguaje, ⭐ stars, último commit, topics)
// se traen automáticamente en build time desde `src/lib/github.ts`, incluso de
// repos PRIVADOS, usando el token GITHUB_TOKEN.
//
// Reglas de mezcla (lo manual SIEMPRE gana):
//   - `titulo`      vacío -> se usa el nombre del repo en GitHub.
//   - `descripcion` vacío -> se usa la descripción del repo en GitHub.
// =============================================================================

export interface IconoTec {
  /** Clase de Font Awesome, ej: 'fab fa-rust'. */
  icon: string;
  /** Texto del tooltip, ej: 'Rust'. */
  title: string;
}

export interface ProyectoManual {
  /** "owner/repo" tal cual aparece en GitHub. Funciona con repos privados. */
  repo: string;
  /** Clase de gradiente de fondo: 'proyecto-1' … 'proyecto-5'. */
  clase: string;
  /** Etiqueta de categoría que se muestra arriba de la tarjeta. */
  tag: string;
  /** Título a mostrar. Si lo dejas vacío se usa el nombre del repo en GitHub. */
  titulo?: string;
  /** Descripción a mostrar. Si la dejas vacía se usa la descripción del repo. */
  descripcion?: string;
  /** URL de la demo en vivo (opcional). */
  demo?: string;
  /** Ruta de la imagen de preview en /public, ej: '/assets/proyecto-1.png'. */
  screenshot?: string;
  /** Iconos de tecnologías (Font Awesome). */
  iconos: IconoTec[];
}

// Mostrar entre 2 y 5 proyectos. Reemplaza los "owner/repo" por tus repos reales.
export const proyectos: ProyectoManual[] = [
  {
    repo: 'vktornaj/chat-wizard-flutter',
    clase: 'proyecto-1',
    tag: 'Flutter · EdTech',
    titulo: 'ChatWizard',
    descripcion: 'App móvil para aprender inglés conversando con un bot impulsado por IA.',
    demo: 'https://cw.geduardo.com/en',
    screenshot: '/assets/chatwizard.png',
    iconos: [
      { icon: 'fas fa-mobile-alt', title: 'Flutter' },
      { icon: 'fas fa-robot', title: 'IA / Chatbot' },
      { icon: 'fas fa-language', title: 'Aprender inglés' },
    ],
  },
  {
    repo: 'Vktornaj/clasificador-datos', // <-- cambia por tu repo real
    clase: 'proyecto-2',
    tag: 'Machine Learning',
    titulo: 'Clasificador de Datos',
    descripcion: 'API REST para clasificación inteligente y análisis de sentimientos.',
    // demo: 'https://...',
    // screenshot: '/assets/clasificador.png',
    iconos: [
      { icon: 'fab fa-python', title: 'Python' },
      { icon: 'fas fa-brain', title: 'Machine Learning' },
      { icon: 'fas fa-database', title: 'SQL' },
    ],
  },
  {
    repo: 'Vktornaj/procesador-pagos', // <-- cambia por tu repo real
    clase: 'proyecto-3',
    tag: 'Rust Backend',
    titulo: 'Procesador de Pagos',
    descripcion: 'Microservicio concurrente para transacciones seguras de alta velocidad.',
    // demo: 'https://...',
    // screenshot: '/assets/procesador.png',
    iconos: [
      { icon: 'fab fa-rust', title: 'Rust' },
      { icon: 'fas fa-server', title: 'Backend' },
      { icon: 'fas fa-shield-alt', title: 'Seguridad' },
    ],
  },
  {
    repo: 'Vktornaj/optimizador-rutas', // <-- cambia por tu repo real
    clase: 'proyecto-4',
    tag: 'Java OOP',
    titulo: 'Optimizador de Rutas',
    descripcion: 'Visualizador interactivo de algoritmos de grafos complejos.',
    // demo: 'https://...',
    // screenshot: '/assets/optimizador.png',
    iconos: [
      { icon: 'fab fa-java', title: 'Java' },
      { icon: 'fas fa-project-diagram', title: 'Algoritmia' },
      { icon: 'fas fa-database', title: 'PostgreSQL' },
    ],
  },
  {
    repo: 'Vktornaj/dashboard-analytics', // <-- cambia por tu repo real
    clase: 'proyecto-5',
    tag: 'Data Integration',
    titulo: 'Dashboard Analytics',
    descripcion: 'Panel de control para bases de datos en tiempo real.',
    // demo: 'https://...',
    // screenshot: '/assets/dashboard.png',
    iconos: [
      { icon: 'fab fa-js-square', title: 'JavaScript' },
      { icon: 'fas fa-chart-line', title: 'Charts' },
      { icon: 'fas fa-database', title: 'SQL' },
    ],
  },
];
