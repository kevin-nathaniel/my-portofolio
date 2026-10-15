<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PromptLine from '@/components/ui/PromptLine.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import type { Project } from '@/components/ui/ProjectCard.vue'

const { t, tm } = useI18n()

// tm() must run inside a computed so the lists re-read messages on locale change.
const openSource = computed(() => tm('projects.openSource') as Project[])
const clientWork = computed(() => tm('projects.clientWork') as Project[])
</script>

<template>
  <section id="projects" v-reveal class="anchor-target scroll-mt-20 py-16 md:py-24">
    <PromptLine :path="t('projects.promptPath')" />

    <p class="cmd mt-4"><span class="sigil">$</span> {{ t('projects.cmdOpen') }}</p>
    <div class="mt-4 grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="p in openSource" :key="p.name" :project="p" />
    </div>

    <p class="cmd mt-10"><span class="sigil">$</span> {{ t('projects.cmdClient') }}</p>
    <div class="mt-4 grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="p in clientWork" :key="p.name" :project="p" />
    </div>

    <p class="mt-8 font-pixel text-[11px] text-muted-foreground">{{ t('projects.more') }}</p>
  </section>
</template>
