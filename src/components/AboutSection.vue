<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const skills = [
  {
    category: 'Frontend',
    items: ['Vue.js', 'Nuxt.js', 'TypeScript', 'React', 'Tailwind CSS'],
  },
  {
    category: 'Backend (Basic)',
    items: ['Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Figma', 'VS Code'],
  },
]

const { t } = useI18n()
</script>

<template>
  <section id="about" class="px-6 py-24 lg:px-20">
    <div class="mx-auto max-w-4xl">
      <h2 class="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        {{ t('about.badge') }}
      </h2>
      <h3 class="mb-8 text-3xl font-bold text-foreground sm:text-4xl">
        {{ t('about.title') }}
      </h3>

      <div class="mb-12 space-y-4 text-muted-foreground leading-relaxed">
        <p>
          {{ t('about.p1') }}
        </p>
        <p>
          {{ t('about.p2') }}
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-3">
        <div
          v-for="skillGroup in skills"
          :key="skillGroup.category"
          class="rounded-lg border border-border bg-card p-6"
        >
          <h4 class="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            {{ skillGroup.category }}
          </h4>
          <ul class="space-y-2">
            <li v-for="skill in skillGroup.items" :key="skill" class="text-muted-foreground">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
