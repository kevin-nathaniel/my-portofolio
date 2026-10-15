<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PromptLine from '@/components/ui/PromptLine.vue'

const { t } = useI18n()
</script>

<template>
  <section id="top" class="anchor-target flex flex-col items-start gap-6 pt-16 pb-20 md:pt-24 md:pb-28">
    <PromptLine path="boot.sh" tag="p" />

    <p class="pix-chip flex items-center gap-2">
      <span class="term-card__dot blink" aria-hidden="true"></span>
      {{ t('hero.badge') }}
    </p>

    <div>
      <p class="font-pixel text-xs tracking-wide text-muted-foreground md:text-sm">
        {{ t('hero.role') }}
      </p>
      <h1
        class="glitch mt-3 font-pixel text-3xl leading-tight font-bold tracking-tight sm:text-4xl md:text-5xl"
        :data-text="t('hero.name')"
      >
        {{ t('hero.name') }}
      </h1>
    </div>

    <p class="max-w-2xl text-base text-muted-foreground md:text-lg">
      {{ t('hero.tagline') }}<span class="cursor" aria-hidden="true"></span>
    </p>

    <div class="flex flex-wrap items-center gap-3">
      <a href="#projects" class="pix-btn">{{ t('hero.ctaProjects') }}</a>
      <a href="#contact" class="pix-btn pix-btn--ghost">{{ t('hero.ctaContact') }}</a>
    </div>
  </section>
</template>
