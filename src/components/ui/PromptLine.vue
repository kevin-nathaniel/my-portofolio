<script setup lang="ts">
// Section heading: emits a real <h2> by default so the document outline is
// meaningful; pass tag="p" where an h1/h2 already follows (e.g. the hero).
withDefaults(defineProps<{ path: string; tag?: 'h2' | 'p' }>(), { tag: 'h2' })
</script>

<template>
  <component
    :is="tag"
    class="font-pixel text-[11px] font-normal tracking-wide text-muted-foreground"
  >
    <span class="text-brand">~</span> · {{ path }}
  </component>
</template>
