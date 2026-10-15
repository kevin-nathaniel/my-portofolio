import { ref } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

// Module-level ref: every component shares one theme instance.
const theme = ref<Theme>('light')

function apply() {
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
}

export function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  theme.value =
    stored === 'light' || stored === 'dark'
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'

  apply()
}

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, theme.value)
    apply()
  }

  return { theme, toggle }
}
