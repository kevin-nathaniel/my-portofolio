<script lang="ts">
export interface Project {
  name: string
  description: string
  link: string
  source: string
  tags: string[]
}
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{ project: Project }>()

const { t } = useI18n()
</script>

<template>
  <article class="term-card flex flex-col">
    <div class="term-card__bar">
      <span class="term-card__dot" aria-hidden="true"></span>
      <span>{{ project.name }}</span>
    </div>
    <div class="flex flex-1 flex-col gap-3 p-5 sm:p-6">
      <p class="text-sm text-muted-foreground">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="pix-chip">{{ tag }}</span>
      </div>
      <div class="mt-auto flex flex-wrap gap-3 pt-2">
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="pix-btn pix-btn--ghost py-1.5 text-[10px]"
        >
          {{ t('projects.visit') }}
        </a>
        <a
          v-if="project.source"
          :href="project.source"
          target="_blank"
          rel="noopener noreferrer"
          class="pix-btn pix-btn--ghost py-1.5 text-[10px]"
        >
          {{ t('projects.source') }}
        </a>
      </div>
    </div>
  </article>
</template>
