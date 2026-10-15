<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'
import { useLocale } from '@/composables/useLocale'

const { t } = useI18n()
const { theme, toggle: toggleTheme } = useTheme()
const { otherLocale, toggleLocale } = useLocale()

const localeLabel = computed(() => otherLocale().toUpperCase())

const links = [
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'stack', href: '#stack' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
] as const
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b-2 bg-background/90 backdrop-blur-sm"
  >
    <div class="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
      <a href="#top" class="font-pixel text-sm font-bold tracking-tight hover:text-brand">
        <span class="text-brand">$</span> {{ t('site.promptUser') }}
      </a>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Section navigation">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="px-2.5 py-1.5 font-pixel text-[11px] tracking-wide text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {{ t(`nav.${link.key}`) }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="pix-btn pix-btn--ghost !px-2.5 !py-1.5"
          :aria-label="`${t('a11y.locale')}: ${localeLabel}`"
          @click="toggleLocale"
        >
          {{ localeLabel }}
        </button>

        <button
          type="button"
          class="pix-btn pix-btn--ghost !px-2.5 !py-1.5"
          :aria-label="t('a11y.theme')"
          @click="toggleTheme"
        >
          <!-- Pixel sun -->
          <svg v-if="theme === 'dark'" width="14" height="14" viewBox="0 0 14 14" shape-rendering="crispEdges" aria-hidden="true">
            <g fill="currentColor">
              <rect x="6" y="0" width="2" height="2" />
              <rect x="6" y="12" width="2" height="2" />
              <rect x="0" y="6" width="2" height="2" />
              <rect x="12" y="6" width="2" height="2" />
              <rect x="4" y="4" width="6" height="6" />
            </g>
          </svg>
          <!-- Pixel moon -->
          <svg v-else width="14" height="14" viewBox="0 0 14 14" shape-rendering="crispEdges" aria-hidden="true">
            <g fill="currentColor">
              <rect x="4" y="0" width="6" height="2" />
              <rect x="2" y="2" width="4" height="2" />
              <rect x="2" y="4" width="2" height="6" />
              <rect x="4" y="10" width="6" height="2" />
              <rect x="10" y="8" width="2" height="2" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
