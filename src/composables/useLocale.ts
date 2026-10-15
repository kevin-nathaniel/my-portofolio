import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, persistLocale, type Locale } from '@/i18n'

/** Locale switcher: set locale, sync <html lang>, persist choice. */
export function useLocale() {
  const { locale } = useI18n()

  const otherLocale = (): Locale => {
    const next = SUPPORTED_LOCALES.find((l) => l !== locale.value)
    return next ?? 'en'
  }

  function toggleLocale() {
    const next = otherLocale()
    locale.value = next
    persistLocale(next)
  }

  return { locale, otherLocale, toggleLocale }
}
