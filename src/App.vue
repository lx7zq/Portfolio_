<script setup lang="ts">
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import HeroSection from './components/HeroSection.vue'
import LocaleToggle from './components/LocaleToggle.vue'
import NavigationBar from './components/NavigationBar.vue'
import ProjectsSection from './components/ProjectsSection.vue'
</script>

<template>
  <div class="min-h-screen bg-background">
    <LocaleToggle />
    <NavigationBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>