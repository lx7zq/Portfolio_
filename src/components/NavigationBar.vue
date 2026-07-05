<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue'

const isVisible = ref(false)
const activeSection = ref('home')

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  isVisible.value = window.scrollY > 100
  
  const sections = navItems.map(item => item.id)
  for (const section of sections.reverse()) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 150) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed left-6 top-1/2 z-50 -translate-y-1/2 transition-all duration-300',
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    ]"
  >
    <div class="flex flex-col gap-3 rounded-full border border-border bg-card/80 p-3 backdrop-blur-sm">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="scrollToSection(item.id)"
        :class="[
          'group relative flex h-3 w-3 items-center justify-center rounded-full transition-all duration-300',
          activeSection === item.id ? 'bg-primary scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
        ]"
        :aria-label="`Go to ${item.label} section`"
      >
        <span
          :class="[
            'absolute left-6 whitespace-nowrap rounded-md bg-card px-2 py-1 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100'
          ]"
        >
          {{ item.label }}
        </span>
      </button>
    </div>
  </nav>
</template>
