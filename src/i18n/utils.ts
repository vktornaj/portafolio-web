// Helpers de i18n. Ver `ui.ts` para el diccionario de textos.
import { ui, defaultLang, type Lang } from './ui';

export type { Lang } from './ui';

/** Devuelve el objeto de textos para el idioma dado (tipado). */
export function useTranslations(lang: Lang = defaultLang) {
  return ui[lang];
}

/** Texto que existe en varios idiomas, p. ej. en los datos de proyectos. */
export type LocalizedText = Record<Lang, string>;

/** Resuelve un texto localizado al idioma actual (con respaldo al idioma por defecto). */
export function tr(text: LocalizedText, lang: Lang = defaultLang): string {
  return text[lang] ?? text[defaultLang];
}
