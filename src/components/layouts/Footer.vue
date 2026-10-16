<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <footer class="border-t-2 py-8 text-center text-sm text-muted-foreground">
        <p>{{ t('footer.rights') }}</p>
        <p class="mt-1">{{ t('footer.note') }}</p>
    </footer>
</template>