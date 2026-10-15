<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PromptLine from '@/components/ui/PromptLine.vue'

const { t } = useI18n()
</script>

<template>
  <section id="about" v-reveal class="anchor-target scroll-mt-20 py-16 md:py-24">
    <div class="space-y-8">
      <div>
        <PromptLine :path="t('about.promptPath')" />
        <p class="cmd mt-4"><span class="sigil">$</span> {{ t('about.cmdWhoami') }}</p>
        <p class="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          {{ t('about.whoami') }}
        </p>
      </div>

      <div>
        <p class="cmd"><span class="sigil">$</span> {{ t('about.cmdEducation') }}</p>
        <div class="term-card mt-3 max-w-3xl">
          <div class="space-y-1 p-5 sm:p-6">
            <p class="font-semibold text-foreground">{{ t('about.degree') }}</p>
            <p class="text-muted-foreground">{{ t('about.school') }}</p>
            <p class="font-pixel text-[11px] tracking-wide text-muted-foreground">
              {{ t('about.period') }} · {{ t('about.note') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
