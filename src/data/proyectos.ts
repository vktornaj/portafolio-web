// =============================================================================
// CONFIGURACIÓN DE PROYECTOS (estática)
// =============================================================================
// Aquí defines los 2-5 proyectos del portafolio. Todo es manual: no se lee
// ninguna información de GitHub.
//
// Textos localizados (es / en): los campos visibles para el usuario usan el
// tipo `LocalizedText`. Define ambos idiomas. Ver src/i18n/utils.ts (`tr`).
//
// Enlaces (cada uno es opcional, el botón solo aparece si pones la URL):
//   - `codigo`: link al repositorio. Ponlo SOLO si el repo es PÚBLICO.
//   - `demo`:   link a la demo en vivo.
// =============================================================================

import type { LocalizedText } from '../i18n/utils';

export interface IconoTec {
  /** Clase de Font Awesome v5, ej: 'fab fa-rust'. */
  icon: string;
  /** Texto del tooltip, ej: 'Rust'. */
  title: string;
}

/** Contenido del modal "Detalles". Todos los campos son opcionales. */
export interface DetalleProyecto {
  /** Párrafo descriptivo largo (es / en). */
  resumen: LocalizedText;
  /** Descripción de la arquitectura (opcional, es / en). */
  arquitectura?: LocalizedText;
  /** Lista de puntos destacados (opcional, es / en). */
  destacados?: LocalizedText[];
  /** Chips del stack tecnológico (opcional, sin traducir). */
  stack?: string[];
}

