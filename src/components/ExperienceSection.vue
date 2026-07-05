<script setup lang="ts">
import { computed } from 'vue'

import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const messages = {
  en: {
    list: [
      {
        title: 'Front-end Developer Intern',
        company: 'Softnova Co., Ltd.',
        period: '2025 - 2026 (4 months)',
        description:
          'Developed web applications using Vue.js and TypeScript with Vuetify and PrimeVue. Integrated REST APIs via Scalar and collaborated with the back-end team to display dynamic data. Participated in code reviews and followed team coding standards.',
        technologies: ['Vue.js', 'TypeScript', 'Nuxt.js', 'Vuetify'],
      },
    ],
    education: [
      {
        title: 'Software Engineering',
        company: 'Nakhon Pathom Rajabhat University',
        period: '2022 - 2026',
        description: 'Studied web development, software design, and related coursework.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB'],
      },
    ],
  },
  th: {
    list: [
      {
        title: 'นักพัฒนา Front-end (ฝึกงาน)',
        company: 'Softnova Co., Ltd.',
        period: '2568 - 2569 (4 เดือน)',
        description:
          'พัฒนาเว็บแอปพลิเคชันด้วย Vue.js และ TypeScript โดยใช้ Vuetify และ PrimeVue เชื่อมต่อ REST API ผ่าน Scalar และทำงานร่วมกับทีม Back-end เข้าร่วมกระบวนการ Code Review ตามมาตรฐานของทีม',
        technologies: ['Vue.js', 'TypeScript', 'Nuxt.js', 'Vuetify'],
      },
    ],
    education: [
      {
        title: 'วิศวกรรมซอฟต์แวร์',
        company: 'มหาวิทยาลัยราชภัฏนครปฐม',
        period: '2565 - 2569',
        description: 'ศึกษาด้านการพัฒนาเว็บ การออกแบบซอฟต์แวร์ และวิชาที่เกี่ยวข้อง',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB'],
      },
    ],
  },
}

const experiences = computed(() => messages[locale.value as 'en' | 'th'].list)
const education = computed(() => messages[locale.value as 'en' | 'th'].education)
</script>

<template>
  <section id="experience" class="px-6 py-24 lg:px-20">
    <div class="mx-auto max-w-4xl">
      <h2 class="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        {{ t('experience.badge') }}
      </h2>
      <h3 class="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
        {{ t('experience.title') }}
      </h3>

      <div class="relative space-y-8 mb-20">
        <div
          class="absolute left-0 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
        ></div>
        <div
          v-for="(exp, index) in experiences"
          :key="exp.title"
          :class="['relative grid gap-4 md:grid-cols-2 md:gap-8']"
        >
          <div
            class="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
          ></div>

          <div class="pl-8 md:pl-0 md:pr-12 md:text-right">
            <span class="text-sm text-muted-foreground">{{ exp.period }}</span>
          </div>

          <div class="relative pl-8 md:pl-12">
            <div class="rounded-lg border border-border bg-card p-6">
              <h4 class="mb-1 text-lg font-semibold text-foreground">{{ exp.title }}</h4>
              <p class="mb-3 text-primary">{{ exp.company }}</p>
              <p class="mb-4 text-sm text-muted-foreground leading-relaxed">
                {{ exp.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in exp.technologies"
                  :key="tech"
                  class="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="mb-4 text-sm font-medium uppercase tracking-widest text-primary text-right">
        {{ t('experience.educationBadge') }}
      </h2>
      <h3 class="mb-12 text-3xl font-bold text-foreground sm:text-4xl text-right">
        {{ t('experience.educationTitle') }}
      </h3>
      <div class="relative space-y-8">
        <div
          class="absolute left-0 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
        ></div>
        <div
          v-for="(edu, index) in education"
          :key="edu.title"
          class="relative grid gap-4 md:grid-cols-2 md:gap-8"
        >
          <div
            class="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
          ></div>
          <div class="relative pl-8 md:pl-0 md:pr-12">
            <div class="rounded-lg border border-border bg-card p-6">
              <h4 class="mb-1 text-lg font-semibold text-foreground">{{ edu.title }}</h4>
              <p class="mb-3 text-primary">{{ edu.company }}</p>
              <p class="mb-4 text-sm text-muted-foreground leading-relaxed">
                {{ edu.description }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in edu.technologies"
                  :key="tech"
                  class="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
          <div class="pl-8 md:pl-12 md:text-left">
            <span class="text-sm text-muted-foreground">{{ edu.period }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
