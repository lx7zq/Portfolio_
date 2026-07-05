<script setup lang="ts">
import {
  Github,
  Linkedin,
  Mail,
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const socialLinks = [
  {
    href: 'https://github.com/lx7zq',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/prempree-deelert-03303637a/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:prempreedeelert@gmail.com',
    label: 'Email',
    icon: Mail,
  },
]

const { t } = useI18n()
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center justify-center px-6 py-20 lg:px-20"
  >
    <div class="mx-auto max-w-4xl text-center">
      <p class="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        {{ t('hero.badge') }}
      </p>
      <h1
        class="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance"
      >
        {{ t('hero.title') }}
      </h1>
      <p class="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
        {{ t('hero.subtitle') }}
      </p>

      <div class="flex items-center justify-center gap-6">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:scale-110"
          :aria-label="link.label"
        >
          <component :is="link.icon" class="h-5 w-5" />
        </a>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
      <div
        class="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1"
      >
        <div class="h-2 w-1 animate-bounce rounded-full bg-primary"></div>
      </div>
    </div>
  </section>
</template>
