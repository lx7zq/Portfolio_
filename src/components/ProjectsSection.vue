<script setup lang="ts">
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management, secure payments, and admin dashboard.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content creation tool that helps marketers generate engaging copy, social media posts, and blog articles.',
    technologies: ['React', 'Python', 'OpenAI', 'FastAPI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  },
  {
    title: 'Finance Dashboard',
    description: 'Personal finance tracking application with data visualization, budget planning, and expense categorization.',
    technologies: ['React', 'D3.js', 'Firebase', 'Plaid API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com'
  }
]
</script>

<template>
  <section id="projects" class="px-6 py-24 lg:px-20">
    <div class="mx-auto max-w-5xl">
      <h2 class="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        Projects
      </h2>
      <h3 class="mb-12 text-3xl font-bold text-foreground sm:text-4xl">
        Featured work
      </h3>
      
      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-primary/50"
        >
          <div class="p-6">
            <div class="mb-4 flex items-start justify-between">
              <svg class="h-10 w-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
              <div class="flex gap-3">
                <a
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="View source code"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="View live site"
                >
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <h4 class="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {{ project.title }}
            </h4>
            <p class="mb-4 text-sm text-muted-foreground leading-relaxed">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs font-mono text-muted-foreground"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
