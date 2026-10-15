<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PromptLine from '@/components/ui/PromptLine.vue'

interface ExperienceItem {
  period: string
  role: string
  company: string
  location: string
  bullets: string[]
}

const { t, tm } = useI18n()

// tm() must run inside a computed so the list re-reads messages on locale change.
const items = computed(() => tm('experience.items') as ExperienceItem[])
</script>

<template>
  <section id="experience" v-reveal class="anchor-target scroll-mt-20 py-16 md:py-24">
    <PromptLine :path="t('experience.promptPath')" />

    <p class="cmd mt-4"><span class="sigil">$</span> {{ t('experience.cmd') }}</p>

    <ol class="mt-6 space-y-6">
      <li v-for="(item, i) in items" :key="i" class="term-card">
        <div class="term-card__bar">
          <span class="term-card__dot" aria-hidden="true"></span>
          <span>{{ item.period }}</span>
        </div>
        <div class="p-5 sm:p-6">
          <p class="font-pixel text-sm">{{ item.role }}</p>
          <p class="text-muted-foreground">{{ item.company }} · {{ item.location }}</p>
          <ul class="term-list mt-3 space-y-1 text-sm text-muted-foreground">
            <li v-for="(b, j) in item.bullets" :key="j">{{ b }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>
