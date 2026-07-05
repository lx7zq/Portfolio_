<script setup lang="ts">
import { ref } from 'vue'

const email = 'prempreedeelert@gmail.com'
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email:', err)
  }
}

const contactInfo = [
  {
    label: 'Email',
    value: email,
    href: `mailto:${email}`,
    icon: 'mail',
  },
  {
    label: 'Location',
    value: 'Bangkok, Thailand',
    icon: 'location',
  },
  {
    label: 'Availability',
    value: 'Open for opportunities',
    icon: 'calendar',
  },
]
</script>

<template>
  <section id="contact" class="px-6 py-24 lg:px-20">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Contact</h2>
      <h3 class="mb-6 text-3xl font-bold text-foreground sm:text-4xl">Get in touch</h3>
      <p class="mx-auto mb-12 max-w-2xl text-muted-foreground leading-relaxed">
        I&apos;m currently looking for new opportunities. Whether you have a question or just want
        to say hi, I&apos;ll try my best to get back to you!
      </p>

      <div class="mb-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
        <div
          v-for="info in contactInfo"
          :key="info.label"
          class="flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4"
        >
          <div
            class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
          >
            <svg
              v-if="info.icon === 'mail'"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <svg
              v-else-if="info.icon === 'location'"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              v-else
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div class="text-left">
            <p class="text-xs text-muted-foreground">{{ info.label }}</p>
            <component
              :is="info.href ? 'a' : 'p'"
              :href="info.href"
              :class="[
                'text-sm font-medium',
                info.href ? 'text-primary hover:underline' : 'text-foreground',
              ]"
            >
              {{ info.value }}
            </component>
          </div>
        </div>
      </div>

      <button
        @click="copyEmail"
        class="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary px-8 py-4 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90"
      >
        <svg
          v-if="!copied"
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
        <svg
          v-else
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        {{ copied ? 'Copied!' : 'Copy Email' }}
      </button>

      <footer class="mt-24 border-t border-border pt-8">
        <p class="text-sm text-muted-foreground">Designed & Built with Vue.js</p>
      </footer>
    </div>
  </section>
</template>
