<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PromptLine from '@/components/ui/PromptLine.vue'

interface StackGroup {
  cmd: string
  items: string[]
}

const { t, tm } = useI18n()

// tm() must run inside a computed so the list re-reads messages on locale change.
const groups = computed(() => tm('stack.groups') as StackGroup[])
</script>

<template>
  <section id="stack" v-reveal class="anchor-target scroll-mt-20 py-16 md:py-24">
    <PromptLine :path="t('stack.promptPath')" />

    <div class="mt-6 grid gap-6 sm:grid-cols-2">
      <div v-for="(group, i) in groups" :key="i" class="term-card">
        <div class="term-card__bar">
          <span class="term-card__dot" aria-hidden="true"></span>
          <span><span class="sigil">$</span>{{ group.cmd }}</span>
        </div>
        <div class="flex flex-wrap gap-2 p-5 sm:p-6">
          <span v-for="item in group.items" :key="item" class="pix-chip">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
