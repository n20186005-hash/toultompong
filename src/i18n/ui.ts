import en from '../i18n/en.json';
import km from '../i18n/km.json';
import zh from '../i18n/zh.json';

export const languagesList = ['km', 'zh', 'en'] as const;
export const defaultLang = 'km';

export const languages: Record<string, any> = { km, zh, en };

export function getLangFromUrl(url: URL): string {
  const seg = url.pathname.split('/').filter(Boolean);
  if (seg.length === 0) return defaultLang;
  if ((languagesList as readonly string[]).includes(seg[0])) return seg[0];
  return defaultLang;
}

export const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

export function getRouteFromUrl(url: URL): string {
  const seg = url.pathname.split('/').filter(Boolean);
  if (seg.length === 0) return '/';
  if ((languagesList as readonly string[]).includes(seg[0])) {
    const rest = seg.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return `/${seg.join('/')}`;
}

// Full dictionary for a language (used as `const t = ui(lang)`)
export const ui = (lang: string): any =>
  (languages as any)[lang] ?? (languages as any)[defaultLang];
