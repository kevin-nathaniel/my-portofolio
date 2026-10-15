<script setup lang="ts">
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '@/components/header/Header.vue'
import HomeView from '@/views/index.vue'

const { t } = useI18n()

// Keep title/description in sync with the active locale.
watchEffect(() => {
  document.title = t('meta.title')
  const desc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (desc) desc.content = t('meta.description')
})
</script>

<template>
  <Header />
  <main class="mx-auto max-w-5xl px-4 sm:px-6">
    <HomeView />
  </main>
  <footer class="border-t-2 py-8 text-center text-sm text-muted-foreground">
    <p>{{ t('footer.rights') }}</p>
    <p class="mt-1">{{ t('footer.note') }}</p>
  </footer>
</template>
