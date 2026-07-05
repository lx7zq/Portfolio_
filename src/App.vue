<script setup lang="ts">
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import LocaleToggle from './components/LocaleToggle.vue'
import NavigationBar from './components/NavigationBar.vue'
import ProjectsSection from './components/ProjectsSection.vue'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  visibleOnce: { opacity: 1, y: 0, transition: { duration: 600 } },
}
</script>

<template>
  <div class="min-h-screen bg-background">
    <LocaleToggle />
    <NavigationBar />
    <main>
      <HeroSection />
      <AboutSection v-motion v-bind="fadeUp" />
      <ExperienceSection v-motion v-bind="fadeUp" />
      <ProjectsSection v-motion v-bind="fadeUp" />
      <ContactSection v-motion v-bind="fadeUp" />
    </main>
  </div>
</template>
