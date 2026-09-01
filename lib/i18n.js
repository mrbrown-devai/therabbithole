'use client';

export const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'pt-BR', flag: '🇧🇷', label: 'Português' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'ru', flag: '🇷🇺', label: 'Русский' },
  { code: 'zh', flag: '🇨🇳', label: '中文' },
];

export const LANG_CODES = LANGUAGES.map((l) => l.code);

/** The key the rest of the site already uses, so a choice carries across pages. */
export const LANG_STORAGE_KEY = 'masterclass-language';

/**
 * Deep-merge a translation overlay onto the English source.
 *
 * Overlays carry text only — ids, icons, colours, `critical` flags and quiz
 * answer indices live once in the English content and are never duplicated.
 * Anything a translation has not covered falls through to English, so a
 * partial translation degrades to mixed language rather than to blanks.
 *
 * Arrays are merged element-wise by position, which is what we want for
 * levels, sections, quiz questions and answer lists.
 */
export function mergeTranslation(base, overlay) {
  if (overlay === undefined || overlay === null) return base;
  if (Array.isArray(base)) {
    if (!Array.isArray(overlay)) return base;
    return base.map((item, i) => mergeTranslation(item, overlay[i]));
  }
  if (base && typeof base === 'object') {
    if (typeof overlay !== 'object' || Array.isArray(overlay)) return base;
    const out = { ...base };
    for (const key of Object.keys(overlay)) {
      out[key] = key in base ? mergeTranslation(base[key], overlay[key]) : overlay[key];
    }
    return out;
  }
  // primitive: the overlay wins when it has something to say
  return overlay === '' ? base : overlay;
}

/** Reads the stored language, falling back to English. Client-side only. */
export function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    return LANG_CODES.includes(stored) ? stored : 'en';
  } catch {
    return 'en';
  }
}

export function storeLanguage(code) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, code);
  } catch {
    /* private mode, blocked storage — the choice just will not persist */
  }
}
