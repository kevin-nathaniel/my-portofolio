import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

export const SUPPORTED_LOCALES = ['en', 'id'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]

const STORAGE_KEY = 'portfolio-locale'

function isLocale(value: string | null): value is Locale {
  return value !== null && (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

/** Read saved locale, else fall back to browser language, else 'en'. */
export function detectLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (isLocale(stored)) return stored
  const nav = navigator.language.slice(0, 2).toLowerCase()
  return isLocale(nav) ? nav : 'en'
}

const locale = detectLocale()

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: { en, id },
})

export function persistLocale(next: Locale) {
  localStorage.setItem(STORAGE_KEY, next)
  document.documentElement.lang = next
}