export interface Proyecto {
  /** Clase de gradiente de fondo: 'proyecto-1' … 'proyecto-5'. */
  clase: string;
  /** Etiqueta de categoría que se muestra arriba de la tarjeta (es / en). */
  tag: LocalizedText;
  /** Título de la tarjeta (no se traduce: es nombre propio). */
  titulo: string;
  /** Descripción de la tarjeta (es / en). */
  descripcion: LocalizedText;
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
// un carrusel.
export const proyectos: Proyecto[] = [
  {
    clase: 'proyecto-1',
    tag: { es: 'Flutter · IA · EdTech', en: 'Flutter · AI · EdTech' },
    titulo: 'ChatWizard',
    descripcion: {
      es: 'App móvil para aprender inglés conversando con un tutor impulsado por IA.',
      en: 'Mobile app to learn English by chatting with an AI-powered tutor.',
    },
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
      resumen: {
        es:
          'ChatWizard es una app móvil (Flutter) para practicar inglés conversando con un tutor ' +
          'de IA. El backend está escrito en Go y expone una API gRPC junto con entradas REST ' +
          '(api_entry) y WebSocket (ws_entry) para sostener el chat en tiempo real con el cliente.',
        en:
          'ChatWizard is a mobile app (Flutter) to practice English by chatting with an AI tutor. ' +
          'The backend is written in Go and exposes a gRPC API along with REST (api_entry) and ' +
          'WebSocket (ws_entry) entry points to drive the real-time chat with the client.',
      },
      arquitectura: {
        es:
          'El backend se organiza en microservicios independientes —cada servicio es su propio ' +
          'módulo y paquete— siguiendo principios de Clean Architecture / Arquitectura Hexagonal. ' +
          'Se divide en capas Domain (entidades, lógica y errores de negocio), Application (casos ' +
          'de uso e interfaces) y Adapter (gRPC, REST y WebSocket), con pruebas en cada capa.',
        en:
          'The backend is organized into independent microservices —each service is its own module ' +
          'and package— following Clean Architecture / Hexagonal Architecture principles. It is split ' +
          'into Domain (entities, business logic and errors), Application (use cases and interfaces) ' +
          'and Adapter (gRPC, REST and WebSocket) layers, with tests in each one.',
      },
      destacados: [
        { es: 'Chat en tiempo real mediante WebSocket', en: 'Real-time chat over WebSocket' },
        { es: 'API gRPC + REST para el cliente Flutter', en: 'gRPC + REST API for the Flutter client' },
        {
          es: 'Microservicios con Clean / Hexagonal Architecture',
          en: 'Microservices with Clean / Hexagonal Architecture',
        },
        {
          es: 'Capas Domain · Application · Adapter, con tests en cada una',
          en: 'Domain · Application · Adapter layers, tested in each one',
        },
        {
          es: 'Contenedorizado con Docker (devcontainer + Docker Compose para QA)',
          en: 'Containerized with Docker (devcontainer + Docker Compose for QA)',
        },
      ],
      stack: ['Flutter', 'Go', 'gRPC', 'WebSocket', 'REST', 'Docker', 'Clean Architecture'],
    },
  },
  {
    clase: 'proyecto-2',
    tag: { es: 'React Native · Firebase', en: 'React Native · Firebase' },
    titulo: 'Rutas MX',
    descripcion: {
      es: 'Plataforma colaborativa para consultar rutas de transporte público en México, validadas por la comunidad.',
      en: 'Collaborative platform to browse public transit routes in Mexico, validated by the community.',
    },
    // Repo privado: sin botón "Código".
    demo: 'https://master.d2cbrqrv6umeqb.amplifyapp.com/',
    screenshot: '/assets/rutasmx.png',
    galeria: ['/assets/rmx-explora.jpg', '/assets/rmx-contribuye.jpg', '/assets/rmx-perfil.jpg'],
    iconos: [
      { icon: 'fab fa-react', title: 'React Native / Expo' },
      { icon: 'fas fa-fire', title: 'Firebase' },
      { icon: 'fas fa-bus', title: 'Transporte público' },
    ],
    detalles: {
      resumen: {
        es:
          'Rutas MX es una plataforma colaborativa para consultar rutas de camiones y combis en ' +
          'México. Los usuarios exploran rutas en el mapa, planifican viajes y aportan correcciones ' +
          'que la comunidad valida con sus votos. La app principal es móvil (Expo + React Native) ' +
          'con backend en Firebase (Firestore + Cloud Functions).',
        en:
          'Rutas MX is a collaborative platform to browse bus and minibus routes in Mexico. Users ' +
          'explore routes on the map, plan trips and submit corrections that the community validates ' +
          'by voting. The main app is mobile (Expo + React Native) with a Firebase backend ' +
          '(Firestore + Cloud Functions).',
      },
      arquitectura: {
        es:
          'Monorepo con Yarn workspaces: app móvil (Expo + React Native, expo-router, NativeWind), ' +
          'landing en Astro y Cloud Functions. El código sigue Clean Architecture + DDD con capas ' +
          'Domain, Application, Infrastructure y Presentation; el dominio no tiene dependencias ' +
          'externas. Las rutas se componen de segmentos que solo escribe una Cloud Function cuando ' +
          'las contribuciones alcanzan consenso comunitario.',
        en:
          'Monorepo with Yarn workspaces: mobile app (Expo + React Native, expo-router, NativeWind), ' +
          'Astro landing page and Cloud Functions. The code follows Clean Architecture + DDD with ' +
          'Domain, Application, Infrastructure and Presentation layers; the domain has zero external ' +
          'dependencies. Routes are made of segments written only by a Cloud Function once ' +
          'contributions reach community consensus.',
      },
      destacados: [
        {
          es: 'Rutas colaborativas: la comunidad propone y vota correcciones',
          en: 'Collaborative routes: the community proposes and votes on corrections',
        },
        {
          es: 'Consenso por Wilson Score (≥ 0.6, mínimo 3 votos)',
          en: 'Consensus via Wilson Score (≥ 0.6, minimum 3 votes)',
        },
        {
          es: 'Mapas con OpenStreetMap y consultas geoespaciales con GeoHash',
          en: 'OpenStreetMap maps and geospatial queries with GeoHash',
        },
        {
          es: 'Clean Architecture + DDD con tests unitarios, de reglas y E2E',
          en: 'Clean Architecture + DDD with unit, rules and E2E tests',
        },
        {
          es: 'Monorepo: app móvil (Expo), landing (Astro) y Cloud Functions',
          en: 'Monorepo: mobile app (Expo), landing (Astro) and Cloud Functions',
        },
      ],
      stack: [
        'React Native',
        'Expo',
        'TypeScript',
        'Firebase',
        'Firestore',
        'Cloud Functions',
        'NativeWind',
        'Clean Architecture',
      ],
    },
  },
];
