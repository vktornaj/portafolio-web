// =============================================================================
// INTERNACIONALIZACIÓN (i18n)
// =============================================================================
// Diccionario central de todos los textos del sitio en español e inglés.
// - La página `/` se renderiza en español y `/en/` en inglés.
// - Para añadir o cambiar un texto, edítalo aquí en AMBOS idiomas.
//
// Los componentes obtienen sus textos con `useTranslations(lang)` (ver utils.ts)
// y acceden a ellos de forma tipada, p. ej. `t.hero.titulo`.
// =============================================================================

export type Lang = 'es' | 'en';

export const defaultLang: Lang = 'es';

/** Idiomas disponibles y la ruta base de cada uno. */
export const languages: Record<Lang, { label: string; short: string; path: string }> = {
  es: { label: 'Español', short: 'ES', path: '/' },
  en: { label: 'English', short: 'EN', path: '/en/' },
};

export const ui = {
  es: {
    nav: {
      sobreMi: 'Sobre mí',
      portafolio: 'Portafolio',
      youtube: 'YouTube',
      contacto: 'Contacto',
      cambiarTema: 'Cambiar tema',
      cambiarIdioma: 'Cambiar idioma',
    },
    hero: {
      disponible: 'Disponible para nuevos proyectos',
      saludo: 'HOLA, SOY EDUARDO GARCÍA',
      // El título se compone con dos palabras resaltadas (software / IA).
      tituloPre: 'Construyo ',
      tituloSoluciones: 'soluciones',
      tituloMid: ' con ',
      tituloSoftware: 'Software',
      tituloConj: ' e ',
      tituloIA: 'IA',
      descripcion:
        'Combino ingeniería de software con inteligencia artificial para construir productos que ' +
        'resuelven problemas reales: del diseño del backend a modelos, agentes y LLMs integrados de ' +
        'punta a punta.',
      verPortafolio: 'Ver Portafolio',
      descargarCV: 'Descargar CV',
      badgeSoftwareTitle: 'Software',
      badgeSoftwareSub: 'APIs & Sistemas',
      badgeIaTitle: 'IA Aplicada',
      badgeIaSub: 'LLMs & Agentes',
      fotoAlt: 'Eduardo García - Foto de perfil',
    },
    portafolio: {
      eyebrow: 'MIS TRABAJOS RECIENTES',
      titulo: 'Portafolio',
      intro:
        'Una selección de proyectos donde combino ingeniería de software e inteligencia artificial ' +
        'para construir productos completos, útiles y escalables.',
      codigo: 'Código',
      demo: 'Demo',
      detalles: 'Detalles',
      verRepo: 'Ver repositorio',
      verDemo: 'Ver demo en vivo',
      masInfo: 'Más información',
      cerrar: 'Cerrar',
      arquitectura: 'Arquitectura',
      destacados: 'Destacados',
      verTamano: 'Ver a tamaño completo',
      masProyectos: '¿Quieres explorar más proyectos?',
      verGithub: 'Ver más en GitHub',
    },
    youtube: {
      eyebrow: 'MI CANAL',
      titulo: 'YouTube',
      intro:
        'Comparto tutoriales y proyectos sobre desarrollo, inteligencia artificial y los lenguajes ' +
        'que me apasionan. Aquí tienes un vistazo a lo más reciente.',
      reproducir: 'Reproducir',
      verEnYoutube: 'Ver en YouTube',
      ctaTexto: '¿Te gustó el contenido? Suscríbete para no perderte nada.',
      verCanal: 'Ver canal completo',
    },
    contacto: {
      badge: 'Respondo rápido',
      titulo: '¿Trabajamos juntos?',
      texto:
        'Si tienes una idea, un problema que resolver con software o IA, o simplemente quieres hablar ' +
        'de tecnología, conectemos en LinkedIn.',
      boton: 'Conectar en LinkedIn',
    },
    filosofia: {
      eyebrow: 'FILOSOFÍA',
      titulo: 'Mi Enfoque',
      texto:
        'Creo que el verdadero valor surge de unir una ingeniería de software sólida con la ' +
        'inteligencia artificial. Mi meta es transformar ideas complejas en productos estables, ' +
        'eficientes y de alto impacto, donde la IA potencia la solución en lugar de complicarla.',
    },
    footer: {
      copy: '© 2026 • Construyendo soluciones con software e IA.',
      redes: 'Redes Sociales',
    },
  },

  en: {
    nav: {
      sobreMi: 'About',
      portafolio: 'Portfolio',
      youtube: 'YouTube',
      contacto: 'Contact',
      cambiarTema: 'Toggle theme',
      cambiarIdioma: 'Change language',
    },
    hero: {
      disponible: 'Available for new projects',
      saludo: "HI, I'M EDUARDO GARCÍA",
      tituloPre: 'I build ',
      tituloSoluciones: 'solutions',
      tituloMid: ' with ',
      tituloSoftware: 'Software',
      tituloConj: ' & ',
      tituloIA: 'AI',
      descripcion:
        'I blend software engineering with artificial intelligence to build products that solve real ' +
        'problems: from backend design to models, agents and LLMs integrated end to end.',
      verPortafolio: 'View Portfolio',
      descargarCV: 'Download CV',
      badgeSoftwareTitle: 'Software',
      badgeSoftwareSub: 'APIs & Systems',
      badgeIaTitle: 'Applied AI',
      badgeIaSub: 'LLMs & Agents',
      fotoAlt: 'Eduardo García - Profile photo',
    },
    portafolio: {
      eyebrow: 'RECENT WORK',
      titulo: 'Portfolio',
      intro:
        'A selection of projects where I combine software engineering and artificial intelligence to ' +
        'build complete, useful and scalable products.',
      codigo: 'Code',
      demo: 'Demo',
      detalles: 'Details',
      verRepo: 'View repository',
      verDemo: 'View live demo',
      masInfo: 'More info',
      cerrar: 'Close',
      arquitectura: 'Architecture',
      destacados: 'Highlights',
      verTamano: 'View full size',
      masProyectos: 'Want to explore more projects?',
      verGithub: 'See more on GitHub',
    },
    youtube: {
      eyebrow: 'MY CHANNEL',
      titulo: 'YouTube',
      intro:
        'I share tutorials and projects about development, artificial intelligence and the languages ' +
        "I'm passionate about. Here's a look at the latest.",
      reproducir: 'Play',
      verEnYoutube: 'Watch on YouTube',
      ctaTexto: 'Enjoyed the content? Subscribe so you never miss a thing.',
      verCanal: 'Visit full channel',
    },
    contacto: {
      badge: 'I reply fast',
      titulo: "Let's work together?",
      texto:
        'If you have an idea, a problem to solve with software or AI, or you simply want to talk tech, ' +
        "let's connect on LinkedIn.",
      boton: 'Connect on LinkedIn',
    },
    filosofia: {
      eyebrow: 'PHILOSOPHY',
      titulo: 'My Approach',
      texto:
        'I believe real value comes from pairing solid software engineering with artificial ' +
        'intelligence. My goal is to turn complex ideas into stable, efficient, high-impact products, ' +
        'where AI strengthens the solution instead of complicating it.',
    },
    footer: {
      copy: '© 2026 • Building solutions with software & AI.',
      redes: 'Social',
    },
  },
} as const;
