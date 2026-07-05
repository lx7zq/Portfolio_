import { useI18n } from 'vue-i18n'

export function useLocale() {
  const { locale } = useI18n()

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'th' : 'en'
  }

  return { locale, toggleLocale }
}