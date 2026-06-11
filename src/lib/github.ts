// =============================================================================
// LECTURA DE DATOS DE GITHUB (BUILD TIME)
// =============================================================================
// Esto se ejecuta SOLO durante `astro build`, en el servidor de build (Amplify).
// El token nunca se incluye en el bundle ni llega al navegador.
//
// Token: GITHUB_TOKEN
//   - Local:   ponlo en un archivo `.env` (ver `.env.example`).
//   - Amplify: App settings > Environment variables > GITHUB_TOKEN.
//
// Si no hay token (o un repo falla), el build NO se rompe: se devuelve `null` y
// la tarjeta se renderiza solo con la información manual de `src/data/proyectos`.
// =============================================================================

export interface DatosGithub {
  nombre: string;
  descripcion: string | null;
  url: string;
  stars: number;
  lenguaje: string | null;
  topics: string[];
  /** Fecha ISO del último push (último commit en cualquier rama). */
  actualizado: string | null;
  privado: boolean;
}

// `import.meta.env` cubre el `.env` local; `process.env` cubre Amplify.
const token =
  import.meta.env.GITHUB_TOKEN || (typeof process !== 'undefined' ? process.env.GITHUB_TOKEN : undefined);

// Evita pedir el mismo repo dos veces dentro del mismo build.
const cache = new Map<string, DatosGithub | null>();

export async function obtenerRepo(slug: string): Promise<DatosGithub | null> {
  if (cache.has(slug)) return cache.get(slug)!;

  if (!token) {
    console.warn(
      `[github] Falta GITHUB_TOKEN — se omiten los datos de "${slug}". ` +
        `El build continúa solo con la info manual.`
    );
    cache.set(slug, null);
    return null;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${slug}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'portafolio-web',
      },
    });

    if (!res.ok) {
      console.warn(
        `[github] No se pudo leer "${slug}" (HTTP ${res.status}). ` +
          `Se usa solo la info manual. ¿El token tiene acceso a ese repo?`
      );
      cache.set(slug, null);
      return null;
    }

    const r = await res.json();
    const datos: DatosGithub = {
      nombre: r.name,
      descripcion: r.description ?? null,
      url: r.html_url,
      stars: r.stargazers_count ?? 0,
      lenguaje: r.language ?? null,
      topics: r.topics ?? [],
      actualizado: r.pushed_at ?? null,
      privado: r.private ?? false,
    };
    cache.set(slug, datos);
    return datos;
  } catch (err) {
    console.warn(`[github] Error consultando "${slug}":`, err);
    cache.set(slug, null);
    return null;
  }
}

/** Lee varios repos en paralelo y devuelve un mapa slug -> datos (o null). */
export async function obtenerRepos(slugs: string[]): Promise<Map<string, DatosGithub | null>> {
  const entradas = await Promise.all(
    slugs.map(async (slug) => [slug, await obtenerRepo(slug)] as const)
  );
  return new Map(entradas);
}
