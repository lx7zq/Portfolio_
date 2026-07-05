<script setup lang="ts">
import {
  Moon,
  Sun,
} from 'lucide-vue-next'

import { useLocale } from '@/composables/useLocale'
import { useTheme } from '@/composables/useTheme'

const { locale, toggleLocale } = useLocale()
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <div class="fixed right-6 top-6 z-50 flex items-center gap-2">
    <button
      @click="toggleTheme"
      class="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <Sun v-if="isDark" class="h-4 w-4" />
      <Moon v-else class="h-4 w-4" />
    </button>

    <button
      @click="toggleLocale"
      class="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
    >
      {{ locale === 'en' ? 'TH' : 'EN' }}
    </button>
  </div>
</template>