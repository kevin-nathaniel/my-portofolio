<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PromptLine from '@/components/ui/PromptLine.vue'

const { t } = useI18n()
</script>

<template>
  <section id="contact" v-reveal class="anchor-target scroll-mt-20 py-16 md:py-24">
    <PromptLine :path="t('contact.promptPath')" />

    <div class="term-card mt-6 max-w-2xl">
      <div class="term-card__bar">
        <span class="term-card__dot" aria-hidden="true"></span>
        <span>contact</span>
      </div>
      <div class="space-y-5 p-5 sm:p-6">
        <p class="text-muted-foreground">{{ t('contact.blurb') }}</p>

        <div>
          <p class="cmd"><span class="sigil">$</span> {{ t('contact.cmdEmail') }}</p>
          <a
            :href="`mailto:${t('contact.email')}`"
            class="mt-1 inline-block break-all underline-offset-4 hover:underline"
          >
            {{ t('contact.email') }}
          </a>
        </div>

        <div>
          <p class="cmd"><span class="sigil">$</span> {{ t('contact.cmdLinkedin') }}</p>
          <a
            :href="t('contact.linkedinUrl')"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-1 inline-block break-all underline-offset-4 hover:underline"
          >
            {{ t('contact.linkedin') }}
          </a>
        </div>

        <div class="flex flex-wrap gap-3 pt-2">
          <a :href="`mailto:${t('contact.email')}`" class="pix-btn">{{ t('contact.ctaEmail') }}</a>
          <a
            :href="t('contact.linkedinUrl')"
            target="_blank"
            rel="noopener noreferrer"
            class="pix-btn pix-btn--ghost"
          >
            {{ t('contact.ctaLinkedin') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
