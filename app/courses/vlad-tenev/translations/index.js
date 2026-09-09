// Text-only overlays merged onto the English content in ../content.js.
// Anything a language omits falls back to English (see lib/i18n.js).
import fr from './fr';
import ptBR from './pt-BR';
import es from './es';
import ru from './ru';
import zh from './zh';

const TRANSLATIONS = {
  en: null, // English is the source
  fr,
  'pt-BR': ptBR,
  es,
  ru,
  zh,
};

export default TRANSLATIONS;
